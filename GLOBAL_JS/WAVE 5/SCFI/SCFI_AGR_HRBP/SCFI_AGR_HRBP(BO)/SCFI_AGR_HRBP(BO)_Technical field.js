//SCFI_AGR_HRBP - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------*/

//hide technical section
neocase.form.section("section29983d06fc785f583e90").hide();	


window.copyValueToField = function(fieldToCopy, field) {
//     console.log('copyValueTo');
//     console.log(neocase.form.field(fieldToCopy).getValue());
//     console.log(neocase.form.field(field).getValue());

// 	try {
// 		// var fieldToCopyValue = neocase.form.field(fieldToCopy).getValue();
// 		// // var fieldValue = neocase.form.field(field).getValue();

// 		// neocase.form.field(field).setValue(fieldToCopyValue);
// 		neocase.form.field(fieldToCopy).copyValueTo(field);

// 	} catch (error) {
// 		console.log(error.message);
// 	}
};
/* ------------- disable fields ----------------- */
window.disableAllFields = function(){
    //Disable Employee group desc (new)
	// disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR315"));
    // //Disable Employee group code (new)
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR363"));
    // //Disable Employee subgroup desc (new)
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR365"));
    // //Disable Employee subgroup code (new)
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR364"));
    

};






/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    disableField(neocase.form.field("UTILISATEURS$CHAMPU40"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU23"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU29"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU28"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU25"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU24"));
    //disableField(neocase.form.field("UTILISATEURS$CHAMPU43"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU152"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU58"));
    

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
    
    setPopups();    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
