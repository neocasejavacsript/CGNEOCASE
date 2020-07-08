/*************ANZ_AGR_EE(MGR)(M) - Technical Field Code*************/
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
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 11/21/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Fixes
----------------------------------------------------------------------------*/ 

var initialStartDate, initialEndDate;

//Hide Technical Section
neocase.form.section("section1fd0dc6840ddc6ad5e2f").hide();

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
					calculation = (val_targetVarCompprorated / val_employmentPercentage) * val_employmentPercentageNew;
				}
				targetVarCompproratedNew.setValue(calculation.toFixed(2));
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
					calculation = (val_annualSalaryProrated / val_employmentPercentage) * val_employmentPercentageNew;
				}
				annualSalaryProratedNew.setValue(calculation.toFixed(2));
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
		dateFormatUTC = new Date(dateSplit[2], dateSplit[0] - 1, dateSplit[1] ),
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
	console.log($('#'+neocase.form.field(selectedFieldName)['elementHTML']['id'] + " :selected").text()+"--"+neocase.form.field(selectedFieldName)['elementHTML']['id']);
	
	var selectedVal = $('#'+neocase.form.field(selectedFieldName)['elementHTML']['id'] + " :selected").text();
	
	//if(selectedVal == ""){$('#'+neocase.form.field(selectedFieldName)['elementHTML']['id']).val("No");}
	console.log(selectedVal);
	if(selectedVal != 'Yes'){
		
		neocase.form.field(emailClosureDateFieldName).setValue("");
		neocase.form.field(emailClosureDateFieldName).hide();
	}
	else
	{
		neocase.form.field(emailClosureDateFieldName).show();
		//neocase.form.field(emailClosureDateFieldName).setValue("");
	}
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
	// setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
	calculate_TargetVarCompProrated();
	calculate_AnnualSalaryProrated();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR589').hide();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR590').hide();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR591').hide();
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR278"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78"));
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR555")); //Action reason
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5")); //Effective date
	//disableField(neocase.form.field("UTILISATEURS_CHAMPU29")); //Work Location
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR123")); //Work location (new)
	
};
neocase.form.event.bind("init",launchOnInit);


window.launchOnComplete = function(){
	//var subtopic = getParamFromUrl('subtopic');
	//if(subtopic == '2817'){
		
		emailClosureVisibilty('INTERVENTIONS_EN_COURS$VALEUR586', 'INTERVENTIONS_EN_COURS$VALEUR589');
	//}else if(subtopic == '2744'){
		emailClosureVisibilty('INTERVENTIONS_EN_COURS$VALEUR587', 'INTERVENTIONS_EN_COURS$VALEUR590');
	//}else if(subtopic == '2743'){
		emailClosureVisibilty('INTERVENTIONS_EN_COURS$VALEUR588', 'INTERVENTIONS_EN_COURS$VALEUR591');
	//}
	
 };
neocase.form.event.bind('loadcomplete',launchOnComplete);
