//FR_EDC_MGR(C) - FRONT END - Technical Code
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 03/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide deadline section,"LOA type" populated based on Subtopics
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 04/30/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Hide deadline section,"LOA type" populated based on Subtopics
----------------------------------------------------------------------------
Developer   - MD Khan
Date	    - 05/25/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Calculation 
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 05/31/2018 (MM/DD/YYYY)
Change No   - MOD-004
Description - Resolution for tab and backword form filling,ServiceLine Pop-up
----------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 11/26/2018 (MM/DD/YYYY)
Change No   - MOD-005
Description - Resolved Pop-up Disable Enable issue
----------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 07/31/2019 (MM/DD/YYYY)
Change No   - MOD-006
Description - Make the change reason field mandatory based on subtopic
----------------------------------------------------------------------------
Developer   - Arnab Guha
Date	    - 
Change No   - MOD-008
Description  - 
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/02/2020 (MM/DD/YYYY)
Change No   - MOD-009
Description - Mandatory / RO 'Pay periods (new)' field based on Subtopic: FR_01- With pay change / FR_02- Without pay change
------------------------------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/06/2020 (MM/DD/YYYY)
Change No   - MOD-010
Description - Mandatory "Fin de période d'essai (nouveau) (Last day of probation (new))"field  for Subtopic " FR_Start date change / Décalage date d\'entrée",
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	      - 10/16/2020 (MM/DD/YYYY)
Change No   - MOD-011
Description - Remove mandatory "Fin de période d'essai (nouveau) (Last day of probation (new))"field  for Subtopic " FR_Start date change / Décalage date d\'entrée",
            - Mandatory "Fin de période d'essai (nouveau) (Last day of probation (new))"field  for Subtopic "FR_01-Probation Period – Renewal",
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 12/02/2020 (MM/DD/YYYY)
Change No   - MOD-012
Description - show section for 02 Addedum for given days
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 12/08/2020 (MM/DD/YYYY)
Change No   - MOD-013
Description - restrict this field Nombre de jours demandés (max 20), to not allow users to enter anything more than 20.
----------------------------------------------------------------------------*/ 


//hide technical section
neocase.form.section("sectionc2cc4d34acf160b6e62a").hide();
neocase.form.section("section0217b9d450f128c8a4bb").hide(); //MOD-001 ++
neocase.form.section("section4916f629c34edbd9a4c1").hide(); //MOD-002 ++

