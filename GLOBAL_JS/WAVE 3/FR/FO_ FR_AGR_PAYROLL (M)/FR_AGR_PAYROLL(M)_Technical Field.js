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
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/31/2021 (MM/DD/YYYY)
Change No   - MOD-009
Description - setSMPAllowance() to change Sustainable Mobility Package allowance before and after 1st July,2021 respectively;called from field
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
		alertMsg = document.documentElement.lang == "en-GB" ? "If you start working, put Yes, otherwise, put No" : "Si la journée a été commencée mettre OUI, sinon mettre NON";

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
var startDateFieldVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').getValue(),
	endDateFieldVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR261').getValue(); // Fetching previous values on form load first time ++MOD-009
window.setSMPAllowance = function(){ // ++MOD-009
	var startDateField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5'),
		endDateField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR261'),
		subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
	if(subtopic == 'FR_03_Sustainable mobility package' || subtopic == 'Forfait mobilité durable'){ // Subtopic = FR_03_Sustainable mobility package (2699)
		if(startDateField.getValue() !== '' && endDateField.getValue() !== ''){
			var restrictTime = new Date(2021,6,1).getTime(), // Date = 1st July,2021
				stDateTime = startDateField.getDate().getTime(),
				enDateTime = endDateField.getDate().getTime(),
				SMPAllowance = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR910'),
				alertChange = document.documentElement.lang == 'fr-FR' ? 'Bonjour. Le montant remboursé et le justificatif correspondant ont changé au 01/07/2021. Merci de bien vouloir ouvrir une autre requête débutant à cette date et mettre le 30/06/2021 en date de fin sur celle-ci. Merci de votre compréhension.' : 'Hello. The refunded amount and corresponding proof changed on 07/01/2021. Please open a new request starting on this date an put 06/30/2021 as end date on this request. Thanks for your understanding.';
				errorAlert = document.documentElement.lang == 'fr-FR' ? 'Fournir la date de fin après la date de début':'Provide End date after Start date';
			if((stDateTime !== ''|| typeof stDateTime !== 'undefined' || !isNaN(stDateTime)) && (enDateTime !== ''|| typeof enDateTime !== 'undefined' || !isNaN(enDateTime))){
				if((stDateTime< restrictTime && enDateTime >= restrictTime) && (stDateTime<= enDateTime)){
					alert(alertChange);
					console.log('1st condition : onchangeStart '+onchangeStart+' onchangeEnd '+onchangeEnd);
					if(onchangeStart == 1){
						startDateField.setValue(startDateFieldVal);
					}
					else if(onchangeEnd == 1){
						endDateField.setValue(endDateFieldVal);	
					}else{
						startDateField.setValue('');
						endDateField.setValue('');
					}
				}
				else if((stDateTime< restrictTime && enDateTime< restrictTime) && (stDateTime<= enDateTime)){
					SMPAllowance.setCode('1832'); //value = 000000025000
					startDateFieldVal = startDateField.getValue();
					endDateFieldVal = endDateField.getValue();
				}
				else if((stDateTime >= restrictTime && enDateTime >= restrictTime) && (stDateTime<= enDateTime)){
					SMPAllowance.setCode('2562');//value = 000000041670
					startDateFieldVal = startDateField.getValue();
					endDateFieldVal = endDateField.getValue();
				}
				else if((stDateTime >= restrictTime && enDateTime< restrictTime) || (stDateTime > enDateTime)){
					alert(errorAlert);
					startDateField.setValue('');
					endDateField.setValue('');	
				}else{
					console.log("Something messy.Please check Start date & End date");
				}
			}
		}
	}
};
window.articleLinManageWidSection = function(mainSection, articleSection){
	
	if($('#'+mainSection).css('display') != 'none' && $('#'+articleSection).css('display') != 'none'){ 
		if($('#'+mainSection).find('hr').length > 0){
			$('#'+mainSection).find('hr').remove();
		}
		if($('#'+articleSection).find('hr').length< 1){
			$('#'+articleSection).append('<hr>');
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
	articleLinManageWidSection('sectionabea415e41bee9c5db50', 'section08de324a6bd027cdcfbd'); // Section: FR_Work From Home addendum. + New work from home addendum article
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getText();
	if(subtopic == 'FR_Addendum return' || subtopic == 'Renvoi avenant'){ // Subtopic: FR_Addendum return;Renvoi avenant
		//console.log(neocase.form.field('question'));
		neocase.form.field('question').hide();
		neocase.form.section('section6e882a6f246deed213dd').hide();
		disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR420")); //disable effective date 
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
