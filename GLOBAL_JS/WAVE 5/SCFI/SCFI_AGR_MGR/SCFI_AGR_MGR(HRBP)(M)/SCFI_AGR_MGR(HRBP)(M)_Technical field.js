/* --- SCFI_AGR_MGR(HRBP)(M)Technical Fields --- */
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
Date	    - 11/13/2018 (MM/DD/YYYY)
Change No   - MOD-007
Description - Put the question field read only
            - Disable/Enable the submit button depending on the response field
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/14/2019 (MM/DD/YYYY)
Change No   - MOD-008
Description - disable copy fields
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/07/2020 (MM/DD/YYYY)
Change No   - MOD-009
Description - Contract End date (new) to be hidden if contract type (new) is permanent ; function is called from loadcomplete
------------------------------------------------------------------------*/
// hide Technical section
neocase.form.section("section37007ba5a4fa1eb20baf").hide();
// hide hidden section
neocase.form.section("sectione295d41b8c7053b5e0e3").hide();

// SC_Nm_SubAreaCode = function (fieldValue) {// Base location code(new)
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
// };
// SC_Nm_SubAreaDesc = function (fieldValue) {// Base location code(new)
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
// };

FillCf_Job_Desc = function (fieldValue) {//Job title new fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};

FillCf_Job_Catg = function (fieldValue) {//_Job category default (new) fill field
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
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); //set popup link to Job title(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); //'HRBP'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); //'220 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");//'230 section management team'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User="); //'Training Approver'
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  //Management - Local approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/CostCenter.aspx?Id_User="); // set popup for Cost Center | PU(new)
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to
};
window.disableCusFields = function () {
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new)
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new)
    // Management team
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); //disbale performance reviewer
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); //disbale Job title new
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); //disbale Job category default (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386"));//Disable "HRBP name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR166"));//disable mentor name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183"));//disable myconnect supervisor (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); //Disable "Training Approver name (new)"
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR286")); //Disable "Local approver name(new)"
    //Cost Center
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); //disable Organization unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); //disable Organization unit (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); //disable Cost Center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR17")); //disable Cost Center | PU code (new)
    //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927"));//Disable "country moving to"
     // disable copied fields
     disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182")); //disable MyConnect supervisor name
     disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427")); //disable HR business partner name
     disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR133")); //disable Last day of probation
 
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
    var tempData = true;

    var possibleElements = $('[id*="' + nameElement + '"]');
        for (var i = 0; i< possibleElements.length; ++i) {
            if (possibleElements[i].localName === "textarea") {
                tempData = checkValueOfField(possibleElements[i].id);
            }
        }
        
    return tempData;
}; 
// Contract End date (new) to be hidden if contract type (new) is permanent ; ++MOD-009
window.checkContractType = function(){
    var contractElementsSection = document.getElementById('section391befec5139532337c0'),
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
/**************************
 * Launch Javascript on init
 ***************************/
// window.launchOnInit = function () {

// };
// neocase.form.event.bind("init", launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {    
    formulaire.question.readOnly = "true";
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); // disable subtopic
    copyFields(); // Copy Employee Catalog field values to Request Catalog field    
    setAllPopups();
    disableCusFields();
    checkContractType();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);


/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () {
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
neocase.form.event.bind("submit", launchOnSubmit);