/* ------------- Start of MOD-001 changes -------------*/
window.setLOAtypeForSubtopic = function () {
  var subtopicCode = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
  var typeLOACode = formulaire.INTERVENTIONS_EN_COURS$VALEUR378;

  if (subtopicCode) { //subtopicCode field exist

    if (typeLOACode) { //typeLOACode field exist

      var subtopicCodeValue = subtopicCode.options[subtopicCode.selectedIndex].getAttribute('value');
      switch (subtopicCodeValue) {

        /***********************************************************
        * 1st case for follwoing Subtopics
        *FR_02-Maternity leave||Congé maternité
        *FR_01-Paternity leave	Congé paternité
        *FR_04-Training leave (paid)||Congé formation payé
        *FR_14-Adoption||Congé adoption
        *FR_16-Longterm sickness||Congé mal lge durée
        *FR_17-Paid non-working notice period||Préavis non eff payé
        *FR_18-Redeployment leave||Congé de reclassement
        *FR_19-Paid leave||Absence payée
        *FR_20-Mobility leave (paid)||Congé mobilité payé
        ***********************************************************/

        case "2499":
        case "2498":
        case "2501":
        case "2511":
        case "2545":
        case "2533":
        case "2547":
        case "2535":
        case "2549":
          $(typeLOACode).find('option[code*=555]').prop('selected', true);
          break;

        /*
        * 2nd case for follwoing Subtopics
        *FR_03-Parental leave||Congé parental
        *FR_05-Training leave (unpaid)||Congé formation non payé
        *FR_06-Unpaid leave &gt; 1 month||Congé non payé &gt; à 1 mois
        *FR_07-Sabbatical leave||Congé sabbatique
        *FR_08-Business creation leave||Congé création d'entreprise
        *FR_09-Parental presence leave||Congé présence parentale
        *FR_10-Family support leave||Congé soutien familial
        *FR_11-Family leave||Congé familial
        *FR_12-International solidarity leave||Congé solidarité internationale
        *FR_13-Adoption preparation leave||Congé préparation adoption
        *FR_15-Educational leave||Congé études
        *FR_21-Disability||Inaptitude professionnelle
        *FR_22-Mobility leave (unpaid)||Congé mobilité
        */

        case "2500":
        case "2502":
        case "2503":
        case "2504":
        case "2505":
        case "2506":
        case "2507":
        case "2508":
        case "2509":
        case "2510":
        case "2512":
        case "2537":
        case "2551":
          $(typeLOACode).find('option[code*=556]').prop('selected', true);
          break;

        case "2539": //for - FR_23-Return from leave||Retour absence
          $(typeLOACode).find('option[code*=604]').prop('selected', true);
          break;

        default:
          typeLOACode.value = "";
          break;
      }

    }
    else { //typeLOACode field or value missing
      msg += "var typeLOACode (formulaire.INTERVENTIONS_EN_COURS$VALEUR305) not found> field missing or not loaded";
      console.log(msg);
    }

  }

  else { //subtopicCode field or value missing
    msg += "var subtopicCode (formulaire.INTERVENTIONS_EN_COURS$VALEUR305) not found> field missing or not loaded";
    console.log(msg);
  }
  updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378"), neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378").getValue());
};
/* ------------- End of MOD-001 changes -------------*/


window.checkForm = function () {

	/***************************************
	* Update mandatory fields alert message
	***************************************/
  //Declare Variables
  var validator = document.getElementsByClassName('ValidatorCautionBox');
  var msg = "";
  var lang = document.getElementById("PageHtml").lang.split("-")[0];
  if (lang == "fr") {
    msg = "Merci de renseigner les champs obligatoires suivant :";
  } else {
    msg = "Please fill the following mandatory fields :";
  }



  //If mandatory fields are blanked, we add their name in the alert message
  //if(validator.length > 0){
  //	for(v=0; v<validator.length; v++){
  //		var validatorVisibility = validator[v].style.visibility;
  //		if(validatorVisibility == "visible"){
  //			if(validator[v].id.search("question") != -1){
  //				if(lang == "fr"){
  //					msg += "\n- Demande initiale";
  //				}else{
  //					msg += "\n- Initial request";
  //				}	
  //			}else{
  //				var validatorField = validator[v].parentNode.previousSibling.previousSibling;
  //				if(validatorField){
  //					var validatorLabel = "";
  //					if(validatorField.getElementsByTagName("a").length > 0){
  //						validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
  //					}else if(validatorField.getElementsByTagName("label").length > 0){
  //						validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
  //					}else{
  //						validatorLabel = "undefined";
  //					}
  //					msg += "\n- "+validatorLabel;
  //				}
  //			}
  //		}
  //	}
  //update the alert message
  m_requiredFieldsUndefined = msg;

  //}
  //If all previous control are valid, the function return "true" to execute the Submit function
  return true;
};


