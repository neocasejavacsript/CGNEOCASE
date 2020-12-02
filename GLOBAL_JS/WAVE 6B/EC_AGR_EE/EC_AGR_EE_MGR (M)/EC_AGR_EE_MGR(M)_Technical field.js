/*************LC_AGR_EE_MGR(M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 20/11/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
--------------------------------------------------------------------------*/
/*---- MOD-001 STARTS ----*/
console.log("LC_AGR_EE_MGR(M)");
//Hide Hidden Section
neocase.form.section("section71c50cbc95143123b1f0").hide();
//Hide Technical Section
neocase.form.section("section05562a03952574726a99").hide();

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

/******************************************************************************
* Make Resignation letter field mandatory / no-mandatory based on country code`
*******************************************************************************/
window.mandatoryBasedOnCountryCode = function(){
	// Get the selected value from field: Reason for absence
	
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	
	if(countryCode=="RO" || countryCode=="PT" || countryCode=="BE" || countryCode=="LU" || countryCode=="IT" || countryCode=="ES" || countryCode=="CN"){
		$('#section2c0c57e5f9898ebe4d70').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
		$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('neo-required-message','Resignation letter');
		$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('required','required');
    } 
	
};

/******************************************************************************
* Show / Hide specific fields based on Reason for absence selected value`
*******************************************************************************/
window.reasonForAbsenceFields = function(){
	if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() == "2997"){
		// Get the selected value from field: Reason for absence
		var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR732.value;
		console.log("reasonForAbsenceFields called");
		
		if(requestByEmployee == "Salary Continuance"){
			neocase.form.field("UTILISATEURS$CHAMPU311").hide();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR334").hide();
			console.log("trying to show section86e718b448092d19fb96");
			neocase.form.section("section86e718b448092d19fb96").show();
		}else{
			neocase.form.field("UTILISATEURS$CHAMPU311").show();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR334").show();
			console.log("trying to hide section86e718b448092d19fb96");
			neocase.form.section("section86e718b448092d19fb96").hide();
		}
		
	}
	
};

window.disableAllFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE")); //disbale Topic
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); //disbale subtopic
};
/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
	formulaire.question.readOnly = "true";
	disableAllFields();
	mandatoryBasedOnCountryCode();
	reasonForAbsenceFields();
	
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);


/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	if(countryCode=="RO" || countryCode=="PT" || countryCode=="BE" || countryCode=="LU" || countryCode=="IT" || countryCode=="ES" || countryCode=="CN"){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").getValue() == "") {
			   alert("Please upload resignation letter");
			   return false;
		}
	}
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

/*---- MOD-001 ENDS ----*/
