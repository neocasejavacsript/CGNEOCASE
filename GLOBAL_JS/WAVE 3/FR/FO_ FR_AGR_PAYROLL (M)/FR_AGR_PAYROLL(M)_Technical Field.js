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
Description - checkSSARValue() added to show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail :' in both language
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
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/19/2021 (MM/DD/YYYY)
Change No   - MOD-010
Description - update checkSSARValue() with popups for all picklist
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/30/2021 (MM/DD/YYYY)
Change No   - MOD-011
Description - Add calculateWFHAmountAgreement() for 3714 to calculate amount as nb of days x 3.25. Max number of days - 23
			- Add WFHDateManipulation() with the logics for FR_Work from home allowance (on medical recommendation without addendum or more than 70%);Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)) (3714)
				•In January 2022 -> just possibility to declare January
				•In February 2022 -> possibility to declare January and February
				•From March 2022 -> possibility to declare January, February and March (user can declare current month and M-1 and M-2
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
window.checkSSARValue = function(){
	var sSARValue = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR935').getValue(),
		CERFAyesOrNoField = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR934')['elementHTML']['id']),
		alertMsg = document.documentElement.lang == "en-GB" ? "If you start working, put Yes, otherwise, put No" : "Si la journée a été commencée mettre OUI, sinon mettre NON",
		sSARCode = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR935').getCode(),
		alerMSGPopups;
	if(sSARValue == 'Sickness' || sSARValue == 'Maladie' || sSARCode == '1737'){
		if($(CERFAyesOrNoField).closest('div').find('.alertMsg').length< 1){
			$(CERFAyesOrNoField).closest('div').append('<span style="color:red" class="alertMsg">'+alertMsg+'</span>');
		}
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "You have 48 hours to send your Cerfa section 1 and 2 to your CPAM or the hospitalization report. The employer's supporting document is part 3 or single part of the cerfa provided by your doctor, or the hospitalization certificate issued by the hospital. Any other supporting document will not be taken into account.":"Vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 du Cerfa, ou le bulletin d’hospitalisation. La pièce justificative employeur est le volet 3 ou volet unique du cerfa remis par votre médecin, ou le bulletin d’hospitalisation délivré par l’hôpital. Tout autre justificatif ne sera pas pris en compte.";
		if($('.alerMSGSickness').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGSickness">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($(CERFAyesOrNoField).closest('div').find('.alertMsg').length >= 1){
			$(CERFAyesOrNoField).closest('div').find('.alertMsg').remove();
		}
		if($('.alerMSGSickness').length >= 1){
			$('.alerMSGSickness').remove();
		}
	}
	
	if(sSARCode == '1744'){//Paternity
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The start date of the absence must be the day after the 3 days of compulsory birth leave and must be for 4 calendar days. The other two non-mandatory periods of a minimum of 5 days each, not exceeding a total of 21 days, must either be clearly notified in this application or through other application(s).":"La date de début de l’absence doit correspondre au lendemain des 3 jours de congés naissance obligatoires et doit être d’une durée de 4 jours calendaires. Les deux autres périodes non obligatoires d’un minimum de 5 jours chacune, sans dépasser un total de 21 jours, doivent être clairement notifiées dans cette requête ou par le biais d’autre(s) requête(s).";
		if($('.alerMSGPaternity').length< 1){
			//alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGPaternity">'+alerMSGPopups+'<br></span>');
		}
	}
	else{
		if($('.alerMSGPaternity').length >= 1){
			$('.alerMSGPaternity').remove();
		}
	}
	
	if(sSARCode == '1743'){//Paternity new born hospitalisation
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "This leave can only begin after the period of 3 days of leave birth of the+4 days mandatory. It will stop after the 30 legal days or when your child will leave hospital. Attention this leave is neither renewable nor fractionable ; However, it is cumulative with the 25 days of paternity leave.":"Ce congé ne peut débuter qu’après la période obligatoire des 7 jours (3 jours ouvrés de congés naissance +4 jours calendaires de congés paternité). Il prendra fin après les 30 jours légaux d’hospitalisation ou à la date de sortie de l’hopital de votre enfant. Attention ce congé n’est ni renouvelable ni fractionnable. Il est toutefois cumulable avec les 25 jours de congé paternité.";
		if($('.alerMSGPaternityNew').length< 1){
			//alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGPaternityNew">'+alerMSGPopups+'<br></span>');
		}
	}
	else{
		if($('.alerMSGPaternityNew').length >= 1){
			$('.alerMSGPaternityNew').remove();
		}
	}
	if(sSARCode == '1738'){//Accident du travail
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "You have 48 hours to send your Cerfa section 1 and 2 to your CPAM or the hospitalization report. The employer's supporting document is part 3 or single part of the cerfa provided by your doctor, or the hospitalization certificate issued by the hospital. Any other supporting document will not be taken into account.":"Vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 du Cerfa, ou le bulletin d’hospitalisation. La pièce justificative employeur est le volet 3 ou volet unique du cerfa remis par votre médecin, ou le bulletin d’hospitalisation délivré par l’hôpital. Tout autre justificatif ne sera pas pris en compte.";
		if($('.alerMSGWrkAcc').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGWrkAcc">'+alerMSGPopups+'<br><br></span>');
		}
	}
	else{
		if($('.alerMSGWrkAcc').length >= 1){
			$('.alerMSGWrkAcc').remove();
		}
	}
	if(sSARCode == '1739'){//Accident de trajet
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "You have 48 hours to send your Cerfa section 1 and 2 to your CPAM or the hospitalization report. The employer's supporting document is part 3 or single part of the cerfa provided by your doctor, or the hospitalization certificate issued by the hospital. Any other supporting document will not be taken into account.":"Vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 du Cerfa, ou le bulletin d’hospitalisation. La pièce justificative employeur est le volet 3 ou volet unique du cerfa remis par votre médecin, ou le bulletin d’hospitalisation délivré par l’hôpital. Tout autre justificatif ne sera pas pris en compte.";
		if($('.alerMSGTransprtAcc').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGTransprtAcc">'+alerMSGPopups+'<br><br></span>');
		}
	}
	else{
		if($('.alerMSGTransprtAcc').length >= 1){
			$('.alerMSGTransprtAcc').remove();
		}
	}
	if(sSARCode == '1742'){//Maternité 1742
		alerMSGPopups = document.documentElement.lang == "en-GB" ? " You have to declare your pregnancy to your primary health insurance fund (CPAM) and to your family allowance fund (CAF) before the end of the 14th week of pregnancy. If your doctor prescribes you to stop pathological leave, you have 48 hours to transmit to your CPAM Part 1 and 2 of the deer. The employer’s supporting document is Part 3 or single part provided by your doctor. If it’s concern a maternity leave, the requested supporting document is only the pregnancy calendar issued by your CPAM.":"vous devez déclarer votre grossesse à votre caisse primaire d'assurance maladie (CPAM) et à la caisse d'allocations familiales (CAF) avant la fin de la 14ème semaine de grossesse. Si votre médecin vous prescrit un arrêt congé pathologique, vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 du cerfa. Les pièces justificatives employeur sont le volet 3 ou volet unique remis par votre médecin + le calendrier de grossesse. Si votre arrêt concerne une maternité, la pièce justificative demandée est uniquement le calendrier grossesse délivré par votre CPAM";
		if($('.alerMSGMaternity').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGMaternity">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGMaternity').length >= 1){
			$('.alerMSGMaternity').remove();
		}
	}
	if(sSARCode == '1745'){//Adoption 1745
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The supporting document to be provided to CPAM and the employer is the official attestation stating the date of the child’s actual arrival in the home.":"La pièce justificative à fournir à la CPAM (dans les 48 heures) ainsi qu’à l’employeur est l’attestation officielle stipulant la date d’arrivée effective de l’enfant dans le foyer.";
		if($('.alerMSGAdoption').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGAdoption">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGAdoption').length >= 1){
			$('.alerMSGAdoption').remove();
		}
	}
	if(sSARCode == '1746'){//Temps partiel thérapeutique  1746
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "You have 48 hours to send your Cerfa section 1 and 2 to your CPAM, The employer's supporting document is part 3 or single part of the cerfa. You need also to  to open a second request with the same supporting documentation":"Vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 ou volet unique du Cerfa. La pièce justificative employeur à fournir est le volet 3 ou volet unique du cerfa remis par votre médecin. N’oubliez pas également d’ouvrir une seconde requête de changement contractuel avec le même justificatif.";
		if($('.alerMSGTherPartTime').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGTherPartTime">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGTherPartTime').length >= 1){
			$('.alerMSGTherPartTime').remove();
		}
	}
	if(sSARCode == '1841'){//Deuil  1841
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The supporting document to be provided to CPAM (within 48 hours) and your employer is the Death Certificate.":"La pièce justificative à fournir à la CPAM (dans les 48 heures) et à votre employeur est le Bulletin de décès.";
		if($('.alerMSGDeuil').length< 1){
			// alert(alerMSGPopups);
			$('#section343be56477f77e3e4475').after('<span style="color:#cb2980" class="alerMSGDeuil">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGDeuil').length >= 1){
			$('.alerMSGDeuil').remove();
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
window.calculateWFHAmountAgreement = function(){ 
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
		numberOfDays = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR944").getValue(),
		amountOfAgreement = 0,zeroCheck = 0,
		// WFHAllowanceAgreement = '+0000000';
		WFHDaysAgreement = '+0000000';
	if(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)'|| subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord): FR_Work from home allowance (on medical recommendation without addendum or > 70%);Indemnités télétravail (sur préco médecin du travail sans avenant ou > de 70%)
		if(numberOfDays || numberOfDays !== ''){
			amountOfAgreement = parseFloat(numberOfDays) * 3.25 > 74.75 ? 74.75 : parseFloat(numberOfDays) * 3.25; //number of days x 3.25 and never more than 74.75			
		}
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").setValue(amountOfAgreement);
		// WFHAllowanceAgreement += (amountOfAgreement !== zeroCheck) ? (amountOfAgreement * 1000) : '00000';
		WFHDaysAgreement += (numberOfDays !== '') ? (numberOfDays< 10 ? '0'+(numberOfDays * 1000):(numberOfDays * 1000)) : '00000';
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR965").setValue(WFHDaysAgreement);
	}
};
window.WFHDateManipulation = function(){ //++MOD-017
	var year = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue(),
    	wfhMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue();
    var date = new Date(year, wfhMonth, 0).getDate();
	var newDate = year+"-"+wfhMonth+"-"+date;
    neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR947").setValue(newDate);
    
	var d = new Date();
	var currentMonth = d.getMonth(),
		currentYear = d.getFullYear();

	// var currentMonth = 3;//To test
	// var currentYear = 2022;
	
	var shortYear = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getText(),
		shortMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getText();
	
	var msg = "",
    	lang = document.getElementById("PageHtml").lang.split("-")[0];
	msg = (lang == "fr") ? "Merci de renseigner les champs obligatoires suivant :" : "Please fill the following mandatory fields :";
	//Get Value from WFH Year and WFH Month
	var wfhYearValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue(),
		wfhMonthValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue(),
		subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
	var januaryMonth = 0;
		decemberMonth = 11;
	var returnFlag = 1; //True = 1, False = 0
	if(wfhYearValue!="" && wfhMonthValue!=""){
		if(currentYear == 2021 && currentMonth == decemberMonth){ // current month = December & current year = 2021 
			 if(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)' || subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){ //++MOD-019 , ++MOD-20
				if(shortYear<=currentYear){	
					if(shortMonth>currentMonth+1 || shortMonth<= currentMonth){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours" : "The work from home declaration must be only for current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours" : "The work from home declaration must be only for current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{//++MOD-019
				if(shortYear< currentYear){
					if(shortMonth>=currentMonth+1 || shortMonth<= currentMonth){ // ++MOD-011
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else if(shortYear == currentYear){
					if(shortMonth>currentMonth+1 || shortMonth< currentMonth){ // ++MOD-009 
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}
		}
		else if(currentYear == 2022 && currentMonth == januaryMonth){ // current month = January & current year = 2022 // ++MOD-017
			if(subtopic !== 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)' && subtopic !== 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){
				if(shortYear<currentYear){	
					if(shortMonth>=1 && shortMonth<12){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou le dernier mois" : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else if(shortYear==currentYear){	
					if(shortMonth!=1){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou le dernier mois" : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{ // ++MOD-019 : Subtopic: FR_Work from home allowance (on medical recommendation without addendum or > 70%) (3714),FR_Work from home allowance (exceptional reason);Indemnités télétravail (Circonstances exceptionnelles)(3715)
				if(shortYear<currentYear){
					if(shortMonth>=1 && shortMonth<=11){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou le dernier mois" : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else if(shortYear==currentYear){	
					
					if(shortMonth!=1){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou le dernier mois" : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					imsg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou le dernier mois" : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}
			
		}
		else {
			if(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)'|| subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){ // ++MOD-019: Subtopic: FR_Work from home allowance (on medical recommendation without addendum or > 70%) (3714),FR_Work from home allowance (exceptional reason);Indemnités télétravail (Circonstances exceptionnelles)(3715)
				if(shortYear< currentYear){ 
					if(currentMonth == 1 && (shortMonth>januaryMonth && shortMonth<12)){
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou les deux derniers mois." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
					if((shortMonth>currentMonth+1 || shortMonth< currentMonth - 1 || shortMonth<= currentMonth + 1) && currentMonth > 1){ 
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou les deux derniers mois." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
				}
				else if(shortYear == currentYear){ 
					if(shortMonth>currentMonth+1 || shortMonth< currentMonth - 1){ // ++MOD-009 
						msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou les deux derniers mois." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
				}
				else{
					msg = (lang == "fr") ? "La demande d’indemnités télétravail ne peut concerner que le mois en cours ou les deux derniers mois." : "The work from home declaration must be only for last 2 months or current month";
					alert(msg);
					returnFlag = 0;
				}
			}
			else{
				if(shortYear< currentYear){
					if(shortMonth>=currentMonth+1 || shortMonth<= currentMonth){ // ++MOD-011
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else if(shortYear == currentYear){
					if(shortMonth>currentMonth+1 || shortMonth< currentMonth){ // ++MOD-009 
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}
		}
	}
	return returnFlag;
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
		
		checkSSARValue(); //++MOD-007
	}
	articleLinManageWidSection('sectionabea415e41bee9c5db50', 'section08de324a6bd027cdcfbd'); // Section: FR_Work From Home addendum. + New work from home addendum article
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getText();
	if(subtopic == 'FR_Addendum return' || subtopic == 'Renvoi avenant'){ // Subtopic: FR_Addendum return;Renvoi avenant
		//console.log(neocase.form.field('question'));
		neocase.form.field('question').hide();
		neocase.form.section('section6e882a6f246deed213dd').hide();
		disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR420")); //disable effective date 
	}
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").hide();
	if(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)'|| subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").show();
		disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964"));
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR945").hide();
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").show();
		articleLinManageWidSection('section324c7870cf39e704aa08','section0ac3469c39e56c758d64');
		for(var k = 24; k<= 24; k++){
			var optValNumOfDaysM = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR944')['elementHTML']['id']).children('option[value="'+k+'"]');
			if(optValNumOfDaysM.length > 0){
				optValNumOfDaysM.remove();
			}
		}
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
	if(!WFHDateManipulation()){
		return false;
	}
};
neocase.form.event.bind("submit",launchOnSubmit);
// MOD-008 Ends
