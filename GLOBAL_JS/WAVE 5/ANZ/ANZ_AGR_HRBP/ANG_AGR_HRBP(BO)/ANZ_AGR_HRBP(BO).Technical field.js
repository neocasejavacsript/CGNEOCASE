/*************ANZ_AGR_HRBP - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Debraj Sarkar
Date	    - 10/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
----------------------------------------------------------------------------*/ 
/*---- MOD-001 STARTS ----*/
//Hide Technical Section
neocase.form.section("section29a8d0b03f1ac4e8225c").hide();
//Hide Hidden Section
neocase.form.section("sectionc3be57db76bac2ebe401").hide();



window.copy_fields = function() {
	
	//copy Local Grade
	neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
	//copy Employment Percentage value
	//neocase.form.field('UTILISATEURS$CHAMPU248').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR593');
	//copy Admin Supervisor name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
    //copy Default Approver name
    neocase.form.field('UTILISATEURS$CHAMPU234').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR428');
    //copy HRBP name
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
	//copy Fixed term contract end date value
	//neocase.form.field('UTILISATEURS$CHAMPU186').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR125');
    //copy Job Title Desc. value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
    
    console.log(neocase.form.field('UTILISATEURS$CHAMPU40'));
};
/*--************************* Copying fields ends*******************************---**/

/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--Start -------*/

window.calculate_TargetVarCompProratedNPI = function() {
	var targetVarCompActual = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR385");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var targetVarCompproratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567");

	var val_targetVarCompActual = targetVarCompActual.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();

 	var calculation;
             
	if(targetVarCompActual){
		if(employmentPercentage){
			if(isNaN(val_targetVarCompActual)){
				calculation = 0;
			}else if(isNaN(val_employmentPercentage)){
				calculation = 0;
			}else{
				calculation = (val_targetVarCompActual * val_employmentPercentage) / 100;
			}
			targetVarCompproratedNew.setValue(calculation.toFixed(2));
		}
	}


};
/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--End --------*/

/*---------------------------For ANZ Annual Salary At Actual FTE calculation--Start -------*/

window.calculate_AnnualSalaryAtActualFTE = function() {
	console.log('working');
	var annualSalaryAtActualFTENew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR278");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var annualSalaryProratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565");

	var val_annualSalaryAtActualFTENew = annualSalaryAtActualFTENew.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();

 	var calculation;
             
	if(annualSalaryAtActualFTENew){
		if(employmentPercentage){			
			if(isNaN(val_annualSalaryAtActualFTENew)){
				calculation = 0;
			}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
			}else{
				calculation = (val_annualSalaryAtActualFTENew * val_employmentPercentage) / 100;
			}
			annualSalaryProratedNew.setValue(calculation.toFixed(2));
			
		}
	}


};
/*---------------------------For ANZ Annual Salary At Actual FTE calculation--End --------*/

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
/*---------------------------For ANZ Annual salary prorated calculation --End---------*/
window.disableCusFields = function(){
    disableField(neocase.form.field("UTILISATEURS$CHAMPU40"));
	disableField(neocase.form.field("UTILISATEURS$CHAMPU248"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR45"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR593"));
	//Auto-calculation disable fields
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76")); // disable annual salary prorated
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78")); // disable Target Var Comp Prorated
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427")); // disable HRBP Name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR555")); // disable Action Reason
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565")); // disable Annual Salary At Actual FTE
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567")); // disable Target Var Comp Prorated NPI
};

/*----------------Show action reason against the subtopic ----------------------*/
window.showActionReason = function(){
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
};

window.setPopups = function(){
	//Employee group/Employee subgroup - Employee subgroup
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR365, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");	
	
};
/**************************
* Launch Javascript on init
***************************/
window.showGradeSection = function(){
	console.log(neocase.form.field('UTILISATEURS$CHAMPU35').getValue());
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2813'){
        neocase.form.section("sectionaa695c51ef90d72b94dd").show();
    }else{
        neocase.form.section("sectionaa695c51ef90d72b94dd").hide();
    }
};

window.showPaySection = function(){
	console.log(neocase.form.field('UTILISATEURS$CHAMPU248').getValue());
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2813'){
        neocase.form.section("section4f8bca62b68e042d1fbc").show();
    }else{
        neocase.form.section("section4f8bca62b68e042d1fbc").hide();
    }
};

window.showNonPayrollSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2813'){
        neocase.form.section("section1ab7339c7499cc587b0e").show();
    }else{
        neocase.form.section("section1ab7339c7499cc587b0e").hide();
    }
};

window.showWorkingHourSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2736'){
        neocase.form.section("sectione1c1c9cba122b4df2afb").show();
    }else{
        neocase.form.section("sectione1c1c9cba122b4df2afb").hide();
    }
};
window.launchOnloadcomplete = function(){
	//console.log('working 1');
	initialEndDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR503").getValue(); // get loaded value of expected return date
	initialstartDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR333").getValue(); // get loaded value of ansence start date
	copy_fields();
	//calculate_TargetVarCompProratedNPI();
	//calculate_AnnualSalaryAtActualFTE();
	//calculate_TargetVarCompProrated();
	//calculate_AnnualSalaryProrated();
	disableCusFields();
    setPopups();
	//showActionReason();
	//updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
	showGradeSection();
	showWorkingHourSection();
	showPaySection();
	showNonPayrollSection();
 };
window.launchOnInit = function(){

   console.log(neocase.form.field('UTILISATEURS$CHAMPU248').getValue());
};
neocase.form.event.bind('loadcomplete',launchOnloadcomplete);
neocase.form.event.bind('init', launchOnInit);
/*---- MOD-001 ENDS ----*/
