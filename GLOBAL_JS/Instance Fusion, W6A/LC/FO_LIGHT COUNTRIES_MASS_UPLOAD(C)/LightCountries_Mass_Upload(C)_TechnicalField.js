/* --- LC_MASS_UPLOAD (C) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 03/06/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Rewriting JS
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section76dc9561bb52f5c6e892").hide();

window.copyValueToField = function (fieldToCopy, field) {
    try {
        neocase.form.field(fieldToCopy).copyValueTo(field);
    } catch (error) {
        console.log(error.message);
    }
};


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    setTimeout(function(){
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
        manageFields();
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').setValue(neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText());
         
    }, 800);
    
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on form load
*****************************/
window.onloadForm = function(){
   
};
ThisForm.Bind('loadcomplete', onloadForm);
