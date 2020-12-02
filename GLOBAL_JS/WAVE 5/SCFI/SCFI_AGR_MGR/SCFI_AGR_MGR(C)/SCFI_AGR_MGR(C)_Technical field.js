/* --- SCFI_AGR_MGR(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location
-----------------------------------------------------------------------------
Developer   - Arnab Guha
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Popup and fill up on Job title (new), Job category default (new) & Job title code new (Hidden section)
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-003
Description - Popup and fill up on Performance reviewer & PERNR Performance reviewer (new)
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/17/2019 (MM/DD/YYYY)
Change No   - MOD-004
Description - Popup and fill up on HR business partner name (new) & PERNR HR business partner (new)
            - Popup and fill up on Local approver name (new) & PERNR Local approver (new)
            - Popup and fill up on Training approver name (new) & PERNR Training approver (new)
-----------------------------------------------------------------------------
Developer   - Arnab Guha
Date	    - 10/17/2019 (MM/DD/YYYY)
Change No   - MOD-005
Description - Popup and fill up on Mentor name (new) & PERNR Mentor (new)
            - Popup and fill up on MyConnect supervisor name (new) & PERNR MyConnect supervisor (new) 
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/30/2019 (MM/DD/YYYY)
Change No   - MOD-006
Description - Popup and fill up cost center|PU related fields
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/01/2019 (MM/DD/YYYY)
Change No   - MOD-007
Description - Autofill topic and subtopics form URL
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/14/2019 (MM/DD/YYYY)
Change No   - MOD-008
Description - disable copy fields
            - popup link for Org unit
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/07/2020 (MM/DD/YYYY)
Change No   - MOD-009
Description - Contract End date (new) to be hidden if contract type (new) is permanent ; function is called from Contract type (new) field
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/15/2020 (MM/DD/YYYY)
Change No   - MOD-010
Description - Set minimum date of related start and end date field
            - Set Temination date & Last working day validation
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/22/2020 (MM/DD/YYYY)
Change No   - MOD-011
Description - For Assignment Inbound/Outbound start date subtopic add validation between effective date/expected end date
            - Add 'blur' function for the end dates in 'setTerminationDateLimit' & 'setDateLimit' menthod(if User manuaaly enter the date by typing)
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/21/2020 (MM/DD/YYYY)
Change No   - MOD-012
Description - Field “Last Working Day” will be visible and mandatory only when reason = Salary Continuance
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/07/2020 (MM/DD/YYYY)
Change No   - MOD-013
Description - Tip-text added to Document section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-014
Description - Termination details section will be visible and Termination Date field will be renamed as Planned termination date if reason = Salary Continuance
---------------------------------------------------------*/ 

// hide Technical section
neocase.form.section("section1882b8598378661e788e").hide();
// hide hidden section
neocase.form.section("sectione295d41b8c7053b5e0e3").hide();

SC_Nm_SubAreaCode = function (fieldValue) {// Base location code(new)
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function (fieldValue) {// Base location code(new)
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};

FillCf_Job_Desc = function (fieldValue) {//Job title new fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};

FillCf_Job_Catg = function (fieldValue) {// Job category default (new) fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR48.value = fieldValue;
};

FillCf_Job_code = function (fieldValue) {//Job title code fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
};
//Management Popup - Reviewer
FillCf_Reviewer_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};
FillCf_Reviewer_LocalID = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};

FillCf_Mentor_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value = fieldValue;
};
FillCf_Mentor_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};
FillCf_Mentor_LocalID = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR168.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR168, false);
};

FillCf_Supervisor_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};

FillCf_Supervisor_LocalID = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};

//Management Popup - Local
FillCf_LocalName_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR286.value = fieldValue;
};
FillCf_LocalName_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR286.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, false);
};
FillCf_LocalName_PersonelNum = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR287.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR287, false);
};
//CostCenter
FillCf_Production_Unit_Code = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR15.value = fieldValue;
};
FillCf_Production_Unit_Desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR17.value = fieldValue;
};
//Production Unit
FillCf_Org_Unit_Code = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR11.value = fieldValue;
};
FillCf_Org_Unit_Desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR13.value = fieldValue;
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
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
    // copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
    // copy Last day of probation
    neocase.form.field('UTILISATEURS$CHAMPU189').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR133');
};

window.setAllPopups = function () {
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); //set popup link to Job title(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); //'HRBP'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); //'220 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");//'230 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User="); //'Training Approver'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  //Management - Local approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/CostCenter.aspx?Id_User=");
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to
};
window.disableCusFields = function () {
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new)
    //Management team
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); //disbale performance reviewer
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); //disbale Job title new
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); //disbale Job category default (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386")); //disable "HRBP name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR166")); //disable mentor name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183")); //disable myconnect supervisor (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); //disable "Training Approver name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR286")); //disable "Local approver name(new)"
    //Cost Center
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); //disable Organization unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); //disable Organization unit (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); //disable Cost Center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR17")); //disable Cost Center | PU code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927"));//Disable "country moving to"
    // disable copy fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182")); 
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR182')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"));
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR427')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR133"));
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR133')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
};
window.loadTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null) {
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
    }
};

