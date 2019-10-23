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

/*************************** Copying fields starts*******************************

window.copy_fields = function() {
	//copy Employment Percentage value
             neocase.form.field('UTILISATEURS$CHAMPU248').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR593');
	//copy Admin Supervisor name value
             neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
	//copy Fixed term contract end date value
             neocase.form.field('UTILISATEURS$CHAMPU186').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR125');
             //copy Job Title Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
};
************************** Copying fields ends*********************************/

/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--Start -------*/

window.calculate_TargetVarCompProratedNPI = function() {
	var targetVarCompActual = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR77");
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
				calculation = ROUND((val_targetVarCompActual / val_employmentPercentage) * 100, 2);
			}
			targetVarCompproratedNew.setValue(calculation);
		}
	}


};
/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--End --------*/

/*---------------------------For ANZ Annual Salary At Actual FTE calculation--Start -------*/

window.calculate_AnnualSalaryAtActualFTE = function() {
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
				calculation = ROUND((val_annualSalaryAtActualFTENew * val_employmentPercentage) / 100, 2);
			}
			annualSalaryProratedNew.setValue(calculation);
			
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
					calculation = ROUND((val_targetVarCompprorated / val_employmentPercentage) * val_employmentPercentageNew, 2);
				}
				targetVarCompproratedNew.setValue(calculation);
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
					calculation = ROUND((val_annualSalaryProrated / val_employmentPercentage) * val_employmentPercentageNew, 2);
				}
				annualSalaryProratedNew.setValue(calculation);
			}
		}
	}


};
/*---------------------------For ANZ Annual salary prorated calculation --End---------*/
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	//copy_fields();
	//updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
	
 };
neocase.form.event.bind("init",launchOnInit);

/*---- MOD-001 ENDS ----*/
