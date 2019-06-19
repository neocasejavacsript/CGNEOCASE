/***************************************************
MA_LOA(R) - FO Technical Fields
***************************************************
Version - MOD-001
Author - SURAJIT DALAL
Date - 18/06/2017
Description - To Hide technical section
*****************************************************/
//
/**************
* Hide Sections
***************/
//Technical section
ThisForm.HideSection("section479");
ThisForm.HideSection("section388");


/******************************
* Manage payroll status change
*******************************/
window.payrollStatus = function(){
	var msg = "function payrollStatus: ";
	var subTopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
	var payroll = formulaire.INTERVENTIONS_EN_COURS$VALEUR338;

	if(subTopic){
		if(payroll){
			//payroll.readonly = true;
			if(subTopic.value == "2127" || subTopic.value == "2210" ||	subTopic.value == "2211" || subTopic.value == "2212" ||
			subTopic.value == "2213" || subTopic.value == "2114" || subTopic.value == "2215" || 
			subTopic.value == "2216" || subTopic.value == "2217" || subTopic.value == "2118" ||
			subTopic.value == "2219" || subTopic.value == "2220" || subTopic.value == "2225"){
			payroll.value= "288ÞLOA Unpaid";
			payroll.disabled = true;
		}
		else if(subTopic.value == "2124" || subTopic.value == "2202" || subTopic.value == " 2203" || 
			subTopic.value == "2204" || subTopic.value == "2205" || subTopic.value == "2206" ||
			subTopic.value == "2207" ||	subTopic.value == "2208" || subTopic.value == "2209"){
			payroll.value= "287ÞLOA Paid";
			payroll.disabled = true;
		}
		}else{
		msg += "payroll not found";
		console.log(msg);
		}
		
	}else{
	msg += "subtopic not found";
		console.log(msg);
	}
};


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

//Replace the label
window.replaceField = function(field, replace){
	if(field){
		var currentLabel = field.getElementsByTagName('label');
		currentLabel[0].innerHTML = currentLabel[0].innerHTML.replace(' :', replace);
	}
};

/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function(){
	
	//Manage subtopic
	//manageSubtopic();
	manageFields();
	
	//COPY/PASTE TOPIC&SUBTOPIC VALUE
	//copyValue("INTERVENTIONS_EN_COURS$MOTCLE","INTERVENTIONS_EN_COURS$VALEUR203");
	//copyValue("INTERVENTIONS_EN_COURS$ELEMENT","INTERVENTIONS_EN_COURS$VALEUR204");

	
	//Manage payroll Status value
	payrollStatus();
	
};
ThisForm.Bind('loadcomplete', onloadForm);
