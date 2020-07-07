/* --- SCFI_AGR_HRBP(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/15/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Popup and fill up on Base Location,performance reviewer
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/16/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Set minimum date of related start and end date field
            - Set Temination date & Last working day validation
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/22/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Add 'blur' function for the end dates in 'setTerminationDateLimit' & 'setDateLimit' menthod(if User manually enter the date by typing)
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section37b6e0495886e35199ed").hide();
// hide hidden section
neocase.form.section("section33f1be6929ce3e00b6be").hide();


SC_Nm_SubAreaCode = function (fieldValue) { // Base location code(new) 

    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function (fieldValue) { // Base location code(new) 

    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
FillCf_Job_Desc = function (fieldValue) {
    //Job title new fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};

FillCf_Job_Catg = function (fieldValue) {
    //_Job category default (new) fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR48.value = fieldValue;
};

FillCf_Job_code = function (fieldValue) {
    //Job title code fill field
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
//Cost Center
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
window.setAllPopups = function () {
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); //set popup link to Job title(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); //'HRBP'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); //'220 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");//'230 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User="); //'Training Approver'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  //Management - Local approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/CostCenter.aspx?Id_User="); // set popup for Cost Center | PU(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to
};
window.disableCusFields = function () {
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); //disbale performance reviewer
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); //disbale Job title new
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); //disbale Job category default (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386"));//Disable "HRBP name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR166"));//disable mentor name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183"));//disable myconnect supervisor (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); //Disable "Training Approver name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR286")); //Disable "Local approver name(new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927"));//Disable "country moving to"

    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"));//Disable "HRBP name"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182"));//Disable "MyC Supervisor Name"
    //Cost Center
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); //disable Organization unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); //disable Organization unit (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); //disable Cost Center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR17")); //disable Cost Center | PU code (new)

};

/*--- Copy Employee Catalog field values to Request Catalog field ---*/

window.copyFields = function () {
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
    // copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');

    //neocase.form.field('UTILISATEURS$CHAMPU189').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR133');
};

/*---------------------------------------------------------------*/
/*-------------Set minimum date of related start and end date field--------+MOD-002-----*/
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
    endDateFieldId.blur(function(){ //++MOD-003
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

/*-------------Set Temination date & Last working day validation--------+MOD-002-----*/
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
    endDateFieldId.blur(function(){ //++MOD-003
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
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
    setAllPopups();
    disableCusFields();
   
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
        }, 800);
    }
};
/**********************************
Launch Javascript on loadcomplete
***********************************/
window.launchOnloadcomplete = function(){
    launchOnceLoadComplete();
    copyFields(); // Copy Employee Catalog field values to Request Catalog field
    //++MOD-002
    if(document.getElementById('sectionee9edc7a4f05e9676345').style.display !== 'none'){ // Section: Termination dates
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR220','INTERVENTIONS_EN_COURS$VALEUR221'); //Fields: 'Termination date:','Last working day:'
    }
    if(document.getElementById('sectione3e0865e54eb4225eb9e').style.display !== 'none'){ // Section: Revised termination date
        setTerminationDateLimit('INTERVENTIONS_EN_COURS$VALEUR598','INTERVENTIONS_EN_COURS$VALEUR599'); //Fields: 'Termination date (new) :','Last working day (new) :'
    }
    if(document.getElementById('section1518a65f68a6580ebf2d').style.display !== 'none'){ // Section: Ad hoc report details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374'); //Fields: 'Reporting period start date :' , 'Reporting period end date :'
    }
    console.log('launch load complete');
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function () {
};
neocase.form.event.bind("submit", launchOnSubmit);
