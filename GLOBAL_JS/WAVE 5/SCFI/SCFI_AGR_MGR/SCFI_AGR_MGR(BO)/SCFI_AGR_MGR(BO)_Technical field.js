//SCFI_AGR_MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Popup link generate for Company Moving-to
-------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/07/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Contract End date (new) to be hidden if contract type (new) is permanent ; function is called from Contract type (new) field
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
Date	    - 10/01/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Field “Last Working Day” will be visible only when reason = Salary Continuance
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Termination details section will be visible and Termination Date field will be renamed as Planned termination date if reason = Salary Continuance
---------------------------------------------------------*/  

//hide technical section
neocase.form.section("section2f6123534cd0910a1d30").hide();	
//Hide tip-text section of Country
neocase.form.section("section2ade4b88aee12a3b91d4").hide();	

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
window.copyFunctions = function() {
	//copy Job Title Desc. value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
    //copy Company value
    neocase.form.field('UTILISATEURS$CHAMPU23').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR507');
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    //copy Base location code (current) value
    neocase.form.field('UTILISATEURS$CHAMPU28').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR120');
    //copy Cost center| PU value
    neocase.form.field('UTILISATEURS$CHAMPU25').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR16');
    //copy Cost Centre / PU Code value
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
    //copy Contract type value
    // neocase.form.field('UTILISATEURS$CHAMPU43').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124');
    neocase.form.field('UTILISATEURS$CHAMPU273').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124'); //18.02.2020
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
   	// copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
	// copy Last day of probation
    neocase.form.field('UTILISATEURS$CHAMPU189').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR133');
    // copy Grade
    neocase.form.field('UTILISATEURS$CHAMPU361').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');	
};
/* ------------- Popup Link ----------------- */
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User="); //Popup for Employee Group/sub-group
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR924, "/Custom_Referential/CountryMoving.aspx?Id_User="); //Popup for country moving to
};
// Contract End date (new) to be hidden if contract type (new) is permanent ; ++MOD-003
window.checkContractType = function(){
    var contractElementsSection = document.getElementById('sectionbb2b914eda0fd8e17284'),
    contractTypeNew = formulaire.INTERVENTIONS_EN_COURS$VALEUR528, // get Contract type (new) field
    codeContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].getAttribute('code'), // get option code for Contract type (new) :
    valueContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].value; // get option value for Contract type (new) :
    if(contractElementsSection != 'none'){
        if(codeContractTypeNew == '1058' || valueContractTypeNew == 'Permanent'){ // if option code is 1058 or value is permanent
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').hide(); // hide Contract end date (new)
        }else{
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').show(); // show Contract end date (new)
        }   
    }
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
var terminationDateOriginalVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').label();
window.showLwd = function(){
    if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getCode() == '1829' || neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getValue() == 'Salary Continuance'){       
        neocase.form.section('sectionf4e8add0494794594e00').show();
        neocase.form.field('UTILISATEURS$CHAMPU311').hide();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').hide();
        $('[for="'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['name']+'"]').text('Planned termination date');
    }else{        
        neocase.form.section('sectionf4e8add0494794594e00').hide();
        neocase.form.field('UTILISATEURS$CHAMPU311').show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').show();
        $('[for="'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['name']+'"]').text(terminationDateOriginalVal);
    }
};
window.tipTextToCountryMoving = function(){
    var stText = $('#section2ade4b88aee12a3b91d4').find('.title').text(),
        ar = stText.split('|'),
        prepText = '<tr class="tip-text-country-moving"><td colspan="2">' ;
    for(var i = 0; i< ar.length; i++){
        prepText += '<span style="width:100%k;color:red;display:block;padding:2.5px 5px">'+ar[i]+'</span>';
    }
    prepText += '</td></tr>';
    if($('#section7e75392fc107714be4ec').find('.content .tip-text-country-moving').length< 1){
        $('#section7e75392fc107714be4ec').find('.content').append(prepText);    
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    setPopups();  
    copyFunctions();
    checkContractType();
    //++MOD-004
    /*if(document.getElementById('sectionfc618230cda31793ae73').style.display !== 'none'){ // Section: Start/Update leave of absence details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503'); //Fields: 'Absence start date (new) :' , 'Expected return date (new) :'
    }
    if(document.getElementById('sectionf4e8add0494794594e00').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }
    if(document.getElementById('section0198994ef733c13139de').style.display !== 'none'){ // Section: Revised termination date
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR598','INTERVENTIONS_EN_COURS$VALEUR599'); //Fields: 'Termination date (new) :','Last working day (new) :'
    }
    if(document.getElementById('section74d572bca7a5c980ae33').style.display !== 'none'){ // Section: Ad hoc report details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374'); //Fields: 'Reporting period start date :' , 'Reporting period end date :'
    }*/
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    if(subtopic == '2887'){
        showLwd();//++MOD-006
    }
    tipTextToCountryMoving();    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
