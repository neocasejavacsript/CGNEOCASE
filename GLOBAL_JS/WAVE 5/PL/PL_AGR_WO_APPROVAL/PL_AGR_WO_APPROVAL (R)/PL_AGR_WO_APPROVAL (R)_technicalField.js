/* --- PL_AGR_WO_APPROVAL (R) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 11/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------*/ 

// hide Technical section
//neocase.form.section("sectionb02be3a7974f055f17f2").hide();
checkSectionHide("sectionb02be3a7974f055f17f2");

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
};
neocase.form.event.bind("init",launchOnInit);

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);
