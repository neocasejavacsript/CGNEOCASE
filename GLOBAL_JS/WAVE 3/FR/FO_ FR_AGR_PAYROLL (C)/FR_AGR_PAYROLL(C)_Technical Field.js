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
Description - checkSSARValue() added to show text in red below 'Avez vous travaillé le premier jour de l'arrêt de travail CERFA ?' field for the Sickness/Maladie value of 'Motif de l'arrêt de travail :' in both language
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
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 01/27/2021 (MM/DD/YYYY)
Change No   - MOD-011
Description - Updated the logic for wfh allowance
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/31/2021 (MM/DD/YYYY)
Change No   - MOD-012
Description - setSMPAllowance() to change Sustainable Mobility Package allowance before and after 1st July,2021 respectively;called from field
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/06/2021 (MM/DD/YYYY)
Change No   - MOD-013
Description - articleLinManageWidSection() to generalize the adjustment of the<hr> line with section; and update for new 2 sections
			- Hide Request details for subtopic FR_Addendum return;Renvoi avenant (3701)
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/16/2021 (MM/DD/YYYY)
Change No   - MOD-013
Description - Auto-populated effective date to 1st November,2021 for subtopic FR_Addendum return;Renvoi avenant (3701)
			- disable effective date for subtopic FR_Addendum return;Renvoi avenant (3701)
---------------------------------------------------------------------------			
Developer   - Ahana Sarkar
Date	    - 07/22/2021 (MM/DD/YYYY)
Change No   - MOD-014
Description - Amount and Supporting document mange visibility for subtopic FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord) (3089)
			- calculateWFHAmountAgreement() to calculate Work from home amount agreement(number of days x 2.5 and never more than 35);disable Amount for subtopic FR_Addendum return;Renvoi avenant (3089)
---------------------------------------------------------------------------			
Developer   - Ahana Sarkar
Date	    - 08/26/2021 (MM/DD/YYYY)
Change No   - MOD-015
Description - update checkSSARValue() to show instruction for 2other dropdowns
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/01/2021 (MM/DD/YYYY)
Change No   - MOD-016
Description - calculateWFHAmountAgreement() updated as nb of days x 3.25 and never more than 58.50€ 
			- hide request details for FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/27/2021 (MM/DD/YYYY)
