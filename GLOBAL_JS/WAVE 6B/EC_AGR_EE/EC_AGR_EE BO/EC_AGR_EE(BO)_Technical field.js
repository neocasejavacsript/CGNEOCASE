//EC_AGR_EE - BO - Technical Field
/*---------------------------------------------
Developer   - Ayan Dey
Date	    - 11/24/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/23/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - partTimeLeaveVisibility() added
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - sectionVisibilityFunc() added - Work schedule (new) visibility for BE & LU
---------------------------------------------------------*/ 

//hide technical section
neocase.form.section("section4b793a95c26f1fd30bb9").hide();

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
			console.log("trying to show sectiond3b47526810504216742");
			neocase.form.section("sectiond3b47526810504216742").show();
		}else{
			neocase.form.field("UTILISATEURS$CHAMPU311").show();
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR334").show();
			console.log("trying to hide sectiond3b47526810504216742");
			neocase.form.section("sectiond3b47526810504216742").hide();
		}
		
	}
	
};

window.manipulateDropdowns = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue(),
        reasonOfAbsence = formulaire.INTERVENTIONS_EN_COURS$VALEUR732;

    
    if(subtopic == '2997'){
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            for (var m = reasonOfAbsence.length - 1; m >= 0 ; m--) {
                if (reasonOfAbsence.options[m].getAttribute('code') !== '0' && reasonOfAbsence.options[m].getAttribute('code') !== '1920' && reasonOfAbsence.options[m].getAttribute('code') !== '1921' && reasonOfAbsence.options[m].getAttribute('code') !== '1922' && reasonOfAbsence.options[m].getAttribute('code') !== '1923' && reasonOfAbsence.options[m].getAttribute('code') !== '1925'){
                    reasonOfAbsence.remove(m);
                }
            }
        }
        else if(countryIsoCode == 'BE' || countryIsoCode == 'LU'){
            for (var n = reasonOfAbsence.length - 1; n >= 0 ; n--) {
                if (reasonOfAbsence.options[n].getAttribute('code') !== '1928'){
                    reasonOfAbsence.remove(n);
                }
            }
        }
    }
    else if(subtopic == '2998'){
        if(countryIsoCode == 'BE' || countryIsoCode == 'LU'){
            for (var o = reasonOfAbsence.length - 1; o >= 0 ; o--) {
                if (reasonOfAbsence.options[o].getAttribute('code') !== '1932' && reasonOfAbsence.options[o].getAttribute('code') !== '1939' && reasonOfAbsence.options[o].getAttribute('code') !== '0'){
                    reasonOfAbsence.remove(o);
                }
            }
        }
    }
};

window.generateDocumentButtonDisplay = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
    countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
    elementGenerateButton = document.getElementById('bouton_evenement3537');
    try{
        if(elementGenerateButton !== null){
            if(countryIsoCode == 'PT' || countryIsoCode == 'CN' || countryIsoCode == 'LU' || countryIsoCode == 'BE' || countryIsoCode == 'IE'){
                elementGenerateButton.style.display = 'block';
            }else{
                elementGenerateButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').hide();
    if(countryIsoCode == 'LU'){
        if(subtopic == '2968'){
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').show();
        }
    }
};
window.sectionVisibilityFunc = function(){
    var countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue(),
        subTopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    
    if(subTopic == "2968" && (countryISOCode == 'LU' || countryISOCode == 'BE')){
        console.log('Work schedule show');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").show();
    }else{
        console.log('Work schedule hide');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").hide();
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){	
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
	 generateDocumentButtonDisplay();
	 
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	if( countryCode=="CN"){
		neocase.form.section("sectionea92097af791926325d9").show();
	}else{
		neocase.form.section("sectionea92097af791926325d9").hide();
	}
    sectionVisibilityFunc();
	manipulateDropdowns();
	reasonForAbsenceFields();
    partTimeLeaveVisibility();
	
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);
