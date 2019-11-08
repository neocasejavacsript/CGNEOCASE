/************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
*************************************************/
//Action reason
FillCf_type_code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR1.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR1, false);
};
FillCf_type_name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR2.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR2, false);
};
FillCf_reason_code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR3.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR3, false);
};
FillCf_reason_name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR4.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR4, false);
};

//CostCenter - 11 13 15 17
FillCf_Production_Unit_Code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR15.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
FillCf_Production_Unit_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR17.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
//Production Unit
FillCf_Capability = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR19.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
FillCf_Org_Unit_Code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR11.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};
FillCf_Org_Unit_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR13.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR15, false);
};

//organization detail
//Organization detail - Service Line
SC_Nm_ServiceLineCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR37.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR37, false);
};
SC_Nm_ServiceLineDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR39.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, false);
};
//Organization detail - Industry
SC_Nm_IndustryCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR29.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR29, false);
};
SC_Nm_IndustryDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR31.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR31, false);
};
//Organization detail - Community
FillCf_CommunityCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR33.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR33, false);
};
FillCf_CommunityDescription = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR35.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR35, false);
};
//Organization detail - Speciality
SC_Nm_SpecialtyCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR25.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR25, false);
};
SC_Nm_SpecialtyDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR27.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR27, false);
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
		formulaire.INTERVENTIONS_EN_COURS$VALEUR52.value = "";
		formulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = true;
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.value = "";
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = true;
	}else{
		formulaire.INTERVENTIONS_EN_COURS$VALEUR52.disabled = false;
		formulaire.INTERVENTIONS_EN_COURS$VALEUR54.disabled = false;
	}
};
FillCf_Job_Catg_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR50.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR50, false);
};

//Job Type
SC_Nm_StaffCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR52.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR52, false);
};
SC_Nm_StaffDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR54.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR54, false);
};

//Subarea
SC_Nm_SubAreaCode = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR121, false);
};
SC_Nm_SubAreaDesc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, false);
};

//Management Popup - HR delivery
FillCf_HR_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR142.value = fieldValue;
};
FillCf_HR_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR142.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, false);
};
FillCf_HR_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR144.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR144, false);
};
FillCf_HR_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR146.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR146, false);
};
//Management Popup - Training
FillCf_Training_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR148.value = fieldValue;
};
FillCf_Training_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR148.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR148, false);
};
FillCf_Training_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR150.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR150, false);
};
FillCf_Training_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR152.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR152, false);
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
//Management Popup - PayPlan
FillCf_PayPlan_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR160.value = fieldValue;
};
FillCf_PayPlan_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR160.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR160, false);
};
FillCf_PayPlan_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR162.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR162, false);
};
FillCf_PayPlan_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR164.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR164, false);
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
//Management Popup - Mentor
FillCf_Mentor_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value = fieldValue;
};
FillCf_Mentor_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};
FillCf_Mentor_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR168.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR168, false);
};
FillCf_Mentor_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR170.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR170, false);
};
//Management Popup - Probation
FillCf_Probation_First_Name = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR172.value = fieldValue;
};
FillCf_Probation_LastName = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR172.value += " "+fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR172, false);
};
FillCf_Probation_LocalID = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR174.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR174, false);
};
FillCf_Probation_PersonelNum = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR176.value = fieldValue;
	champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR176, false);
};
//Local Grade
FillCf_Local_Grade = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR41.value = fieldValue;
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

/********************************************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS (Except FillCf other Functions)
*********************************************************************************/
window.getASPid = function(fieldName){
	//Only on FrontOffice Side
	if(document.getElementsByClassName("bloc-content").length > 0){
		var label = document.getElementsByClassName("bloc-content")[0].getElementsByTagName("label");
		for(lbl=0; lbl<label.length; lbl++){
			
			//if we find an ASP.NET id we return the dynamic ID number
			if(label[lbl].id.search("_lbl") != -1){
				fieldName = label[lbl].id.split("lbl")[0]+fieldName;
				fieldName = fieldName.replace("$","_");
				return fieldName;
			}

		}
	}
	return fieldName;
};
FillCf = function(fieldValue,fieldName){
    var msg = "function FillCf : ";

    //properly target field
    if(fieldName.search("VALEUR0") != -1){
        fieldName = fieldName.replace("VALEUR0","VALEUR");
    }
	fieldName = getASPid(fieldName);
    var field = neocase.form.field(fieldName);
       var req = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR421');
    if(field){
		field.setValue(fieldValue);
       if(req)
		{
		req.setValue(fieldValue);
		}
    }else{
        msg += "field "+fieldName+" not found";
        console.log(msg);
}    
};
/************************************************************************
 * CREATE HYPERLINK ON LABEL TO OPEN A POPUP for Front Office/ Portal(FO)
 ***********************************************************************/
