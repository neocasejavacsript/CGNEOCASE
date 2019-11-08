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
Date	    - 10/31/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - 'ValidAbsenceStartEndDate()' function implemented which ensures Absence start date must be lesser that expected return date
			- 'convertToDateTime()' function implemented which ensures convert Date and time format from a field string date value
			- EmployeeGroup pop-ups
----------------------------------------------------------------------------*/ 
var initialEndDate,initialstartDate;
//Hide Technical Section
neocase.form.section("section8020eac2b758d466c293").hide();

/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
		dateToTime = dateFormatUTC.getTime();
	return dateToTime;
};
/*----ensures Absence start date must be lesser that expected return date----*/
window.validAbsenceStartEndDate = function(AbsenceStartDateField, AbsenceendDateField){
	
	var startDate = convertToDateTime(neocase.form.field(AbsenceStartDateField).getValue()),
		endDate = convertToDateTime(neocase.form.field(AbsenceendDateField).getValue());
	if(startDate !== null && endDate !== null){
		if(endDate< startDate){
			alert("Expected Return date must be greater than Absence Start date");
			neocase.form.field(AbsenceStartDateField).setValue(initialstartDate);
			neocase.form.field(AbsenceendDateField).setValue(initialEndDate);
		}
		else{
			initialEndDate = neocase.form.field(AbsenceendDateField).getValue(); // get previously loaded value of expected return date
			initialstartDate = neocase.form.field(AbsenceStartDateField).getValue(); // get previously loaded value of ansence start date
		}
	}
};
/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
	setPopups(); 
 };
neocase.form.event.bind("init",launchOnInit);


/****************************
 * Launch Javascript on loadcomplete
 *****************************/
window.launchOnloadcomplete = function () { 
	initialEndDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR503").getValue(); // get loaded value of expected return date
	initialstartDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR333").getValue(); // get loaded value of ansence start date
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
