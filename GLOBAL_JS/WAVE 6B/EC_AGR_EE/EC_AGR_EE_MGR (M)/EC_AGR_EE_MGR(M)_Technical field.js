/*************EC_AGR_EE_MGR(M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 20/11/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - Work schedule (new) visibility for BE & LU
            - update manipulateDropdown() with new functionality for work schedule (new) population
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/30/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - For PT only - calculateEmpPercentageNew() and hide salary related fields for EC_Change in working hours
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/13/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - Add mandatory asterisk(*) to Response
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/27/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - Add limitEmpPercentage() to limit employment percentage(new) value till 100
---------------------------------------------------------*/ 

/*---- MOD-001 STARTS ----*/
console.log("EC_AGR_EE_MGR(M)");
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
/*window.mandatoryBasedOnCountryCode = function(){
	// Get the selected value from field: Reason for absence
	
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	
	if(countryCode=="RO" || countryCode=="PT" || countryCode=="BE" || countryCode=="LU" || countryCode=="IT" || countryCode=="ES" || countryCode=="CN"){
		$('#section2c0c57e5f9898ebe4d70').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
		$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('neo-required-message','Resignation letter');
		$('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR509')['elementHTML']['id']).attr('required','required');
    } 
	
};*/

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
            if($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('span.fileinput-display').text() !== ''){
                $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).attr('neo-required-message', '');  
                $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').remove();
            }
            $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn-delete')).on('click', function(){
                if($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('span.fileinput-display').text() == ''){
                    if($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.ValidatorCautionBox').length< 1){
                        $('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
                        $($('#divINTERVENTIONS_EN_COURS_VALEUR509').find('.btn').children()[2]).attr('neo-required-message', ResigLetterLabel);
                    }
                }
            });
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
window.limitEmpPercentage = function(){
    var empPercentageNewField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR249');
    var empPercentageNew = $('#'+empPercentageNewField['elementHTML']['id']);
        empPercentageNewLabel = $.trim(empPercentageNewField.label().split(':')[0]);
    if(parseFloat(empPercentageNew.val()) > 100){
        if(empPercentageNew.closest('div').find('.errMsg').length< 1){
            empPercentageNew.closest('div').append('<span class="errMsg" style="color: red">'+empPercentageNewLabel+' must not exceed 100%</span>');
        }
        empPercentageNew.val(100);
    }else{
        if(empPercentageNew.closest('div').find('.errMsg').length > 0){
            empPercentageNew.closest('div').find('.errMsg').remove();
        }
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
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').hide();
		}
		
	}
	
};
/*--- Copy Employee Catalog field values to Request Catalog field ---*/
window.copyFields = function () {
    //Copy Planned Absence End Date to Planned Absence End Date
    neocase.form.field('UTILISATEURS$CHAMPU311').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR738');
};
window.disableAllFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE")); //disbale Topic
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); //disbale subtopic
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR924")); //disbale Company moving to
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927")); //disbale Country moving to
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR738")); //disable Planned absence end date
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR738')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
};

