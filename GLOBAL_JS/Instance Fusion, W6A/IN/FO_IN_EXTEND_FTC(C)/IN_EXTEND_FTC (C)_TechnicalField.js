// JavaScript Document
/************** IN_EXTEND_FTC(C) **********
Version - Initial
Author - Somrita
Creation Date - 20/11/2017
Description - Creation of form
******************************************************************
			  Version - MOD-001
Author - SMITA SINGH
Creation Date - 12/08/2017
Description - 1)TO MAKE THE EFFECTIVE DATE AS CURRENT FTC END DATE
			  2)ALERT BOX FOR MANDATORY FIELDS	
******************************************************************
			  Version - MOD-002
Author - SMITA SINGH
Creation Date - 04/01/2018
Description - 1)Check the Current end date if empty or not
			  
******************************************************************
			  Version - MOD-003
Author - Riya Dutta
Creation Date - 12/10/2018 (MM/DD/YYYY)
Description - 1)Change checkForm function for pop-up alert missing field issue
			  
**********************************************************************************
			  Version - MOD-004
Author - Riya Dutta	
Creation Date - 01/02/2019 (MM/DD/YYYY)
Description - Upgrading to New JS Framework (//need update)
*********************************************************************
Version - MOD-005
Author - Debraj Sarkar	
Creation Date - 10/03/2020 (MM/DD/YYYY)
Description - Upgrading to New JS Framework (//need update)
**********************************************************************/

//Hide Technical section
neocase.form.section("section247").hide();

window.setEffectiveDate = function()
{   
	var newDate = neocase.form.field("UTILISATEURS$CHAMPU186").getValue();
	var splitDate= newDate.split('/');

	var dd = parseInt(splitDate[0]);
	var mm = splitDate[1];
	var yyyy = splitDate[2];
	
	newDate = mm+'/'+dd+'/'+yyyy;	
	
	var tomorrow = new Date(newDate);
	tomorrow.setDate(tomorrow.getDate() + 1);
	
	var effectiveNewDate = tomorrow.toString('dd/MM/yyyy');
	
	return effectiveNewDate;
};

/*************************
* ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function(){

	if(neocase.form.field("UTILISATEURS$CHAMPU186").getValue() == ""){
		alert("The current end date is empty and therefore extension is not possible");
	}else{
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5").setValue(setEffectiveDate());
		//***MOD-004 *** Need to check for Neocase Function with algo
		disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5"));
		//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5"));
	}
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
	console.log(topic+','+subtopic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR203').setValue(topic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR204').setValue(subtopic);
};
neocase.form.event.bind('loadcomplete', onloadForm);
