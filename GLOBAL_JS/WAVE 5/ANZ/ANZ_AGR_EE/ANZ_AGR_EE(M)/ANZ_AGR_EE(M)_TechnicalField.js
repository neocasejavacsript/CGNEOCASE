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
Description - 'validAbsenceStartEndDate()' function implemented which ensures Absence start date must be lesser 				  that expected return date
----------------------------------------------------------------------------*/ 
var initialStartDate, initialEndDate;
//Hide Technical Section
neocase.form.section("section8515535d1e15302536ec").hide();
//Hide Hidden Section
//neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();

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
			neocase.form.field(AbsenceStartDateField).setValue(initalstartDate);
			neocase.form.field(AbsenceendDateField).setValue(initialEndDate);
		}
		else{
			initialEndDate = neocase.form.field(AbsenceendDateField).getValue(); // get previously loaded value of expected return date
			initalstartDate = neocase.form.field(AbsenceStartDateField).getValue(); // get previously loaded value of ansence start date
		}
	}
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    //     setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
 };
neocase.form.event.bind("init",launchOnInit);

/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit);

