/* --- EC_AGR_MGR(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/28/2020(MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
-------------------------------------------------------------------------
Developer   - Choudhury Shahin
Date	    - 03/01/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - Add method 'checkQuestion' to replace space by empty
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

/*--- Copy Employee Catalog field values to Request Catalog field ---*/
window.copyFields = function () {
    // copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
    // copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
    // copy Base Office Location (Personnel Sub Area Desc.)(new) to Work Location (new)
    //neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR123').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR735');
    // copy Base Office Location (Personnel Sub Area Desc.) to Work Location 
    //neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR734');
};

window.setAllPopups = function () {
    // popup Work location (new)
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR735, "/Custom_Referential/PersonalArea.aspx?Id_User="); //Work location
    // popup Base Office Location (Personnel Sub Area Desc.)(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User="); //Personal area
    // popup Performance Reviewer Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    // popup HR Business Partner Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); //'HRBP'
    // popup HR Delivery Partner Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User="); //'HRDP'
    // popup Mentor Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); //'Mentor'
    // popup MyC Supervisor Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");//'supervisor'
    // popup Training Approver Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User="); //'Training Approver'
    // popup Local Approver Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  //Management - Local approver
    // popup Cost Centre / PU Code (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");//'Cost center'
    // popup Organizational Unit Desc. (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR13, "/Custom_Referential/OrgUnit.aspx?Id_User=");//Org unit
};
window.disableCusFields = function () {
    //disbale Base Office Location (Personnel Sub Area Desc.)(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); 
    //disbale Company Name (Personnel Area Desc.(new))
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR119")); 
    //disbale performance reviewer
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); 
    //disable "HRBP name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386"));
    //disable "HRDP name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR142"));
    // disable mentor name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR166")); 
    //disable myconnect supervisor (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183")); 
    //disable "Training Approver name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); 
    //disable "Local approver name(new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR286")); 
    //disable copy fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182")); 
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR182')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"));
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR427')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR734"));
    // $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR734')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    //Cost Center
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); //disable Organization unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); //disable Organization unit (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); //disable Cost Center | PU (new)
    
    //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR735")); 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR231")); 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR232")); 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR406")); 
    
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
window.manipulateDropdowns = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue(),
        reasonForTerminationSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR730;

    if(countryIsoCode !== 'CN' && countrySAPCode !== '28'){
        for (var k=0; k< reasonForTerminationSelectobject.length; k++) {
            if (reasonForTerminationSelectobject.options[k].getAttribute('code') == '1909'){
                reasonForTerminationSelectobject.remove(k);
            }
        }
    }
    if(countryIsoCode !== 'IT' && countrySAPCode !== '15'){
        for (var l=0; l< reasonForTerminationSelectobject.length; l++) {
            if (reasonForTerminationSelectobject.options[l].getAttribute('code') == '1910'){
                reasonForTerminationSelectobject.remove(l);
            }
        }
    }
};
window.countryWiseSectionVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    neocase.fieldInstances = [];
    try{
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            neocase.form.section('sectionf3c108636298aa54572a').show();
        }else{
            neocase.form.section('sectionf3c108636298aa54572a').hide();
        }
    }catch(error){
        console.log(error);
    }
};

window.checkQuestion = function () {
    var question = neocase.form.field('question');
    var trimmedValue = question.elementHTML.value.replaceAll(' ', '');
    if (trimmedValue.length === 0) {
        question.emptyValue();
    }
};

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    launchOnceLoadComplete();
    copyFields(); // Copy Employee Catalog field values to Request Catalog field
    countryWiseSectionVisibility();
    manipulateDropdowns();
    console.log('launch load complete');
    
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.submitMethods = function () {
    checkQuestion();
};

neocase.form.event.bind('submit', submitMethods);
