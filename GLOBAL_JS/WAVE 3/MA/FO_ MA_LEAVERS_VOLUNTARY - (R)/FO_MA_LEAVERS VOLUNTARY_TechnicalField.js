/***************************************************
 MA_LEAVERS_VOLUNTARY - (R) - FO Technical Fields
***************************************************
Version - MOD-001
Author - SURAJIT DALAL
Date - 18/06/2017
Description - To Hide technical section
*****************************************************/

/**************
* Hide Sections
***************/
//Technical section
ThisForm.HideSection("section326");

window.getParamFromUrl = function(param){
var vars = {};
  window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if ( param ) {
    return vars[param] ? vars[param] : null;  
  }
  return vars;

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

/************
* HIDE FIELDS
*************/
window.hideField = function(FIELD_STRING){
	var msg = "function hideField : ";
/*	var FIELD = "";
	//Si le champ est en lecture seule
	if(FIELD_STRING.search("getElementById") != -1){
		SPLIT_FIELD_STRING = FIELD_STRING.split("\"");
		FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
	}else{
		//Si le champ est en création
		SPLIT_FIELD_STRING = FIELD_STRING.split(".");
		if(SPLIT_FIELD_STRING.length == 3){
			FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[2]+"_display");
			if(FIELD_FILE){
				FIELD = FIELD_FILE;
			}else{
				FIELD = document.getElementById(SPLIT_FIELD_STRING[2]);
			}
		}else if(SPLIT_FIELD_STRING.length == 2){
			FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[1]+"_display");
			if(FIELD_FILE){
				FIELD = FIELD_FILE;
			}else{
				FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
			}
		}else{
			msg += "field "+FIELD_STRING+" is undefined";
			console.log(msg);
		}
} */
	if(FIELD_STRING != ""){
		affichageChamp(FIELD_STRING,false);
	}else{
		msg += "var FIELD is undefined";
		console.log(msg);
	}
};

window.hideFields = function(){
	
	//Probation Updation
	//hideField("formulaire.UTILISATEURS$CHAMPU271",false);
	//hideField("formulaire.UTILISATEURS$CHAMPU272",false);
	//hideField(formulaire.UTILISATEURS$CHAMPU187,false);//++ MOD-002
	//hideField(formulaire.INTERVENTIONS_EN_COURS$VALEUR130,false);//++ MOD-002
	hideField(formulaire.INTERVENTIONS_EN_COURS$VALEUR215,false);//++ MOD-002
	hideField(formulaire.INTERVENTIONS_EN_COURS$VALEUR216,false); //++ MOD-002
};


/*************************
* ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function(){
	
	//hideFields();
	
	//Manage subtopic
	//manageSubtopic();
	manageFields();

};
ThisForm.Bind('loadcomplete', onloadForm);
