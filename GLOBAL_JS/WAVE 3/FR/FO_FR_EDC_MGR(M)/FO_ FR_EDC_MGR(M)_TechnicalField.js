//FR_EDC_MGR(M) - FRONT END - Technical Code
/*---------------------------------------------

Developer   - Riya Dutta
Date	    - 03/29/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Code clean up
-----------------------------------------------
Developer   - MD KHAN	
Date	    - 05/07/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Phase 3 - Plan C
-------------------------------------------------
Developer   - Riya Dutta
Date	    - 06/01/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Service Line desc (new) pop-up Issue 
-------------------------------------------------
Developer   - Surajit Dalal
Date	    - 07/23/2018 (MM/DD/YYYY)
Change No   - MOD-004
Description - Signataire Employeur Nom  (EN = Signer 1 Name) pop-up and disable
-------------------------------------------------
Developer   - Smita Singh
Date	    - 07/29/2018 (MM/DD/YYYY)
Change No   - MOD-005
Description - Remove the pop up on the field "Signataire Employeur adresse mail (EN = Signer 1 email address)".
--------------------------------------------------
Developer   - Riya Dutta
Date	    - 11/28/2018 (MM/DD/YYYY)
Change No   - MOD-006
Description - Resolved Pop-up Disable Enable issue
----------------------------------------------------------------------------*/
//hide technical section
neocase.form.section("section2768aff2e9a727689da1").hide();

//Hiding "Hidden Section"
neocase.form.section("section1864d4eba29a638c63a0").hide();

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

//----------------------- Start of MOD-002 ++ ----------------------------------------------------
window.setPopups = function () {
    //'Contract type'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=&Id_Demande=");
    //'Job'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR46, "/Custom_Referential/JobName.aspx?Id_User=");
    //'Qualification'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR299, "/Custom_Referential/Qualification.aspx");
    //'Personal Area Description'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR119, "/Custom_Referential/PersonalArea.aspx");
    //'Personal Sub Area Description'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR123, "/Custom_Referential/PersonalArea.aspx");
    //'Cost center/PU'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR15, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");
    //'Organisational unit'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR13, "/Custom_Referential/OrgUnit.aspx");
    //'Service Line'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR39, "/Custom_Referential/ServiceLine.aspx");
    //'Industry'
    popupLink(formulaire.INTERVENTIONS_EN_COURS_VALEUR31, "/Custom_Referential/Industry.aspx");
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

    //Documents
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438, "/Custom_Referential/employee signer.aspx");	// MOD-004
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR439,"/Custom_Referential/employee signer.aspx");	// MOD-004 //MOD-005


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
        /* ------------- Starts of MOD-002 changes -------------*/
        if (fieldName == "INTERVENTIONS_EN_COURS$VALEUR311") {
            neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR295').setValue(fieldValue); //Set Value in "Nature of Contract descr (new)"
        }
        else if (fieldName == "INTERVENTIONS_EN_COURS_VALEUR310") {
            neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR294').setValue(fieldValue); //Set Value in "Nature of Contract code (new)"
        }
        else if (fieldName == "INTERVENTIONS_EN_COURS_VALEUR299") {
            if (fieldValue == "Stagiaire") {
                neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR305').setValue("Stagiaire"); //Annual working time (new)"
                capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR305);

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
        /* ------------- End of MOD-002 changes -------------*/
    } else {
        msg += "field " + fieldName + " not found";
        console.log(msg);
    }
};


//------------------------ Capgemini Developed Enable and Disable Code ---------------------

window.capgDisable = function (fieldGotByID) {
    /*------------- Starts of MOD-006 Changes --------------- */
    var el = document.getElementById("prependedid" + fieldGotByID.id);
    if (el === null) {
        $(fieldGotByID).parent().prepend("<div id=\"prependedid" + fieldGotByID.id + "\" style=\"width: 100%; height: 37px; position: absolute;cursor: no-drop;\"></div>");
    }
    /*------------- Ends of MOD-006 Changes --------------- */
};

window.capgEnable = function (fieldGotByID) {
    var el = document.getElementById("prependedid" + fieldGotByID.id);
    if (el) {
        el.parentNode.removeChild(el);
    }
};

