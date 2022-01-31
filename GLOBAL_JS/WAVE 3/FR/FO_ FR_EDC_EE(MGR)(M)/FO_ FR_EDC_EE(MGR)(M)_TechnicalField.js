//FR_EDC_EE(MGR)(M) - FRONT END - Technical Code
/*---------------------------------------------/
Developer   - Surajit Dalal
Date	    - 07/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Signataire Employeur Nom  (EN = Signer 1 Name) pop-up
---------------------------------------------/
Developer   - Smita Singh
Date	    - 09/28/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Remove the pop up on the field "Signataire Employeur adresse mail (EN = Signer 1 email address)".
----------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description -  make Motif si refus” to be mandatory only if “Decision Manager” is filled with “Refusé” or else editable
-------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/17/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - wfhSubtopicVisibility() added in loadcomplete
-----------------------------------------------**/

//hide technical section
neocase.form.section("section28c441b555191c24c9e1").hide();


FillCf = function(fieldValue,fieldName){
    var msg = "function FillCf : ";

    //properly target field
    if(fieldName.search("VALEUR0") != -1){
        fieldName = fieldName.replace("VALEUR0","VALEUR");
    }
	fieldName = getASPid(fieldName);
    var field = neocase.form.field(fieldName);

    if(field){
		field.setValue(fieldValue);
    }else{
        msg += "field "+fieldName+" not found";
        console.log(msg);
    }
};

/* ------------- MOD-001 ----------------- */
window.setPopups = function(){

//Documents
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438,"/Custom_Referential/employee signer.aspx");	// MOD-004
//popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR439,"/Custom_Referential/employee signer.aspx");	// MOD-004 //MOD-002

};

window.disableFields = function(){

	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"));

	//Documents Fields disable
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR438"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR439"));

};

/* ------------- MOD-001 ----------------- */
window.setRejectionMandate = function(){ // ++MOD-003
    var decManager = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR273').getCode();
    labelReject = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274').label();
    if(decManager == '430'){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274').mandatory();
        if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').find('.ValidatorCautionBox').length< 1){
            $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').append('<span class="ValidatorCautionBox"></span>');
        }
        $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 select').attr('neo-required-message',labelReject);
        $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 select').on('change',function(){
            // console.log(this.selectedIndex);
            if(this.selectedIndex > 0){
                if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').find('.ValidatorCautionBox').length >= 1){
                    $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 .ValidatorCautionBox').remove();
                }
                $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 select').removeAttr('neo-required-message');
            }else{
                if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').find('.ValidatorCautionBox').length< 1){
                    $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').append('<span class="ValidatorCautionBox"></span>');
                }
            }
        });
        enableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR274);
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274').noMandatory();
        if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR274').find('.ValidatorCautionBox').length >= 1){
            $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 .ValidatorCautionBox').remove();
        }
        $('#divFieldINTERVENTIONS_EN_COURS_VALEUR274 select').removeAttr('neo-required-message');
        disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274'));
    }
};

window.wfhSubtopicVisibility = function(){
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    if(subtopic !== 'FR_01-Work from home initial request' && subtopic !== '01-Demande initiale de télétravail'){
        neocase.form.section('section70952d96084fe1234625').hide();//Work from home demand
        neocase.form.section('section9cd57335969261751130').hide();//New work from home addendum article
        neocase.form.section('section77a40d979b141513d007').hide();//Work from home rythm
        if(subtopic == 'FR_02-Work from home suspension' || subtopic == '02-Suspension du télétravail'){//Subtopic : FR_02-Work from home suspension(2519)
            neocase.form.section('section9cd57335969261751130').show();// New work from home addendum article Section
            $('#sectiona87d4d4fced375040c8f').find('hr').remove();//Work from home suspension Section
            if($('#section9cd57335969261751130').find('hr').length< 1){//New work from home addendum article
                $('#section9cd57335969261751130').append('<hr>');//New work from home addendum article
            }
            if($('#section9c1754deb8db686ca728').find('hr').length< 1){//Effective date Section
                $('#section9c1754deb8db686ca728').append('<hr>');
            }
            if($('#sectiona8569a640976984611dc').find('hr').length< 1){//End work from home Section
                $('#sectiona8569a640976984611dc').append('<hr>');
            }
        }
        if(subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){// Subtopic: FR_03-End of suspension(2525)
            neocase.form.section('section9cd57335969261751130').show();// New work from home addendum article Section
            $('#section9c1754deb8db686ca728').find('hr').remove();//Effective date Section
            if($('#section9cd57335969261751130').find('hr').length< 1){//New work from home addendum article
                $('#section9cd57335969261751130').append('<hr>');//New work from home addendum article
            }
            if($('#sectiona87d4d4fced375040c8f').find('hr').length< 1){//Work from home suspension Section
                $('#sectiona87d4d4fced375040c8f').append('<hr>');
            }
            if($('#sectiona8569a640976984611dc').find('hr').length< 1){//End work from home Section
                $('#sectiona8569a640976984611dc').append('<hr>');
            }
        }
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){// Subtopic : FR_04-End work from home(2521)
            neocase.form.section('section9cd57335969261751130').show();// New work from home addendum article Section
            $('#sectiona8569a640976984611dc').find('hr').remove();//End work from home Section
            if($('#section9cd57335969261751130').find('hr').length< 1){//New work from home addendum article
                $('#section9cd57335969261751130').append('<hr>');//New work from home addendum article
            }
            if($('#sectiona87d4d4fced375040c8f').find('hr').length< 1){//Work from home suspension Section
                $('#sectiona87d4d4fced375040c8f').append('<hr>');
            }
            if($('#section9c1754deb8db686ca728').find('hr').length< 1){//Effective date Section
                $('#section9c1754deb8db686ca728').append('<hr>');
            }
        }
    }else{
        neocase.form.section('section70952d96084fe1234625').show();//Work from home demand
        neocase.form.section('section9cd57335969261751130').show();//New work from home addendum article
        neocase.form.section('section77a40d979b141513d007').show();//Work from home rythm
        neocase.form.section('section9c1754deb8db686ca728').hide();//Effective date
        $('#section70952d96084fe1234625').find('hr').remove();//Work from home demand
        if($('#section9cd57335969261751130').find('hr').length< 1){//New work from home addendum article
            $('#section9cd57335969261751130').append('<hr>');//New work from home addendum article
        }
    }
	neocase.form.section('sectiona87d4d4fced375040c8f').hide();//Work from home suspension
    neocase.form.section('sectiona8569a640976984611dc').hide();//End work from home
    if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail' || subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail' || subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){
        neocase.form.section('section9c1754deb8db686ca728').show();//Effective date
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){
            neocase.form.section('sectiona8569a640976984611dc').show();//End work from home
        }
        if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail'){
            neocase.form.section('sectiona87d4d4fced375040c8f').show();//Work from home suspension

        }

    }
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

    neocase.form.section('sectiona2e40fb2909aa3b1bb4a').hide();

    setPopups();		// MOD-001
    disableFields();	// MOD-001
    setRejectionMandate();// ++MOD-003
};
neocase.form.event.bind("init",launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
	
    wfhSubtopicVisibility();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
