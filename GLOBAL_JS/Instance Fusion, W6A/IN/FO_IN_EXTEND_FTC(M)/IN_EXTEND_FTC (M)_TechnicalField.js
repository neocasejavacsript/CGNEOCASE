// JavaScript Document
/************** IN_EXTEND_FTC(M) **********
Version - Initial
Author - Somrita
Creation Date - 20/11/2017
Description - Creation of form
******************************************************************
Version - MOD 2
Author - Debraj Sarkar
Creation Date - 11/03/2020
Description - Creation of form		  
******************************************************************/
//Hide Technical section
neocase.form.section("section247").hide();

/*************************
* ACTIONS ON LOAD COMPLETE
**************************/
/*window.onloadForm = function(){

	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5"));
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
	console.log(topic+','+subtopic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR203').setValue(topic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR204').setValue(subtopic);
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR203"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR204"));
};
neocase.form.event.bind('loadcomplete', onloadForm);*/