/* ---------------------------------- Start of MOD-002 changes ------------------------------------*/
/**************************
* Function for pop-up links
***************************/
window.setPopups = function () {
  //'Contract type'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
  //'Job'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
  //'Qualification'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR299, "/Custom_Referential/Qualification.aspx");
  //'Cost center/PU'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");
  //'Organisational unit'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR13, "/Custom_Referential/OrgUnit.aspx");
  //'Service Line'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR39, "/Custom_Referential/ServiceLine.aspx");
  //'Industry'
  //popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR31, "/Custom_Referential/Industry.aspx");
  //'Default approver'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR288, "/Custom_Referential/ManagerDefaultName.aspx");
  //'Performance reviewer'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR154, "/Custom_Referential/ManagerReviewer.aspx");
  //'Mentor'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR166, "/Custom_Referential/ManageMentor.aspx");
  //'Admin supervisor'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR183, "/Custom_Referential/ManageSupervisor.aspx");
  //'HRDP'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR142, "/Custom_Referential/ManagerHRDP.aspx");
  //'HRBP'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR386, "/Custom_Referential/ManagerHRBP.aspx");
  //'Training Approver'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR409, "/Custom_Referential/TrainingApprover.aspx");
  //'Assistant'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR407, "/Custom_Referential/Assistant.aspx");
  //'Personal area desc (new)'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR119, "/Custom_Referential/PersonalArea.aspx");
  //'Personal sub area desc (new)'
  popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR123, "/Custom_Referential/PersonalArea.aspx");
  //Documents
  popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438, "/Custom_Referential/employee signer.aspx");

};

/************************************************
* FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
*************************************************/

FillCf = function (fieldValue, fieldName) {
  var msg = "function FillCf : ";

  //properly target field
  if (fieldName.search("VALEUR0") != -1) {
    fieldName = fieldName.replace("VALEUR0", "VALEUR");
  }
  fieldName = getASPid(fieldName);
  var field = neocase.form.field(fieldName);

  if (field) {
    if (fieldName == "INTERVENTIONS_EN_COURS$VALEUR311") {
      neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR295').setValue(fieldValue); //Set Value in "Nature of Contract descr (new)"
    }
    else if (fieldName == "INTERVENTIONS_EN_COURS_VALEUR310") {
      neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR294').setValue(fieldValue); //Set Value in "Nature of Contract code (new)"
    }
		/**************************************starts*******************************************************
		**Dependency with "Qualification desc":  
		**Field should be = "Stagiaire" if "Qualification desc" = "Stagiaire" and not editable.
		**If not "Stagiaire", display drop down list.
		*********************************************************************************************/
    else if (fieldName == "INTERVENTIONS_EN_COURS_VALEUR299") {
      if (fieldValue == "Stagiaire") {
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR305').setValue("Stagiaire"); //Annual working time (new)"
        capgDisable(formulaire.INTERVENTIONS_EN_COURS_VALEUR305);

      }
      else {
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR305').setValue(""); //Set Value in "Annual working time (new)"
        capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR305);
      }
      field.setValue(fieldValue);
    }
    else {
      field.setValue(fieldValue);
    }

  } else {
    msg += "field " + fieldName + " not found";
    console.log(msg);
  }
};

//Management Popup - Default - (Old Neocase Function) - OK
FillCf_DefaultName_First_Name = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value = fieldValue;
};
FillCf_DefaultName_LastName = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR288.value += " " + fieldValue;
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS_VALEUR288, false);
};
FillCf_DefaultName_PersonelNum = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR289.value = fieldValue;
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS_VALEUR289, false);
};

//Management Popup - Supervisor - (Old Neocase Function)  - OK
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

//Management Popup - Reviewer - (Old Neocase Function) - OK
FillCf_Reviewer_First_Name = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " " + fieldValue;
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};
FillCf_Reviewer_PersonelNum = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};

//Management Popup - Mentor - (Old Neocase Function) - OK
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

//Management Popup - ServiceLine - (Old Neocase Function) - OK
SC_Nm_ServiceLineCode = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR37.value = fieldValue;
};
SC_Nm_ServiceLineDesc = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR39.value = fieldValue; //MOD-004 ++
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR39, false);
};

//Management Popup - Industry - (Old Neocase Function) - OK
// SC_Nm_IndustryCode = function (fieldValue) {
//   formulaire.INTERVENTIONS_EN_COURS$VALEUR29.value = fieldValue;
// };
// SC_Nm_IndustryDesc = function (fieldValue) {
//   formulaire.INTERVENTIONS_EN_COURS$VALEUR31.value = fieldValue;
//   champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR31, false);
// };

