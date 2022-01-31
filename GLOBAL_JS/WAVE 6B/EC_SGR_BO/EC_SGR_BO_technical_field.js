/* --- EC_SGR_BO_Technical Fields --- */

/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/27/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS (Hide Technical Section)
            - Popup & fillCf for the required fields
            - Copy required fields
            - Disable required fields
            - countryWiseSectionVisibility() for section visibility based on Country(China & Portugal)
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/30/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - salConROA() for hide/show some fields & section based on Reason of absence value - Salary continuance
            - calculateAnnualSalProrated() to calculate annual Salary Prorated
            - variablePaySchemeDropdown() for dropdown maintain based on country
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/01/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - sectionShowHide() for the section hide and show containing employee catalog value(to avoid value resetting issue)
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/07/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - generateDocumentButtonDisplay() to display generate document button based on the country
            - manipulateDropdowns() to maintain dropdowns based on country
-----------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 01/19/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - Set Allowances visibility
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/10/2021 (MM/DD/YYYY)
Change No   - MOD-006
Description - showEffectiveDateSection() for the visibility of effective date
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/11/2021 (MM/DD/YYYY)
Change No   - MOD-007
Description - setEffectiveDateLimit() to set limit for the effective date on Emergency Hire subtopic
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/11/2021 (MM/DD/YYYY)
Change No   - MOD-008
Description - partTimeLeaveVisibility() for the visibility of Part time parental leave
-----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/09/2021 (MM/DD/YYYY)
Change No   - MOD-009
Description - subtopicVisibility() to hide the subtopic countrywise
            - Employee group/subgroup popup added 
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/23/2021 (MM/DD/YYYY)
Change No   - MOD-010
Description - partTimeLeaveVisibility() added
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-011
Description - countryWiseSectionVisibility() updated - Work schedule (new) visibility for BE & LU
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/08/2021 (MM/DD/YYYY)
Change No   - MOD-012
Description - Remove Voluntary leaver topic for countries except China 
            - 29//07/2021 : Based on country requirement Voluntary leaver topic added for all
---------------------------------------------------------*/ 

neocase.form.section("section4b793a95c26f1fd30bb9").hide();


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
    // copy for secondment to permanent subtopic related employee details section
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR154').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR153');
};
FillCf_Reviewer_PersonelNum = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
    // copy for secondment to permanent subtopic related employee details section
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR156').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR155');
};
//Management Popup - Mentor
FillCf_Mentor_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value = fieldValue;
};
FillCf_Mentor_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};
FillCf_Mentor_PersonelNum = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR168.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR168, false);
};
//Management Popup - Supervisor
FillCf_Supervisor_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};

FillCf_Supervisor_PersonelNum = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};

