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
    setPopups();    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
