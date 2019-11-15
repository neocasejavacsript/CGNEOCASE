/* --- SCFI_AGR_EE(MGR)(M)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/01/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Autofill topic and subtopics form URL
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Put the question field read only
            - Disable/Enable the submit button depending on the response field
            - add popup link to CostCenter|PU and Organisational unit
----------------------------------------------------------------------------*/
// hide Technical section
neocase.form.section("section210167cb206f39b59ddc").hide();
// hide hidden section
neocase.form.section("section2ff3f2d51f1f0cbc91ba").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
//CostCenter - 15 17
FillCf_Production_Unit_Code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR15.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
FillCf_Production_Unit_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR17.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
window.setAllPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/CostCenter.aspx?Id_User="); // set popup for Cost Center | PU(new)    
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR13,"/Custom_Referential/OrgUnit.aspx"); //'Organisational unit'    
};
window.disableCusFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); // disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); // disbale Base location code (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); // disbale Cost center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); // disbale Organization unit (new)
};
/************************************************
To check if the response is field is empty or not
*************************************************/
window.checkValueOfField = function(fieldId){
    if (!$.trim($("#" + fieldId ).val())) {
            return false;
    }else{
            return true;
    }
};

/*********************************
Get the text area id
*********************************/
window.findTextAreabyID = function(nameElement) {
    var tempData = true,
        possibleElements = $('[id*="' + nameElement + '"]');
        for (var i = 0; i< possibleElements.length; ++i) {
            if (possibleElements[i].localName === "textarea") {
                tempData = checkValueOfField(possibleElements[i].id);
            }
        }
        
    return tempData;
}; 
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){};
neocase.form.event.bind("init",launchOnInit);
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    formulaire.question.readOnly = "true";
    setAllPopups();
    disableCusFields();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
    var againTempData = true;
	againTempData = findTextAreabyID("response");
	if(againTempData)
		{
		//checkForm();
		}
	else{
        alert("Response field is mandatory");
        return false;
    } 
};
neocase.form.event.bind("submit",launchOnSubmit);
