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
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 11/20/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Fixes after End to End testing
----------------------------------------------------------------------------*/ 

//Hide Technical Section
neocase.form.section("section73a554cfe3b532833dc1").hide();

/************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
*************************************************/


//Subarea ++ MOD-003
/*SC_Nm_SubAreaCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR121, false);
}; 
SC_Nm_SubAreaDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, false);
};*/

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
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/PersonalArea.aspx");
	
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to

};
/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
		dateToTime = dateFormatUTC.getTime();
	return dateToTime;
};
//function calling from Field
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

/*----------------Show action reason against the subtopic ----------------------*/
//no JS nees for this as made in Process ,Subtopic config ++ MOD-003
/*window.showActionReason = function(){
	console.log('working');
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();//getParamFromUrl('subtopic');
	var x = document.getElementById("ctl04_ctl13_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options.length;
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
		if(ar[subtopic][j] == document.getElementById("ctl04_ctl13_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options[i].text){
			j++;
		}else{
			document.getElementById("ctl04_ctl13_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").remove(i);
		}
	}
}; */

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	
	if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }

 };
neocase.form.event.bind("init",launchOnInit);

/********************************************
* Launch Javascript only once on loadcomplete
*********************************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
        setTimeout(function(){
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
        }, 800);
    }
};

window.launchOnComplete = function(){
	launchOnceLoadComplete();
    console.log('launch load complete');
	setAllPopups();
};
neocase.form.event.bind('loadcomplete',launchOnComplete);
/*
window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit);*/
