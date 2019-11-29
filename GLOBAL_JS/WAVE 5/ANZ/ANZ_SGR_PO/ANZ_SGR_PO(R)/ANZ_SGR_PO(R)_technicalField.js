/* --- ANZ_SGR_PO(R) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/17/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section; set topic from URL
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("sectiondef6055540430e57f1a4").hide();


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
//     updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
//    setTimeout(updateAndDisableField, 1000,neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);
