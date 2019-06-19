/*************FR_AGR_PAYROLL(M) - FRONT END - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 02/11/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			  -Calculates 'Monthly refund amount' Fields
			  -Hide Technical Section
			  -Disable Fields
----------------------------------------------------------------------------*/ 
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 03/05/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Corrected calculation for France language too
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

window.calculate_monthlyRefndAmntByCycl = function() {

	var km_Mileage = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR908");
	var startDate = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR5");
	var endDate = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR261");
	var monthlyRefndAmnt_ByCycl = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR910");
	
	var val_monthlyRefndAmnt_ByCycl=monthlyRefndAmnt_ByCycl.getValue();
	var val_endDate=endDate.getDate();
	var val_startDate=startDate.getDate();
	var val_km_Mileage=parseFloat(km_Mileage.getValue());
	
	var calculation;
	var monthDiff;
	var monthMin;
	
	if(monthlyRefndAmnt_ByCycl) {
		if (endDate){
			if (startDate){
				if (km_Mileage){
								
				 calculation=0;
				 monthDiff=0;
				 monthMin=0;
				
							
				if (isNaN(val_km_Mileage)) 
				{
				val_km_Mileage =0; 
				}
				
				
				var begMonth;
				var endMonth;
				if(val_startDate){
				begMonth=val_startDate.getMonth();
				}
				if(val_endDate){
				endMonth=val_endDate.getMonth();
				}
				if(val_startDate){
				begYear=val_startDate.getFullYear();
				}
				if(val_endDate){
				endYear=val_endDate.getFullYear();
				}
				if(endMonth && begMonth && endYear && begYear){
				monthDiff= endMonth - begMonth + (12 * (endYear - begYear));
				}
				
				
				if (monthDiff !== 0) {
					monthMin=Math.min(val_km_Mileage,800);
					calculation=((monthMin*0.25)/monthDiff).toFixed(2);
					monthlyRefndAmnt_ByCycl.setValue(calculation);
				}else
				{
					monthlyRefndAmnt_ByCycl.setValue("");
				}
				
				}
			}
		}
	}
	

				
};

window.disableFields = function(){
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR909"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR910"));
};

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
