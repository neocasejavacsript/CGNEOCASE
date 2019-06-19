//*Fr_CH_MGMT_TEAM (C)*//
/*--------------------------------------------------------------------------
Developer   - Suman Saha
Date	    - 05/18/2018 (MM/DD/YYYY)
Change No   - MOD-001, Mod-002
Description - Changed the pop ups,hide technical section (1)
Description - Changed the pop upsfor assistent new(2)
----------------------------------------------------------------------------*/ 
/* ------------- Start of MOD-001 changes -------------*/
neocase.form.section("sectionbde0ffb426f21012df87").hide();
/* ------------- End of MOD-001 changes -------------*/
/* ------------- End of MOD-002 changes -------------*/
      //Assistent new pop up added//
/************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
*************************************************/

/* ------------- Start of MOD-001 changes -------------*/
//Management Popup - Default - OK
FillCf_DefaultName_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value = fieldValue;
};
FillCf_DefaultName_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR288, false);
};
FillCf_DefaultName_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR289.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR289, false);
};

//Management Popup - Supervisor - OK
FillCf_Supervisor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};
FillCf_Supervisor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR185.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR185, false);
};

//Management Popup - Reviewer - OK
FillCf_Reviewer_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};
FillCf_Reviewer_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};

//Management Popup - Mentor - OK
FillCf_Mentor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value = fieldValue;
};
FillCf_Mentor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value += " " +fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};
FillCf_Mentor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR168.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR168, false);
};

//HRDP Popup - Default - OK
FillCf_HRDP_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS_VALEUR142.value = fieldValue;
};
FillCf_HRDP_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS_VALEUR142.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, false);
};
FillCf_HRDP_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR144.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR144, false);
};

//HRBP Popup - Default - OK
FillCf_HRBP_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS_VALEUR386.value = fieldValue;
};
FillCf_HRBP_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS_VALEUR386.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, false);
};
FillCf_HRBP_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR379.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR379, false);
};

//Global function for all the new popup
FillCf = function(fieldValue,fieldName){
    var msg = "function FillCf : ";

    //properly target field
    if(fieldName.search("VALEUR0") != -1){
        fieldName = fieldName.replace("VALEUR0","VALEUR");
    }
	fieldName = getASPid(fieldName);
    var field = neocase.form.field(fieldName);

    if(field){
		field.setValue(fieldValue);
    }else{
        msg += "field "+fieldName+" not found";
        console.log(msg);
    }
};


/* ------------- End of MOD-002 changes -------------*/

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){


//Pop-up Default Approver name
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR288,"/Custom_Referential/ManagerDefaultName.aspx");


//Pop-up Performance Reviewer Name
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR154,"/Custom_Referential/ManagerReviewer.aspx");


//Pop-up Mentor Name
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR166,"/Custom_Referential/ManageMentor.aspx");


//Pop-up Admin Supervisor Name
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR183,"/Custom_Referential/ManageSupervisor.aspx");	

//Pop-up HR Delivery Partner
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR142,"/Custom_Referential/ManagerHRDP.aspx");	
	
//Pop-up HRBP
	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR386,"/Custom_Referential/ManagerHRBP.aspx");

//Pop-up Assistant name
   	popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR407,"/Custom_Referential/Assistant.aspx");
	
	
//Disable field Supervisor Name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183"));
//Disable field Mentor Name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR166"));
//Disable field Default Approver name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR288"));
//Disable field Reviewer Name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154"));
//Disable field HRDP name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR142"));
//Disable field HRBP
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386"));
//Disable field Assistant name
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR407"));

	
};
neocase.form.event.bind("init",launchOnInit);
