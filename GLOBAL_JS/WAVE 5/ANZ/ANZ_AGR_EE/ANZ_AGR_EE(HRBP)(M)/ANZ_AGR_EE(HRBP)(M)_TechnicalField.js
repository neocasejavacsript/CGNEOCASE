/*************ANZ_AGR_EE(HRBP)(M) - Technical Field Code*************/
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
Description - 'ValidAbsenceStartEndDate()' function implemented which ensures Absence start date must be lesser 				  that expected return date
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/01/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - 'validateEmailClosureDate()' function implemented for 'Email Closure Date is always greater than Last Working Day'
			- 'convertToDateTime()' function implemented which ensures to Convert Date and time format from a field string date value			
			- 'emailClosureVisibilty()' function implemented which ensures email closure date field is visible based on "Do you need to keep email account open--to yes"
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/31/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Fixes
---------------------------------------------------------------------------*/ 
var initialStartDate, initialEndDate;

//Hide Technical Section
neocase.form.section("sectionfe1ad4ed4012550cfc8d").hide();

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

/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[0] - 1, dateSplit[1]),
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
	var fieldVal = neocase.form.field(emailClosureDateFieldName).getValue();
	if(selectedVal != 'Yes'){
		neocase.form.field(emailClosureDateFieldName).setValue("");
		neocase.form.field(emailClosureDateFieldName).hide();
	}
	else
	{
		neocase.form.field(emailClosureDateFieldName).show();
		neocase.form.field(emailClosureDateFieldName).setValue(fieldVal);
	}
};

/*----------------Show action reason against the subtopic ----------------------*/
/*window.showActionReason = function(){
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();//getParamFromUrl('subtopic');
	var x = document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options.length;
	console.log(x+subtopic);
	var ar = new Array();
	
	ar['1'] = [];
	ar['1'][0]="Adjustment";
	ar['1'][1]="Annual Salary Increase";
	ar['1'][2]="Change in Superannuation";
	ar['1'][3]="Mid Year Salary Increase";
	ar['1'][4]="Pay Rate Change-Other";
	ar['1'][5]="Quarterly Salary Increase";
	ar['1'][6]="Retention";
	ar['1'][7]="Step Progression";
	ar['2812'] = [];
	ar['2812'][0]="Cost center change";
	ar['2813'] = [];
	ar['2813'][0]="Demotion";
	ar['2739'] = [];
	ar['2739'][0]="Extension to FTC";
	ar['2736'] = [];
	ar['2736'][0]="FT to PT";
	ar['2736'][1]="PT to FT";
	ar['2736'][2]="PT to PT";
	ar['2732'] = [];
	ar['2732'][0]="Job Reclassification";
	ar['2732'][1]="Lateral Change";
	ar['2741'] = [];
	ar['2741'][0]="Work location transfer";
	ar['2808'] = [];
	ar['2808'][0]="Change in management team";
//console.log(ar[1][0]);
	var j = 0;
	for(var i=1; i<x; i++){
		//console.log(ar[subtopic][j] + ' = '+document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options[i].text);
		if(ar[subtopic][j] == document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options[i].text){
			j++;
		}else{
			document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").remove(i);
		}
	}
}; */

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    // setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
	calculate_TargetVarCompProrated();
	calculate_AnnualSalaryProrated();
	console.log(neocase.form.field('UTILISATEURS$CHAMPU248').getValue());
	if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR586').getValue() !== 'Yes'){
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR589').hide();
	}else{
		
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR589').show();
	}
	if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR587').getValue() !== 'Yes'){
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR590').hide();
	}else{
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR590').show();
	}
	if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR588').getValue() !== 'Yes'){
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR591').hide();
	}else{
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR591').show();
	}
	
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