window.loadSubTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null) {
        if (neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null) {
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"), getParamFromUrl('subtopic'));
        }
    }
};
// Contract End date (new) to be hidden if contract type (new) is permanent ; ++MOD-009
window.checkContractType = function(){
    var contractTypeNew = formulaire.INTERVENTIONS_EN_COURS$VALEUR528, // get Contract type (new) field
    codeContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].getAttribute('code'), // get option code for Contract type (new) :
    valueContractTypeNew = contractTypeNew.options[contractTypeNew.selectedIndex].value; // get option value for Contract type (new) :
    if(codeContractTypeNew == '1058' || valueContractTypeNew == 'Permanent'){ // if option code is 1058 or value is permanent
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').hide(); // hide Contract end date (new)
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').show(); // show Contract end date (new)
    }
};
/*-------------Set minimum date of related start and end date field--------+MOD-010-----*/
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
    endDateFieldId.blur(function(){ //++MOD-011
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
};
/*---------XXXXXX----Set minimum date of related start and end date field----XXXXXX---------*/

/*-------------Set Temination date & Last working day validation--------+MOD-010-----*/
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
    endDateFieldId.blur(function(){ //++MOD-011
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
};
/*---------XXXXXX----Set Temination date & Last working day validation----XXXXXX---------*/
var terminationDateOriginalVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').label();
window.showLwd = function(){ // ++MOD-012
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
    if(subtopic == '2887'){
        if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getCode() == '1829' || neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getValue() == 'Salary Continuance'){
            neocase.form.section('section35033381ef6ef4eb36ad').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').show();
            neocase.form.field('UTILISATEURS$CHAMPU311').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').hide();
            $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['elementHTML']['id']).closest('.row').find('label').text('Planned termination date:');
            $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['elementHTML']['id']).attr('neo-required-message','Planned termination date :');
        }else{
            neocase.form.section('section35033381ef6ef4eb36ad').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').hide();
            neocase.form.field('UTILISATEURS$CHAMPU311').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').show();
            $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['elementHTML']['id']).closest('.row').find('label').text(terminationDateOriginalVal);
            $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220')['elementHTML']['id']).attr('neo-required-message',terminationDateOriginalVal);
        }
    }
};
window.tipTextTodoc = function(){ // ++MOD-13
    var sectionDocument = $('#sectiond6bf68f83235e802d28e'),
        tipTextDoc = "Please add previous email communication with Mobility/ISOW/etc.";
    if($(sectionDocument).find('.bloc-content .row .row .tip-text').length< 1){
        $(sectionDocument).find('.bloc-content .row .row').append('<div class="col-sm-12 tip-text"><span style="color:red;">'+tipTextDoc+'</span></div>');
    }
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function () {
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
    setAllPopups();
    disableCusFields();
};
neocase.form.event.bind("init", launchOnInit);
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
        }, 800);
    }
};
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    launchOnceLoadComplete();
    copyFields(); // Copy Employee Catalog field values to Request Catalog field
    //++MOD-010
    if(document.getElementById('section10b1ba3a25c94f003bcd').style.display !== 'none'){ // Section: Start/Update leave of absence details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503'); //Fields: 'Absence start date (new) :' , 'Expected return date (new) :'
        showLwd(); //++MOD-012
    }
    if(document.getElementById('section35033381ef6ef4eb36ad').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }
    if(document.getElementById('sectionbeadd0d388dcd1eccb8e').style.display !== 'none'){ // Section: Revised termination date
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR598','INTERVENTIONS_EN_COURS$VALEUR599'); //Fields: 'Termination date (new) :','Last working day (new) :'
    }
    if(document.getElementById('section072d3f39253ab9b233a3').style.display !== 'none'){ // Section: Ad hoc report details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374'); //Fields: 'Reporting period start date :' , 'Reporting period end date :'
    }
    if(document.getElementById('sectionffc3e75f608d65eb5d98').style.display !== 'none' && document.getElementById('section185d40ae088e855570b9').style.display !== 'none'){ // Section: Effective date & Expected end date ++MOD-011
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR5','INTERVENTIONS_EN_COURS$VALEUR445'); //Fields: 'Effective date :' , 'Expected assignment end date :'
    }
    tipTextTodoc(); // ++MOD-13
    console.log('launch load complete');
    
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);

/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { };
neocase.form.event.bind("submit", launchOnSubmit);
