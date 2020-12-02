/*************FR_AGR_PAYROLL(M) - FRONT END - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 02/11/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			  -Calculates 'Monthly refund amount' Fields
			  -Hide Technical Section
			  -Disable Fields
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 03/05/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Corrected calculation for France language too
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/23/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Make Request Details RO
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/24/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Align border-line to the Social Security Absence section
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 08/27/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - checkSSARValueMaladie() added to show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail :' in both language
---------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-008
Description - Commented out FR_03_Bicycle allowance calculation. Added logic to check if end date is before 1st Sept 2020 for subtopic: Sustainable Mobility Package (2699)
----------------------------------------------------------------------------*/

/*---------------------------- STARTS OF MOD-001 ---------------------------*/
//Hide Technical Section
neocase.form.section("section046026e7ff24a279b6fe").hide();
neocase.form.section("sectionfbdcfa0715d768bb875a").hide();
	
/**********************  MOD-001 starts ********************/

window.calculate_monthlyRefndAmnt = function() {

	var subscripFreqncy = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR905");
	var totPaidAmnt = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR390");
	var monthlyRefndAmnt = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR909");
		
	if(monthlyRefndAmnt) {
		if (subscripFreqncy){
			if (totPaidAmnt){
			
			var val_subscripFreqncy=subscripFreqncy.getText();
			var val_totPaidAmnt=parseFloat(totPaidAmnt.getValue());
			
			if (isNaN(val_totPaidAmnt)) 
				{
				val_totPaidAmnt =0; 
				}
	
			if (val_subscripFreqncy == "Yearly" || val_subscripFreqncy == "Annuel")
				{
				monthlyRefndAmnt.setValue((val_totPaidAmnt/24).toFixed(2));
				}
			else if(val_subscripFreqncy == "Monthly / Weekly"  || val_subscripFreqncy == "Mensuel / Hebdomadaire")
				{
				monthlyRefndAmnt.setValue((val_totPaidAmnt/2).toFixed(2));
				}
			else{
				monthlyRefndAmnt.setValue("");
				}
			
			}
		}
	}
	
				
						
};

/*--------------------- For FR_03_Bicycle allowance ---------------STARTS----------*/
/*window.calculate_monthlyRefndAmntByCycl = function() {
	
	var km_Mileage = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR908");
	var startDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5");
	var endDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR261");
	var monthlyRefndAmnt_ByCycl = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR910");
	
	var val_monthlyRefndAmnt_ByCycl=monthlyRefndAmnt_ByCycl.getValue();
	var val_endDate=endDate.getDate();
	var val_startDate=startDate.getDate();
	var val_km_Mileage=parseFloat(km_Mileage.getValue());
	
	var calculation;
	var monthDiff;
	var monthMin;	
	var maxLimit;
	
	if(monthlyRefndAmnt_ByCycl) {
		if (endDate){
			if (startDate){
				if (km_Mileage){
								
				 calculation=0;
				 monthDiff=0;
				 monthMin=0;
				 maxLimit=16.67;
							
				if (isNaN(val_km_Mileage)) 
				{
				val_km_Mileage =0; 
				}
				
				var begMonth,endMonth,begYear,endYear;
				
				if(val_startDate){
                begMonth=val_startDate.getMonth();
                begYear=val_startDate.getFullYear();
				}
				if(val_endDate){
                endMonth=val_endDate.getMonth();
                endYear=val_endDate.getFullYear();
				}
				
				if(typeof endMonth!== undefined && typeof begMonth!== undefined && typeof endYear!== undefined && typeof begYear!== undefined){
				monthDiff= endMonth - begMonth + (12 * (endYear - begYear));
				monthDiff=monthDiff+1;
				}
				
				console.log(monthDiff);
				if (monthDiff !== 0 && !isNaN(monthDiff)) {
					monthMin=Math.min(val_km_Mileage,800);
					calculation=((monthMin*0.25)/monthDiff).toFixed(2);
					//monthlyRefndAmnt_ByCycl.setValue(calculation);					
					
					if(calculation>maxLimit){
					monthlyRefndAmnt_ByCycl.setValue(maxLimit);
					}else{
					monthlyRefndAmnt_ByCycl.setValue(calculation);
					
					}
					
				}else
				{
					monthlyRefndAmnt_ByCycl.setValue("");
				}
				
				}
			}
		}
	}
	
				
};*/
/*--------------------- For FR_03_Bicycle allowance ---------------ENDS----------*/

window.disableFields = function(){
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR909"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR910"));
};
/*---- show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?
' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail' in both language---++MOD-007-*/
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
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
	formulaire.question.readOnly = "true"; //++MOD-003
	//++MOD-006
	if($('#section343be56477f77e3e4475').css('display') != 'none' && $('#section84e7611d6efb046e5667').css('display') != 'none'){ // Section: Social security absence + How to declare my social security absence
		if($('#section343be56477f77e3e4475').find('hr').length > 0){
			$('#section343be56477f77e3e4475').find('hr').remove();
		}
		if($('#section84e7611d6efb046e5667').find('hr').length< 1){
			$('#section84e7611d6efb046e5667').append('<hr>');
		}
		checkSSARValueMaladie(); //++MOD-007
	}

	
};

neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
/*************************
*Launch Javascript on init
**************************/
window.onloadForm = function () {
    mandatoryList();
    enableManageField = true;
    manageFields("ouverture");
	disableFields();
};
neocase.form.event.bind('init', onloadForm);
/*---------------------------- ENDS OF MOD-001 ---------------------------*/

/****************************
* Launch Javascript on submit
* MOD-008 starts
*****************************/
window.launchOnSubmit = function(){
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getText();
	
	if(subtopic == 'FR_03_Sustainable mobility package' || subtopic=="Forfait mobilité durable"){
		var startDateVal = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5").getDate();
		var minDate = new Date("09/01/2020");
		var lang = document.getElementById("PageHtml").lang.split("-")[0];
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
};
neocase.form.event.bind("submit",launchOnSubmit);
// MOD-008 Ends
