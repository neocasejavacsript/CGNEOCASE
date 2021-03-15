/*************FR_AGR_PAYROLL - BO - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 02/12/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
             -Hide Hidden Section
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/25/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - JS to copy and manipulate value in the section Social Security absence
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/07/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - exclude please choose criteria to copy
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 01/14/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - added Bereavement Leave related values in social_security_absence array
----------------------------------------------------------------------------*/ 


/*---- MOD-001 STARS ----*/
//Hide Technical Section
neocase.form.section("sectionb1e81185de7be178f685").hide();
//Hide Hidden Section
neocase.form.section("sectionaa99b8d285a4871dc632").hide();
/*---- MOD-001 ENDS ----*/
window.setSocialSecurityAbsence = function(){
    var social_security_absence = [
        {
            'social_security_absence_reason_HRO_val': 'Sickness',
            'social_security_absence_reason_HRO_val_fr': 'Maladie',
            'social_security_absence_reason_HRO_code': "1755",
            'HRA_Code_Social_Security_Absence_val': 'MAL',
            'HRA_Code_Social_Security_Absence_code': "1747"
        },{
            'social_security_absence_reason_HRO_val': 'Work accident',
            'social_security_absence_reason_HRO_val_fr': 'Accident du travail',
            'social_security_absence_reason_HRO_code': "1756",
            'HRA_Code_Social_Security_Absence_val': 'ATV',
            'HRA_Code_Social_Security_Absence_code': "1748"
        },{
            'social_security_absence_reason_HRO_val': 'Transportation accident',
            'social_security_absence_reason_HRO_val_fr': 'Accident de trajet',
            'social_security_absence_reason_HRO_code': "1757",
            'HRA_Code_Social_Security_Absence_val': 'ATJ',
            'HRA_Code_Social_Security_Absence_code': "1749"
        },{
            'social_security_absence_reason_HRO_val': 'Maternity',
            'social_security_absence_reason_HRO_val_fr': 'Maternité',
            'social_security_absence_reason_HRO_code': "1758",
            'HRA_Code_Social_Security_Absence_val': 'MAT',
            'HRA_Code_Social_Security_Absence_code': "1750"
        },{
            'social_security_absence_reason_HRO_val': 'Paternity new born hospitalisation',
            'social_security_absence_reason_HRO_val_fr': 'Paternité hospitalisation nouveau-né',
            'social_security_absence_reason_HRO_code': "1759",
            'HRA_Code_Social_Security_Absence_val': 'PAA',
            'HRA_Code_Social_Security_Absence_code': "1751"
        },{
            'social_security_absence_reason_HRO_val': 'Paternity',
            'social_security_absence_reason_HRO_val_fr': 'Paternité',
            'social_security_absence_reason_HRO_code': "1760",
            'HRA_Code_Social_Security_Absence_val': 'PAT',
            'HRA_Code_Social_Security_Absence_code': "1752"
        },{
            'social_security_absence_reason_HRO_val': 'Adoption',
            'social_security_absence_reason_HRO_val_fr': 'Adoption',
            'social_security_absence_reason_HRO_code': "1761",
            'HRA_Code_Social_Security_Absence_val': 'ADO',
            'HRA_Code_Social_Security_Absence_code': "1753"
        },{
            'social_security_absence_reason_HRO_val': 'Therapeutic part-time',
            'social_security_absence_reason_HRO_val_fr': 'Temps partiel thérapeutique',
            'social_security_absence_reason_HRO_code': "1762",
            'HRA_Code_Social_Security_Absence_val': 'ZZZ',
            'HRA_Code_Social_Security_Absence_code': "1754"
        },{
            'social_security_absence_reason_HRO_val': 'Bereavement Leave',
            'social_security_absence_reason_HRO_val_fr': 'Congé de deuil enfant',
            'social_security_absence_reason_HRO_code': "1842",
            'HRA_Code_Social_Security_Absence_val': 'DEU',
            'HRA_Code_Social_Security_Absence_code': "2022"
        }
    ];

    document.getElementById('INTERVENTIONS_EN_COURS$VALEUR939').addEventListener("change", function(){
        var selectedValue = this.value,
            selectedCode = typeof this.options[this.selectedIndex] == 'undefined' ? '' : this.options[this.selectedIndex].getAttribute("code"),
            selectFlag = false,
            htmlLang = document.documentElement.lang;
        social_security_absence.forEach(function(obj) { 
            if(selectedCode == obj['social_security_absence_reason_HRO_code']){
                document.getElementById('INTERVENTIONS_EN_COURS$VALEUR915').value = obj['HRA_Code_Social_Security_Absence_val'];
                selectFlag = true;
            } 
        });
        if(selectFlag !== true){
            document.getElementById('INTERVENTIONS_EN_COURS$VALEUR915').value = htmlLang == 'fr-FR'? 'A QUALIFIER': 'PLEASE CHOOSE...';
        }
    });
};
window.setCERFAType = function(){
    var CERFAType = [
        {
            'type_val':'Initial',
            'type_val_fr':'Initial',
            'type_code':'1763',
            'HRA_Code_val':' ',
            'HRA_Code_code':'1765'
        },
        {
            'type_val':'Extension',
            'type_val_fr':'Prolongation',
            'type_code':'1764',
            'HRA_Code_val':'X',
            'HRA_Code_code':'1766'
        }
    ];
    document.getElementById('INTERVENTIONS_EN_COURS$VALEUR940').addEventListener("change", function(){
        var selectedValue1 = this.value,
            selectedCode1 = typeof this.options[this.selectedIndex] == 'undefined' ? '' : this.options[this.selectedIndex].getAttribute("code"),
            selectFlag1 = false,
            htmlLang1 = document.documentElement.lang;
            CERFAType.forEach(function(obj) { 
            if(selectedCode1 == obj['type_code']){
                document.getElementById('INTERVENTIONS_EN_COURS$VALEUR941').value = obj['HRA_Code_val'];
                selectFlag1 = true;
            } 
        });
        if(selectFlag1 !== true){
            document.getElementById('INTERVENTIONS_EN_COURS$VALEUR941').value = htmlLang1 == 'fr-FR'? 'A QUALIFIER': 'PLEASE CHOOSE...';
        }
    });
};
window.copyANDSetSocialSecurityValues = function(){
    
    if(document.getElementById('INTERVENTIONS_EN_COURS$VALEUR937').value == ''){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR930').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR937');
    }
    if(document.getElementById('INTERVENTIONS_EN_COURS$VALEUR938').value == ''){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR931').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR938');
    }   
    var social_security_absence_reason_HRO = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR939');
    if(social_security_absence_reason_HRO.value == '' || social_security_absence_reason_HRO.options[social_security_absence_reason_HRO.selectedIndex].getAttribute("code") == '0'){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR935').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR939');
    }
    var initial_or_extension_HRO = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR940');
    if(initial_or_extension_HRO.value == '' || initial_or_extension_HRO.options[initial_or_extension_HRO.selectedIndex].getAttribute("code") == '0'){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR936').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR940');
    }
    
    /*var SocialSecurityAbsenceEvent = new Event("change"),
        CERFATypeEvent = new Event("change");
    setTimeout(function(){
        var SocialSecurityAbsenceElem = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR939');
            CERFATypeElem = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR940');
        SocialSecurityAbsenceElem.dispatchEvent(SocialSecurityAbsenceEvent);
        CERFATypeElem.dispatchEvent(CERFATypeEvent);
    }, 1000);*/
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
    /*--++MOD-002--*/
    copyANDSetSocialSecurityValues();
    setSocialSecurityAbsence();
    setCERFAType();
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
