/* --- SCFI_AGR_EE(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section37b6e0495886e35199ed").hide();
// hide hidden section
neocase.form.section("section33f1be6929ce3e00b6be").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new) 
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);