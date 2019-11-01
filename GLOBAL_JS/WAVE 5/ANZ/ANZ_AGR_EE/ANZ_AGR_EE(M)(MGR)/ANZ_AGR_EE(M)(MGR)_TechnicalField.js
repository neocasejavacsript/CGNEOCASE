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
			- 'validateEmailClosureDate()' function implemented for 'Email Closure Date is always greater than Last Working Day'
			- 'convertToDateTime()' function implemented which ensures to Convert Date and time format from a field string date value
----------------------------------------------------------------------------*/ 
var initialStartDate, initialEndDate;
//Hide Technical Section
neocase.form.section("section1fd0dc6840ddc6ad5e2f").hide();
//Hide Hidden Section
//neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();

/*---------------------------For ANZ Target Var Comp Prorated calculation--Start -------*/

window.calculate_TargetVarCompProrated = function() {
	var targetVarCompprorated = neocase.form.field("UTILISATEURS$CHAMPU170");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var employmentPercentageNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR249");
	var targetVarCompproratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78");

	var val_targetVarCompprorated = targetVarCompprorated.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();
	var val_employmentPercentageNew = employmentPercentageNew.getValue();

 	var calculation;
             
	if(targetVarCompprorated){
		if(employmentPercentage){
			if(employmentPercentageNew){
				if(isNaN(val_targetVarCompprorated)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentageNew)){
					calculation = 0;
				}else{
					calculation = ROUND((val_targetVarCompprorated / val_employmentPercentage) * val_employmentPercentageNew, 2);
				}
				targetVarCompproratedNew.setValue(calculation);
			}
		}
	}


};
/*---------------------------For ANZ Target Var Comp Prorated calculation--End --------*/

/*---------------------------For ANZ Annual salary prorated calculation --Start ---------*/

window.calculate_AnnualSalaryProrated = function() {
	var annualSalaryProrated = neocase.form.field("UTILISATEURS$CHAMPU168");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var employmentPercentageNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR249");
	var annualSalaryProratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76");

	var val_annualSalaryProrated = annualSalaryProrated.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();
	var val_employmentPercentageNew = employmentPercentageNew.getValue();

 	var calculation;
             
	if(annualSalaryProrated){
		if(employmentPercentage){
			if(employmentPercentageNew){
				if(isNaN(val_annualSalaryProrated)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentageNew)){
					calculation = 0;
				}else{
					calculation = ROUND((val_annualSalaryProrated / val_employmentPercentage) * val_employmentPercentageNew, 2);
				}
				annualSalaryProratedNew.setValue(calculation);
			}
		}
	}


};
/*---------------------------For ANZ Annual salary prorated calculation --End---------*/

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
/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
		dateToTime = dateFormatUTC.getTime();
	return dateToTime;
};
window.validateEmailClosureDate = function(lastWorkingDayFieldName,emailClosureFieldName){
	var lastWorkingDay = convertToDateTime(neocase.form.field(lastWorkingDayFieldName).getText());
		 emailClosureDate = convertToDateTime(neocase.form.field(emailClosureFieldName).getValue());
	if(emailClosureDate !== null){
		if(emailClosureDate< lastWorkingDay){
			alert("Email Closure Date should be always greater than Last Working Day");
			neocase.form.field(emailClosureFieldName).setValue("");
		}
	}	
};
window.emailClosureVisibilty = function(selectedFieldName, emailClosureDateFieldName){
	var selectedVal = $('#'+neocase.form.field(selectedFieldName)['elementHTML']['id'] + " :selected").text();
	if(selectedVal != 'Yes'){
		neocase.form.field(emailClosureDateFieldName).hide();
	}
	else
	{
		neocase.form.field(emailClosureDateFieldName).show();
	}
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
	// setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
};
neocase.form.event.bind("init",launchOnInit);

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
	if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR591').getValue() != '')
	{
		$('.submitSimpleRequestButton').css("pointer-events", "none");
	}
 };
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit);
