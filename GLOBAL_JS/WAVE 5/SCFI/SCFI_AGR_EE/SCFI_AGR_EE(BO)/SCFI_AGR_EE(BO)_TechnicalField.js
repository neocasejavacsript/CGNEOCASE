/* ------------ SCFI_AGR_EE(BO)_TechnicalField ------------- */

/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/06/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide technical section
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/21/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - copy Base Location current value
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/16/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Popup and fill up on Base Location
            - add popup link to CostCenter|PU and Organisational unit
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/15/2020 (MM/DD/YYYY)
Change No   - MOD-004 
Description - Set minimum date of related start and end date field 
            - Set Temination date & Last working day validation
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/18/2020 (MM/DD/YYYY)
Change No   - MOD-005
Description - Comment out date validation [if fields are editable disable comment out section]
-------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/30/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Field “Last Working Day” will be visible only when reason = Salary Continuance
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Rollback Mod-006
---------------------------------------------------------*/ 


neocase.form.section("sectioncde206789fedba0494b1").hide();

window.copyFunctions = function(){
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
};
/*-------------Set minimum date of related start and end date field--------+MOD-004-----*/
window.setDateLimit = function(startDateField, endDateField){
    var stD,stDate,endD,endDate,nextDay,alertMsg;
    var startDateFieldId = $('[name="'+ neocase.form.field(startDateField)['name']+'"]'),
        endDateFieldId = $('[name="'+ neocase.form.field(endDateField)['name']+'"]'),
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
            alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text()) + ' ' + stD;
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
    endDateFieldId.blur(function(){
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
                alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text()) + ' ' + stD;
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
    var startDateFieldId = $('[name="'+ neocase.form.field(startDateField)['name']+'"]'),
        endDateFieldId = $('[name="'+ neocase.form.field(endDateField)['name']+'"]'),
        today = new Date();
    var errorMsg = '<span style="color:red" class="error-msg-date"> Date should be same or less than the '+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text())+'</span>';
    
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
            alertMsg = "Select '"+$.trim(endDateFieldId.closest('.right').prev('.left').find('label').text())+"' as same date or less than "+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text()) + " " + stD;
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
    
    endDateFieldId.blur(function(){ 
        endD = endDateFieldId.val();
        if(endD != ''){
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';
            if(endDate > stDate){
                endDateFieldId.val('');
                stD = startDateFieldId.val();
                stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD)? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
                if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                    endDateFieldId.after(errorMsg);
                }
                alertMsg = "Select '"+$.trim(endDateFieldId.closest('.right').prev('.left').find('label').text())+"' as same date or less than "+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text()) + " " + stD;
                alert(alertMsg);
            }
        } 
    });
    startDateFieldId.trigger('change');
};
/*---------XXXXXX----Set Temination date & Last working day validation----XXXXXX---------*/
// window.showLwd = function(){
//     var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
//     if(subtopic == '2887'){
//         if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getCode() == '1829' || neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getValue() == 'Salary Continuance'){
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').hide();
//             document.getElementById('sectiona9ba6254e2d280cbfb80').children[0].style.display="none";
//             neocase.form.section('sectiona9ba6254e2d280cbfb80').show();
//             neocase.form.field('UTILISATEURS$CHAMPU311').hide();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').hide();
//         }else{
//             document.getElementById('sectiona9ba6254e2d280cbfb80').children[0].style.display="block";
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').show();
//             neocase.form.section('sectiona9ba6254e2d280cbfb80').hide();
//             neocase.form.field('UTILISATEURS$CHAMPU311').show();
//             neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').show();

//         }
//     }
// };
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    copyFunctions();
    /*if(document.getElementById('section30472c7448462e18d86c').style.display !== 'none'){ // Section: Start/Update leave of absence details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503'); //Fields: 'Absence start date (new) :' , 'Expected return date (new) :'
    }
    if(document.getElementById('sectiona9ba6254e2d280cbfb80').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }*/
    //showLwd();//++MOD-006
};
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
