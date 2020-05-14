//PL_AGR_MOBILITY_BO - BACK OFFICE - Technical Code
/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 10/21/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
            - Popup link generate for Country moving to
----------------------------------------------------------------------------*/

//hide technical section
neocase.form.section("section0a452cf3df829cd84377").hide();

/*-----------------------------------MOD_001-----------------------------------------*/

//popup for Country moving to 
FillCf_CountryMovingCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR926.value = fieldValue; //Company Code
};
FillCf_CountryMovingDescription = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR924.value = fieldValue; //Campany Name
};
FillCf_CountryMoving = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR927.value = fieldValue; //Country
};

//Popup links
window.setAllPopups = function () {
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR924, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");//Popup for Employee Group
};

//Disable field
window.disableCusFields = function () {
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR924"));//Disable "country moving to"
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function () {
    setAllPopups();
    disableCusFields();
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
