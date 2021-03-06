/* --- SCFI_AGR_EE(MGR)(M)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/01/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Autofill topic and subtopics form URL
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Put the question field read only
            - Disable/Enable the submit button depending on the response field
            - add popup link to CostCenter|PU and Organisational unit
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/15/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - Set minimum date of related start and end date field
            - Set Temination date & Last working day validation
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/22/2020 (MM/DD/YYYY)
Change No   - MOD-005
Description - Add 'blur' function for the end dates in 'setTerminationDateLimit' & 'setDateLimit' menthod(if User manually enter the date by typing)
-----------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/30/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Field “Last Working Day” will be visible and mandatory only when reason = Salary Continuance
-------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Rollback Mod-006
            - Remove reason = Salary Continuance from dropdown
---------------------------------------------------------*/

// hide Technical section
neocase.form.section("section210167cb206f39b59ddc").hide();
// hide hidden section
neocase.form.section("section2ff3f2d51f1f0cbc91ba").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
//CostCenter - 15 17
FillCf_Production_Unit_Code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR15.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
FillCf_Production_Unit_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR17.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
//Production Unit 11 13
FillCf_Org_Unit_Code = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR11.value = fieldValue;
};
FillCf_Org_Unit_Desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR13.value = fieldValue;
};
window.setAllPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/CostCenter.aspx?Id_User="); // set popup for Cost Center | PU(new)    
    //popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR13,"/Custom_Referential/OrgUnit.aspx"); //'Organisational unit'    
};
window.disableCusFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); // disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); // disbale Base location code (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); // disbale Cost center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); // disbale Organization unit (new)
};
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
/*-------------Set minimum date of related start and end date field--------+MOD-004-----*/
window.setDateLimit = function(startDateField, endDateField){
    var stD,stDate,endD,endDate,nextDay,alertMsg;
    var startDateFieldId = $('#'+ neocase.form.field(startDateField)['elementHTML']['id']),
        endDateFieldId = $('#'+ neocase.form.field(endDateField)['elementHTML']['id']),
        today = new Date(),
        errorMsg = '<span style="color:red" class="error-msg-date"> Date should be greater than the start date</span>';
    
    //startDateFieldId.datepicker( "option", "minDate", today);
    //endDateFieldId.datepicker( "option", "minDate", today);
    
    startDateFieldId.change(function(){
        stD = startDateFieldId.val();
        endD = endDateFieldId.val();

        stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
        endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';

        if((endD == '' && stD !== '' && !isNaN(stDate)) || endDate > stDate){
            nextDay = new Date(stDate  + (24 * 60 * 60 * 1000 ));
            endDateFieldId.datepicker( "option", "minDate", nextDay);
        }
        else if(endDate<= stDate){
            endDateFieldId.val('');
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD)? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            nextDay = new Date(stDate  + (24 * 60 * 60 * 1000 ));
            endDateFieldId.datepicker( "option", "minDate", nextDay);
            if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                endDateFieldId.after(errorMsg);
            }
            alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.row').find('label').text()) + ' ' + stD;
            alert(alertMsg);
            
        }
        else{
            endDateFieldId.datepicker( "option", "minDate", '');
            //endDateFieldId.datepicker( "option", "minDate", today);
        }        
    });
    endDateFieldId.change(function(){
        if(endDateFieldId.closest('div').find('.error-msg-date').length  > 0){
            endDateFieldId.closest('div').find('.error-msg-date').remove();
        }
    });
    endDateFieldId.blur(function(){ //++MOD-005
        endD = endDateFieldId.val();
        if(endD != ''){
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';
    
            if(endDate<= stDate){
                endDateFieldId.val('');
                if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                    endDateFieldId.after(errorMsg);
                }
                alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.row').find('label').text()) + ' ' + stD;
                alert(alertMsg);
            }
        }

    });
    startDateFieldId.trigger('change');
};
/*---------XXXXXX----Set minimum date of related start and end date field----XXXXXX---------*/

