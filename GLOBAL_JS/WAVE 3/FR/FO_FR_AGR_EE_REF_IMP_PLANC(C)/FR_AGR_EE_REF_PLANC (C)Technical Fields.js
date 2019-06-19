/**************		FR_AGR_EE_REF_PLANC (C) Technical Fields	*************
********************************************************************************
Developer   - Romain Leconte
Date	    - 14/03/2018
Description - ADD UPDATE MANDATORY FIELDS ALERT MESSAGE SECTION
******************************************************************************/

//hide technical section
neocase.form.section("sectionc2cc4d34acf160b6e62a").hide();

/***************
* DISABLE FIELDS
****************/
window.disableTextField = function(field){
	if(document.getElementById("champsobligatoiresproprietes")){
	//BackOffice
		field.setAttribute("readonly","true");
		field.onmousedown = function(){return false;};
	}else{
	//FrontOffice
		field.setAttribute("readonly","true");
		field.onkeydown = function(){return false;};
		field.onmousedown = function(){return false;};
	}
};

window.disableBooleanField = function(field){
	field.onclick = function(){return false;};
	disableTextField(field);
};

window.disableDateField = function(field){
	if(document.getElementById("champsobligatoiresproprietes")){
	//BackOffice
		//hide calendar icon
		field.style.background = "none";
	}else{
	//FrontOffice
		//hide calendar icon
		if(field.parentNode.getElementsByTagName("img").length > 0){
			field.parentNode.getElementsByTagName("img")[0].style.display = "none";
		}
	}
	disableTextField(field);
};

window.disableFileField = function(field){
	if(document.getElementById("champsobligatoiresproprietes")){
	//BackOffice
		field.parentNode.parentNode.style.border = "none";
		//hide button browse file
		field.parentNode.style.display = "none";
		//hide button delete file
		if(field.parentNode.parentNode.getElementsByClassName("btn-delete").length > 0){
			field.parentNode.parentNode.getElementsByClassName("btn-delete")[0].style.display = "none";
		}
	}else{
	//FrontOffice
		field.parentNode.getElementsByClassName("fileinput-button")[0].style.display = "none";
	}
};

window.disableListField = function(field){
	if(document.getElementById("champsobligatoiresproprietes")){
	//BackOffice
		field.parentNode.style.border = "none";
	}
	disableTextField(field);
};

window.disableTextareaField = function(field){
	disableTextField(field);
};

window.disableField = function(field){
	var msg = "function disableField : ";
	if(field){
		field = field.elementHTML;
		if(field.type == "checkbox"){
		//Boolean custom fields
			disableBooleanField(field);
		}else if(field.className.search("hasDatepicker") != -1){
		//Date custom fields
			disableDateField(field);
		}else if(field.id.search("_display") != -1){
		//File custom fields
			disableFileField(field);
		}else if(field.tagName == "SELECT"){
		//List custom fields
			disableListField(field);
		}else if(field.tagName == "TEXTAREA"){
		//Textarea custom fields
			disableTextareaField(field);
		}else{
		//Text custom fields
			disableTextField(field);
		}
	}else{
		msg += "field undefined or readonly";
		console.log(msg);
	}
};

