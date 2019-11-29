/*************ANZ_AGR_EE -BO form Technical Field Code*************/
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
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 11/21/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Defect Fixing
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

/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
};

/*------------ Copy emp. cat. field value to req. cat. field ------------*/

window.copyFunctions = function() {
	console.log(neocase.form.field('UTILISATEURS$CHAMPU29').getValue());
	//copy Personal Sub Area Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
	console.log(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR122').getValue());
	
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
	//Copy value from one field to other
	copyFunctions();
	initialEndDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR503").getValue(); // get loaded value of expected return date
	initialstartDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR333").getValue(); // get loaded value of ansence start date
	//showActionReason();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
