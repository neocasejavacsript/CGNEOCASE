//SCFI_AGR_MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------*/

//hide technical section
neocase.form.section("section2f6123534cd0910a1d30").hide();	


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
window.copyFunctions = function() {
	//copy Job Title Desc. value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
    //copy Company value
    neocase.form.field('UTILISATEURS$CHAMPU23').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR507');
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    //copy Base location code (current) value
    neocase.form.field('UTILISATEURS$CHAMPU28').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR120');
    //copy Cost center| PU value
    neocase.form.field('UTILISATEURS$CHAMPU25').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR16');
    //copy Cost Centre / PU Code value
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
    //copy Contract type value
    neocase.form.field('UTILISATEURS$CHAMPU43').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124');
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
   	// copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
	// copy Last day of probation
    neocase.form.field('UTILISATEURS$CHAMPU189').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR133');	
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
    copyFunctions()  ;
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