window.setPopups = function(){
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");
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
/*----------------- calculate Employment percentage for PT only -----------------*/
window.calculateEmpPercentageNew = function() {
	var weeklyWorkHours = parseFloat(neocase.form.field('UTILISATEURS$CHAMPU184').getValue());
	var weeklyWorkHoursNew = parseFloat(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR57').getValue());
    var empPercentageNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR249');
    var countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue(),
        subTopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
	//Employment percentage (new) =  ROUND((Weekly work hours(new) * 100) / Weekly working hours, 2)
	if(countryISOCode == 'PT' && subTopic == '2968'){
        if(weeklyWorkHoursNew) {
			if (weeklyWorkHours){
				if (isNaN(weeklyWorkHoursNew)) {
					weeklyWorkHoursNew = 0;
				}
				if (isNaN(weeklyWorkHours)) {
					weeklyWorkHours = 0;
				}
                var empPercentageNewVal = ((weeklyWorkHoursNew * 100)/weeklyWorkHours).toFixed(2);
                //empPercentageNew.setValue(n);
                $('#'+empPercentageNew['elementHTML']['id']).val(empPercentageNewVal);
                limitEmpPercentage();
			}
            else{
                console.log("No value present");
            }
	    }
    }
   
};
/*----------------- calculate annual Salary Prorated -----------------*/
window.calculateAnnualSalProrated = function() {
	
	var annualSalProNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR78');
	var annualSalActualFTENew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76');
	var empPercentage = neocase.form.field('UTILISATEURS$CHAMPU248').getValue();
	var empPercentageNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR249').getValue();
	//Annual salary prorated  (new) =If Employment percentage (new) is NOT empty ROUND((Annual salary at actual FTE (new) * Employment percentage (new)) / 100, 2) else ROUND((Annual salary at actual FTE (new) * Employment percentage) / 100, 2)
	
	if(annualSalActualFTENew) {
        if (empPercentageNew != ''){
			if (annualSalProNew){
				var annualSalActualFTENewVal = parseFloat(annualSalActualFTENew.getValue());
                var empPercentageNewValue = parseFloat(empPercentageNew);
				if (isNaN(annualSalActualFTENewVal)) {
					annualSalActualFTENewVal = 0;
				}
				if (isNaN(empPercentageNewValue)) {
					empPercentageNewValue = 0;
				}
				annualSalProNew.setValue(((annualSalActualFTENewVal * empPercentageNewValue)/100).toFixed(2));
			}
			
		}
        else if (empPercentage!= ''){
			if (annualSalProNew){
				var annualSalActualFTENewVal1 = parseFloat(annualSalActualFTENew.getValue());
                var empPercentageValue = parseFloat(empPercentage);
				if (isNaN(annualSalActualFTENewVal1)) {
					annualSalActualFTENewVal1 = 0;
				}
				if (isNaN(empPercentageValue)) {
					empPercentageValue = 0;
				}
				annualSalProNew.setValue(((annualSalActualFTENewVal1 * empPercentageValue)/100).toFixed(2));
			}
        }
        else{
            console("No value present");
        }
		
	}
};

window.manipulateDropdowns = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue(),
        reasonOfAbsence = formulaire.INTERVENTIONS_EN_COURS$VALEUR732;
    var prevVal = reasonOfAbsence.value;
	console.log(prevVal);
    if(subtopic == '2997'){
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            for (var m = reasonOfAbsence.length - 1; m >= 0 ; m--) {
                if (reasonOfAbsence.options[m].getAttribute('code') !== '0' && reasonOfAbsence.options[m].getAttribute('code') !== '1920' && reasonOfAbsence.options[m].getAttribute('code') !== '1921' && reasonOfAbsence.options[m].getAttribute('code') !== '1922' && reasonOfAbsence.options[m].getAttribute('code') !== '1923' && reasonOfAbsence.options[m].getAttribute('code') !== '1925'){
                    reasonOfAbsence.remove(m);
                }
            }
            reasonOfAbsence.value = prevVal;
        }
        else if(countryIsoCode == 'BE' || countryIsoCode == 'LU'){
            for (var n = reasonOfAbsence.length - 1; n >= 0 ; n--) {
                if (reasonOfAbsence.options[n].getAttribute('code') !== '1928'){
                    reasonOfAbsence.remove(n);
                }
            }
            reasonOfAbsence.value = prevVal;
        }
    }
    else if(subtopic == '2998'){
        if(countryIsoCode == 'BE'){
            for (var o = reasonOfAbsence.length - 1; o >= 0 ; o--) {
                if (reasonOfAbsence.options[o].getAttribute('code') !== '1932' && reasonOfAbsence.options[o].getAttribute('code') !== '1939' && reasonOfAbsence.options[o].getAttribute('code') !== '0'){
                    reasonOfAbsence.remove(o);
                }
            }
            reasonOfAbsence.value = prevVal;
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
    var workScheduleField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR755');
    workSchedule.forEach(function(workScheduleObj){
        if(workScheduleObj.countryCD == countryIsoCode){
            var workScheduleIdArray = (workScheduleObj.workScheduleId).split(',');
            $("#" +workScheduleField['elementHTML']['id']+" > option").each(function(){
                if(workScheduleIdArray.indexOf(this.getAttribute('code')) === -1 && this.value !== ''){
                    $(this).remove();
                }
              });
        }
    });
};
window.sectionVisibilityFunc = function(){
    var countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue(),
        subTopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    
    if(subTopic == "2968" && (countryISOCode == 'LU' || countryISOCode == 'BE')){
        console.log('Work schedule show');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR57').noMandatory();
    }else{
        console.log('Work schedule hide');
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").hide();
    }
    if(subTopic == '2968' && countryISOCode == 'PT'){
        neocase.form.field("UTILISATEURS$CHAMPU168").hide();
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76").hide();
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78").hide();
    }
};
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    neocase.form.field('UTILISATEURS$CHAMPU39').hide();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').hide();
    if(countryIsoCode == 'LU'){
        if(subtopic == '2968'){
            neocase.form.field('UTILISATEURS$CHAMPU39').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').show();
        }
    }
};
/*---- Add mandatory asterisk(*) to Response----*/
window.responseMandateAsterisk = function(){
    var responsePanel = $('.mix-caseForm-panel-response');
    responsePanel.css('position','relative'); // add position relative to make the * absolute
    if(responsePanel.find('.ValidatorCautionBox').length< 1){
        responsePanel.append('<span class="ValidatorCautionBox customAsterisk" style="right: 0;" title="response"></span>');
    }
    $('textarea[id*="response"]').on('blur',function(){
        if($('textarea[id*="response"]').val().length > 0){
            responsePanel.find('.ValidatorCautionBox').remove();
        }else{
            if(responsePanel.find('.ValidatorCautionBox').length< 1){
                responsePanel.append('<span class="ValidatorCautionBox customAsterisk" style="right: 0;" title="response"></span>');
            }
        }
    });    
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }   
};
neocase.form.event.bind("init",launchOnInit);
/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        setTimeout(function () {
			calculateEmpPercentageNew();
        }, 800);
    }
};
window.launchOnloadcomplete = function(){
	var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	console.log(countryCode);
	if(countryCode == "CN"){
		//neocase.form.section("section78f6bcf5798c4dfe4321").show();
		neocase.form.section("section6c4166f1ae9e39f2bf26").show();
	}else{
		neocase.form.section("section6c4166f1ae9e39f2bf26").hide();
	}
	formulaire.question.readOnly = "true";
    launchOnceLoadComplete();
    copyFields();
	disableAllFields();
    sectionVisibilityFunc();
	manipulateDropdowns();
	setPopups();
    partTimeLeaveVisibility();
	mandateResigLetterCountryWise();
	reasonForAbsenceFields();
	responseMandateAsterisk();
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	/*var countryCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
	if(countryCode=="RO" || countryCode=="PT" || countryCode=="BE" || countryCode=="LU" || countryCode=="IT" || countryCode=="ES" || countryCode=="CN"){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR509").getValue() == "") {
			   alert("Please upload resignation letter");
			   return false;
		}
	}*/
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
