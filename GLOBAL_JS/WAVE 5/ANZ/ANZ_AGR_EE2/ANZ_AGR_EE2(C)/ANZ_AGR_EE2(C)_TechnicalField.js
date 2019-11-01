/* --- ANZ_AGR_EE2(C) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/22/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section
            - Auto Generate topic-subtopic
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("sectione9a3594626021556c3b8").hide();


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    setTimeout(function(){
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
    }, 800);
   
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);
