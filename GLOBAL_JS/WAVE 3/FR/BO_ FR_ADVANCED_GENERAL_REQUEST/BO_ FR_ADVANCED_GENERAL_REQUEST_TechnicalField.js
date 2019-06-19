//FS_EDC - Technical field BACKOFFICE
/*************************************
V 1.0 - Initial Version
*************************************/
/*************************************
Developer   - SURAJIT DALAL
Date        - 03/10/2017
Change No   - MOD-01
Description - Initial Create
**************************************
*************************************
Developer   - RIYA DUTTA
Date        - 02/23/2018	
Change No   - MOD-02
Description - Bug fixes for Plan C
**************************************/
/**************
 * Hide Sections
 ***************/
//Technical section
neocase.form.section("sectionb0db2555c209c78721f6").hide();

window.noMandatoryFields = function() {
	
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').noMandatory();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').noMandatory();
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').noMandatory();
	
};
window.makeMandatorySomeFields = function() {
	
	noMandatoryFields();
	
	if (neocase.form.field('INTERVENTIONS_EN_COURS$CONDITION').getText() === 'FR_ADVANCED_GENERAL_REQUEST_MGR') {
	
		if ((neocase.form.field('ELEMENTS').getText() === 'Leaver') || (neocase.form.field('ELEMENTS').getText() === 'Sortie des effectifs')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').mandatory("Leaver Option is Mandatory");
		}
		
		if ((neocase.form.field('ELEMENTS').getText() === 'New absence / update / return') || (neocase.form.field('ELEMENTS').getText() === 'Nouvelle absence / modification / retour')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').mandatory("LOA Option is Mandatory");
		}
		if ((neocase.form.field('ELEMENTS').getText() === 'Employment data changes') || (neocase.form.field('ELEMENTS').getText() === 'Changements des données professionnelles')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').mandatory("EDC Option is Mandatory");
		}
	}
	
	if (neocase.form.field('INTERVENTIONS_EN_COURS$CONDITION').getText() === 'FR_ADVANCED_GENERAL_REQUEST_EE__PLAN_C') {
	
		if ((neocase.form.field('ELEMENTS').getText() === 'New absence / update / return') || (neocase.form.field('ELEMENTS').getText() === 'Nouvelle absence / modification / retour')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').mandatory("LOA Option is Mandatory");
		}
		
	}
	
};



window.hideSomeFields = function() {
	
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').hide();	//LOA Option
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').hide();	//EDC Option
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').hide();	// Leaver Option
};

window.hideshowFields = function() {
	
	hideSomeFields();
	
	if (neocase.form.field('INTERVENTIONS_EN_COURS$CONDITION').getText() === 'FR_ADVANCED_GENERAL_REQUEST_MGR') {
	
		if ((neocase.form.field('ELEMENTS').getText() === 'Employment data changes') || (neocase.form.field('ELEMENTS').getText() === 'Changements des données professionnelles')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR376').show();
		}
		if ((neocase.form.field('ELEMENTS').getText() === 'Leaver') || (neocase.form.field('ELEMENTS').getText() === 'Sortie des effectifs')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR377').show();
		}
		if ((neocase.form.field('ELEMENTS').getText() === 'New absence / update / return') || (neocase.form.field('ELEMENTS').getText() === 'Nouvelle absence / modification / retour')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').show();
		}
		
		
	}
	
	if (neocase.form.field('INTERVENTIONS_EN_COURS$CONDITION').getText() === 'FR_ADVANCED_GENERAL_REQUEST_EE__PLAN_C') {
	
		if ((neocase.form.field('ELEMENTS').getText() === 'New absence / update / return') || (neocase.form.field('ELEMENTS').getText() === 'Nouvelle absence / modification / retour')) {
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').show();
		}
		
	}
	
};

/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {

	//hideshowFields();
	//makeMandatorySomeFields();
	
	console.log("asd");
	
	/*
	var subtopic = neocase.form.field('ELEMENTS').elementHTML;
	//subtopic.addEventListener('change', function() { resetAllFieldsForm(); }, false);
	
	var temp = "updateProperty('ELEMENTS');onChangeListValue('ELEMENTS');resetAllFieldsForm();";
	subtopic.setAttribute('onchange', temp);
	*/
	
};

neocase.form.event.bind('loadcomplete', onloadForm);

