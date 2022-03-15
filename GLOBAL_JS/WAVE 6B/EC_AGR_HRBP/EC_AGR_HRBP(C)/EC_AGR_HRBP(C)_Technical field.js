/* --- EC_AGR_HRBP(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/30/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/03/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - setAllPopups() for all popup link, fillcfs
            - disableCusFields() for all disable fields
            - copyFields()
            - countryWiseSectionVisibility()
            - salConROA()
            - calculateAnnualSalProrated()
            - variablePaySchemeDropdown()
            - mandateResigLetterCountryWise()
-------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 01/05/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - update on countryWiseSectionVisibility() for China specific section
            - Work location section related all codes (popups + disable + copy) removed
-------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/11/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - setEffectiveDateLimit() to set limit for the effective date on Emergency Hire subtopic
-------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - Work schedule (new) visibility for BE & LU
            - update manipulateDropdown() with new functionality for work schedule (new) population
-------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/27/2021 (MM/DD/YYYY)
Change No   - MOD-006
Description - For Subtopic EC_Change in working hours (2968): update - Portugal only
            - workingHoursFieldVisibility() to maintain Work schedule & Return to initial working hours date visibility for PT
            - calculateEmpPercentageNew(),limitEmpPercentage() added  
---------------------------------------------------------
Developer   - Choudhury Shahin
Date	    - 03/01/2021 (MM/DD/YYYY)
Change No   - MOD-007
Description - Add method 'checkQuestion' to replace space by empty
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
//job name
FillCf_Job_code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR44, false);
};
FillCf_Job_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, false);
};
FillCf_Job_Catg = function(fieldValue){
	//fill field
    formulaire.INTERVENTIONS_EN_COURS$VALEUR48.value = fieldValue;
    //disable other fields
	if(formulaire.INTERVENTIONS_EN_COURS$VALEUR48.value == "CSS" || formulaire.INTERVENTIONS_EN_COURS$VALEUR48.value == "DSP"){
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.value = "";
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.disabled = true;
	}else{
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.disabled = false;
	}
};
//Management Popup - ServiceLine - (Old Neocase Function) - OK
// SC_Nm_ServiceLineCode = function (fieldValue) {
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR37.value = fieldValue;
// };
// SC_Nm_ServiceLineDesc = function (fieldValue) {
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR39.value = fieldValue; //MOD-004 ++
//     champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, false);
// };
window.setAllPopups = function () {
    //Popup Base Office Location (Personnel Sub Area Desc.)(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User="); //Personal area
    //Popup link to Job title(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); 
    //Popup link to Job title(new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User="); 
    // popup MyC Supervisor Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");
    // popup Local Approver Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  //Management - Local approver
    // popup Performance Reviewer Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    // popup Training Approver Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User="); //'Training Approver'
    // popup HR Business Partner Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); 
    // popup HR Delivery Partner Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User="); 
    // popup Mentor Name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); 
    // popup Cost Centre / PU Code (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");//'Cost center'
    // popup Organizational Unit Desc. (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR13, "/Custom_Referential/OrgUnit.aspx?Id_User=");//Org unit
    // popup Country moving to/from
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");//Popup for country moving to
    //Popup for service line
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, "/Custom_Referential/ServiceLine.aspx?Id_User=");//Popup for service line
    
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
    //disable Contract Type desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR291")); 
    //disable copy fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182")); // MyC Supervisor
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR182')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"));//HR business partner name
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR427')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR122")); //Base Office Location (Personnel Sub Area Desc.)
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR122')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR739")); //Employment Percentage
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR739')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR512")); //Expected start date
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR512')['elementHTML']['id']).css({'background': "transparent",'color':'#000','padding-left':0});
    //Cost Center
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); //disable Organization unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); //disable Organization unit (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); //disable Cost Center | PU (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR231")); //SBU Desc. (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR232")); //BU Desc. (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR406")); //Default Org Unit Code
    // disable Job Title Desc.
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR46')); 
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR48')); 
    //disable Country moving from/to
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR924")); 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR927")); 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78"));
    //disable service line desc.
    //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR39")); 
};
/*--- Copy Employee Catalog field values to Request Catalog field ---*/
window.copyFields = function () {
    //copy MyC Supervisor Name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
    //copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
    //Copy Worklocation to Base Office Location (Personnel Sub Area Desc.)
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    //Copy Start date to Expected Start Date
    neocase.form.field('UTILISATEURS$CHAMPU47').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR512');
    //Copy Employment Percentage to Employment Percentage
    neocase.form.field('UTILISATEURS$CHAMPU248').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR739');
    //Copy Planned Absence End Date to Planned Absence End Date
    neocase.form.field('UTILISATEURS$CHAMPU311').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR738');
};
/*---------------------------------------------------------------*/
window.countryWiseSectionVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    neocase.fieldInstances = [];    
    try{
		neocase.form.field('UTILISATEURS$CHAMPU297').hide(); //Target Variable Compensation (100%) ARC
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').hide(); //Target Variable Compensation at Actual FTE %
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR748').hide();//Company Transfer date field
        neocase.form.section('section01ee534f26f37ec7ecd5').hide(); //Only for China : Additional Pay
        neocase.form.section('section4b46190382e80df0747b').hide(); //Only for China : Additional Pay : Allowances
        neocase.form.section('sectionf99e166117cf04466a47').hide(); //Note with speciality for China
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
			neocase.form.field('UTILISATEURS$CHAMPU297').show(); //Target Variable Compensation (100%) ARC
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').show();//Target Variable Compensation at Actual FTE %
            neocase.form.section('section40f08ffa22efc26c3d7d').show(); // Only for China - Start date
            neocase.form.section('section427f15229084f1a43748').show(); // Only for China - with organization
            if(subtopic == '2969' || subtopic == '2970' || subtopic == '2971' || subtopic == '2973' || subtopic == '2974' || subtopic == '2977'){//EC_Cost center change ;EC_Work location transfer;EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion;EC_Company Change // +MOD-003
                neocase.form.section('section01ee534f26f37ec7ecd5').show(); //Only for China : Additional Pay
                neocase.form.section('sectionf99e166117cf04466a47').show(); //Note with speciality for China
                if($('#section01ee534f26f37ec7ecd5').find('hr').length > 0){
                    $('<hr>').appendTo('#sectionf99e166117cf04466a47');
                    $('#section01ee534f26f37ec7ecd5').find('hr').remove();
                }
            }
            if(subtopic == '2973' || subtopic == '2974' || subtopic == '2975' || subtopic == '2977'){//EC_Contract change,EC_Promotion/demotion,EC_Pay change,EC_Company change
                neocase.form.section('section4b46190382e80df0747b').show(); //Only for China : Additional Pay : Allowances
            }
            if(subtopic == '2970'){ // EC_Work location transfer
                neocase.form.section('section2230db16f4162c31e868').show(); //Client location
                neocase.form.section('section3f5fe52bb66ddf74f137').hide(); //Variable Pay Scheme details // +MOD-003
            }else if(subtopic == '2977'){ // EC_Company change // +MOD-003
                neocase.form.section('section2230db16f4162c31e868').show(); //Client location
                neocase.form.section('section3f5fe52bb66ddf74f137').show(); //Variable Pay Scheme details
                neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR748').show();//Company Transfer date field
            }
            else{
                neocase.form.section('section2230db16f4162c31e868').hide();//Client location
                neocase.form.section('section3f5fe52bb66ddf74f137').hide(); //Variable Pay Scheme details
            }
            neocase.form.section('section84e881c7b3478d8d1722').hide();//To be visible only for Belgium
        }
        else if(countryIsoCode == 'BE' && countrySAPCode == '12'){
            if(subtopic == '2975' || subtopic == '2973' || subtopic == '2974'){
                neocase.form.section('section84e881c7b3478d8d1722').show();//To be visible only for Belgium
            }
            else{
                neocase.form.section('section84e881c7b3478d8d1722').hide();//To be visible only for Belgium
            }
            neocase.form.section('section40f08ffa22efc26c3d7d').hide();// Only for China - Start date
            neocase.form.section('section2230db16f4162c31e868').hide();//Client location
            neocase.form.section('section427f15229084f1a43748').hide();// Only for China - with organization
            neocase.form.section('section3f5fe52bb66ddf74f137').hide();//Variable Pay Scheme details
        }
        else if(countryIsoCode == 'CZ' || countryIsoCode == 'HU' || countryIsoCode == 'IE' || countryIsoCode == 'IT' ){
            if(subtopic == '2974'){
                neocase.form.section('section3f5fe52bb66ddf74f137').show();//Variable Pay Scheme details

            }else{
                neocase.form.section('section3f5fe52bb66ddf74f137').hide();//Variable Pay Scheme details
            }
            neocase.form.section('section40f08ffa22efc26c3d7d').hide();// Only for China - Start date
            neocase.form.section('section427f15229084f1a43748').hide();// Only for China - with organization
            neocase.form.section('section2230db16f4162c31e868').hide();//Client location
            neocase.form.section('section84e881c7b3478d8d1722').hide();//To be visible only for Belgium
        }
        else{
			neocase.form.field('UTILISATEURS$CHAMPU297').hide(); //Target Variable Compensation (100%) ARC
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').hide(); //Target Variable Compensation at Actual FTE %
            neocase.form.section('section40f08ffa22efc26c3d7d').hide();// Only for China - Start date
            neocase.form.section('section2230db16f4162c31e868').hide();//Client location
            neocase.form.section('section84e881c7b3478d8d1722').hide();//To be visible only for Belgium
            neocase.form.section('section427f15229084f1a43748').hide();// Only for China - with organization
            neocase.form.section('section3f5fe52bb66ddf74f137').hide();//Variable Pay Scheme details
        }
        if(subtopic == '3011'){
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR512').hide();
        }
        if(countryIsoCode == 'PT'){
            if(subtopic == '2992'){ //EC_Resignation
                neocase.form.section('section6067a76d04d3e544c43e').show(); //Please deliver original to Local HR<
                if($('#section6067a76d04d3e544c43e').find('hr').length< 1){
                    $('#section6067a76d04d3e544c43e').append('<hr>');
                    $('#sectiond55a88d2ddb5a409d2d3').find('hr').remove();
                }
            }else{
                neocase.form.section('section6067a76d04d3e544c43e').hide(); //Please deliver original to Local HR<
            }
        }else{
            neocase.form.section('section6067a76d04d3e544c43e').hide();//Please deliver original to Local HR<
        }
        if(subtopic == "2973" && (countryIsoCode == 'LU' || countryIsoCode == 'BE')){
            console.log('Work schedule show');
            neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").show();
        }else{
            console.log('Work schedule hide');
            neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").hide();
        }
    }catch(error){
        console.log(error);
    }
};
window.salConROA = function(){
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue(),
        reasonOfAbsenceVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR732').getValue();
    neocase.fieldInstances = [];
    
    if(subtopic == '2997'){ // Subtopic = EC_LOA paid
        console.log('salConROA function-> subtopic = ' + subtopic + ' reasonOfAbsenceVal = ' + reasonOfAbsenceVal);
        if(reasonOfAbsenceVal == 'Salary Continuance'){ // 1928 - Salary Continuance.
            neocase.form.section('sectione3e0865e54eb4225eb9e').show();
            neocase.form.field('UTILISATEURS$CHAMPU311').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').hide();
            
        }else{
            neocase.form.section('sectione3e0865e54eb4225eb9e').hide();
            neocase.form.field('UTILISATEURS$CHAMPU311').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').show();
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
            console.log("No value present");
        }
		
	}
};
window.variablePaySchemeDropdown = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('variablePaySchemeDropdown' + subtopic);
    var variablePaySchemeDropdownVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR727')['name'];
    if(subtopic == '2974'){ //EC_Promotion/demotion
        if(countryIsoCode !== 'IT' && countrySAPCode !== '15'){
            $('[name="'+variablePaySchemeDropdownVal+'"]').children('option[code="1885"]').remove();
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

window.manipulateDropdowns = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue(),
        payGradeTypeSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR723,
        probationStatusDescSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR132,
        reasonForTerminationSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR730,
        reasonOfAbsence = formulaire.INTERVENTIONS_EN_COURS$VALEUR732;
    for (var j = probationStatusDescSelectobject.length - 1; j >= 0 ; j--) {
        if (probationStatusDescSelectobject.options[j].value !== '' && probationStatusDescSelectobject.options[j].value !== 'Extended' ){
            probationStatusDescSelectobject.remove(j);
        }
    }
    if(countrySAPCode !== '04' && countryIsoCode !== 'ES'){        
        for (var i=0; i< payGradeTypeSelectobject.length; i++) {
            if (payGradeTypeSelectobject.options[i].value == 'ES (Spain only)'){
                payGradeTypeSelectobject.remove(i);
            }
        }
    }
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
        if(countryIsoCode == 'BE' || countryIsoCode == 'LU'){
            for (var o = reasonOfAbsence.length - 1; o >= 0 ; o--) {
                if (reasonOfAbsence.options[o].getAttribute('code') !== '1932' && reasonOfAbsence.options[o].getAttribute('code') !== '1939' && reasonOfAbsence.options[o].getAttribute('code') !== '0'){
                    reasonOfAbsence.remove(o);
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
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    neocase.form.field('UTILISATEURS$CHAMPU39').hide();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').hide();
    if(countryIsoCode == 'LU'){
        if(subtopic == '2968'|| subtopic == '2973'){ // EC_Change in working hours OR EC_contract change
            neocase.form.field('UTILISATEURS$CHAMPU39').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').show();
        }
    }
};
window.setEffectiveDateLimit = function(){
    var today = new Date();
    var day = today.getDay();
    var futureDate = new Date(Number(today)),
        subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue(),
        maxDate = (day == 4) ? (today.getDate() + 4) : ((day == 5) ? (today.getDate() + 4) : ((day == 6) ? (today.getDate() + 3) : (today.getDate() + 2)));
    futureDate.setDate(maxDate);
    var enteredDate = new Date(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').getDate());
    var errorMSG = 'Effective date should be within 2 business days';
    if(subtopic == '3012'){
        $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5')['elementHTML']['id']).datepicker( "option", "maxDate", new Date(futureDate));
        if($('#divINTERVENTIONS_EN_COURS_VALEUR5').find('.limit-set').length<= 0){
            $('#divINTERVENTIONS_EN_COURS_VALEUR5').append('<span class="limit-set" style="color:red;">'+errorMSG+'</span>');
        }
        if(enteredDate.getTime() >= futureDate.getTime()){
            $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5')['elementHTML']['id']).val('');
            alert(errorMSG);
        }
    }
    // else{
    //     $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5')['elementHTML']['id']).datepicker( "option", "maxDate", '');
    //     if($('#sectionafa86caf1d6a3f71fb40').find('.limit-set').length > 0){
    //         $('#sectionafa86caf1d6a3f71fb40').find('.limit-set').remove();
    //     }
    // }
};
window.workingHoursFieldVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    if(countryIsoCode == 'PT' && subtopic == '2968'){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR57').mandatory();
        neocase.form.field('UTILISATEURS$CHAMPU183').show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR380').show();
    }
    else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR57').noMandatory();
        neocase.form.field('UTILISATEURS$CHAMPU183').hide();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR380').hide();
    }
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
window.checkQuestion = function () {
    var question = neocase.form.field('question');
    var trimmedValue = question.elementHTML.value.replaceAll(' ', '');
    if (trimmedValue.length === 0) {
        question.emptyValue();
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
            mandateResigLetterCountryWise();
        }, 800);
    }
};
/**********************************
Launch Javascript on loadcomplete
***********************************/
window.launchOnloadcomplete = function(){
    launchOnceLoadComplete();
    copyFields(); // Copy Employee Catalog field values to Request Catalog field
    setEffectiveDateLimit();
    countryWiseSectionVisibility();
    salConROA();
    variablePaySchemeDropdown();
    manipulateDropdowns();
    partTimeLeaveVisibility();
    workingHoursFieldVisibility();
    console.log('launch load complete');
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function () {
};
neocase.form.event.bind("submit", launchOnSubmit);
