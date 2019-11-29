/*************ANZ_AGR_EE(M) - Technical Field Code*************/
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


//employee moving to 
FillCf_CountryMoving = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR927.value = fieldValue; //Country
};
FillCf_CountryMovingCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR926.value = fieldValue; //Company Code
};
FillCf_CountryMovingDescription = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR924.value = fieldValue; //Campany Name
};


window.setAllPopups = function(){
    
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Work location ++ MOD-003
	//popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/PersonalArea.aspx");
	
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to

};

/**************************
* Launch Javascript on init
***************************/

window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    // setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
	setAllPopups();
 };
neocase.form.event.bind("init",launchOnInit);

/*
window.launchOnComplete = function(){
	//showActionReason();
 };
neocase.form.event.bind('loadcomplete',launchOnComplete);

window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit); */
