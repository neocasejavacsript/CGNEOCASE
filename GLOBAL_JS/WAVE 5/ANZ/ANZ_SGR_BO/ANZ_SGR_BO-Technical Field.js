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
/*---- MOD-001 STARTS ----*/
//Hide Technical Section
neocase.form.section("section0769e12b11f7dd21e59c").hide();
//Hide Hidden Section
//neocase.form.section("sectionf0d2cdf8af4de3979c75").hide();
/*---- MOD-001 ENDS ----*/

window.customDeactvRSN = function() {

	var seclectList=neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR471'),
		seclectListName = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR471')['name'],
		SLength = $('[name="'+seclectListName+'"] option').length;

	for(var i = SLength - 1;i > 0;i--)
	{
		var sOptionCode = $('[name="'+seclectListName+'"] option').eq(i).attr('code');
		if(sOptionCode == '780' || sOptionCode == '781' || sOptionCode == '784') {
			$('[name="'+seclectListName+'"] option').eq(i).css('display', 'none');
		}
	}
};

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
	
	
};

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

/* ------------- Popup Link ----------------- */
window.setPopups = function(){

	//COntract Details - Contract Type
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
    //popupLink(document.getElementById("INTERVENTIONS_EN_COURS$VALEUR291"), "/Custom_Referential/ContratType.aspx?Id_User=");
	
	//Org Assignment -  Personal Area
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User=");
	
	//Org Assignment -  Cost Centre / PU Code
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, "/Custom_Referential/PU.aspx?Id_User=");
	
	//Org Assignment -  Organizational Unit
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR13, "/Custom_Referential/OrgUnit.aspx?Id_User=");
	
	//Job Details -  Job Title
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
	
	//Management Team - Manager Default Approver
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR288, "/Custom_Referential/ManagerDefaultName.aspx?Id_User=");
	
	//Management Team - Manager Reviewer
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManageReviewer.aspx?Id_User=");
	
	//Management Team - Manager Supervisor
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManagerSupervisor.aspx?Id_User=");
	
	//Management Team - Manager HRDP
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User=");
	
	//Management Team - Manager HRBP
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User=");
	
	//Management Team - Training Approver
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409, "/Custom_Referential/TrainingApprover.aspx?Id_User=");	
	
	//Employee group/Employee subgroup - Employee subgroup
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR365, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");	
	
};
window.launchOnInit = function(){
	
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
	
	//Calculate Annual salary prorated (new)
	calculate_annualSalProrated();
	//Disable Annual salary prorated (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565"));
	
	//Calcualte Target Var Comp prorated (new)
	calculate_targetVarCompProratedNew();
	//Disable Target Var Comp prorated (new)
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567"));
	
	
};

neocase.form.event.bind('loadcomplete', launchOnInit);