//job name - (Old Neocase Function) -  OK
FillCf_Job_code = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
};
FillCf_Job_Desc = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};
FillCf_Job_Catg = function (fieldValue) {
  neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48").setValue(fieldValue);
  if (fieldValue == "CSS" || fieldValue == "DSP") {
    neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR417").setValue("");
    capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);

  } else if (fieldValue == "DSS") {
    capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
  }
  else {
    capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
  }
};

/*************************************************************************************************************** */

FillCf_Signer_1_name = function (fieldValue) {
  formulaire.INTERVENTIONS_EN_COURS$VALEUR438.value = fieldValue;
  champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR438, false);
};




/**************** Set a field based on other field value (condition) ************ MOD-002 starts ************/
window.bonusNew_onChanged = function () {
  var newBonus = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR282');
  var targetVarCompNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR328');
  var annualBaseSalNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR278');

  if (newBonus) { //Bonus % (new)

    if (targetVarCompNew) { //Target Variable Compensation (100%) - ARC (new)
      var newBonusValue = newBonus.getValue();
      if (newBonusValue > 0) {
        targetVarCompNew.setValue(" ");
        calculate_newSAT(); //MOD-003 - MD KHAN - 25/05/2018 ++
        //updateAndDisableField(targetVarCompNew,targetVarCompNew.getValue()); //desable field 

        capgDisable(formulaire.INTERVENTIONS_EN_COURS_VALEUR328);
        //$('input[id^="INTERVENTIONS_EN_COURS_VALEUR278"]').eq(0).focus(); //MOD-004 ++
        setTimeout(function () { $('input').blur(); }, 300); //MOD-004++ 
      } else {
        capgEnable(formulaire.INTERVENTIONS_EN_COURS_VALEUR328);
      }
    }

  }



};

//MOD-004 ++
$(formulaire.INTERVENTIONS_EN_COURS_VALEUR328).focus(function () {

  var el = document.getElementById("prependedid" + formulaire.INTERVENTIONS_EN_COURS_VALEUR328.id);
  if (el) {
    $('input[id^="INTERVENTIONS_EN_COURS_VALEUR282"]').eq(0).focus();
  }

});

window.calculate_newSAT = function () {

  var targetVarCompNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR328');
  var annualBaseSalNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR278');
  var satNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR281');

  if (satNew) {
    if (targetVarCompNew) {
      if (annualBaseSalNew) {
        var targetVarCompNewValue = parseFloat(targetVarCompNew.getValue());
        var annualBaseSalNewValue = parseFloat(annualBaseSalNew.getValue());
        if (isNaN(targetVarCompNewValue)) {
          targetVarCompNewValue = 0;
        }
        if (isNaN(annualBaseSalNewValue)) {
          annualBaseSalNewValue = 0;
        }
        satNew.setValue((annualBaseSalNewValue + targetVarCompNewValue).toFixed(2));
      }

    }

  }

  calculate_Salaty_increase_rate(); //MOD-003 - MD KHAN - 25/05/2018 ++
};


/************ calculate monthly salary MOD-003 starts **************/

window.calculate_monthlySalary = function (anualBaseSalaryField, payPeriodField, monthlySalaryField) {

  if (monthlySalaryField) {
    if (anualBaseSalaryField) {
      if (payPeriodField) {
        var annualBaseSalValue = parseFloat(anualBaseSalaryField.getValue());
        var payPeriodsValue = parseFloat(payPeriodField.getValue());
        if (isNaN(annualBaseSalValue)) {
          annualBaseSalValue = 0;
        }
        if (isNaN(payPeriodsValue)) {
          payPeriodsValue = 0;
        }

        if (payPeriodsValue !== 0) {
          monthlySalaryField.setValue((annualBaseSalValue / payPeriodsValue).toFixed(2));
        }
        else {
          monthlySalaryField.setValue("");
        }


      }
    }
  }
};