window.popupLink = function(field, url) {
    var msg = "function popupLink : ";
    if (field) {
        //get field label
        var fieldId = field.id;
        var fieldLabel;
        if (fieldId.search("INTERVENTIONS") != -1) {
            fieldLabel = fieldId.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (fieldId.search("UTILISATEURS") != -1) {
            fieldLabel = fieldId.replace("UTILISATEURS", "lblUTILISATEURS");
        } else {
            msg += "type de champ non pris en compte " + fieldId;
            console.log(msg);
        }
        if (fieldLabel.search("_display") != -1) {
            fieldLabel = fieldLabel.replace("_display", "");
        }
        //add case number in the URL if needed
        if (url.search("Id_Demande") != -1) {
            //url = url.replace("Id_Demande=","Id_Demande="+RequestContext.RequestNumber);
            url = url.replace("Id_Demande=", "Id_Demande=" + RequestContext.ContactId);
        }
        //add contact ID in the URL if needed
        if (url.search("Id_User") != -1) {
            url = url.replace("Id_User=", "Id_User=" + RequestContext.ContactId);
        }
        //Create hyperlink on label
        var onclick = "window.open('" + url + "','_blank')";
        var createPopup = document.createElement("a");
        createPopup.setAttribute("onclick", onclick);
        var popupText;
        if (document.getElementById(fieldLabel)) {
            popupText = document.getElementById(fieldLabel).innerHTML;
            var t = document.createTextNode(popupText);
            createPopup.appendChild(t);
            if (document.getElementById(fieldLabel).innerHTML.search("</a>") == -1) {
                document.getElementById(fieldLabel).innerHTML = "";
                document.getElementById(fieldLabel).appendChild(createPopup);
            }
        } else {
            msg += "label du champ non trouvé " + fieldId;
            console.log(msg);
        }
    } else {
        msg += "champ non trouvé";
        console.log(msg);
    }
};
/*****************************************************************
 * CREATE HYPERLINK ON LABEL TO OPEN A POPUP for Back Office / BO
 *****************************************************************/
window.popupLink = function (field, url) {
    var msg = "function popupLink : ";
    if (field) {
        //get field label
        var fieldId = field.id;
        var fieldLabel;
        if (fieldId.search("INTERVENTIONS") != -1) {
            fieldLabel = fieldId.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (fieldId.search("UTILISATEURS") != -1) {
            fieldLabel = fieldId.replace("UTILISATEURS", "lblUTILISATEURS");
        } else {
            msg += "type de champ non prit en compte " + fieldId;
            console.log(msg);
        }
        if (fieldLabel.search("_display") != -1) {
            fieldLabel = fieldLabel.replace("_display", "");
        }
        //add case number in the URL if needed
        if (url.search("Id_Demande") != -1) {
            url = url.replace("Id_Demande=", "Id_Demande=" + numeroIntervention);
        }
        //add contact ID in the URL if needed
        if (url.search("Id_User") != -1) {
            url = url.replace("Id_User=", "Id_User=" + CodeUtilisateurBis);
        }
        //Create hyperlink on label
        var onclick = "window.open('" + url + "','_blank')";
        var createPopup = document.createElement("a");
        createPopup.setAttribute("onclick", onclick);
        var popupText = document.getElementById(fieldLabel).innerHTML;
        var t = document.createTextNode(popupText);
        createPopup.appendChild(t);
        if (document.getElementById(fieldLabel).innerHTML.search("</a>") == -1) {
            document.getElementById(fieldLabel).innerHTML = "";
            document.getElementById(fieldLabel).appendChild(createPopup);
        }
    } else {
        msg += "champ non trouvé";
        console.log(msg);
    }
};

/***************************
*CREATE POP-UPS LINKS
***************************/
//Cost Center
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR17,"/Custom_Referential/CostCenter.aspx?Id_User=");
//Community
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR27,"/Custom_Referential/Specialty.aspx?Id_User=");
//Job Name
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46,"/Custom_Referential/JobName.aspx?Id_User=");
//Job Type - inutile ?
//popupLink(formulaire.UTILISATEURS$CHAMPU178,"/Custom_Referential/JobType.aspx?Id_User=");
//Work Location
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123,"/Custom_Referential/SubArea.aspx?Id_User=");
//Management HR
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142,"/Custom_Referential/ManagerHR.aspx");
//Management Training
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR148,"/Custom_Referential/ManagerTraining.aspx");
//Management Reviewer
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154,"/Custom_Referential/ManagerReviewer.aspx");
//Management PayPlan
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR160,"/Custom_Referential/ManagerPayPlan.aspx");
//Management Supervisor
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183,"/Custom_Referential/ManageSupervisor.aspx");
//Management Mentor
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR166,"/Custom_Referential/ManageMentor.aspx");
//Management Probation
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR172,"/Custom_Referential/ManageProbation.aspx");
//Local Grade
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR41,"/Custom_Referential/LocalGrade.aspx?Id_User=");
//country moving to
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR927, "/Custom_Referential/CountryMoving.aspx?Id_User=");