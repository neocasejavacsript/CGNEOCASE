//PL_AGR_WO_APPROVAL - BO - Technical Field
/*---------------------------------------------
Developer   - Ayan Dey
Date	    - 4/12/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------*/

//hide technical section
neocase.form.section("section4d3a383294ea86463cca").hide();	


window.copyValueToField = function(fieldToCopy, field) {

};
/* ------------- disable fields ----------------- */
window.disableAllFields = function(){

};

/* ------------- Popup Link ----------------- */
// window.setPopups = function(){
//     popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
// };


/* function to show / hide or Enable / Disable fields for subtopic: PL_Employee initiated resignation */
window.checkRequestByEmployee = function(){
    
    // Get the selected value from field: I'm requesting on my own
    var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR615.value;
    
    if(requestByEmployee == "Yes"){
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "No";
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR617").removeAttribute("disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR618").setAttribute("disabled", "disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR619").setAttribute("disabled", "disabled");
    } else if(requestByEmployee == "No"){
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "Yes";
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR617").setAttribute("disabled", "disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR618").removeAttribute("disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR618").removeAttribute("disabled");
        
    } else {
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR616").removeAttribute("disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR617").removeAttribute("disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR618").removeAttribute("disabled");
        document.getElementById("INTERVENTIONS_EN_COURS$VALEUR619").removeAttribute("disabled");
    }

};


window.updateReasonForAbsence = function(){
	var absenceType = formulaire.INTERVENTIONS_EN_COURS$VALEUR601.value;
	var selectReasonForAbsence=document.getElementById('INTERVENTIONS_EN_COURS$VALEUR604');
    //var el = document.getElementsByTagName('select')[0];
    // assuming el is not null, select 4th option
    selectReasonForAbsence.selectedIndex = 0;

	if(absenceType == "Paid Leave"){

		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Parental"]').show();
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Maternity Leave"]').show();
        $('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Unpaid Leave"]').hide();
        
	} else if(absenceType == "Unpaid Leave"){

		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Unpaid Leave"]').hide();
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Maternity Leave"]').hide();
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Parental"]').show();

	} else {
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Parental"]').hide();
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Unpaid Leave"]').hide();
		$('[name="INTERVENTIONS_EN_COURS$VALEUR604"]').children('option[value="Maternity Leave"]').hide();
	}
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    //setPopups();    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
