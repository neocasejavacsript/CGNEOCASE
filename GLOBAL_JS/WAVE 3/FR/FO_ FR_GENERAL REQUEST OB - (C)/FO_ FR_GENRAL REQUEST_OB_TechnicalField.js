/************ FR_GENERAL REQUEST OB - (C) - FO Technical Fields	*************/
/*****************************************************************
Developer   - Smita Singh
Date	    - 14/06/2017
Change No   - MOD-001
Description - 
******************************************************************
Version - MOD-002
Author - Smita Singh
Creation Date - 13/09/2017
Description - France plan B update the question box pop up 
*******************************************************************
Developer   - Riya Dutta
Date	    - 10/25/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Update the new JavaScript on the form
			  Prepopulated Topic & subtopic based on topic	
*******************************************************************
Developer   - Riya Dutta
Date	    - 10/29/2018 (MM/DD/YYYY)
Change No   - MOD-004
Description - Clean up the JS to undo MOD-003 partially 
*******************************************************************
Developer   - Smita Singh
Date	    - 11/20/2018 (MM/DD/YYYY)
Change No   - MOD-005
Description - Prepopulating both topic and subtopic
*******************************************************************
Developer   - Riya Dutta
Date	    - 07/04/2019 (MM/DD/YYYY)
Change No   - MOD-006
Description - CheckForm Function Modify for Double Error MSG
************************************************************
Developer   - Ahana Sarkar
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-007
Description - Change submit button text to 'Soumettre' if in FR language
******************************************************************/

/**************************
* Hide Technical Sections
***************************/
neocase.form.section("section935").hide();

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
/*---------------------------------------START OF MOD-005-------------------------------------------------------------*/
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
/**************************************************
* Set a timer to check Subtopic after every 1 sec
**************************************************/
window.loadSubTopic = function(){
		console.log("Subtopic is "+ neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue());
		 if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){
			updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic')); // ++MOD-003++
			clearInterval(topicTimer);
		}
	};
	
/********************************
* Checking value for the topic 
*******************************/
if(getParamFromUrl('topic') !== null){
	//Calling the function using 100 msec timer	
	topicTimer = setInterval(loadTopic, 100);
}else{
	console.log("Topic is not available");
}

/*---------------------------------------END OF MOD-005-------------------------------------------------------------*/
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue()&& neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){
			updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
		}else{
			topicTimer = setInterval(loadSubTopic, 100);
	}
	if (document.documentElement.lang === "fr-FR" ) { // ++MOD-007 Change submit button text to 'Soumettre' if in FR language
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