/******************************************
* CREATE HYPERLINK ON LABEL TO OPEN A POPUP
*******************************************/
window.popupLink = function(field, url) {
    var msg = "function popupLink : ";
    if (field) {
        //get field label
        var fieldId = field.id;
        var fieldLabel;
        if (fieldId.search("INTERVENTIONS") != -1) {
            fieldLabel = fieldId.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (fieldId.search("UTILISATEURS") != -1) {
            fieldLabel = fieldId.replace("UTILISATEURS", "lblUTILISATEURS");
        } else {
            msg += "type de champ non pris en compte " + fieldId;
            console.log(msg);
        }
        if (fieldLabel.search("_display") != -1) {
            fieldLabel = fieldLabel.replace("_display", "");
        }
        //add case number in the URL if needed
        if (url.search("Id_Demande") != -1) {
            //url = url.replace("Id_Demande=","Id_Demande="+RequestContext.RequestNumber);
            url = url.replace("Id_Demande=", "Id_Demande=" + RequestContext.ContactId);
        }
        //add contact ID in the URL if needed
        if (url.search("Id_User") != -1) {
            url = url.replace("Id_User=", "Id_User=" + RequestContext.ContactId);
        }
        //Create hyperlink on label
        var onclick = "window.open('" + url + "','_blank')";
        var createPopup = document.createElement("a");
        createPopup.setAttribute("onclick", onclick);
        var popupText;
        if (document.getElementById(fieldLabel)) {
            popupText = document.getElementById(fieldLabel).innerHTML;
            var t = document.createTextNode(popupText);
            createPopup.appendChild(t);
            if (document.getElementById(fieldLabel).innerHTML.search("</a>") == -1) {
                document.getElementById(fieldLabel).innerHTML = "";
                document.getElementById(fieldLabel).appendChild(createPopup);
            }
        } else {
            msg += "label du champ non trouvé " + fieldId;
            console.log(msg);
        }
    } else {
        msg += "champ non trouvé";
        console.log(msg);
    }
};
//Management Popup - Supervisor
FillCf_Supervisor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};
/*
FillCf_Supervisor_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};
FillCf_Supervisor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR187.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR187, false);
};
*/
/**************************************
* UPDATE MANDATORY FIELDS ALERT MESSAGE
***************************************/
//Check if neocase namespace already exist. If not it's create.
if(typeof Neocase == "undefined"){
	Type.registerNamespace('Neocase');
}
//function which allow to execute a function before another one
Neocase.attachBefore = function(obj, funcName, advice) {
	var old = obj[funcName];
	obj[funcName] = function() {
		var bReturn = advice.apply(this, arguments);
		if(bReturn) {
			return old.apply(this, arguments);
		}else{
			return false;
		}
	};
};


//custom function
Neocase.checkForm = function(){
	console.log("function Neocase.checkForm");
	//PLACE YOUR CODE HERE
	/**************************************
	* Update mandatory fields alert message
	***************************************/
	//Declare Variables
	var validator = document.getElementsByClassName('ValidatorCautionBox');
	var msg = "";
	var lang = document.getElementById("PageHtml").lang.split("-")[0];
	if(lang == "fr"){
		msg = "Merci de renseigner les champs obligatoires suivant :";
	}else{
		msg = "Please fill the following mandatory fields :";
	}
	//If mandatory fields are blanked, we add their name in the alert message
	if(validator.length > 0){
		for(v=0; v<validator.length; v++){
			var validatorVisibility = validator[v].style.visibility;
			if(validatorVisibility == "visible"){
				if(validator[v].id.search("question") != -1){
					msg += "\n- question";
				}else{
					var validatorField = validator[v].parentNode.previousSibling.previousSibling;
					if(validatorField){
						var validatorLabel = "";
						if(validatorField.getElementsByTagName("a").length > 0){
							validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
						}else if(validatorField.getElementsByTagName("label").length > 0){
							validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
						}else{
							validatorLabel = "undefined";
						}
						msg += "\n- "+validatorLabel;
					}
				}
			}
		}
		//update the alert message
		m_requiredFieldsUndefined = msg;
		console.log("var m_requiredFieldsUndefined updated : "+m_requiredFieldsUndefined);
	}
	
	//If all previous control are valid, the function return "true" to execute the Submit function
	return true;
};

//Execute the custom function before the submit function
Neocase.attachBefore(window, 'ValidatorAlertRequiredFieldsOnSubmit', function(){return Neocase.checkForm();});
/******************
* get URL parameter
*******************/
window.getParamFromUrl = function(param){
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if(param){
		return vars[param] ? vars[param] : null;  
	}
	return vars;
};

/********************
* Launch dependencies
*********************/
window.launchDependencies = function(field){
	if("createEvent" in document){
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("change",false,true);
		field.elementHTML.dispatchEvent(evt);
	}else{
		field.elementHTML.fireEvent("onchange");
	}
};

/**************
* update level1
***************/
window.updateAndDisableField = function(field,value){
	//update 'level 1' value
	field.setValue(value);
	if(field.elementHTML.value !== "0" && field.elementHTML.value !== ""){
		//launch dependencies
		launchDependencies(field);

		//Disable field
		disableField(field);
	}
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	//update 'level 1' value
	updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));

	//Pop-up Management Supervisor
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183,"/Custom_Referential/ManageSupervisor.aspx");

	//Disable fields
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183"));

};
neocase.form.event.bind("init",launchOnInit);
