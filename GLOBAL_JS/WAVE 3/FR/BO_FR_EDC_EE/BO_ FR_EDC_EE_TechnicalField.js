//FR_EDC_EE- BO - Technical Code
/*---------------------------------------------/
Developer   - Surajit Dalal
Date	    - 07/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Signataire Employeur Nom  (EN = Signer 1 Name) pop-up and disabling both the fields
---------------------------------------------/
Developer   - Smita Singh
Date	    - 09/27/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Remove the pop up on the field "Signataire Employeur adresse mail (EN = Signer 1 email address)"
-----------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/28/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Read only 'Request Details'
----------------------------------------------------------------------------*/ 

//hide technical section
neocase.form.section("sectionb0db2555c209c78721f6").hide();

/************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
*************************************************/
FillCf = function(fieldValue,fieldName){
	var msg = "function FillCf : ";
	console.log(fieldName);
	var field = document.getElementById(fieldName);
	if(field){
		console.log("field id found");
		//fill field
		field.value = fieldValue;
		champObligatoire(field, false);
		//Exception for field Global Grade
		if(fieldName == "INTERVENTIONS_EN_COURS$VALEUR239"){
			manageGlobalGrade();
		//Exception for field 'Job Category Code'
		}else if(fieldName == "INTERVENTIONS_EN_COURS$VALEUR48"){
			//disable other fields
			if(fieldValue == "CSS" || fieldValue == "DSP"){
				formulaire.INTERVENTIONS_EN_COURS$VALEUR52.value = "";
				formulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = true;
				formulaire.INTERVENTIONS_EN_COURS$VALEUR54.value = "";
				formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = true;
			}else{
				formulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = false;
				formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = false;
			}
		//Exception for fields 'Total No. of days / Month'
		}else if(fieldName == "INTERVENTIONS_EN_COURS$VALEUR265"){
			if(formulaire.INTERVENTIONS_EN_COURS$VALEUR262.value == "weekly"){
				//empty field
				//field.value = "";   ++ MOD-004
				//champObligatoire(field, false); ++ MOD-004
			}
		//Exception for fields 'Total No. of days / Week'
		}else if(fieldName == "INTERVENTIONS_EN_COURS$VALEUR266"){
			if(formulaire.INTERVENTIONS_EN_COURS$VALEUR262.value == "monthly"){
				//empty field
				field.value = "";
				champObligatoire(field, false);
			}
		//Exception for fields 'Personal Area Desc'
		}else if(fieldName == "INTERVENTIONS_EN_COURS$VALEUR285"){
			if(formulaire.INTERVENTIONS_EN_COURS$ELEMENT){
				if(formulaire.INTERVENTIONS_EN_COURS$ELEMENT.value != ""){
					//empty field
					field.value = "";
					champObligatoire(field, false);
				}
			}else{
				msg += "field subtopic not found or readonly";
				console.log(msg);
			}
		}
	}else{
		msg += "field "+fieldName+" not found";
		console.log(msg);
	}
};






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
/*FillCf_Supervisor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};

FillCf_Supervisor_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};
FillCf_Supervisor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR187.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR187, false);
};
*/

/*UTILISATEURS$CHAMPU248 : autopop emp % : B34
UTILISATEURS$CHAMPU168 : Annual salary at actual FTE % : B36
INTERVENTIONS_EN_COURS$VALEUR249 : emp pourcentage : D34
UTILISATEURS$CHAMPU170 : Target variable compensation at actual FTE % : B38*/


/* ------------- MOD-001 ----------------- */
window.setPopups = function(){

//Pop-up Part time work schedule
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR256,"/Custom_Referential/PTWorkSchedule.aspx");	// MOD-001
	
//Documents
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438,"/Custom_Referential/employee signer.aspx");	// MOD-001
//popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR439,"/Custom_Referential/employee signer.aspx");	// MOD-001 // MOD-002

};
/* ------------- MOD-001 ----------------- */


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	setPopups();

	//Pop-up Part time work schedule
	//popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR256,"/Custom_Referential/PTWorkSchedule.aspx"); //MOD-001--
	//turn to read-only after showing value
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR256"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR255"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR384"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR385"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR262"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR263"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR264"));
	
	// Disabling Documents Fields
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR438"));	// MOD-001
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR439"));	// MOD-001
};
neocase.form.event.bind("init",launchOnInit);

/************************************
 * Launch Javascript on loadcomplete
 ************************************/
window.launchOnloadcomplete = function(){
	/*-- Read only 'Request Details'--*/
	if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
    /*--X-- Read only 'Request Details'--X--*/
};

neocase.form.event.bind('loadcomplete', launchOnloadcomplete);