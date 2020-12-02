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
-----------------------------------------------------------------------------*/

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
};
FillCf_Reviewer_LocalID = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};
//Management Popup - Mentor
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
//Management Popup - Supervisor
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
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.value = "";
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = true;
	}else{
		//ormulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = false;
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = false;
	}
};
FillCf_Job_Catg_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR50.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR50, false);
};
window.copyValues = function(){
    // copy Work Location (new) from Base Office Location (Personnel Sub Area Desc.)(new)
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR123').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR735');
    // copy emp field 'Cost Center | PU Code' to Specific field 'Cost Centre / PU Code'
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
    // copy Personnel Area Description to Company Name (Personnel Area Desc.)
    neocase.form.field('UTILISATEURS$CHAMPU27').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR285');
    // copy Personnel SubArea Description to Base Office Location (Personnel Sub Area Desc.)
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    // copy Personnel SubArea Description to Work Location
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR734');
    // copy SBU Description to SBU Desc.
    neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR737');
    // copy BU Description to BU Desc.
    neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR736');
    // copy Planned Absence End Date to Planned absence end date
    neocase.form.field('UTILISATEURS$CHAMPU311').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR738');
    // copy Job Name to Job Title Desc.
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
    // copy Global Grade to Local /  Unified Grade
    neocase.form.field('UTILISATEURS$CHAMPU34').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
    // copy Employment percentage to Employment Percentage
    neocase.form.field('UTILISATEURS$CHAMPU248').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR739');
};
window.setAllPopups = function(){
    //Job Title Desc. (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
    //Contract Type Desc (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
    //Work location
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR735, "/Custom_Referential/PersonalArea.aspx?Id_User=");
    //Personal area-Company Name (Personnel Area Desc.(new)) 
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User=");
    //Management Supervisor
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183,"/Custom_Referential/ManageSupervisor.aspx");
    //Management - Local approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR286, "/Custom_Referential/ManagerLocalName.aspx?Id_User=");  
    //Management - Performance Reviewer
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154,"/Custom_Referential/ManagerReviewer.aspx");
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
    disableField(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR734')); 
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
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            neocase.form.section('sectionea92097af791926325d9').show();
            neocase.form.section('section44488696b2a7d3bc14f4').hide();
        }else if(countryIsoCode == 'PT' && countrySAPCode == '19'){
            if(subtopic == '2974' || subtopic == '2973' || subtopic == '2975'){
                neocase.form.section('section44488696b2a7d3bc14f4').show();
            }else{
                neocase.form.section('section44488696b2a7d3bc14f4').hide();
            }
            neocase.form.section('sectionea92097af791926325d9').hide();
        }else{
            neocase.form.section('sectionea92097af791926325d9').hide();
            neocase.form.section('section44488696b2a7d3bc14f4').hide();
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
	var empPercentage = neocase.form.field('UTILISATEURS$CHAMPU248');
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
    if(neocase.form.field('ELEMENTS').getValue() === '2969' || neocase.form.field('ELEMENTS').getValue() === '2970' || neocase.form.field('ELEMENTS').getValue() === '2973' || neocase.form.field('ELEMENTS').getValue() === '2974'|| neocase.form.field('ELEMENTS').getValue() === '3015'|| neocase.form.field('ELEMENTS').getValue() === '2977'){ //EC_Cost center change;EC_Work location transfer;EC_Contract change;EC_Promotion/demotion;EC_Reorganization (MU);EC_Company change
        neocase.form.section("sectionaf2e5f8cec3f77e90188").show();
    }else{
        neocase.form.section("sectionaf2e5f8cec3f77e90188").hide();
    }
};
window.showTerminationDateSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2963'){ //EC_Assignment inbound end
        neocase.form.section("sectionff5754960ae6130842dd").show();
    }else{
        neocase.form.section("sectionff5754960ae6130842dd").hide();
    }
};
window.showLastWorkingDaySection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '3005' || neocase.form.field('ELEMENTS').getValue() === '2992' || neocase.form.field('ELEMENTS').getValue() === '2994' || neocase.form.field('ELEMENTS').getValue() === '2997'){ //EC_Change in last working day;EC_Resignation;EC_Involuntary leaver;EC_Retirement;EC_LOA paid
        neocase.form.section("sectionb41dfc8be21dea6aff58").show();
    }else{
        neocase.form.section("sectionb41dfc8be21dea6aff58").hide();
    }
};
window.showLOADetailsSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2997' || neocase.form.field('ELEMENTS').getValue() === '2998'){// EC_LOA paid;EC_LOA unpaid
        neocase.form.section("section3075018341bd1efb957b").show();
    }else{
        neocase.form.section("section3075018341bd1efb957b").hide();
    }
};
window.showFixedTermContactSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2972'){ //EC_Fixed term contract extension
        neocase.form.section("section563353c95e2f168176a4").show();
    }else{
        neocase.form.section("section563353c95e2f168176a4").hide();
    }
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
};
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    copyValues();
    setAllPopups();
    disableFields();
    variablePaySchemeDropdown();
    sectionShowHide();
    countryWiseSectionVisibility();
    salConROA();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
