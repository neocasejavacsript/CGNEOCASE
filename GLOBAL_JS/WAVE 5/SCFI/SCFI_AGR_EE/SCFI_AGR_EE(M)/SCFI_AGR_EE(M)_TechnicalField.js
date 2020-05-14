/* --- SCFI_AGR_EE(M)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/12/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Put the question field read only
            - Disable/Enable the submit button depending on the response field
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/16/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - make 'Termination Date' non-empty for Resignation subtopic for manager form review
-----------------------------------------------------------------------------*/
// hide Technical section
neocase.form.section("section5e0395259204b2e8c98d").hide();
// hide hidden section
neocase.form.section("section98cb1650189d72065d0f").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
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
window.launchOnInit = function(){
};
neocase.form.event.bind("init",launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    formulaire.question.readOnly = "true";
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); // disable subtopic
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new)
    
    /*-------MOD-003-------*/
    if(formulaire.INTERVENTIONS_EN_COURS$ELEMENT.value == "3318"){ // if subtopic is 'SCFI_Resignation'
        var terminationDateField = formulaire.INTERVENTIONS_EN_COURS$VALEUR220;
        if(terminationDateField.closest('.bloc').style.display == 'none'){ //if section containing 'Termination Date' is not visible
            terminationDateField.value = terminationDateField.getAttribute('value');
        }
    }
    /*-------/MOD-003-------*/
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