//Management Popup - Local approver
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
		// formulaire.INTERVENTIONS_EN_COURS$VALEUR52.value = "";
		// formulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = true;
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.value = "PLEASE CHOOSE...";
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.disabled = true;
	}else{
		//ormulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = false;
		formulaire.INTERVENTIONS_EN_COURS$VALEUR741.disabled = false;
	}
};
// FillCf_Job_Catg_Desc = function(fieldValue){
// 	formulaire.INTERVENTIONS_EN_COURS$VALEUR50.value = fieldValue;
// 	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR50, false);
// };
//Management Popup - ServiceLine - (Old Neocase Function) - OK
// SC_Nm_ServiceLineCode = function (fieldValue) {
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR37.value = fieldValue;
// };
// SC_Nm_ServiceLineDesc = function (fieldValue) {
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR39.value = fieldValue; //MOD-004 ++
//     champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, false);
// };
window.copyValues = function(){
    // copy Work Location (new) from Base Office Location (Personnel Sub Area Desc.)(new)
    //neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR123').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR735');
    // copy emp field 'Cost Center | PU Code' to Specific field 'Cost Centre / PU Code'
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
    // copy Personnel Area Description to Company Name (Personnel Area Desc.)
    neocase.form.field('UTILISATEURS$CHAMPU27').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR285');
    // copy Personnel SubArea Description to Base Office Location (Personnel Sub Area Desc.)
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    // copy Personnel SubArea Description to Work Location
    //neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR734');
    // copy SBU Description to SBU Desc.
    neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR737');
    // copy BU Description to BU Desc.
    neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR736');
    // copy Planned Absence End Date to Planned absence end date
    neocase.form.field('UTILISATEURS$CHAMPU311').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR738');
    // copy Job Name to Job Title Desc.
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
    // copy Local Grade to Local /  Unified Grade
    neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
    // copy Employment percentage to Employment Percentage
    neocase.form.field('UTILISATEURS$CHAMPU248').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR739');
	
	// Copy allowance1 to Language premium field
	neocase.form.field('UTILISATEURS$CHAMPU335').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR749');
	// Copy allowance2 to Special Allowance field
	neocase.form.field('UTILISATEURS$CHAMPU339').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR750');
	// Copy allowance3 to Transport Allowance field
	neocase.form.field('UTILISATEURS$CHAMPU343').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR751');
};
window.setAllPopups = function(){
    //Job Title Desc. (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
    //Contract Type Desc (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
    //Work location
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR735, "/Custom_Referential/PersonalArea.aspx?Id_User=");
    //Personal area-Company Name (Personnel Area Desc.(new)) 
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User=");
    //Management Supervisor
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183,"/Custom_Referential/ManageSupervisor.aspx");
    //Management - Local approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  
    //Management - Performance Reviewer
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154,"/Custom_Referential/ManagerReviewer.aspx");
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR153,"/Custom_Referential/ManagerReviewer.aspx");
    //Management - Training Approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User=");
    //Management - HRBP
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User=");
    //Management - HRDP
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User=");
    //Management - Mentor
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, "/Custom_Referential/ManageMentor.aspx?Id_User="); 
    //Cost center
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");
    //Org unit
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR13, "/Custom_Referential/OrgUnit.aspx?Id_User=");
    //country moving to
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR924, "/Custom_Referential/CountryMoving.aspx?Id_User=");
    //Employee group /sub group
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
    //Popup for service line
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, "/Custom_Referential/ServiceLine.aspx?Id_User=");//Popup for service line
};
window.disableFields = function(){
    // disable Company Name (Personnel Area Desc.)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR285"));
    // disable Base Office Location (Personnel Sub Area Desc.)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR122"));
    // disable 'Cost Centre / PU Code'
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR14"));
    // disable SBU Desc.
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR737"));
    // disable BU Desc.
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR736")); 
    // disable Planned absence end date
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR738")); 
    // disable Job Title Desc.
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR45')); 
    // disable Employment Percentage
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR739')); 
    // disable Work Location
    //disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR734')); 
    // disable Local /  Unified Grade
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR40'));     
};
window.countryWiseSectionVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    neocase.fieldInstances = [];
    try{
        neocase.form.field('UTILISATEURS$CHAMPU297').hide(); //Target Variable Compensation (100%) ARC
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').hide(); //Target Variable Compensation at Actual FTE %
        neocase.form.section('sectionbcd7291503b71806886d').hide();// Service Line section to be displayed only for china
        neocase.form.section('sectionc4f3296eb9e5164a851e').hide();//Note for service line
        neocase.form.section('section9ebef54711e2b82b3524').hide(); //Allowance -additional pay
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
			
			neocase.form.field('UTILISATEURS$CHAMPU297').show(); //Target Variable Compensation (100%) ARC
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').show();//Target Variable Compensation at Actual FTE %
            neocase.form.section('sectionea92097af791926325d9').show();
            neocase.form.section('section44488696b2a7d3bc14f4').hide();
			
            if(subtopic == '2969' || subtopic == '2970' || subtopic == '2971' || subtopic == '2973' || subtopic == '2974' || subtopic == '2977'){ //EC_Cost center change;EC_Work location transfer;EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion;EC_Company change
                neocase.form.section('section9ebef54711e2b82b3524').show();
                // Service Line section to be displayed only for china
                neocase.form.section('sectionbcd7291503b71806886d').show();
                neocase.form.section('sectionc4f3296eb9e5164a851e').show();//Note for service line
            }else if(subtopic == '2973' || subtopic == '2974' || subtopic == '2975' || subtopic =='2977'){
				// Service Line section to be displayed only for china
                neocase.form.section('sectionbcd7291503b71806886d').show();
                neocase.form.section('sectionc4f3296eb9e5164a851e').show();//Note for service line
			}else{
                neocase.form.section('section9ebef54711e2b82b3524').hide();
				
            }
            if(subtopic == '3031'){
                neocase.form.section('sectionf6ce498515a5a965b6e9').show();
            }
            
        }else if(countryIsoCode == 'PT' && countrySAPCode == '19'){
            if(subtopic == '2974' || subtopic == '2973' || subtopic == '2975'){
                neocase.form.section('section44488696b2a7d3bc14f4').show();
            }else{
                neocase.form.section('section44488696b2a7d3bc14f4').hide();
            }
            neocase.form.section('sectionea92097af791926325d9').hide();
            neocase.form.section('section9ebef54711e2b82b3524').hide();
        }else{
			neocase.form.field('UTILISATEURS$CHAMPU297').hide(); //Target Variable Compensation (100%) ARC
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').hide(); //Target Variable Compensation at Actual FTE %
            neocase.form.section('sectionea92097af791926325d9').hide();
            neocase.form.section('section44488696b2a7d3bc14f4').hide();
            neocase.form.section('section9ebef54711e2b82b3524').hide();
        }
        if(subtopic == '3011'){
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR512').hide();
        }else{
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR512').show();
        }
        console.log('work schedule');
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
            neocase.form.section('sectionb41dfc8be21dea6aff58').show();
            neocase.form.field('UTILISATEURS$CHAMPU311').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').hide();
            
        }else{
            neocase.form.section('sectionb41dfc8be21dea6aff58').hide();
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
                var empPercentageValue=parseFloat(empPercentage);
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
window.generateDocumentButtonDisplay = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
    countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
    elementGenerateButton = document.getElementById('btncustom924');
    try{
        if(elementGenerateButton !== null){
            if(countryIsoCode == 'PT' || countryIsoCode == 'LU' || countryIsoCode == 'BE' || countryIsoCode == 'IE'){
                elementGenerateButton.style.display = 'block';
            }else{
                elementGenerateButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};
window.manipulateDropdowns = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue(),
        payGradeTypeSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR723,
        reasonForTerminationSelectobject = formulaire.INTERVENTIONS_EN_COURS$VALEUR730,
        reasonOfAbsence = formulaire.INTERVENTIONS_EN_COURS$VALEUR732;


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
    var workScheduleField = 'INTERVENTIONS_EN_COURS$VALEUR755';
    workSchedule.forEach(function(workScheduleObj){
        if(workScheduleObj.countryCD == countryIsoCode){
            var workScheduleIdArray = (workScheduleObj.workScheduleId).split(',');
            $("[name='" +workScheduleField+"'] > option").each(function(){
                if(workScheduleIdArray.indexOf(this.getAttribute('code')) === -1 && this.value !== ''){
                    //console.log(this.getAttribute('code'));
                    $(this).remove();
                }
              });
        }
    });
};
window.showJobDetailsSection = function(){    
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2971' || neocase.form.field('ELEMENTS').getValue() === '2973' || neocase.form.field('ELEMENTS').getValue() === '2974'){ // EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion
        neocase.form.section("section2239e1c460c4b3db0ada").show();
    }else{
        neocase.form.section("section2239e1c460c4b3db0ada").hide();
    }
};
window.showGradeDetailsSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2971' || neocase.form.field('ELEMENTS').getValue() === '2973' || neocase.form.field('ELEMENTS').getValue() === '2974'){ // EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion
        neocase.form.section("section0e6c0fd578bb11fdfc84").show();
    }else{
        neocase.form.section("section0e6c0fd578bb11fdfc84").hide();
    }
};
window.showWorkingHoursDetailsSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2973'){ //EC_Contract change
        neocase.form.section("section3a57f97323a1b1c24e09").show();
    }else{
        neocase.form.section("section3a57f97323a1b1c24e09").hide();
    }
};
window.showPaySection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2974' || neocase.form.field('ELEMENTS').getValue() === '2973' || neocase.form.field('ELEMENTS').getValue() === '2975'){ //EC_Promotion/demotion;EC_Contract change;EC_Pay change
        neocase.form.section("sectionb0dd56a45df23cc39163").show();
    }else{
        neocase.form.section("sectionb0dd56a45df23cc39163").hide();
    }
};
window.showManagementTeamSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2967' || neocase.form.field('ELEMENTS').getValue() === '2969' || neocase.form.field('ELEMENTS').getValue() === '2973'){ //EC_Change in management team;EC_Cost center change;EC_Contract change
        neocase.form.section("section84df6679880dd6e083a2").show();
    }else{
        neocase.form.section("section84df6679880dd6e083a2").hide();
    }
};
window.showOrganisationUnitSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2969' || neocase.form.field('ELEMENTS').getValue() === '2970' || neocase.form.field('ELEMENTS').getValue() === '2973' || neocase.form.field('ELEMENTS').getValue() === '2974'|| neocase.form.field('ELEMENTS').getValue() === '2977'){ //EC_Cost center change;EC_Work location transfer;EC_Contract change;EC_Promotion/demotion;EC_Reorganization (MU);EC_Company change // Temporarily removed: neocase.form.field('ELEMENTS').getValue() === '3015' from above condition
        neocase.form.section("sectionaf2e5f8cec3f77e90188").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR119').mandatory();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR119').noMandatory();
        neocase.form.section("sectionaf2e5f8cec3f77e90188").hide();
    }
};
window.showTerminationDateSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2963'){ //EC_Assignment inbound end
        neocase.form.section("sectionff5754960ae6130842dd").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR599').mandatory();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR599').noMandatory();
        neocase.form.section("sectionff5754960ae6130842dd").hide();
    }
};
window.showLastWorkingDaySection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '3005' || neocase.form.field('ELEMENTS').getValue() === '2992' || neocase.form.field('ELEMENTS').getValue() === '2994' || neocase.form.field('ELEMENTS').getValue() === '2997' || neocase.form.field('ELEMENTS').getValue() === '3018'){ //EC_Change in last working day;EC_Resignation;EC_Involuntary leaver;EC_Retirement;EC_LOA paid
        neocase.form.section("sectionb41dfc8be21dea6aff58").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').mandatory();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').noMandatory();
        neocase.form.section("sectionb41dfc8be21dea6aff58").hide();
    }
};
window.showLOADetailsSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2997' || neocase.form.field('ELEMENTS').getValue() === '2998'){// EC_LOA paid;EC_LOA unpaid
        neocase.form.section("section3075018341bd1efb957b").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR333').mandatory();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').mandatory();

    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR333').noMandatory();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').noMandatory();

        neocase.form.section("section3075018341bd1efb957b").hide();
    }
};
window.showFixedTermContactSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2972' || neocase.form.field('ELEMENTS').getValue() === '3019'){ //EC_Fixed term contract extension;EC_End of fix-term contract
        neocase.form.section("section563353c95e2f168176a4").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').mandatory();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').noMandatory();
        neocase.form.section("section563353c95e2f168176a4").hide();
    }
};
window.showEffectiveDateSection = function(){
    neocase.fieldInstances = [];
    var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getValue(),
        subtopic = neocase.form.field('ELEMENTS').getValue();
    if(topic == '2730' || subtopic == '3081'|| subtopic == '3000' || subtopic == '3006' || subtopic == '3012' || subtopic == '3007' || subtopic == '3008' || subtopic == '3009' || subtopic == '3010' || subtopic == '3014' || subtopic == '2967' || subtopic == '2969' || subtopic == '2970' || subtopic == '2971' || subtopic == '2972' || subtopic == '2973' || subtopic == '2974' || subtopic == '2975' || subtopic == '2977' || subtopic == '2961' || subtopic == '2964'|| subtopic == '3017' || subtopic == '2999' || ( subtopic === '2996' && topic === '2561')){
            neocase.form.section("sectionafa86caf1d6a3f71fb40").show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory();
    }else { 
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').noMandatory();
        neocase.form.section("sectionafa86caf1d6a3f71fb40").hide();
    }
};
window.setEffectiveDateLimit = function(){
    var today = new Date();
    var day = today.getDay();
    var futureDate = new Date(Number(today));
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    maxDate = (day == 4) ? (today.getDate() + 4) : ((day == 5) ? (today.getDate() + 4) : ((day == 6) ? (today.getDate() + 3) : (today.getDate() + 2)));
    futureDate.setDate(maxDate);
    var enteredDate = new Date(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').getDate());
    var errorMSG = 'Effective date should be within 2 business days';
    if(subtopic == '3012'){
        $("[name='INTERVENTIONS_EN_COURS$VALEUR5']").datepicker( "option", "maxDate", new Date(futureDate));
        if($('#sectionafa86caf1d6a3f71fb40').find('.limit-set').length<= 0){
            $('#sectionafa86caf1d6a3f71fb40').append('<span class="limit-set" style="color:#0070c0;font-weight: 600;">'+errorMSG+'</span>');
        }
        if(enteredDate.getTime() >= futureDate.getTime()){
            $("[name='INTERVENTIONS_EN_COURS$VALEUR5']").val('');
            alert(errorMSG);
        }
    }else{
        $("[name='INTERVENTIONS_EN_COURS$VALEUR5']").datepicker( "option", "maxDate", '');
        if($('#sectionafa86caf1d6a3f71fb40').find('.limit-set').length > 0){
            $('#sectionafa86caf1d6a3f71fb40').find('.limit-set').remove();
        }
    }
};
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').hide();
    if(countryIsoCode == 'LU'){
        if(subtopic == '2968' || subtopic == '2973'){
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').show();
        }
    }
};
window.subtopicVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    if(countryIsoCode !== 'CN'){// Subtopic : Company change, company change (MU)
        console.log('subtopicVisibility1'+countryIsoCode);
        $('#ELEMENTS').children('option[value="2977"]').remove();
        $('#ELEMENTS').children('option[value="3031"]').remove();
        //$('#MOTSCLES').children('option[value="2776"]').remove(); //++MOD-012
    }
    if(countryIsoCode !== 'RO'){// Change in operational team(MU) - Visible only Romania t
        console.log('subtopicVisibility2'+countryIsoCode);
        $('#ELEMENTS').children('option[value="3016"]').remove(); 
    }
    // if(countryIsoCode !== 'PT'){ //EC_Secondment to permanent subtopic visible only for Portugal
    //     console.log('subtopicVisibility3'+countryIsoCode);
    //     $('#ELEMENTS').children('option[value="3081"]').remove();
    // }
    $('#ELEMENTS').children('option[value="3081"]').remove();//Later on it should be comment out : For the time being it is hidden till business' confirm requirement
    
};
window.sectionShowHide = function(){
    showJobDetailsSection();
    showGradeDetailsSection();
    showWorkingHoursDetailsSection();
    showPaySection();
    showManagementTeamSection();
    showOrganisationUnitSection();
    showTerminationDateSection();
    showLastWorkingDaySection();
    showLOADetailsSection();
    showFixedTermContactSection();
    showEffectiveDateSection();
};
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    copyValues();
    subtopicVisibility();
    setAllPopups();
    disableFields();
    setEffectiveDateLimit();
    variablePaySchemeDropdown();
    manipulateDropdowns();
    generateDocumentButtonDisplay();
    sectionShowHide();
    countryWiseSectionVisibility();
    salConROA();
    partTimeLeaveVisibility();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
