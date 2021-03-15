/* --- LC_AGR(R) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 03/10/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
form        - LC_AGR(R)
---------------------------------------------------------*/ 

// hide Technical section
//neocase.form.section("section27ccdb3ef8455f99e9ad").hide();

// hide Technical section
checkSectionHide("section27ccdb3ef8455f99e9ad");
// neocase.form.section("section63510a9b9ac05f626157").hide();


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
