/*************FR_AGR_PAYROLL (MGR) (M) - FRONT END - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/30/2021 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			  -Hide Technical Section
			  -articleLinManageWidSection added
----------------------------------------------------------------------------*/

/*---------------------------- STARTS OF MOD-001 ---------------------------*/
//Hide Technical Section
neocase.form.section("section046026e7ff24a279b6fe").hide();
neocase.form.section("sectionfbdcfa0715d768bb875a").hide();

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
	articleLinManageWidSection('section324c7870cf39e704aa08', 'section0ac3469c39e56c758d64'); 
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").hide();
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getText();
	if(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)'|| subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)'){
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR876").show();
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
};
neocase.form.event.bind('init', onloadForm);
/*---------------------------- ENDS OF MOD-001 ---------------------------*/

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);