//Calculate Salary Increase Percentage
window.calculate_Salaty_increase_rate = function () {
  var satNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR281');
  var satOld = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR280');
  var salaryIncreseField = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR436');

  if (satNew) {
    if (satOld) {
      var satNewValue = parseFloat(satNew.getValue());
      var satOldValue = parseFloat(satOld.getValue());
      if (isNaN(satNewValue)) {
        satNewValue = 0;
      }
      if (isNaN(satOldValue)) {
        satOldValue = 0;
      }
      //&& satNewValue >= satOldValue 
      if (satNewValue !== "") {

        if (satOldValue !== 0 && satOldValue !== "") {
          salaryIncreseField.setValue(((satNewValue - satOldValue) / satOldValue * 100).toFixed(2));
        }
        else {
          salaryIncreseField.setValue("");
        }
      }
      else {
        salaryIncreseField.setValue("");
      }

    }

  }
};
/********************************* MOD-003 ENDS *******************************/
/* -------------SET "Target variable compensation (100%)-ARC" based on "%Bonus"-------------- */
window.setCurrFields = function () {

  var currBonus = neocase.form.field('UTILISATEURS_CHAMPU294');
  var sat = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR280');
  var targetVarComp = neocase.form.field('UTILISATEURS$CHAMPU297');
  var annualBaseSal = neocase.form.field('UTILISATEURS$CHAMPU292');

  if (currBonus) {
    var currBonusValue = currBonus.getValue();
    if (targetVarComp) {
      if (currBonusValue > 0) {
        targetVarComp.setValue(" ");
      }
    }
    //SAT
    if (sat) {
      if (annualBaseSal) {
        var annualBaseSalValue = parseFloat(annualBaseSal.getValue());
        var targetVarCompValue = parseFloat(targetVarComp.getValue());
        if (isNaN(targetVarCompValue)) {
          targetVarCompValue = 0;
        }
        if (isNaN(annualBaseSalValue)) {
          annualBaseSalValue = 0;
        }
        if (currBonusValue > 0) {
          sat.setValue(annualBaseSalValue.toFixed(2));
        } else {
          sat.setValue((annualBaseSalValue + targetVarCompValue).toFixed(2));
        }

      }
    }
  }

};
/* ------------- Starts of MOD-002 changes ****CopyValueTo***** -------------*/
window.copyFunctions = function () {

  //copy
  neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');


  //copy Admin Supervisor name value
  neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');
  updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182"), neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR182").getValue());

  //copy HRBP name value
  neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');
  updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427"), neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR427").getValue());


};

//------------------------ Capgemini Developed Enable and Disable Code ---------------------
/* ------------- Starts of MOD-005 changes -------------*/
window.capgDisable = function (fieldGotByID) {
  var el = document.getElementById("prependedid" + fieldGotByID.id);
  if (el === null) {
    $(fieldGotByID).parent().prepend("<div id=\"prependedid" + fieldGotByID.id + "\" style=\"width: 100%; height: 37px; position: absolute;cursor: no-drop;\"></div>");
  }
};
/* ------------- Ends of MOD-005 changes -------------*/
window.capgEnable = function (fieldGotByID) {
  var el = document.getElementById("prependedid" + fieldGotByID.id);
  if (el) {
    el.parentNode.removeChild(el);
  }
};

