/*************ANZ_SGR_BO - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 10/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
			 -Use copyFunctions for coping value from one to another field
----------------------------------------------------------------------------*/ 

//Hide Technical Section
neocase.form.section("section0769e12b11f7dd21e59c").hide();
//Hide Hidden Section
neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();

/*---------------- CG Developed Enable and Disable Code -----------------*/

window.capgDisable = function(fieldGotByID) {
	var el = document.getElementById("prependedid" + fieldGotByID.id);
	if (el === null){
	$(fieldGotByID).parent().prepend("<div id=\"prependedid" + fieldGotByID.id + "\" style=\"width: 100%; height: 37px; position: absolute;cursor: no-drop;\"></div>");
	}
};

window.capgEnable = function(fieldGotByID)
{
	var el = document.getElementById("prependedid" + fieldGotByID.id);
	if(el){
		el.parentNode.removeChild(el);
	}
};

/*---------------------- Customized Drop-Down List -----------------------*/

window.customDeactvRSN = function() {

	var seclectList=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR471'),
		seclectListName = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR471')['name'],
		SLength = $('[name="'+seclectListName+'"] option').length;

	for(var i = SLength - 1;i > 0;i--)
	{
		var sOptionCode = $('[name="'+seclectListName+'"] option').eq(i).attr('code');
		if(sOptionCode == '780' || sOptionCode == '781' || sOptionCode == '784' || sOptionCode == '782') {
			$('[name="'+seclectListName+'"] option').eq(i).remove();
		}
	}
		
	
};

/*------------ Copy emp. cat. field value to req. cat. field ------------*/

window.copyFunctions = function() {
	
	//copy Personal Sub Area Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
	//copy Cost Centre / PU Code value
	neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
	//copy SBU Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR180');
	//copy BU Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR8');
	//copy Local Grade value
	neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
	//copy Job Title Desc. value
	neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');
	//copy Default Approver name value
	neocase.form.field('UTILISATEURS$CHAMPU234').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR428');
	//copy MyC Supervisor Name value
	neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
	//copy HRBP Name value
	neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
	
};

/*----------------- calculate annual Salary Prorated -----------------*/

window.calculate_annualSalProrated = function() {
	
	var annualSalProNew=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR565');
	var annualSalActualFTENew=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR384');
	var empPercentage=neocase.form.field('UTILISATEURS$CHAMPU248');
	
	//Annual salary prorated  (new) == ROUND((Annual salary at actual FTE (new) * Employment percentage) / 100, 2)
	
	if(annualSalActualFTENew) {
		if (empPercentage){
			if (annualSalProNew){
				var annualSalActualFTENewVal=parseFloat(annualSalActualFTENew.getValue());
				var empPercentageValue=parseFloat(empPercentage.getValue());
				if (isNaN(annualSalActualFTENewVal)) {
					annualSalActualFTENewVal =0;
				}
				if (isNaN(empPercentageValue)) {
					empPercentageValue =0;
				}
				annualSalProNew.setValue(((annualSalActualFTENewVal * empPercentageValue)/100).toFixed(2));
			}
			
		}
		
	}
};

/*----------------- calculate target Variable Compensation Prorated New -----------------*/

window.calculate_targetVarCompProratedNew = function() {
	
	var targetVarCompProNew=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR567');
	var targetVarCompActualNew=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385');
	var empPercentage=neocase.form.field('UTILISATEURS$CHAMPU248');
	
	//Target Var Comp prorated (new) == ROUND((Target var Comp Actual (new) * Employment percentage) / 100, 2)
		
	if(targetVarCompActualNew) {
		if (empPercentage){
			if (targetVarCompProNew){
				var targetVarCompActualNewVal=parseFloat(targetVarCompActualNew.getValue());
				var empPercentageValue=parseFloat(empPercentage.getValue());
				if (isNaN(targetVarCompActualNewVal)) {
					targetVarCompActualNewVal =0;
				}
				if (isNaN(empPercentageValue)) {
					empPercentageValue =0;
				}
				targetVarCompProNew.setValue(((targetVarCompActualNewVal * empPercentageValue)/100).toFixed(2));
			}
			
		}
		
	}
};

//pop-up -- job name - (Old Neocase Function) -  OK
//Only for DSS list will show
FillCf_Job_code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR44, false);
};
FillCf_Job_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};
FillCf_Job_Catg = function(fieldValue){
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48").setValue(fieldValue);
	if(fieldValue == "CSS" || fieldValue == "DSP"){
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR417").setValue("");
		capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);

	}else if (fieldValue == "DSS"){
		capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
	}
	else{
		capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
	}
};

//Management Popup - Default
FillCf_DefaultName_First_Name = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value = fieldValue;
};
FillCf_DefaultName_LastName = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR288, false);
};

FillCf_DefaultName_PersonelNum = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR289.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR289, false);
};

//Management Popup - Reviewer
FillCf_Reviewer_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};
FillCf_Reviewer_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};
FillCf_Reviewer_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR158.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR158, false);
};

//Management Popup - Supervisor
FillCf_Supervisor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};
FillCf_Supervisor_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};
FillCf_Supervisor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR187.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR187, false);
};

/* ------------- all Popup Links ----------------- */

