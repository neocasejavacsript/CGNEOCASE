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
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - setNomenclature() added to add “n°rq_GGID_LASTNAME_Firstname”
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/12/2021 (MM/DD/YYYY)
Change No   - MOD-006
Description - convertTitleToHTML() implemented for BO to convert Title string to HTML format
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/16/2021 (MM/DD/YYYY)
Change No   - MOD-007
Description - populateRequestDetails() implemented for BO to auto-populate Request details for FR_Addendum return, since we can't make request details not mandatory
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/22/2021 (MM/DD/YYYY)
Change No   - MOD-008
Description - Subtopic - FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord) related field visibility maintain & article link to convert into HTML format
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 08/06/2021 (MM/DD/YYYY)
Change No   - MOD-009
Description - Work from home rythm title and section HTML conversion
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/01/2021 (MM/DD/YYYY)
Change No   - MOD-010
Description - populateRequestDetails() updated for BO to auto-populate Request details for FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)(3089), since we can't make request details not mandatory
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/01/2021 (MM/DD/YYYY)
Change No   - MOD-011
Description - visibility of fields managed for WFH medical allowance (3714) & WFH exceptional allowance(3715)
--------------------------------------------------------------------------*/

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
window.setNomenclature = function(){
    var reqNo = neocase.form.field('INTERVENTIONS_EN_COURS$NUMERO').getValue(),
    ggid = neocase.form.field("UTILISATEURS$CHAMPU1").getValue(),
    lastname = neocase.form.field("UTILISATEURS$CHAMPU8").getValue(),
    firstname = neocase.form.field("UTILISATEURS$CHAMPU9").getValue();
    var nomenclature = reqNo + '_' + ggid + '_' + lastname + '_' + firstname;
    var nomenclatureField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR963');
    if(nomenclatureField){
        nomenclatureField.setValue(nomenclature);
    }    
    //disableField(nomenclatureField);
};
/*---------Convert Title string to HTML format-----------*/
window.convertTitleToHTML = function(sectionId){
    //var sectionTitle = neocase.form.section(sectionId).elementHTML.querySelector('a');
    localStorage.removeItem(sectionId);
    var sectionTitle = neocase.form.section(sectionId).elementHTML.querySelector('.title');
    if(localStorage.getItem(sectionId) === null){
        localStorage.setItem(sectionId,sectionTitle.innerText);
    }
    sectionTitle.innerHTML = localStorage.getItem(sectionId);  
};
window.populateRequestDetails = function(){ // ++MOD-007
    var subtopic = document.getElementById('ELEMENTS'),
        htmlLang = document.documentElement.lang;
    var requestDet = (htmlLang == 'fr-FR' ? 'Demande soulevée pour la sous-catégorie : ' : 'Request raised for subtopic: ') + subtopic.options[subtopic.selectedIndex].text;
    if(subtopic.value == '3701' || subtopic.value == '3089'|| subtopic.value == '3715'){
        neocase.form.field('question').setValue(requestDet);
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    populateRequestDetails();// ++MOD-007
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
    setNomenclature();
    convertTitleToHTML('section62aa65d81f1733160643');
    convertTitleToHTML('section5238425f4fed0e13a62f');
    // Work from home rythm title and section HTML conversion ++MOD-009
    convertTitleToHTML('section10c3a43ce2ed89c2febe');
    convertTitleToHTML('section340acfe6789d8a449cfd');
    convertTitleToHTML('section293f4c8f03fbe9ca42ff');
    var wfhRythm = neocase.form.section('section10c3a43ce2ed89c2febe').elementHTML;
    if(wfhRythm.style.display !== 'none'){
        var addTextWFH = wfhRythm.querySelector('.title font');
        wfhRythm.querySelector('.content').prepend(addTextWFH);
        console.log("wfhRythm" + addTextWFH);
    }
    
    var subtopic = document.getElementById('ELEMENTS');
    
    document.getElementById('lblINTERVENTIONS_EN_COURS$VALEUR876').closest('tr').style.display = 'none';
    if(subtopic.value == '3089' || subtopic.value == '3714' || subtopic.value == '3715'){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord),FR_Work from home allowance (on medical recommendation without addendum or > 70%) (3714),WFH exceptional allowances(3715)
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").show();
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR945").hide();
        
    }else{
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR964").hide();
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR945").show();
    }
    if(subtopic.value == '3714'){
        document.getElementById('lblINTERVENTIONS_EN_COURS$VALEUR876').closest('tr').style.display = 'block';
    }
    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
