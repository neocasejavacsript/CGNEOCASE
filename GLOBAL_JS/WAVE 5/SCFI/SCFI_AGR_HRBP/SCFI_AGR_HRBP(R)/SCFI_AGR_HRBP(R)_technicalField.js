/* --- SCFI_AGR_HRBP(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Arnab Guha
Date	    - 10/07/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide Technical section & Hidden Section
-----------------------------------------------------------------------------*/
// hide Technical section
//neocase.form.section("sectione3f2d0f7aeb2f32815fa").hide(); 
checkSectionHide("sectione3f2d0f7aeb2f32815fa");
// hide hidden section
//neocase.form.section("section331b505ade164f67c436").hide();
checkSectionHide("section331b505ade164f67c436");


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
