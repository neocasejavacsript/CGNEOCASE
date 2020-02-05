//SCFI_AGR_HRBP - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------
Developer   - Arnab Guha
Date	    - 11/21/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Copy Fields And disable
---------------------------------------------*/

//hide technical section
neocase.form.section("section29983d06fc785f583e90").hide();	

/* ------------- disable fields ----------------- */
window.disableAllFields = function(){
    disableField(neocase.form.field("UTILISATEURS$CHAMPU40"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU23"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU29"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU28"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU25"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU24"));
    //disableField(neocase.form.field("UTILISATEURS$CHAMPU43"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU152"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU58"));

};

window.setValueToField = function(){
    var fieldValue1 = neocase.form.field('UTILISATEURS$CHAMPU40').getValue();
    var fieldValue2 = neocase.form.field('UTILISATEURS$CHAMPU23').getValue();
    var fieldValue3 = neocase.form.field('UTILISATEURS$CHAMPU29').getValue();
    var fieldValue4 = neocase.form.field('UTILISATEURS$CHAMPU28').getValue();
    var fieldValue5 = neocase.form.field('UTILISATEURS$CHAMPU25').getValue();
    var fieldValue6 = neocase.form.field('UTILISATEURS$CHAMPU24').getValue();
    //var fieldValue7 = neocase.form.field('UTILISATEURS$CHAMPU43').getValue();
    var fieldValue8 = neocase.form.field('UTILISATEURS$CHAMPU152').getValue();
    var fieldValue9 = neocase.form.field('UTILISATEURS$CHAMPU58').getValue();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR45').setValue(fieldValue1);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR507').setValue(fieldValue2);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR122').setValue(fieldValue3);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR120').setValue(fieldValue4);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR16').setValue(fieldValue5);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR14').setValue(fieldValue6);
    // neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR507').setValue(fieldValue7);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR182').setValue(fieldValue8);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR427').setValue(fieldValue9);
};

/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    disableAllFields();
    setValueToField();
    setPopups();    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
