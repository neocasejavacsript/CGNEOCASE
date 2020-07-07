//SCFI_AGR_HRBP - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------
Developer   - Arnab Guha
Date	    - 11/21/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Copy Fields And disable
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/16/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Set minimum date of related start and end date field
            - Set Temination date & Last working day validation
---------------------------------------------------------*/ 

//hide technical section
neocase.form.section("section29983d06fc785f583e90").hide();	

/* ------------- disable fields ----------------- */
window.disableAllFields = function(){
    disableField(neocase.form.field("UTILISATEURS$CHAMPU40"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU23"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU29"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU28"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU25"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU24"));
    //disableField(neocase.form.field("UTILISATEURS$CHAMPU43"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU152"));
    disableField(neocase.form.field("UTILISATEURS$CHAMPU58"));

};

window.setValueToField = function(){
    var fieldValue1 = neocase.form.field('UTILISATEURS$CHAMPU40').getValue();
    var fieldValue2 = neocase.form.field('UTILISATEURS$CHAMPU23').getValue();
    var fieldValue3 = neocase.form.field('UTILISATEURS$CHAMPU29').getValue();
    var fieldValue4 = neocase.form.field('UTILISATEURS$CHAMPU28').getValue();
    var fieldValue5 = neocase.form.field('UTILISATEURS$CHAMPU25').getValue();
    var fieldValue6 = neocase.form.field('UTILISATEURS$CHAMPU24').getValue();
    //var fieldValue7 = neocase.form.field('UTILISATEURS$CHAMPU43').getValue();
    var fieldValue8 = neocase.form.field('UTILISATEURS$CHAMPU152').getValue();
    var fieldValue9 = neocase.form.field('UTILISATEURS$CHAMPU58').getValue();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR45').setValue(fieldValue1);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR507').setValue(fieldValue2);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR122').setValue(fieldValue3);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR120').setValue(fieldValue4);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR16').setValue(fieldValue5);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR14').setValue(fieldValue6);
    // neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR507').setValue(fieldValue7);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR182').setValue(fieldValue8);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR427').setValue(fieldValue9);
    // copy Grade
    neocase.form.field('UTILISATEURS$CHAMPU361').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
};

/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
};
/*-------------Set minimum date of related start and end date field--------+MOD-003-----*/
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
            alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text())+ ' ' + stD;
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

/*-------------Set Temination date & Last working day validation--------+MOD-003-----*/
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
            alertMsg = "Select '"+$.trim(endDateFieldId.closest('.right').prev('.left').find('label').text())+"' as same date or less than "+$.trim(startDateFieldId.closest('.right').prev('.left').find('label').text())+ " " + stD;
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

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    disableAllFields();
    setValueToField();
    setPopups();    
     //++MOD-003
    /*if(document.getElementById('sectionc3397367d0d645e7a862').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }
    if(document.getElementById('sectione8448283e0b2e4d3cc41').style.display !== 'none'){ // Section: Revised termination date
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR598','INTERVENTIONS_EN_COURS$VALEUR599'); //Fields: 'Termination date (new) :','Last working day (new) :'
    }
    if(document.getElementById('sectionf4ebb3ded1a0475ff64f').style.display !== 'none'){ // Section: Ad hoc report details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374'); //Fields: 'Reporting period start date :' , 'Reporting period end date :'
    }*/
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
