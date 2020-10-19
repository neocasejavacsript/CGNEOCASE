/**************		FR_GENERAL REQUEST - (C) - FO - Technical Fields	*************
******************************************************************
Version - MOD-001
Author - Smita Singh
Creation Date - 13/09/2017
Description - France plan B update the question box pop up 
******************************************************************
Version - MOD-002
Author - Smita Singh
Creation Date - 24/10/2018
Description - Update the new Javascript on the form
******************************************************************
Version - MOD-003
Author - Smita Singh
Creation Date - 26/10/2018
Description - Prepoulate both topic and subtopic
*******************************************************************
Developer   - Riya Dutta
Date	    - 07/04/2019 (MM/DD/YYYY)
Change No   - MOD-004
Description - CheckForm Function Modify for Double Error MSG
***************************************************************
Developer   - Ahana Sarkar
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-005
Description - Change submit button text to 'Soumettre' if in FR language
******************************************************************/

/**************
* Hide Sections
***************/
//Technical section
neocase.form.section("section955").hide();

/**************************************
* Update mandatory fields alert message
***************************************/
window.checkForm = function(){
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
	//if(validator.length > 0){
	//	for(v=0; v<validator.length; v++){
	//		var validatorVisibility = validator[v].style.visibility;
	//		if(validatorVisibility == "visible"){
	//			if(validator[v].id.search("question") != -1){
	//				if(lang == "fr"){
	//					msg += "\n- Demande initiale";
	//				}else{
	//					msg += "\n- Initial question";
	//				}
	//			}else{
	//				var validatorField = validator[v].parentNode.previousSibling.previousSibling;
	//				if(validatorField){
	//					var validatorLabel = "";
	//					if(validatorField.getElementsByTagName("a").length > 0){
	//						validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
	//					}else if(validatorField.getElementsByTagName("label").length > 0){
	//						validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
	//					}else{
	//						validatorLabel = "undefined";
	//					}
	//					msg += "\n- "+validatorLabel;
	//				}
	//			}
	//		}
	//	}
		//update the alert message
		m_requiredFieldsUndefined = msg;
	//}

	//If all previous control are valid, the function return "true" to execute the Submit function
	return true;
};


/**************************************************
* Set a timer to check topic after every 1 sec
**************************************************/
var topicTimer;
 window.loadTopic = function(){
 if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic')); // ++MOD-003++
		clearInterval(topicTimer);
	}
};
/*********************************
* Set the subtopic from URL
*********************************/

 window.loadSubtopic = function(){
	updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic')); // ++MOD-003++
};
	
//Calling the function using 500 msec timer	
topicTimer = setInterval(loadTopic, 100);

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	loadSubtopic();
	
    if (document.documentElement.lang === "fr-FR" ) { // ++MOD-005 Change submit button text to 'Soumettre' if in FR language
        $('.submitSimpleRequestButton').text('Soumettre');
    }

};
neocase.form.event.bind("init",launchOnInit);


/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	//add control before submit
	checkForm();
};
neocase.form.event.bind("submit",launchOnSubmit);