window.disableFields = function () {
  //Disable "Job Category code (new)" Field
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); // MOD-002 ++
  //updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48"),neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48").getValue());
  //Disable "Status desc (new)" Field
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR301")); // MOD-002 ++
  //updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR301"),neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR301").getValue());	
  //Disable "Job title desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); // MOD-002 ++
  //Disable "Qualification desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR299")); // MOD-002 ++
  //Disable "Cost center / PU code (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR15")); // MOD-002 ++
  //Disable "Organisational unit desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR13")); // MOD-002 ++
  //Disable "Service Line desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR39")); // MOD-002 ++
  //Disable "Industry desc (new)"
  //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR31")); // MOD-002 ++
  //Disable "Default Approver name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR288")); // MOD-002 ++
  //Disable "Performance Reviewer name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); // MOD-002 ++
  //Disable "Mentor name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR166")); // MOD-002 ++
  //Disable "Admin Supervisor Name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183")); // MOD-002 ++
  //Disable "HR Delivery Partner name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR142")); // MOD-002 ++
  //Disable "HRBP name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386")); // MOD-002 ++
  //Disable "Assistant name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR407")); // MOD-002 ++
  //Disable "Training Approver name (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); // MOD-002 ++
  //Disable "SBU desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR231")); // MOD-002 ++
  //Disable "BU desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR232")); // MOD-002 ++
  //Disable "Default organisational unit code"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR406")); // MOD-002 ++
  //Disable "Organisational unit code (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR11")); // MOD-002 ++
  //Disable "Contract Type desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR291")); // MOD-002 ++
  //Disable "Nature of contract desc (new)"
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR295")); // MOD-002 ++
  //Disable 'Personal area desc (new)'
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR119")); // MOD-002 ++
  //Disable 'Personal Sub area desc (new)'
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR123")); // MOD-002 ++
  //Disable 'Monthly Salary (new)'
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR430")); // MOD-002 ++
  //Disable 'Salary increase % (new)'
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR436")); // MOD-002 ++

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR280"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR429"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR438"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR439"));
  //SAT (new)
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR281"));


};
//------------------------- Enable and Disable Code End -------------------------------------
/* ------------- End of MOD-002 changes -------------*/

/**************************
* start of MOD-006
**************************/
window.updateMandatoryField = function () {
  var lang = document.getElementById("PageHtml").lang.split("-")[0];
  if (lang == "fr") {
    reqMessage = "Type de changement";
  } else {
    reqMessage = "Change reason";
  }
  var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText(),
      getTopic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
  
  if (getTopic == "FR_Leaver" || getTopic == "Sortie des effectifs") {
    if (subtopic == "FR_04-Pre-hire cancelled" || subtopic == "04-Pré-Embauche annulée") {
      neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').noMandatory();
    } else {
      neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR221").mandatory();
    }
  }
  if (subtopic == "FR_01-With Pay Change" || subtopic == "01- Avec changement de salaire") {
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR404').mandatory();
  } else {
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR404').noMandatory();
  }
  
  if (subtopic == "FR_01-Probation Period – Renewal" || subtopic == "01-Période d’essai – Renouvellement") {
    console.log(subtopic);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR405').mandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR215').mandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR216').mandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR214').noMandatory();
  } else if (subtopic == "FR_03-Postpone probation end date" || subtopic == "03-décalage date de fin de PE") {
    console.log(subtopic);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR405').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR214').mandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR215').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR216').noMandatory();

  } else if (subtopic == "FR_02-Probation Period – Confirmation" || subtopic == "02-Période d’essai – Confirmation") {
    console.log(subtopic);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR405').mandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR215').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR216').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR214').noMandatory();

  } else {
    console.log(subtopic);
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR405').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR215').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR216').noMandatory(); 
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR214').noMandatory();
  }

  if (subtopic == "FR_23-Return from leave" || subtopic == "23-Retour absence") {

    neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').mandatory();
  } else {

    neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').noMandatory();
  }
  mandateLDP();//++MOD-011
};
window.mandateLDP = function(){//++MOD-011
  var subtopicVal = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
  if(subtopicVal !== '2608'){
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR134').noMandatory();
  }else{
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR134').mandatory();
  }
};

window.customMandatory = function () {
  this.setTimeout(function () {
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR405').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR215').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR216').noMandatory();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR214').noMandatory();   
  }, 1000);
};

