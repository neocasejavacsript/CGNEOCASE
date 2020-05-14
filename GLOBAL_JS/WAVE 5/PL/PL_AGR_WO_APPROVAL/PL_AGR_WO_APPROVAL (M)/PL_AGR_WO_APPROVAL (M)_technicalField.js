/*************PL_FORM_AGR_WO_APPROVAL (M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 11/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
--------------------------------------------------------------------------*/
/*---- MOD-001 STARTS ----*/
//Hide Technical Section
neocase.form.section("sectionb02be3a7974f055f17f2").hide();

/* function to show / hide or Enable / Disable fields for subtopic: PL_Employee initiated resignation */
window.checkRequestByEmployee = function(){
    
    // Get the selected value from field: I'm requesting on my own
    var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR615.value;
    
    if(requestByEmployee == "Yes"){
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "No";
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").setAttribute("disabled", "disabled");
    } else if(requestByEmployee == "No"){
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "Yes";
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").removeAttribute("disabled");
        
    } else {
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").removeAttribute("disabled");
    }

};


window.updateReasonForAbsence = function(){
	var absenceType = formulaire.INTERVENTIONS_EN_COURS$VALEUR601.value;
	var selectReasonForAbsence=document.getElementById('ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604');
	$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').prop('selectedIndex',0);

	if(absenceType == "Paid Leave"){

		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').show();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').show();
        $('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();
        
	} else if(absenceType == "Unpaid Leave"){

		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').show();

	} else {
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').hide();
	}
};


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

	
 };
neocase.form.event.bind("init",launchOnInit);

/*---- MOD-001 ENDS ----*/
