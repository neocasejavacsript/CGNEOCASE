/* --- LC_AGR_EE(R) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 24/11/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------*/ 

// hide Hidden section
neocase.form.section("section71c50cbc95143123b1f0").hide();
// hide Technical section
checkSectionHide("section05562a03952574726a99");

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