/*-------------Set Temination date & Last working day validation--------+MOD-004-----*/
window.setTerminationDateLimit = function(startDateField, endDateField){
    var stD,stDate,endD,endDate,nextDay,alertMsg;
    var startDateFieldId = $('#'+ neocase.form.field(startDateField)['elementHTML']['id']),
        endDateFieldId = $('#'+ neocase.form.field(endDateField)['elementHTML']['id']),
        today = new Date();
    var errorMsg = '<span style="color:red" class="error-msg-date"> Date should be same or less than the '+$.trim(startDateFieldId.closest('.row').find('label').text())+'</span>';
    
    //startDateFieldId.datepicker( "option", "minDate", today);
    //endDateFieldId.datepicker( "option", "minDate", today);
    
    startDateFieldId.change(function(){
        stD = startDateFieldId.val();
        endD = endDateFieldId.val();

        stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
        endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';

        if((endD == '' && stD !== '' && !isNaN(stDate)) || endDate<= stDate){
            nextDay = new Date(stDate);
            endDateFieldId.datepicker( "option", "maxDate", nextDay);
        }
        else if(endDate > stDate){
            endDateFieldId.val('');
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD)? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            nextDay = new Date(stDate);
            endDateFieldId.datepicker( "option", "maxDate", nextDay);
            if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                endDateFieldId.after(errorMsg);
            }
            alertMsg = "Select '"+$.trim(endDateFieldId.closest('.row').find('label').text())+"' as same date or less than "+$.trim(startDateFieldId.closest('.row').find('label').text()) + " " + stD;
            alert(alertMsg);
            
        }
        else{
            endDateFieldId.datepicker( "option", "maxDate", '');
            //endDateFieldId.datepicker( "option", "minDate", today);
        }        
    });
    endDateFieldId.change(function(){
        if(endDateFieldId.closest('div').find('.error-msg-date').length  > 0){
            endDateFieldId.closest('div').find('.error-msg-date').remove();
        }
    });
    endDateFieldId.blur(function(){ //++MOD-005
        endD = endDateFieldId.val();
        if(endD != ''){
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';
            if(endDate > stDate){
                endDateFieldId.val('');
                stD = startDateFieldId.val();
                stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD)? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
                nextDay = new Date(stDate);
                endDateFieldId.datepicker( "option", "maxDate", nextDay);
                if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                    endDateFieldId.after(errorMsg);
                }
                alertMsg = "Select '"+$.trim(endDateFieldId.closest('.row').find('label').text())+"' as same date or less than "+$.trim(startDateFieldId.closest('.row').find('label').text()) + " " + stD;
                alert(alertMsg);
                
            }
        } 
    });
    startDateFieldId.trigger('change');
};
/*---------XXXXXX----Set Temination date & Last working day validation----XXXXXX---------*/
// window.showLwd = function(){ // ++MOD-006
//     var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
//     if(subtopic == '2887'){
//         if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getCode() == '1829' || neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getValue() == 'Salary Continuance'){
//             neocase.form.section('section772181f1566c4f646edd').show();
//             document.getElementById('section772181f1566c4f646edd').querySelector('.bloc-header-separator').style.display = 'none';
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').noMandatory();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').hide();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').show();
//             neocase.form.field('UTILISATEURS$CHAMPU311').hide();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').hide();
//         }else{
//             neocase.form.section('section772181f1566c4f646edd').hide();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').hide();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').hide();
//             neocase.form.field('UTILISATEURS$CHAMPU311').show();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').show();
//         }
//     }
// };
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){};
neocase.form.event.bind("init",launchOnInit);
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    formulaire.question.readOnly = "true";
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); // disable subtopic
    setAllPopups();
    disableCusFields();
    /*-------++MOD-004-------*/
    if(document.getElementById('sectione0594f31164773401e4d').style.display !== 'none'){ // Section: Start/Update leave of absence details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503'); //Fields: 'Absence start date (new) :' , 'Expected return date (new) :'
        //showLwd();//++MOD-006
    }
    if(document.getElementById('section772181f1566c4f646edd').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }
    var reasonAbsenceSalCode = $("#"+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517')['elementHTML']['id'] + " option[code='1829']");
    if($(reasonAbsenceSalCode).length > 0){
        $(reasonAbsenceSalCode).remove(); // ++MOD-007
    }
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
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
