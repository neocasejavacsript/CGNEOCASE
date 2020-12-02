/* --- EC_AGR_EE(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 11/19/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------*/ 

// hide Technical section
neocase.form.section("section05562a03952574726a99").hide();
// hide hidden section
neocase.form.section("section71c50cbc95143123b1f0").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    
};
window.disableAllFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new) 
};
window.loadTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic')); 
        }
};

window.loadSubTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){ 
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
		}
	}
};

/******************************************************************************
* Make Resignation letter field mandatory / no-mandatory based on country code`
*******************************************************************************/
window.mandatoryBasedOnCountryCode = function(){
	// Get the selected value from field: Reason for absence
	
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	
	if(countryCode=="RO" || countryCode=="PT" || countryCode=="BE" || countryCode=="LU" || countryCode=="IT" || countryCode=="ES" || countryCode=="CN"){
		
		if($('#section2c0c57e5f9898ebe4d70').find('.ValidatorCautionBox').length<= 3){
			
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509').mandatory("Resignation letter");
			$('#section2c0c57e5f9898ebe4d70').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
			$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('neo-required-message','Resignation letter');
			$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('required','required');
        }
    } else{
		
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509').noMandaroty();
		$('#section2c0c57e5f9898ebe4d70').find('.fileupload').find('.ValidatorCautionBox').remove();
        $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).removeAttr('neo-required-message');
	}
	
};

/******************************************************************************
* Show / Hide specific fields based on Reason for absence selected value`
*******************************************************************************/
window.reasonForAbsenceFields = function(){
	if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() == "2997"){
		// Get the selected value from field: Reason for absence
		var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR732.value;
		
		if(requestByEmployee == "Salary Continuance"){
			neocase.form.field("UTILISATEURS$CHAMPU311").hide();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR334").hide();
			neocase.form.section("section86e718b448092d19fb96").show();
		}else{
			neocase.form.field("UTILISATEURS$CHAMPU311").show();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR334").show();
			neocase.form.section("section86e718b448092d19fb96").hide();
		}
		
		
	}
	
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
    //setPopups();
    //disableAllFields();
   
};
neocase.form.event.bind("init",launchOnInit);

/********************************************
* Launch Javascript only once on loadcomplete
*********************************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        loadTopic();
        setTimeout(function () {
            loadSubTopic();
			manageFields();
        }, 800);
    }
};

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
    launchOnceLoadComplete();
	
	if(neocase.form.field("UTILISATEURS$CHAMPU19").getValue() == "PO"){
		neocase.form.section("section5295df95ff46271b92bc").show();
	}else{
		neocase.form.section("section5295df95ff46271b92bc").hide();
	}
	mandatoryBasedOnCountryCode();
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){

};
neocase.form.event.bind("submit",launchOnSubmit);
