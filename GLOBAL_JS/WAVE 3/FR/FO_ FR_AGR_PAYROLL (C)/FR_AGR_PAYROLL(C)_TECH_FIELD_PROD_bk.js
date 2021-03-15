/*************FR_AGR_PAYROLL(C) - FRONT END - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 02/07/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			  -Calculates 'Monthly refund amount' Fields for 2 sections
			  -Disable 'Monthly refund amount' Field for 2 sections
			  -Hide Technical Section
			  -Hide Hidden Section
----------------------------------------------------------------------------
Developer   - Smita Singh
Date	    - 02/15/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - JS started 1st time for this form
			- Manage topic and subtopic based on URL
			- Added timer for subtopic MOD-002.1
--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 03/05/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Corrected calculation for France language too
---------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 29/01/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - Corrected calculation Monthly refund amount
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/17/2020 (MM/DD/YYYY)
Change No   - MOD-005
Description - Modified the Load of topic/Subtopic to fix loading discrepency
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/24/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Align border-line to the Social Security Absence section
---------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 07/20/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Implementing rules and aligning border-line for Days worked from home during the month section
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 08/27/2020 (MM/DD/YYYY)
Change No   - MOD-008
Description - checkSSARValueMaladie() added to show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail :' in both language
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/18/2020 (MM/DD/YYYY)
Change No   - MOD-009
Description - Implementing condition for 'work from home declaration must be only for last month or current month' except september,2020(if sept,2020 then it will only allow current month)
---------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-010
Description - Commented out FR_03_Bicycle allowance calculation. Added logic to check if end date is before 1st Sept 2020 for subtopic: Sustainable Mobility Package (2699)
----------------------------------------------------------------------------*/

//Hide Technical Section
neocase.form.section("section17d9e1e3613d919575f8").hide();
//Hide Hidden Section
neocase.form.section("sectionfbdcfa0715d768bb875a").hide();

/*-------------------------- For FR_02_Province -----------------STARTS------------*/
window.calculate_monthlyRefndAmnt = function() {

	var subscripFreqncy = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR905");
	var totPaidAmnt = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR390");
	var monthlyRefndAmnt = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR909");
	
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
    if(subtopic == '2698'){
		if(monthlyRefndAmnt) {
			if (subscripFreqncy){
				if (totPaidAmnt){
				
				var val_subscripFreqncy=subscripFreqncy.getText();
				var val_totPaidAmnt=parseFloat(totPaidAmnt.getValue());
				
				if (isNaN(val_totPaidAmnt)) 
					{
					val_totPaidAmnt =0; 
					}
		
				if (val_subscripFreqncy == "Yearly" || val_subscripFreqncy == "Annuel") //MOD-003++
					{
					monthlyRefndAmnt.setValue((val_totPaidAmnt/24).toFixed(2));
					}
				else if(val_subscripFreqncy == "Monthly / Weekly" || val_subscripFreqncy == "Mensuel / Hebdomadaire")  //MOD-003++
					{
					monthlyRefndAmnt.setValue((val_totPaidAmnt/2).toFixed(2));
					}
				else{
					monthlyRefndAmnt.setValue("");
					}
				
				}
			}
		}
	}
						
						
};
/*-------------------------- For FR_02_Province --------------ENDS---------------*/

/*--------------------- For FR_03_Bicycle allowance ---------------STARTS----------*/
// window.calculate_monthlyRefndAmntByCycl = function() {
	
// 	var km_Mileage = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR908");
// 	var startDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5");
// 	var endDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR261");
// 	var monthlyRefndAmnt_ByCycl = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR910");
	
// 	var val_monthlyRefndAmnt_ByCycl=monthlyRefndAmnt_ByCycl.getValue();
// 	var val_endDate=endDate.getDate();
// 	var val_startDate=startDate.getDate();
// 	var val_km_Mileage=parseFloat(km_Mileage.getValue());
	
// 	var calculation;
// 	var monthDiff;
// 	var monthMin;	
// 	var maxLimit;
	
// 	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
//     if(subtopic == '2698'){
			
// 	if(monthlyRefndAmnt_ByCycl) {
// 		if (endDate){
// 			if (startDate){
// 				if (km_Mileage){
								