var checkFlag = 0;
window.maxTwentyInField = function(){//++MOD-013
  var NombreDeJoursDemandes = formulaire.INTERVENTIONS_EN_COURS$VALEUR953.value;
  var HTMLlang = document.documentElement.lang;
  var errorText = HTMLlang == 'fr-FR'?'Nombre de jours demandés doit être au maximum de 20':'Nb of days requested should be max 20';
  if(NombreDeJoursDemandes > 20){
    alert(errorText);
    if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').length< 1){
      $('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').append('<span class="error" style="color:red">'+errorText+'</span>');
      formulaire.INTERVENTIONS_EN_COURS$VALEUR953.value = '';
      checkFlag = 1;
    }    
  }else{
    if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').length > 0){
      $('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').remove();
      checkFlag = 0;
    }
  }
};
/* ------------- End of MOD-006 changes -------------*/
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function () {
  //update 'level 1' value
  updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
  customMandatory();
  setPopups(); // MOD-002 ++
  copyFunctions(); // MOD-002 ++
  setCurrFields(); // MOD-002 ++
  //calculate_monthlySalary(); // MOD-002 ++	
  //Calculate Monthly Salary - MOD-003 ++	 Starts  
  disableFields();
  neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').noMandatory();

};

window.launchOnLoadComplete = function () {
  var annualBaseSal = neocase.form.field("UTILISATEURS_CHAMPU292");
  var payPeriods = neocase.form.field("UTILISATEURS_CHAMPU293");
  var monthlySal = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR429");
  calculate_monthlySalary(annualBaseSal, payPeriods, monthlySal);//Calculate Monthly Salary - Ends
  var subtopicVal = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
  if(subtopicVal == '2950'){
    neocase.form.section('section3dc29cfb4b66f60624d6').show();
  }else{
    neocase.form.section('section3dc29cfb4b66f60624d6').hide();
  }
  if(subtopicVal !== '2521'){
    neocase.form.section('section9cacda1c5df6b3756ff5').hide();
    neocase.form.section('sectiondf17165b4a6eeb5c05ea').hide();
  }else{
    neocase.form.section('section9cacda1c5df6b3756ff5').show();
    neocase.form.section('sectiondf17165b4a6eeb5c05ea').show();
  }
  neocase.form.section('sectionbaa26670b6d2f9108d7c').hide();
  if(subtopicVal == '2519' || subtopicVal == '2525'){
    neocase.form.section('sectionbaa26670b6d2f9108d7c').show(); 
  }
  /*-- ++MOD-007 --*/
  if(neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').getValue() == '2362' && neocase.form.field("INTERVENTIONS_EN_COURS_ELEMENT").getValue() == '2595'){ // If topic = FR-Career Change, Subtopic = FR_01- With pay change
	neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR279').noMandatory();
	capgDisable(formulaire.INTERVENTIONS_EN_COURS_VALEUR279); //disable/RO the field - Périodes de paie (nouveau) (Pay periods (new)) 
  }
  else if(neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').getValue() == '2362' && neocase.form.field("INTERVENTIONS_EN_COURS_ELEMENT").getValue() == '2605'){ // If topic = FR-Career Change, Subtopic = FR_02- Without pay change
	capgEnable(formulaire.INTERVENTIONS_EN_COURS_VALEUR279);	
	neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR279").mandatory(); //MANDATORY the field - Périodes de paie (nouveau) (Pay periods (new)) 
  }
  else{
	neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR279').noMandatory();
  }
  /*-- MOD-007 Ends --*/
  mandateLDP();//++MOD-011
};

/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { 
  maxTwentyInField();
  if(checkFlag == 1){
    return false;
  }else{
    return true;
  }
};

neocase.form.event.bind("init", launchOnInit);
neocase.form.event.bind("loadcomplete", launchOnLoadComplete);
neocase.form.event.bind("submit", launchOnSubmit);
