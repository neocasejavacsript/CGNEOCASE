/* --- EC_AGR_EE(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 11/19/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/04/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Removed prev function mandatoryBasedOnCountryCode() ;
			- Added mandateResigLetterCountryWise() to make Resignation letter mandatory/noMandatory based on country
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/04/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - sectionVisibilityFunc() added
            - Section Visibility for subtopic EC_Change your IRS information(3046) & PT country
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - Work schedule (new) visibility for BE & LU
            - update manipulateDropdown() with new functionality for work schedule (new) population
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
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");
    // //Pop-up work schedule(new)
    // popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR256,"/Custom_Referential/PTWorkSchedule.aspx?Id_User=");	
};

//employee moving to 
FillCf_CountryMovingCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR926.value = fieldValue; //Company Code
};
FillCf_CountryMovingDescription = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR924.value = fieldValue; //Campany Name
};
FillCf_CountryMoving = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR927.value = fieldValue; //Country
};
/*--- Copy Employee Catalog field values to Request Catalog field ---*/
window.copyFields = function () {
    //Copy Planned Absence End Date to Planned Absence End Date
    neocase.form.field('UTILISATEURS$CHAMPU311').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR738');
};
window.disableAllFields = function(){
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new) 
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new) 
    //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR256")); //disbale work schedule
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR924")); //disbale Company moving to
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927")); //disbale Country moving to
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR738")); //disable Planned absence end date
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR738')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
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
window.mandateResigLetterCountryWise = function(){
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
        ResigLetterLabel = $.trim(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").label().split(':')[0]);
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    if(countryIsoCode == 'CN' || countryIsoCode == 'PT' || countryIsoCode == 'RO' ||countryIsoCode == 'BE' ||countryIsoCode == 'LU'){
        if(subtopic == '2992'){
            neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").mandatory(ResigLetterLabel);
            if($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').length< 1){
                $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
                $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).attr('neo-required-message', ResigLetterLabel);
            }
        } 
    }
 
};
$($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[1]).on('change', function () {    
    console.log('Changing...');
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
    ResigLetterLabel = $.trim(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").label().split(':')[0]);
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
        if(countryIsoCode == 'CN' || countryIsoCode == 'PT' || countryIsoCode == 'RO' ||countryIsoCode == 'BE' ||countryIsoCode == 'LU'){
        if(subtopic == '2992'){
            var interval  = setInterval(function() {
                if($($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).val() != '' && $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').length > 0){
                    console.log('File uploaded'+$('.fileinput-display').children().length);
                    $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').remove();
                    $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).removeAttr('neo-required-message');
                    clearInterval(interval);
                }
            }, 1000);
        }
}
    
});
$($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).on('change', function () {    
    console.log('Changing to...');
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
        ResigLetterLabel = $.trim(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").label().split(':')[0]);
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
        if(countryIsoCode == 'CN' || countryIsoCode == 'PT' || countryIsoCode == 'RO' ||countryIsoCode == 'BE' ||countryIsoCode == 'LU'){
        if(subtopic == '2992'){
            if ($($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).val() == '' && $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').length<= 0){
                console.log('File removed');
                if($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').length< 1){
                    $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
                    $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).attr('neo-required-message', ResigLetterLabel);
                }
            }
        }
    }
        
});

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
        if(countryIsoCode == 'BE'){
            for (var o = reasonOfAbsence.length - 1; o >= 0 ; o--) {
                if (reasonOfAbsence.options[o].getAttribute('code') !== '1932' && reasonOfAbsence.options[o].getAttribute('code') !== '1939' && reasonOfAbsence.options[o].getAttribute('code') !== '0'){
                    reasonOfAbsence.remove(o);
                }
            }
        }
        else if(countryIsoCode == 'LU'){ 
            for (var io = reasonOfAbsence.length - 1; io >= 0 ; io--) {
                if (reasonOfAbsence.options[io].getAttribute('code') !== '1937' && reasonOfAbsence.options[io].getAttribute('code') !== '1934' && reasonOfAbsence.options[io].getAttribute('code') !== '1932' && reasonOfAbsence.options[io].getAttribute('code') !== '1939' && reasonOfAbsence.options[io].getAttribute('code') !== '0'){
                    reasonOfAbsence.remove(io);
                }
            }
        }
    }
    var workSchedule = [
        {
            countryCD : 'BE',
            country : 'Belgium',
            workScheduleId : '2477,2478,2479,2482,2483,2484,2485,2486,2487,2488,2489,2491,2492,2493,2497,2498,2499,2505,2507,2508,2509,2510,2511,2512,2513,2514,2515,2516,2517,2518,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2533,2534,2535,2536,2537,2538,2539,2542,2543,2544,2560'
    
        },
        {
            countryCD : 'LU',
            country : 'Luxembourg',
            workScheduleId : '2477,2478,2479,2480,2481,2482,2483,2484,2485,2486,2487,2488,2489,2490,2491,2492,2493,2494,2495,2496,2497,2498,2499,2500,2502,2503,2504,2505,2506,2507,2508,2544,2559'
        }
    ];
    //var workScheduleField = formulaire.INTERVENTIONS_EN_COURS$VALEUR755;
    var workScheduleField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR755');
    workSchedule.forEach(function(workScheduleObj){
        if(workScheduleObj.countryCD == countryIsoCode){
            var workScheduleIdArray = (workScheduleObj.workScheduleId).split(',');
            $("#" +workScheduleField['elementHTML']['id']+" > option").each(function(){
            if(workScheduleIdArray.indexOf(this.getAttribute('code')) === -1 && this.value !== ''){
                $(this).remove();
            }
            });
            // $(workScheduleField.options).each(function() {
            //     if(workScheduleIdArray.indexOf(this.getAttribute('code')) === -1 && this.value !== ''){
            //         console.log($(this));
            //         //$(this).remove();
            //     }
            //   });
        }
    });
};

window.sectionVisibilityFunc = function(){
    var countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue(),
        subTopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    if(countryISOCode == "PT" && subTopic == "2992"){ // EC_Resignation
        neocase.form.section("section5295df95ff46271b92bc").show();
        neocase.form.section("sectionb29c892dc0920896ba21").hide();
    }else if(countryISOCode == "PT" && subTopic == "3046"){ //EC_Change your IRS information
        neocase.form.section("sectionb29c892dc0920896ba21").show();
        neocase.form.section("section5295df95ff46271b92bc").hide();
    }
    else{
        neocase.form.section("section5295df95ff46271b92bc").hide();
        neocase.form.section("sectionb29c892dc0920896ba21").hide();
    }
    
    if(subTopic == "2968" && (countryISOCode == 'LU' || countryISOCode == 'BE')){
        console.log('Work schedule show');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR57').noMandatory();
    }else{
        console.log('Work schedule hide');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").hide();
    }
	
	if(subTopic == "2992" && (countryISOCode == 'LU' || countryISOCode == 'BE')){
        neocase.form.section("section4516c183ff2ba85de343").show();
    }else{
        neocase.form.section("section4516c183ff2ba85de343").hide();
    }
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
    setPopups();
    
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	if(countryCode==""){
		alert("Country code does not exist");
		window.location.replace('/default.aspx?pageid=1226');
	}
   
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
			mandateResigLetterCountryWise();
        }, 800);
    }
};
/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
    launchOnceLoadComplete();
    copyFields();
    disableAllFields();
    sectionVisibilityFunc();
	manipulateDropdowns();
	reasonForAbsenceFields();
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){

};
neocase.form.event.bind("submit",launchOnSubmit);
