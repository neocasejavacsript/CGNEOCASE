/* --- PL_AGR_MGR_HRBP(M)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 11/13/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide technical section and HR Area
-----------------------------------------------------------------------------
------------------------------------------------------------------------*/

// hide Technical section
neocase.form.section("sectioneeb86f5a6e3b0b86245e").hide();

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

