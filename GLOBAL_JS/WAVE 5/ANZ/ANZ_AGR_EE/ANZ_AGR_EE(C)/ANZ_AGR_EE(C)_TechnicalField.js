/*************ANZ_AGR_EE - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Debraj Sarkar
Date	    - 10/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/30/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - 'validAbsenceStartEndDate()' function implemented which ensures Absence start date must be lesser that expected return date
			- - 'convertToDateTime()' function implemented which ensures to Convert Date and time format from a field string date value
----------------------------------------------------------------------------*/ 

//Hide Technical Section
neocase.form.section("section73a554cfe3b532833dc1").hide();
//Hide Hidden Section
//neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();
window.setAllPopups = function(){
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "Neo_Ref_Cap_Countrymovingto_*.txt"); //set popup link to Moving to new
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Work location
};
/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
		dateToTime = dateFormatUTC.getTime();
	return dateToTime;
};
window.validAbsenceStartEndDate = function(AbsenceStartDateField, AbsenceendDateField){
	var startDate = convertToDateTime(neocase.form.field(AbsenceStartDateField).getValue()),
		endDate = convertToDateTime(neocase.form.field(AbsenceendDateField).getValue());
	if(startDate !== null && endDate !== null){
		if(endDate< startDate){
			alert("Expected Return date must be greater than Absence Start date");
			neocase.form.field(AbsenceStartDateField).setValue("");
			neocase.form.field(AbsenceendDateField).setValue("");
		}
	}
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	setAllPopups();
	updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
 };
neocase.form.event.bind("init",launchOnInit);


/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit);
