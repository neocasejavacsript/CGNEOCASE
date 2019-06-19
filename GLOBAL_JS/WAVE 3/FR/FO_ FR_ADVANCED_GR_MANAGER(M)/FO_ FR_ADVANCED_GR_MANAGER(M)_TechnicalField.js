// JavaScript Document
/************** FR_ADVANCED_GR_MANAGER(M) Backup *************
*****************************************
Version - MOD-001
Author - Itaï Rosilio
Date - 31/07/2017
Description - Put the question field read only
*******************************************************************
Version - MOD-002
Author - smita singh
Date - 09/05/2017
Description - To make the question field read only 
*******************************************************************/
/**************
* Hide Sections
***************/
//Technical section
ThisForm.HideSection("section739");

window.noMandatoryFields = function() {
	
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').noMandatory();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').noMandatory();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').noMandatory();
	
};
window.makeMandatorySomeFields = function() {
	
	noMandatoryFields();
	
	var subtopic = -11;
	//subtopic = getParamFromUrl("subtopic");
	subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
	if (subtopic === "Leaver") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').mandatory("Leaver Option is Mandatory");
	}
	/* if (subtopic === "2321") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').mandatory("Leaver Option is Mandatory");
	}
	if (subtopic === "2298") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').mandatory("LOA Option is Mandatory");
	}
	if (subtopic === "2053") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').mandatory("EDC Option is Mandatory");
	} */
	
};


window.hideSomeFields = function() {
	
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').hide();	//LOA Option
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').hide();	//EDC Option
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').hide();	// Leaver Option
};
window.hideshowFields = function() {
	
	hideSomeFields();
	
	var subtopic = -11;
	//subtopic = getParamFromUrl("subtopic");
	subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
	
	if (subtopic === "Leaver") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').show();
	}
	/* if (subtopic === "2298") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').show();
	}
	if (subtopic === "2053") {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').show();
	} */
	
	
};



/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function()
{
	formulaire.question.readOnly = "true";
	
	//hideshowFields();
	//makeMandatorySomeFields();
	
};
ThisForm.Bind('loadcomplete', onloadForm);

