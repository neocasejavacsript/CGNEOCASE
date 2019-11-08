/* --- ANZ_SGR_PO(C) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section
---------------------------------------------------------
Developer   - Debraj Sarkar
Date	    -  (MM/DD/YYYY)
Change No   - 
Description - Autopopulate subtopic
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section959e3690d38e22e1b8ce").hide();


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);