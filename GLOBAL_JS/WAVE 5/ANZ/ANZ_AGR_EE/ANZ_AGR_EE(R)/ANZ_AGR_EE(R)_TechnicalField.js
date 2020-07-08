/*************ANZ_AGR_EE - Technical Field Code*************/
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
//neocase.form.section("section0e16413536434a642318").hide();
checkSectionHide("section0e16413536434a642318");
//Hide Hidden Section
//neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	// updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    // setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
 };
neocase.form.event.bind("loadcomplete",launchOnInit);

/*---- MOD-001 ENDS ----*/