window.bonusNew_onChanged = function () {
    var newBonus = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR282');
    var targetVarCompNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR328');
    var annualBaseSalNew = neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR278');

    if (newBonus) { //Bonus % (new)

        if (targetVarCompNew) { //Target Variable Compensation (100%) - ARC (new)
            var newBonusValue = newBonus.getValue();
            if (newBonusValue > 0) {
                targetVarCompNew.setValue(" ");
                calculate_SAT(); //MOD-003 - MD KHAN - 25/05/2018 ++
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



window.calculate_SAT = function () {
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

    calculate_Salaty_increase_rate();

};

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

//------------------------- Enable and Disable Code End -------------------------------------


//------------- Old Popup Codes ------ Start ------------------------------------------------
//Management Popup - Default - OK
FillCf_DefaultName_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR288.value = fieldValue;
};
FillCf_DefaultName_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR288.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS_VALEUR288, false);
};
FillCf_DefaultName_PersonelNum = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR289.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS_VALEUR289, false);
};

//Management Popup - Supervisor - OK
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

//Management Popup - Reviewer - OK
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

//Management Popup - Mentor - OK
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

//Management Popup - ServiceLine - OK
SC_Nm_ServiceLineCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR37.value = fieldValue;
};
SC_Nm_ServiceLineDesc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR39.value = fieldValue; //MOD-003
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};

//Management Popup - Industry - OK
SC_Nm_IndustryCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR29.value = fieldValue;
};
SC_Nm_IndustryDesc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS_VALEUR31.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};

//job name - OK
FillCf_Job_code = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
};
FillCf_Job_Desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};

FillCf_Job_Catg = function (fieldValue) {
    //fill field
    neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR48").setValue(fieldValue);
    staff_function_enable_disable(fieldValue);
};


window.staff_function_enable_disable = function (fieldValue) {
    /*------------- Starts of MOD-006 Changes --------------- */
    //disable other fields
    if (fieldValue == "CSS" || fieldValue == "DSP") {
        neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR417").setValue("");
        capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);

    } else if (fieldValue == "DSS") {
        capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
    } else {
        capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
    }
    /*------------- Ends of MOD-006 Changes --------------- */
};


// --------- Old Popup Codes - End -------------------------------------------------------- 


//calculate monthly salary 
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
                targetVarComp.setValue("");
            }
        }


        //SAT
        if (sat) {
            if (annualBaseSal) {
                var annualBaseSalValue = annualBaseSal.getValue();
                var targetVarCompValue = targetVarComp.getValue();
                if (currBonusValue > 0) {
                    sat.setValue(parseFloat(annualBaseSalValue).toFixed(2));
                } else {
                    sat.setValue((parseFloat(annualBaseSalValue) + parseFloat(targetVarCompValue)).toFixed(2));
                }

            }
        }
    }


};

window.copyValueToField = function (fieldToCopy, field) {
    try {
        neocase.form.field(fieldToCopy).copyValueTo(field);
    } catch (error) {
        console.log(error.message);
    }
};
/* ------------- End of MOD-002 changes -------------*/

window.disableFields = function () {
    //Disable fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"));
    //Disable SAT Field
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR281"));

    //Default organisational unit code
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR406"));
    //SBU desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR231"));
    //BU desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR232"));
    //Personal Sub area desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR123"));
    //Personal area desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR119"));

    //Personal area desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR119"));
    //Cost center / PU code (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR15"));
    //Organisational unit desc (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR13"));
    //Service Line desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR39"));
    //Industry desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR31"));
    //Organisational unit code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR11"));

    //Contract Type desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR291"));
    //Nature of contract desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR295"));

    //Qualification desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR299"));
    //Status desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR301"));

    //Job title desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR46"));
    //Job Category code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR48"));

    //Default Approver name (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR288"));
    //Performance Reviewer Name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR154"));
    //Mentor name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR166"));
    //Admin Supervisor Name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR183"));
    //HR Delivery Partner name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR142"));
    //HRBP name (new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR386"));
    //Assistant name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR407"));
    //Training Approver name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR409"));
    //Disable 'Monthly Salary (new)'
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR430")); // MOD-002 ++
    //Disable 'Salary increase % (new)'
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR436")); // MOD-002 ++

    //Documents Fields disable
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR438")); // MOD-004 ++
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR439")); // MOD-004 ++ 

};


