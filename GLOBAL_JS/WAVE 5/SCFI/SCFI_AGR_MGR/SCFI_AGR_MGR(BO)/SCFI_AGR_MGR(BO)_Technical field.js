//SCFI_AGR_MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Popup link generate for Company Moving-to
-------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/07/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Contract End date (new) to be hidden if contract type (new) is permanent ; function is called from Contract type (new) field
------------------------------------------------------------------------*/

//hide technical section
neocase.form.section("section2f6123534cd0910a1d30").hide();	
//employee moving to 
FillCf_CountryMovingCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR926.value = fieldValue; //Company Code
};
FillCf_CountryMovingDescription = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR924.value = fieldValue; //Campany Name
};
FillCf_CountryMoving = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR927.value = fieldValue; //Country
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
    // neocase.form.field('UTILISATEURS$CHAMPU43').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124');
    neocase.form.field('UTILISATEURS$CHAMPU273').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124'); //18.02.2020
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
   	// copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
	// copy Last day of probation
    neocase.form.field('UTILISATEURS$CHAMPU189').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR133');
    // copy Grade
    neocase.form.field('UTILISATEURS$CHAMPU361').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');	
};
/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User="); //Popup for Employee Group/sub-group
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR924, "/Custom_Referential/CountryMoving.aspx?Id_User="); //Popup for country moving to
};
// Contract End date (new) to be hidden if contract type (new) is permanent ; ++MOD-003
window.checkContractType = function(){
    var contractElementsSection = document.getElementById('sectionbb2b914eda0fd8e17284'),
    contractTypeNew = formulaire.INTERVENTIONS_EN_COURS$VALEUR528, // get Contract type (new) field
    codeContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].getAttribute('code'), // get option code for Contract type (new) :
    valueContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].value; // get option value for Contract type (new) :
    if(contractElementsSection != 'none'){
        if(codeContractTypeNew == '1058' || valueContractTypeNew == 'Permanent'){ // if option code is 1058 or value is permanent
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').hide(); // hide Contract end date (new)
        }else{
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').show(); // show Contract end date (new)
        }   
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    setPopups();  
    copyFunctions();
    checkContractType();
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