window.setPopups = function(){

	//COntract Details - Contract Type
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
    //popupLink(document.getElementById("INTERVENTIONS_EN_COURS$VALEUR291"), "/Custom_Referential/ContratType.aspx?Id_User=");
	
	//Org Assignment -  Personal Area
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User=");
	
	//Org Assignment -  Cost Centre / PU Code
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");
	
	//Org Assignment -  Organizational Unit
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR13, "/Custom_Referential/OrgUnit.aspx?Id_User=");
	
	//Job Details -  Job Title
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
	
	//Management Team - Manager Default Approver
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR288, "/Custom_Referential/ManagerDefaultName.aspx?Id_User=");
	
	//Management Team - Manager Reviewer
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User=");
	
	//Management Team - Manager Supervisor
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");
	
	//Management Team - Manager HRDP
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User=");
	
	//Management Team - Manager HRBP
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User=");
	
	//Management Team - Training Approver
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User=");	
	
	//Employee group/Employee subgroup - Employee subgroup
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR365, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");	
	
};
/* ------------- Calling all the function from here , entry point ------------- */

window.showGradeSection = function(){
	//console.log(neocase.form.field('UTILISATEURS$CHAMPU239').getValue());
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2729' || neocase.form.field('ELEMENTS').getValue() === '2730' || neocase.form.field('ELEMENTS').getValue() === '2806' || neocase.form.field('ELEMENTS').getValue() === '2815'){
        neocase.form.section("section3edef2ac0fb209f64669").show();
    }else{
        neocase.form.section("section3edef2ac0fb209f64669").hide();
    }
};
window.showContractDetailsSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2730' ){
        neocase.form.section("section9f7222929ad5cb959951").show();
    }else{
        neocase.form.section("section9f7222929ad5cb959951").hide();
    }
};
window.showOrgAssignmentSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2730' ){
        neocase.form.section("section2f0c537f367ffba11a04").show();
    }else{
        neocase.form.section("section2f0c537f367ffba11a04").hide();
    }
};
window.showJobSection = function(){
	//console.log(neocase.form.field('UTILISATEURS$CHAMPU239').getValue());
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2729' || neocase.form.field('ELEMENTS').getValue() === '2730' || neocase.form.field('ELEMENTS').getValue() === '2806' || neocase.form.field('ELEMENTS').getValue() === '2815'){
        neocase.form.section("sectionab238c9264e2c46539d4").show();
    }else{
        neocase.form.section("sectionab238c9264e2c46539d4").hide();
    }
};
window.showPaySection = function(){
	//console.log(neocase.form.field('UTILISATEURS$CHAMPU239').getValue());
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2729' || neocase.form.field('ELEMENTS').getValue() === '2730' || neocase.form.field('ELEMENTS').getValue() === '2735'){
        neocase.form.section("section10d1060bf09dee3486fe").show();
    }else{
        neocase.form.section("section10d1060bf09dee3486fe").hide();
    }
};
window.showAdditionalAllowanceSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2729' || neocase.form.field('ELEMENTS').getValue() === '2730' || neocase.form.field('ELEMENTS').getValue() === '2735' || neocase.form.field('ELEMENTS').getValue() === '2809'){
        neocase.form.section("sectionc705e4f6f442a1a34d66").show();
    }else{
        neocase.form.section("sectionc705e4f6f442a1a34d66").hide();
    }
};
window.showNonPayrollSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2729' || neocase.form.field('ELEMENTS').getValue() === '2730' || neocase.form.field('ELEMENTS').getValue() === '2735'){
        neocase.form.section("sectiona64c7ff313bf953d48b8").show();
    }else{
        neocase.form.section("sectiona64c7ff313bf953d48b8").hide();
    }
};
window.showManagementTeamSection = function(){
	neocase.fieldInstances = [];
    if(neocase.form.field('ELEMENTS').getValue() === '2730'){
        neocase.form.section("section3e7a54d9324df6a5fd5f").show();
    }else{
        neocase.form.section("section3e7a54d9324df6a5fd5f").hide();
    }
};
window.launchOnloadcomplete = function(){
	
	//Customize the DropDown of De-activation reason
	customDeactvRSN();

	//Copy value from one field to other
	copyFunctions();
	
	//Popup Link
	setPopups();
	//Disable Personal Sub Area Desc. (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123"));
	//Disable SBU Desc. (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR231"));
	//Disable BU Desc. (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR232"));
	//Disable Default Org Unit Code
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR406"));
	//Disable Organizational Unit Code (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11"));
	//Disable Organizational Unit Code (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"));
	
	/*//Calculate Annual salary prorated (new)
	//calculate_annualSalProrated();
	//Disable Annual salary prorated (new)
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565"));
	
	//Calcualte Target Var Comp prorated (new)
	//calculate_targetVarCompProratedNew();
	//Disable Target Var Comp prorated (new)
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567"));*/
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567"));
	showGradeSection();
	showContractDetailsSection();
	showOrgAssignmentSection();
	showJobSection();
	showPaySection();
	showAdditionalAllowanceSection();
	showNonPayrollSection();
	showManagementTeamSection();
};


window.launchOnInit = function(){
//Calculate Annual salary prorated (new)
	calculate_annualSalProrated();
	//Disable Annual salary prorated (new)
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565"));
	
	//Calcualte Target Var Comp prorated (new)
	calculate_targetVarCompProratedNew();
	//Disable Target Var Comp prorated (new)
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567"));
	
	
   
};
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
neocase.form.event.bind('init', launchOnInit);