Change No   - MOD-017
Description - Change the auto-populated effective date to 1st December,2021 for subtopic FR_Addendum return;Renvoi avenant (3701)
			-Implementing condition for 'work from home declaration must be only for last month or current month' except December,2021(if Dec,2021 then it will only allow November month)
			-WFHDateManipulation() defined and called from on submit.function improved with ternary operator instead of if/else for language-wise message
			-For WFH new agreement(3089),user can declare current month and M-1 and M-2 BUT
				•In December 2021 -> just possibility to declare December
				•In January 2022 -> possibility to declare December and January
				•From February 2022 -> possibility to declare December, January and February
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/19/2021 (MM/DD/YYYY)
Change No   - MOD-018
Description - update checkSSARValue() with popups for all picklist
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/30/2021 (MM/DD/YYYY)
Change No   - MOD-019
Description - Update calculateWFHAmountAgreement() for 3714 to calculate amount as nb of days x 3.25. Max number of days - 23
			- Update WFHDateManipulation() with the logics for FR_Work from home allowance (on medical recommendation without addendum or > 70%) (3714)
				•In January 2022 -> just possibility to declare January
				•In February 2022 -> possibility to declare January and February
				•From March 2022 -> possibility to declare January, February and March (user can declare current month and M-1 and M-2
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/01/2021 (MM/DD/YYYY)
Change No   - MOD-020
Description - Update calculateWFHAmountAgreement() for 3715 to calculate amount as nb of days x 3.25. Max number of days - 23
			- Update WFHDateManipulation() with the logics for FR_Work from home allowance (exceptional reason);Indemnités télétravail (Circonstances exceptionnelles) (3715)
				•In January 2022 -> just possibility to declare January
				•In February 2022 -> possibility to declare January and February
				•From March 2022 -> possibility to declare January, February and March (user can declare current month and M-1 and M-2
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/16/2021 (MM/DD/YYYY)
Change No   - MOD-021
Description - Change logic for WFH medical allowance & exceptional allowances
				•In Dec 2021 -> just possibility to declare December
				•In January 2022 -> just possibility to declare January & Dec 2021
				•In February 2022 -> possibility to declare Dec 2021 & January and February(and same continues for future months)
------------------------------------------------------------------------------------*/


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
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGSickness">'+alerMSGPopups+'<br><br></span>');
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
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The start date of the absence must be the day after the 3 days of compulsory birth leave and must be for 4 calendar days. The other two non-mandatory periods of a minimum of 5 days each, not exceeding a total of 21 days, must either be clearly notified in this application or through other application(s).":"La date de début de l’absence doit correspondre au lendemain des 3 jours de congés naissance obligatoires et doit être d’une durée de 4 jours calendaires. Les deux autres périodes non obligatoires d’un minimum de 5 jours chacune, sans dépasser un total de 21 jours, doivent être clairement notifiées dans cette requête ou par le biais d’autre(s) requête(s). ";
		if($('.alerMSGPaternity').length< 1){
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGPaternity">'+alerMSGPopups+'<br><br></span>');
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
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGPaternityNew">'+alerMSGPopups+'<br><br></span>');
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
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGWrkAcc">'+alerMSGPopups+'<br><br></span>');
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
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGTransprtAcc">'+alerMSGPopups+'<br><br></span>');
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
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGMaternity">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGMaternity').length >= 1){
			$('.alerMSGMaternity').remove();
		}
	}
	if(sSARCode == '1745'){//Adoption 1745
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The supporting document to be provided to CPAM and the employer is the official attestation stating the date of the child’s actual arrival in the home.":"La pièce justificative à fournir à la CPAM (dans les 48 heures) ainsi qu’à l’employeur est l’attestation officielle stipulant la date d’arrivée effective de l’enfant dans le foyer.";
		if($('.alerMSGAdoption').length< 1){
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGAdoption">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGAdoption').length >= 1){
			$('.alerMSGAdoption').remove();
		}
	}
	if(sSARCode == '1746'){//Temps partiel thérapeutique  1746
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "You have 48 hours to send your Cerfa section 1 and 2 to your CPAM, The employer's supporting document is part 3 or single part of the cerfa. You need also to  to open a second request with the same supporting documentation":"Vous avez 48 heures pour transmettre à votre CPAM le volet 1 et 2 ou volet unique du Cerfa. La pièce justificative employeur à fournir est le volet 3 ou volet unique du cerfa remis par votre médecin. N’oubliez pas également d’ouvrir une seconde requête de changement contractuel avec le même justificatif.";
		if($('.alerMSGTherPartTime').length< 1){
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGTherPartTime">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGTherPartTime').length >= 1){
			$('.alerMSGTherPartTime').remove();
		}
	}
	if(sSARCode == '1841'){//Deuil  1841
		alerMSGPopups = document.documentElement.lang == "en-GB" ? "The supporting document to be provided to CPAM (within 48 hours) and your employer is the Death Certificate.":"La pièce justificative à fournir à la CPAM (dans les 48 heures) et à votre employeur est le Bulletin de décès.";
		if($('.alerMSGDeuil').length< 1){
			alert(alerMSGPopups);
			$('#section2b5def23bad07230c544').after('<span style="color:#cb2980" class="alerMSGDeuil">'+alerMSGPopups+'<br><br></span>');
		}
	}else{
		if($('.alerMSGDeuil').length >= 1){
			$('.alerMSGDeuil').remove();
		}
	}
};
window.setDateLimit = function(startDateField){
	var stD,stDate,nextDay,alertMsg;
	var startDateFieldId = $('#'+ neocase.form.field(startDateField)['elementHTML']['id']),
		today = new Date(),
		errorMsg = '<span style="color:red" class="error-msg-date"> This request can’t start before september 1st, 2020</span>';
		startDateFieldId.datepicker( "option", "minDate", new Date('2020-09-01'));
	
};
window.setSMPAllowance = function(){ // ++MOD-012
	var startDateField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5'),
		endDateField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR261'),
		subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
	if(subtopic == '2699'){ // Subtopic = FR_03_Sustainable mobility package
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
					startDateField.setValue('');
					endDateField.setValue('');
				}
				else if((stDateTime< restrictTime && enDateTime< restrictTime) && (stDateTime<= enDateTime)){
					SMPAllowance.setCode('1832'); //value = 000000025000
				}
				else if((stDateTime >= restrictTime && enDateTime >= restrictTime) && (stDateTime<= enDateTime)){
					SMPAllowance.setCode('2562');//value = 000000041670
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
	if(subtopic == '3089' || subtopic == '3714'|| subtopic == '3715'){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord): FR_Work from home allowance (on medical recommendation without addendum or > 70%);Indemnités télétravail (sur préco médecin du travail sans avenant ou > de 70%),FR_Work from home allowance (exceptional reason);Indemnités télétravail (Circonstances exceptionnelles)
		if(numberOfDays || numberOfDays !== ''){
			if(subtopic == '3089'){
				amountOfAgreement = parseFloat(numberOfDays) * 3.25 > 61.75 ? 61.75 : parseFloat(numberOfDays) * 3.25; //number of days x 3.25 and never more than 61.75
			}else{ //++MOD-019
				amountOfAgreement = parseFloat(numberOfDays) * 3.25 > 74.75 ? 74.75 : parseFloat(numberOfDays) * 3.25; //number of days x 3.25 and never more than 74.75
			}
			
		}
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").setValue(amountOfAgreement);
		// WFHAllowanceAgreement += (amountOfAgreement !== zeroCheck) ? (amountOfAgreement * 1000) : '00000';
		WFHDaysAgreement += (numberOfDays !== '') ? (numberOfDays< 10 ? '0'+(numberOfDays * 1000):(numberOfDays * 1000)) : '00000';
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR965").setValue(WFHDaysAgreement);
	}
};
window.populateRequestDetails = function(){ // ++MOD-007
    var subtopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT,
        htmlLang = document.documentElement.lang;
	// console.log(formulaire.INTERVENTIONS_EN_COURS$ELEMENT.options[formulaire.INTERVENTIONS_EN_COURS$ELEMENT.selectedIndex].text);
    var requestDet = (htmlLang == 'fr-FR' ? 'Demande soulevée pour la sous-catégorie : ' : 'Request raised for subtopic: ') + subtopic.options[subtopic.selectedIndex].text;
    if(subtopic.value == '3701' || subtopic.value == '3089'|| subtopic.value == '3715'){ 
       neocase.form.field('question').setValue(requestDet);
    }
};
//MOD-007 starts
window.WFHDateManipulation = function(){ //++MOD-017
	var year = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue(),
    	wfhMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue();
    var date = new Date(year, wfhMonth, 0).getDate();
	var newDate = year+"-"+wfhMonth+"-"+date;
    neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR947").setValue(newDate);
    
	var d = new Date();
	var currentMonth = d.getMonth(),
		currentYear = d.getFullYear();

	// var currentMonth = 0;//To test
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
	var januaryMonth = 0,
		decemberMonth = 11;
	var returnFlag = 1; //True = 1, False = 0
	if(wfhYearValue!="" && wfhMonthValue!=""){
		if(currentYear == 2020 && currentMonth == 8){ // current month = September & current year = 2020 // ++MOD-009
			if(shortYear<=currentYear){	
				if(shortMonth>currentMonth+1 || shortMonth<= currentMonth){
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
		else if(currentYear == 2021 && currentMonth == januaryMonth){ // Current year: 2021 and Curent Month: January

			if(shortYear<currentYear){	
				
				if(shortMonth>=1 && shortMonth<11){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(shortYear==currentYear){	
				
				if(shortMonth!=1){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{
				imsg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
				alert(msg);
				returnFlag = 0;
			}
		}
		else if(currentYear == 2021 && currentMonth == decemberMonth){ // current month = December & current year = 2021 // ++MOD-017
			if(subtopic == '3089'){
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
			}else if(subtopic == '3595'){
				if(shortYear<=currentYear){	
					if(shortMonth >= (currentMonth + 1) || shortMonth<= (currentMonth-1)){
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier." : "The work from home declaration must be only for last month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier." : "The work from home declaration must be only for last month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(subtopic == '3714'|| subtopic == '3715'){ //++MOD-019 , ++MOD-20
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
			if(subtopic !== '3714' && subtopic !== '3715'){
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
			if(subtopic == '3089'){ //++MOD-017 : Subtopic - FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)
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
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
				}
				else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(subtopic == '3714'|| subtopic == '3715'){ // ++MOD-019: Subtopic: FR_Work from home allowance (on medical recommendation without addendum or > 70%) (3714),FR_Work from home allowance (exceptional reason);Indemnités télétravail (Circonstances exceptionnelles)(3715)
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
//MOD-007 ends

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
			articleLinManageWidSection('section2b5def23bad07230c544', 'section60d59d8a7a0fef16fa06'); // Section: Social security absence + How to declare my social security absence
			articleLinManageWidSection('section52cea27607cd0ad68e1f', 'section4edda08382cf6f22e3ed'); // Section: FR_Work from home allowance without contract addendum. + How to declare WFH
			articleLinManageWidSection('sectionb16e96806dbcee0df0b8', 'section9a2c948c0381a2c12151'); // Section: FR_Work From Home addendum. + New work from home addendum article
			var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
			if(subtopic == '3701'){ // Subtopic: FR_Addendum return;Renvoi avenant
				//neocase.form.field('question').noMandatory();
				populateRequestDetails();
				neocase.form.field('question').hide();
				neocase.form.section('section6e882a6f246deed213dd').hide();
				$('.mix-caseForm-body-requestFormPanel').next('.multifileinput-button').hide();
				$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR420')['elementHTML']['id']).datepicker('setDate', new Date('2021-12-01')); // auto-populated effective date to 1st December,2021
				disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR420")); //disable effective date 
			}
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").hide();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").hide();
			if(subtopic == '3089'){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)
				populateRequestDetails();
				neocase.form.field('question').hide();
				neocase.form.section('section6e882a6f246deed213dd').hide();
				$('.mix-caseForm-body-requestFormPanel').next('.multifileinput-button').hide();
				for(var i = 20; i<= 24; i++){
					var optValNumOfDays = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR944')['elementHTML']['id']).children('option[value="'+i+'"]');
					if(optValNumOfDays.length > 0){
						optValNumOfDays.remove();
					}
				}				
				neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").show();
				disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964"));
				disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR965"));
				neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR945").hide();
				articleLinManageWidSection('section52cea27607cd0ad68e1f','section749482fad7aaa4fff85c');
			}
			else if(subtopic == '3714'|| subtopic == '3715'){
				neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").show();
				disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964"));
				neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR945").hide();
				if(subtopic == '3714'){
					articleLinManageWidSection('section52cea27607cd0ad68e1f','section00679762c68fb528005d');
					neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").show();
				}
				if(subtopic=='3715'){
					articleLinManageWidSection('section52cea27607cd0ad68e1f','section728e2a0c13d6123cded0');
					populateRequestDetails();
					neocase.form.field('question').hide();
					neocase.form.section('section6e882a6f246deed213dd').hide();
					$('.mix-caseForm-body-requestFormPanel').next('.multifileinput-button').hide();
				}
				for(var k = 24; k<= 24; k++){
					var optValNumOfDaysM = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR944')['elementHTML']['id']).children('option[value="'+k+'"]');
					if(optValNumOfDaysM.length > 0){
						optValNumOfDaysM.remove();
					}
				}
			}
			else{
				for(var j = 1; j<= 3; j++){
					var optValNumOfDaysOthers = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR944')['elementHTML']['id']).children('option[value="'+j+'"]');
					if(optValNumOfDaysOthers.length > 0){
						optValNumOfDaysOthers.remove();
					}
				}	
			}
			
        }, 800);
    }
};
/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
	launchOnceLoadComplete();
	//setSMPAllowance();
    console.log('launch load complete');

};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

window.onloadForm = function () {
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
	disableFields();	
};
neocase.form.event.bind('init', onloadForm);


/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	if(!WFHDateManipulation()){
		return false;
	}
	// Mod-010 Starts
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
    if(subtopic == '2699'){
		var startDateVal = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR5").getDate();
		var minDate = new Date("09/01/2020");
		//var lang = document.getElementById("PageHtml").lang.split("-")[0];
		var lang = document.documentElement.lang;
		var errorMessage = "";
		
		if(startDateVal<minDate){
			if (lang == "fr-FR") {
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