// 				 calculation=0;
// 				 monthDiff=0;
// 				 monthMin=0;
// 				 maxLimit=16.67;
							
// 				if (isNaN(val_km_Mileage)) 
// 				{
// 				val_km_Mileage =0; 
// 				}
				
// 				var begMonth,endMonth,begYear,endYear;
				
// 				if(val_startDate){
//                 begMonth=val_startDate.getMonth();
//                 begYear=val_startDate.getFullYear();
// 				}
// 				if(val_endDate){
//                 endMonth=val_endDate.getMonth();
//                 endYear=val_endDate.getFullYear();
// 				}
				
// 				if(typeof endMonth!== undefined && typeof begMonth!== undefined && typeof endYear!== undefined && typeof begYear!== undefined){
// 				monthDiff= endMonth - begMonth + (12 * (endYear - begYear));
// 				monthDiff=monthDiff+1;
// 				}
				
// 				console.log(monthDiff);
// 				if (monthDiff !== 0 && !isNaN(monthDiff)) {
// 					monthMin=Math.min(val_km_Mileage,800);
// 					calculation=((monthMin*0.25)/monthDiff).toFixed(2);
// 					//monthlyRefndAmnt_ByCycl.setValue(calculation);					
					
// 					if(calculation>maxLimit){
// 					monthlyRefndAmnt_ByCycl.setValue(maxLimit);
// 					}else{
// 					monthlyRefndAmnt_ByCycl.setValue(calculation);
					
// 					}
					
// 				}else
// 				{
// 					monthlyRefndAmnt_ByCycl.setValue("");
// 				}
				
// 				}
// 			}
// 		}
// 	}
	
// 	}
	
				
// };
/*--------------------- For FR_03_Bicycle allowance ---------------ENDS----------*/

window.disableFields = function(){

	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR909"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR910"));
}; 


/**************************************************
* Set a timer to check topic after every 1 sec
**************************************************/
//var topicTimer;
 window.loadTopic = function(){
 console.log("topic is " + neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue());
 if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic')); // ++MOD-003++
		//clearInterval(topicTimer);
	}
};
/*********************************
* Set the subtopic from URL
*********************************/

 window.loadSubtopic = function(){
	console.log("Hello");
	if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){ //MOD-002.1
		updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic')); // ++MOD-003++
		//clearInterval(topicTimer1); //MOD-002.1
		console.log("subtopic is " +neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue());
		}
	}
};

/*---- show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?
' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail :' in both language---++MOD-008-*/
window.checkSSARValueMaladie = function(){
	var sSARValue = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR935').getValue(),
		CERFAyesOrNoField = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR934')['elementHTML']['id']),
		alertMsg = document.documentElement.lang == "en-GB" ? "If you work all day, put Yes, otherwise, put No" : "Si la journée a été travaillée en totalité, mettre OUI, sinon mettre NON";

	if(sSARValue == 'Sickness' || sSARValue == 'Maladie'){
		if($(CERFAyesOrNoField).closest('div').find('.alertMsg').length< 1){
			$(CERFAyesOrNoField).closest('div').append('<span style="color:red" class="alertMsg">'+alertMsg+'</span>');
		}
	}else{
		if($(CERFAyesOrNoField).closest('div').find('.alertMsg').length >= 1){
			$(CERFAyesOrNoField).closest('div').find('.alertMsg').remove();
		}
	}
};
//Calling the function using 1000 msec timer	
//topicTimer = setInterval(loadTopic, 1000);
	// setTimeout(function(){
	// 	loadTopic();
	// }, 500);