//---------------------------- End Of MOD-002++ -------------------------------------------

window.checkSubtopicValue = function () {

    
    var lang = document.getElementById("PageHtml").lang.split("-")[0];
    if (lang == "fr") {
        reqMessage = "Type de changement";
    } else {
        reqMessage = "Change reason";
    }
    console.log(lang);
    var v = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    console.log("Current Subtopic is: " + v);

    if (v == "FR_01-With Pay Change" || v == "01- Avec changement de salaire") {

        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR404').mandatory(reqMessage);

    } else {
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR404').noMandatory();
    }
};
window.updateMandatoryField = function () { 
    var v = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    var getTopic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
    var x = document.getElementById('ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_ELEMENT');

    if (getTopic == "FR_Leaver" || getTopic == "Sortie des effectifs") {

        if (v == "FR_04-Pre-hire cancelled" || v == "04-Pré-Embauche annulée") {
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').noMandatory();
            console.log("The field is not mandatory");
            
        }


    }

    if (v == "FR_23-Return from leave" || v == "23-Retour absence") {

        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').mandatory();
      } else {
    
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').noMandatory();
      }
};
window.customMandatory = function () {
    this.setTimeout(function () {
        var v = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
        var getTopic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
        if (getTopic == "FR_Leaver") {

            console.log("getTopic", getTopic);
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').mandatory();
            //$('#ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221').css("visibility", "visible");
           // $("#ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221").attr("neo-required-message", "Last working day ");
            //$('#divFieldINTERVENTIONS_EN_COURS_VALEUR221').children('.ui-datepicker-trigger').after("<span id='ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221' class='ValidatorCautionBox mix-caseForm-validatorCautionBox' style='color: red; visibility: visible;' title='Last working day'></span>");
        } else if (getTopic == "Sortie des effectifs") {
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').mandatory();
            //$('#ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221').css("visibility", "visible");
           // $("#ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221").attr("neo-required-message", "Dernier jour contrat ");
            //$('#divFieldINTERVENTIONS_EN_COURS_VALEUR221').children('.ui-datepicker-trigger').after("<span id='ctl04_ctl15_ctl00_INTERVENTIONS_EN_COURS_VALEUR221' class='ValidatorCautionBox mix-caseForm-validatorCautionBox' style='color: red; visibility: visible;' title='Last working day'></span>");
        }
    }, 1000);

};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function () {
    var v = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    console.log('fin période dessai init', v);
    neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR380').noMandatory();
    // customMandatory();
    copyValueToField('INTERVENTIONS_EN_COURS$VALEUR903', 'INTERVENTIONS_EN_COURS$VALEUR134');
    copyValueToField('INTERVENTIONS_EN_COURS$VALEUR902', 'INTERVENTIONS_EN_COURS$VALEUR5');
    
    disableFields();

    setPopups();
    setCurrFields(); //MOD-002++
    updateMandatoryField();

    //Calculate Monthly Salary - Starts - MOD-002++
    var annualBaseSal = neocase.form.field("UTILISATEURS_CHAMPU292");
    var payPeriods = neocase.form.field("UTILISATEURS_CHAMPU293");
    var monthlySal = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR429");
    calculate_monthlySalary(annualBaseSal, payPeriods, monthlySal);
    //Calculate Monthly Salary - Ends - MOD-002++

    var staff_function_value = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR48").getValue();//MOD-002++
    staff_function_enable_disable(staff_function_value); //MOD-002++
    bonusNew_onChanged(); //MOD-002++
    checkSubtopicValue();

};
neocase.form.event.bind("init", launchOnInit);
neocase.form.event.bind('loadcomplete', function () {
    console.log('fin période dessai loadComplete', formulaire.INTERVENTIONS_EN_COURS$VALEUR134.value);
    /*------------- Starts of MOD-006 Changes --------------- */
    //Staff function if DSS (new)
    if (neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48").getValue() !== "DSS") {
        capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR417);
    }
    /*------------- Ends of MOD-006 Changes --------------- */

});

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function () {

    //add control before submit
    checkForm();
};
neocase.form.event.bind("submit", launchOnSubmit);
