/* --- SCFI_AGR_MGR(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/07/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide Technical section & Hidden Section
-----------------------------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section550460fcf10a3fbc2f45").hide();
// hide hidden section
neocase.form.section("section581d27eda7446c464ab0").hide();


/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function () {
};
neocase.form.event.bind("init", launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);

/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { };
neocase.form.event.bind("submit", launchOnSubmit);