/********************************************
* Launch Javascript only once on loadcomplete
*********************************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        loadTopic();
        setTimeout(function () {
			loadSubtopic();
			//++MOD-006
			if($('#section60d59d8a7a0fef16fa06').css('display') != 'none' && $('#section2b5def23bad07230c544').css('display') != 'none'){ // Section: Social security absence + How to declare my social security absence
				if($('#section2b5def23bad07230c544').find('hr').length > 0){
					$('#section2b5def23bad07230c544').find('hr').remove();
				}
				if($('#section60d59d8a7a0fef16fa06').find('hr').length< 1){
					$('#section60d59d8a7a0fef16fa06').append('<hr>');
				}
			}
			
			if($('#section4edda08382cf6f22e3ed').css('display') != 'none' && $('#section52cea27607cd0ad68e1f').css('display') != 'none'){ // Section: FR_Work from home allowance without contract addendum. + How to declare WFH
				if($('#section52cea27607cd0ad68e1f').find('hr').length > 0){
					$('#section52cea27607cd0ad68e1f').find('hr').remove();
				}
				if($('#section4edda08382cf6f22e3ed').find('hr').length< 1){
					$('#section4edda08382cf6f22e3ed').append('<hr>');
				}
			}
			
			
        }, 800);
    }
};


window.setDateLimit = function(startDateField){
    var stD,stDate,nextDay,alertMsg;
    var startDateFieldId = $('#'+ neocase.form.field(startDateField)['elementHTML']['id']),
        today = new Date(),
        errorMsg = '<span style="color:red" class="error-msg-date"> This request can’t start before september 1st, 2020</span>';
		startDateFieldId.datepicker( "option", "minDate", new Date('2020-09-01'));
	
};

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
	launchOnceLoadComplete();
    console.log('launch load complete');

};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);
window.onloadForm = function () {
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
	disableFields();
	//Calling the function using 1000 msec timer	
	//topicTimer = setInterval(loadTopic, 1000);
	//topicTimer = 


	//Calling the function using 1000 msec timer	
	//topicTimer1 = 
	
};
neocase.form.event.bind('init', onloadForm);

//MOD-007 starts
/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	
	var year = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue();
	var wfhMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue();
	var date = new Date(year, wfhMonth, 0).getDate();
	var newDate = year+"-"+wfhMonth+"-"+date;
	console.log(newDate);
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR947").setValue(newDate);
	
	var d = new Date();
	var currentMonth = d.getMonth();
	var currentYear = d.getFullYear();
	var shortYear = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getText();
	var shortMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getText();
	
	var msg = "";
    var lang = document.getElementById("PageHtml").lang.split("-")[0];
    if (lang == "fr") {
        msg = "Merci de renseigner les champs obligatoires suivant :";
    } else {
        msg = "Please fill the following mandatory fields :";
    }
	
	//Get Value from WFH Year and WFH Month
	var wfhYearValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue();
	var wfhMonthValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue();
	if(wfhYearValue!="" && wfhMonthValue!=""){
		if(currentYear == 2020 && currentMonth == 8){ // current month = September & current year = 2020 // ++MOD-009
			if(shortYear<=currentYear){	
				if(shortMonth>currentMonth+1 || shortMonth<= currentMonth){
					if (lang == "fr") {
						msg = "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours.";
					} else {
						msg = "The work from home declaration must be only for last month or current month";
					}
					alert(msg);
					return false;
				}
			}else{
				if (lang == "fr") {
						msg = "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours.";
					} else {
						msg = "The work from home declaration must be only for last month or current month";
					}
				alert(msg);
				return false;
			}
		}
		else {
			if(shortYear<=currentYear){
				if(shortMonth>currentMonth+1 || shortMonth< currentMonth){ // ++MOD-009
					if (lang == "fr") {
						msg = "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours.";
					} else {
						msg = "The work from home declaration must be only for last month or current month";
					}
					alert(msg);
					return false;
				}
			}else{
				if (lang == "fr") {
						msg = "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours.";
					} else {
						msg = "The work from home declaration must be only for last month or current month";
					}
				alert(msg);
				return false;
			}
		}
	}

	// Mod-010 Starts
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
    if(subtopic == '2699'){
		var startDateVal = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5").getDate();
		var minDate = new Date("09/01/2020");
		//var lang = document.getElementById("PageHtml").lang.split("-")[0];
		var errorMessage = "";
		
		if(startDateVal<minDate){
			if (lang == "fr") {
				errorMessage = "La présente demande ne peut être faite avant le 1er septembre 2020.";
			}else{
				errorMessage = "This request can’t start before september 1st, 2020.";
			}
			alert(errorMessage);
			return false;
		}
	}
	// Mod-010 Ends

	
};
neocase.form.event.bind("submit",launchOnSubmit);
//MOD-007 ends
