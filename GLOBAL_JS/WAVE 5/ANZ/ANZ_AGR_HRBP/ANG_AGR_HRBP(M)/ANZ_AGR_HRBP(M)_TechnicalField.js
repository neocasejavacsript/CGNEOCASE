/*************ANZ_AGR_HRBP-(M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Debraj Sarkar
Date	    - 10/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Popups implemented for Job details,contract-type sections
----------------------------------------------------------------------------
Developer   - Debraj Sarkar
Date	    - (MM/DD/YYYY)
Change No   - MOD-003
Description - 
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/25/2019 (MM/DD/YYYY)
Change No   - MOD-004
Description - Popups implemented for 6-management team sections
----------------------------------------------------------------------------*/ 
var initialEndDate;
var initalstartDate;
//Hide Technical Section
neocase.form.section("sectione453b51c6ac1bb6eb1ce").hide();
/***********************************
 * COPY VALUE FROM 1 FIELD TO ANOTHER
 ************************************/
window.copyValue = function(copyField, pasteField) {
    var msg = "fonction copyValue : ";
    var fieldTd = document.getElementsByClassName("fieldTD");
    if (fieldTd.length > 0) {
        //BackOffice side
        msg += "backoffice side";
        //COPY BKO FIELD
        //--------------
        var bkoCopyFieldValue = "";
        if (document.getElementById(copyField) === null) {
            //if copy field not found
            console.log("field to copy " + copyField + " not found");
            //return false;
        } else {
            //if copy field exists
            //get field value
            if (document.getElementById(copyField).type == "select" || document.getElementById(copyField).type == "select-one") {
                //copy select field
                bkoCopyFieldValue = document.getElementById(copyField).options[document.getElementById(copyField).selectedIndex].text;
            } else {
                //copy text field
                bkoCopyFieldValue = document.getElementById(copyField).value;
            }
        }

        //PASTE BKO FIELD
        //---------------
        //Only paste value if copy field existes
        if (bkoCopyFieldValue != "") {
            var bkoPasteFieldValue = "";
            if (document.getElementById(pasteField) === null) {
                //if paste field not found
                console.log("field to paste " + pasteField + " not found");
                //return false;
            } else {
                //if both fields exists we paste the values
                //Read Only fields
                if (pasteField.readOnly === true) {
                    //Readonly fields, disable it
                    document.getElementById(pasteField).readOnly = false;
                    //paste value
                    document.getElementById(pasteField).value = bkoCopyFieldValue;
                    //save
                    ThisCase.BackgroundMode.Begin();
                    ThisCase.BackgroundMode.Execute('enregistreronly()');
                    //enable readOnly
                    document.getElementById(pasteField).readOnly = true;
                    ThisCase.BackgroundMode.Execute('enregistreronly()');
                    ThisCase.BackgroundMode.Stop();
                } else {
                    //Standard custom fields
                    if (document.getElementById(pasteField).type == "select" || document.getElementById(pasteField).type == "select-one") {
                        //select fields
                    } else {
                        //text fields
                        document.getElementById(pasteField).value = bkoCopyFieldValue;
                    }
                }
            }
        }
    } else {
        //FrontOffice side
        msg += "frontOffice side";
        //get copy field type and valeur
        var froCopyFieldCustomType = "";
        var froCopyFieldValeur = "";
        var froCopyFieldId = "";
        if (copyField.search("_") != -1) {
            if (copyField.split("$").length > 0) {
                if (copyField.split("_").length > 0) {
                    froCopyFieldCustomType = copyField;
                    var froCopyFieldValeurSplit = copyField.split("_");
                    var froCopyFieldValeurSplitLength = Number(froCopyFieldValeurSplit.length);
                    froCopyFieldValeur = froCopyFieldValeurSplit[froCopyFieldValeurSplitLength - 1];
                } else {
                    froCopyFieldCustomType = copyField.split("$")[0];
                    froCopyFieldValeur = copyField.split("$")[1];
                }
            } else if (copyField.split("_").length > 0) {
                froCopyFieldCustomType = copyField;
                var froCopyFieldSplit = copyField.split("_");
                var froCopyFieldSplitLength = Number(froCopyFieldSplit.length);
                froCopyFieldValeur = froCopyFieldSplit[froCopyFieldSplitLength - 1];
            } else {
                msg += " / copyfield values not found";
                console.log(msg);
            }
        } else {
            if (copyField.search("MOTSCLES") != -1) {
                froCopyFieldId = "MOTCLE";
            } else {
                msg += "no copyField found";
                console.log(msg);
            }
        }
        //get paste field type and valeur
        var froPasteFieldCustomType = "";
        var froPasteFieldValeur = "";
        var froPasteFieldId = "";
        if (pasteField.search("_") != -1) {
            if (pasteField.split("$").length > 1) {
                if (copyField.split("_").length > 0) {
                    froPasteFieldCustomType = pasteField;
                    var froPasteFieldValeurSplit = pasteField.split("_");
                    var froPasteFieldValeurSplitLength = Number(froPasteFieldValeurSplit.length);
                    froPasteFieldValeur = froPasteFieldValeurSplit[froPasteFieldValeurSplitLength - 1];
                } else {
                    froPasteFieldCustomType = pasteField.split("$")[0];
                    froPasteFieldValeur = pasteField.split("$")[1];
                }
            } else if (pasteField.split("_").length > 1) {
                froPasteFieldCustomType = pasteField;
                var froPasteFieldSplit = pasteField.split("_");
                var froPasteFieldSplitLength = Number(froPasteFieldSplit.length);
                froPasteFieldValeur = froPasteFieldSplit[froPasteFieldSplitLength - 1];
            } else {
                msg += " / pastefield values not found";
                console.log(msg);
            }
        } else {
            if (pasteField.search("MOTSCLES") != -1) {
                froPasteFieldId = "MOTCLE";
            } else {
                msg += "no pasteField found";
                console.log(msg);
            }
        }
        //variables
        var froCopyField = "";
        var froCopyFieldValue = "";
        var froPasteField = "";
        var froPasteFieldType = "";

        //COPY FRO FIELD
        //--------------
        //get form sections
        var sections = document.getElementsByClassName("bloc");
        if (sections.length > 0) {
            //loop on every sections
            for (s = 0; s< sections.length; s++) {
                var froSelect = sections[s].getElementsByTagName("select");

                //LOOP ON SELECT
                //--------------
                if (froSelect.length > 0) {
                    for (fs = 0; fs< froSelect.length; fs++) {
                        //search copy field
                        if (froCopyFieldId == "") {
                            //search type correspondance
                            if (froSelect[fs].id.search(froCopyFieldCustomType) != -1) {
                                //search valeur correspondance
                                var froSelectCopySplit = froSelect[fs].id.split("_");
                                var froSelectCopyValeur = Number(froSelectCopySplit.length);
                                var froSelectCopyLast = froSelectCopySplit[froSelectCopyValeur - 1];
                                if (froSelectCopyLast == froCopyFieldValeur) {
                                    //if correspondance is found, we stock the copy field
                                    froCopyField = froSelect[fs];
                                    froCopyFieldValue = froSelect[fs].options[froSelect[fs].selectedIndex].text;
                                }
                            }
                        } else {
                            if (froSelect[fs].id.search(froCopyFieldId) != -1) {
                                //if correspondance is found, we stock the copy field
                                froCopyField = froSelect[fs];
                                froCopyFieldValue = froSelect[fs].options[froSelect[fs].selectedIndex].text;
                            }
                        }

                        //search paste field
                        if (froPasteFieldId == "") {
                            //search type correspondance
                            if (froSelect[fs].id.search(froPasteFieldCustomType) != -1) {
                                //search valeur correspondance
                                var froSelectPasteSplit = froSelect[fs].id.split("_");
                                var froSelectPasteValeur = Number(froSelectPasteSplit.length);
                                var froSelectPasteLast = froSelectPasteSplit[froSelectPasteValeur - 1];
                                if (froSelectPasteLast == froPasteFieldValeur) {
                                    //if correspondance is found, we stock the paste field
                                    froPasteField = froSelect[fs];
                                    froPasteFieldType = "select";
                                }
                            }
                        } else {
                            if (froSelect[fs].id.search(froPasteFieldId) != -1) {
                                //if correspondance is found, we stock the paste field
                                froPasteField = froSelect[fs];
                                froPasteFieldType = "select";
                            }
                        }
                    }
                }
                //if one of the copy/paste field isn't found, we search on input
                if (froCopyField == "" || froPasteField == "") {
                    var froInput = sections[s].getElementsByTagName("input");

                    //LOOP ON INPUT
                    //-------------
                    if (froInput.length > 0) {
                        for (fi = 0; fi< froInput.length; fi++) {
                            //search copy field
                            if (froCopyFieldId == "") {
                                //search type correspondance
                                if (froInput[fi].id.search(froCopyFieldCustomType) != -1) {
                                    //search valeur correspondance
                                    var froTextCopySplit = froInput[fi].id.split("_");
                                    var froTextCopyValeur = Number(froTextCopySplit.length);
                                    var froTextCopyLast = froTextCopySplit[froTextCopyValeur - 1];
                                    if (froTextCopyLast == froCopyFieldValeur) {
                                        //if correspondance is found, we stock the copy field
                                        froCopyField = froInput[fi];
                                        froCopyFieldValue = froInput[fi].value;
                                    }
                                }
                            } else {
                                if (froInput[fi].id.search(froCopyFieldId) != -1) {
                                    //if correspondance is found, we stock the copy field
                                    froCopyField = froInput[fi];
                                    froCopyFieldValue = froInput[fi].value;
                                }
                            }

                            //search paste field
                            if (froPasteFieldId == "") {
                                //search type correspondance
                                if (froInput[fi].id.search(froPasteFieldCustomType) != -1) {
                                    //search valeur correspondance
                                    var froTextPasteSplit = froInput[fi].id.split("_");
                                    var froTextPasteValeur = Number(froTextPasteSplit.length);
                                    var froTextPasteLast = froTextPasteSplit[froTextPasteValeur - 1];
                                    if (froTextPasteLast == froPasteFieldValeur) {
                                        //if correspondance is found, we stock the paste field
                                        froPasteField = froInput[fi];
                                        froPasteFieldType = "text";
                                    }
                                }
                            } else {
                                if (froInput[fi].id.search(froPasteFieldId) != -1) {
                                    //if correspondance is found, we stock the paste field
                                    froPasteField = froInput[fi];
                                    froPasteFieldType = "text";
                                }
                            }
                        }
                    }
                }
                //if one of the copy/paste field isn't found, we search on readonly fields
                if (froCopyField == "" || froPasteField == "") {
                    var froSpan = sections[s].getElementsByTagName("span");

                    //LOOP ON SPAN
                    //------------
                    if (froSpan.length > 0) {
                        for (fsp = 0; fsp< froSpan.length; fsp++) {
                            //take away mandatory fields indicators span
                            if (froSpan[fsp].id.search("Validator") == -1) {
                                //search copy field
                                if (froCopyFieldId == "") {
                                    //search type correspondance
                                    if (froSpan[fsp].id.search(froCopyFieldCustomType) != -1) {
                                        //search valeur correspondance
                                        var froReadonlyCopySplit = froSpan[fsp].id.split("_");
                                        var froReadonlyCopyValeur = Number(froReadonlyCopySplit.length);
                                        var froReadonlyCopyLast = froReadonlyCopySplit[froReadonlyCopyValeur - 1];
                                        if (froReadonlyCopyLast == froCopyFieldValeur) {
                                            //if correspondance is found, we stock the copy field
                                            froCopyField = froSpan[fsp];
                                            froCopyFieldValue = froSpan[fsp].innerHTML;
                                        }
                                    }
                                } else {
                                    if (froSpan[fsp].id.search(froCopyFieldId) != -1) {
                                        //if correspondance is found, we stock the copy field
                                        froCopyField = froSpan[fsp];
                                        froCopyFieldValue = froSpan[fsp].innerHTML;
                                    }
                                }

                                //search paste field
                                if (froPasteFieldId == "") {
                                    //search type correspondance
                                    if (froSpan[fsp].id.search(froPasteFieldCustomType) != -1) {
                                        //search valeur correspondance
                                        var froReadonlyPasteSplit = froSpan[fsp].id.split("_");
                                        var froReadonlyPasteValeur = Number(froReadonlyPasteSplit.length);
                                        var froReadonlyPasteLast = froReadonlyPasteSplit[froReadonlyPasteValeur - 1];
                                        if (froReadonlyPasteLast == froPasteFieldValeur) {
                                            //if correspondance is found, we stock the paste field
                                            froPasteField = froSpan[fsp];
                                            froPasteFieldType = "readonly";
                                        }
                                    }
                                } else {
                                    if (froSpan[fsp].id.search(froPasteFieldId) != -1) {
                                        //if correspondance is found, we stock the paste field
                                        froPasteField = froSpan[fsp];
                                        froPasteFieldType = "readonly";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //PASTE FRO FIELD
        //---------------
        //first check if both fields exist
        if (froCopyField == "") {
            //alert("field to copy "+copyField+" not found");
        } else if (froPasteField == "") {
            //alert("field to paste "+pasteField+" not found");
        } else {
            //If fields exist, we paste the value
            if (froPasteFieldType == "select") {
                //if paste field is a select
            } else if (froPasteFieldType == "text") {
                //if paste field is a text
                froPasteField.value = froCopyFieldValue;
            } else if (froPasteFieldType == "readonly") {
                //if paste field is in read only
                froPasteField.innerHTML = froCopyFieldValue;
            } else {
                //error, no matching type found for paste field
                alert("Unknown type for " + froPasteField);
            }
        }
    }
};

/*************************** Copying fields starts*******************************/

window.copy_fields = function() {
	//copy Personal Sub Area Desc value
	copyValue("UTILISATEURS$CHAMPU29", "INTERVENTIONS_EN_COURS$VALEUR122");
	//copy Employment Percentage value
	copyValue("UTILISATEURS$CHAMPU248", "INTERVENTIONS_EN_COURS$VALEUR593");
	//copy Admin Supervisor name value
	copyValue("UTILISATEURS$CHAMPU152", "INTERVENTIONS_EN_COURS$VALEUR182");
	//copy HRBP name value
	copyValue("UTILISATEURS$CHAMPU58", "INTERVENTIONS_EN_COURS$VALEUR427");
	//copy Fixed term contract end date value
	copyValue("UTILISATEURS$CHAMPU186", "INTERVENTIONS_EN_COURS$VALEUR125");
	//copy Local Grade value
	copyValue("UTILISATEURS$CHAMPU35", "INTERVENTIONS_EN_COURS$VALEUR41");
	//copy Target Var pay
	copyValue("UTILISATEURS$CHAMPU170", "INTERVENTIONS_EN_COURS$VALEUR693");
             //neocase.form.field('UTILISATEURS$CHAMPU186').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR125');
};
/************************** Copying fields ends*********************************/

/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--Start -------*/

window.calculate_TargetVarCompProratedNPI = function() {
	var targetVarCompActual = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR385");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var targetVarCompproratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567");

	var val_targetVarCompActual = targetVarCompActual.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();

 	var calculation;
              console.log(val_targetVarCompActual);
	if(targetVarCompActual){
		if(employmentPercentage){
			if(isNaN(val_targetVarCompActual)){
				calculation = 0;
			}else if(isNaN(val_employmentPercentage)){
				calculation = 0;
			}else{
				calculation = (val_targetVarCompActual * val_employmentPercentage) / 100;
			}
			targetVarCompproratedNew.setValue(calculation.toFixed(2));
		}
	}


};
/*---------------------------For ANZ Target Var Comp Prorated NPI calculation--End --------*/

/*---------------------------For ANZ Annual Salary At Actual FTE calculation--Start -------*/

window.calculate_AnnualSalaryAtActualFTE = function() {
	var annualSalaryAtActualFTENew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR278");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var annualSalaryProratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565");

	var val_annualSalaryAtActualFTENew = annualSalaryAtActualFTENew.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();

 	var calculation;
             
	if(annualSalaryAtActualFTENew){
		if(employmentPercentage){			
			if(isNaN(val_annualSalaryAtActualFTENew)){
				calculation = 0;
			}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
			}else{
				calculation = (val_annualSalaryAtActualFTENew * val_employmentPercentage) / 100;
			}
			annualSalaryProratedNew.setValue(calculation.toFixed(2));
			
		}
	}


};
/*---------------------------For ANZ Annual Salary At Actual FTE calculation--End --------*/

/*---------------------------For ANZ Target Var Comp Prorated calculation--Start -------*/

window.calculate_TargetVarCompProrated = function() {
	var targetVarCompprorated = neocase.form.field("UTILISATEURS$CHAMPU170");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var employmentPercentageNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR249");
	var targetVarCompproratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78");

	var val_targetVarCompprorated = targetVarCompprorated.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();
	var val_employmentPercentageNew = employmentPercentageNew.getValue();

 	var calculation;
             
	if(targetVarCompprorated){
		if(employmentPercentage){
			if(employmentPercentageNew){
				if(isNaN(val_targetVarCompprorated)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentageNew)){
					calculation = 0;
				}else{
					calculation = (val_targetVarCompprorated / val_employmentPercentage) * val_employmentPercentageNew;
				}
				targetVarCompproratedNew.setValue(calculation.toFixed(2));
			}
		}
	}


};
/*---------------------------For ANZ Target Var Comp Prorated calculation--End --------*/

/*---------------------------For ANZ Annual salary prorated calculation --Start ---------*/

window.calculate_AnnualSalaryProrated = function() {
	var annualSalaryProrated = neocase.form.field("UTILISATEURS$CHAMPU168");
	var employmentPercentage = neocase.form.field("UTILISATEURS$CHAMPU248");
	var employmentPercentageNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR249");
	var annualSalaryProratedNew = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76");

	var val_annualSalaryProrated = annualSalaryProrated.getValue();
	var val_employmentPercentage = employmentPercentage.getValue();
	var val_employmentPercentageNew = employmentPercentageNew.getValue();

 	var calculation;
             
	if(annualSalaryProrated){
		if(employmentPercentage){
			if(employmentPercentageNew){
				if(isNaN(val_annualSalaryProrated)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentage)){
					calculation = 0;
				}else if(isNaN(val_employmentPercentageNew)){
					calculation = 0;
				}else{
					calculation = (val_annualSalaryProrated / val_employmentPercentage) * val_employmentPercentageNew;
				}
				annualSalaryProratedNew.setValue(calculation.toFixed(2));
			}
		}
	}


};
/*---------------------------For ANZ Annual salary prorated calculation --End---------*/

FillCf_Job_code = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR44.value = fieldValue;
};
FillCf_Job_Desc = function(fieldValue){
	formulaire.INTERVENTIONS_EN_COURS$VALEUR46.value = fieldValue;
};
FillCf_Job_Catg = function(fieldValue){
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48").setValue(fieldValue);
	if(fieldValue == "CSS" || fieldValue == "DSP"){
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR52").setValue("");
		capgDisable(formulaire.INTERVENTIONS_EN_COURS$VALEUR52);

	}else if (fieldValue == "DSS"){
		capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR52);
	}
	else{
		capgEnable(formulaire.INTERVENTIONS_EN_COURS$VALEUR52);
	}
};
//Management Popup - Reviewer
FillCf_Reviewer_First_Name = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};
FillCf_Reviewer_LocalID = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR156.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR156, false);
};

//Management Popup - supervisor
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
window.setAllPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); //set popup link to Job title new
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User="); //set popup link to ContratType
    //Management Team pop-ups
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, "/Custom_Referential/ManagerReviewer.aspx?Id_User="); //set popup link to Performance reviewer name (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR386, "/Custom_Referential/ManagerHRBP.aspx?Id_User="); // set popup link to HRBP
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, "/Custom_Referential/ManageSupervisor.aspx?Id_User=");//set popup link to Admin supervisor (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR409,"/Custom_Referential/TrainingApprover.aspx?Id_User="); //set popup link to Training Approver
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR288, "/Custom_Referential/ManagerDefaultName.aspx");//set popup link to Default approver	
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR142, "/Custom_Referential/ManagerHRDP.aspx?Id_User=");//set popup link to HR Delivery Partner name (new)	
	
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/PersonalArea.aspx"); //set popup link to Personal sub area [Work location]
};
window.disableCusFields = function(){
	disableField(neocase.form.field("UTILISATEURS$CHAMPU35")); // disable
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR41")); //disbale Local Grade
    //Job Details disable-fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); //disbale Job title new
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); //disbale Job category default (new)
    //Contract type disable-fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR291")); //Disable "Contract type desc (new)"
    //Auto-calculation disable fields
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76")); // disable annual salary prorated
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78")); // disable Target Var Comp Prorated
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR565")); // disable Annual Salary At Actual FTE
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR567")); // disable Target Var Comp Prorated NPI
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR693")); // disable Target Var Comp Actual NPI
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR593")); // disable Employment percentage
    //Management Team disable-fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR154")); //disbale performance reviewer(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR386")); //disbale HRBP name(new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR183")); //disable Admin supervisor (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR409")); //disable Training Approver name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR288")); //disable Default Approver name (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR142")); //disable HR Delivery Partner name (new)
};


/*------- Convert Date and time format from a field string date value-------*/
window.convertToDateTime = function(values){
	var dateSplit = values.split("/"),
		dateFormatUTC = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]),
		dateToTime = dateFormatUTC.getTime();
	return dateToTime;
};
window.validAbsenceStartEndDate = function(AbsenceStartDateField, AbsenceendDateField){
	
	var startDate = convertToDateTime(neocase.form.field(AbsenceStartDateField).getValue()),
		endDate = convertToDateTime(neocase.form.field(AbsenceendDateField).getValue());
    var startDateText = $.trim($('#'+ neocase.form.field(AbsenceStartDateField)['elementHTML']['id']).closest('.row').find('label').text()),
        endDateText = $.trim($('#'+ neocase.form.field(AbsenceendDateField)['elementHTML']['id']).closest('.row').find('label').text());
		if(startDate !== null && endDate !== null){
			if(endDate< startDate){
                var alertText = "'"+endDateText+"' " +"must be greater than"+" '"+startDateText+"'";
				alert(alertText);
				neocase.form.field(AbsenceStartDateField).setValue(initalstartDate);
				neocase.form.field(AbsenceendDateField).setValue(initialEndDate);
			}
			else{
				initialEndDate = neocase.form.field(AbsenceendDateField).getValue(); // get previously loaded value of expected return date
				initalstartDate = neocase.form.field(AbsenceStartDateField).getValue(); // get previously loaded value of ansence start date
			}
		}
	
};
/*----------------Show action reason against the subtopic ----------------------*/
window.showActionReason = function(){
	var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();//getParamFromUrl('subtopic');
	var x = document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options.length;
	console.log(x+subtopic);
	var ar = new Array();
	
	ar['1'] = [];
	ar['1'][0]="Adjustment";
	ar['1'][1]="Annual Salary Increase";
	ar['1'][2]="Change in Superannuation";
	ar['1'][3]="Mid Year Salary Increase";
	ar['1'][4]="Pay Rate Change-Other";
	ar['1'][5]="Quarterly Salary Increase";
	ar['1'][6]="Retention";
	ar['1'][7]="Step Progression";
	ar['2812'] = [];
	ar['2812'][0]="Cost center change";
	ar['2813'] = [];
	ar['2813'][0]="Demotion";
	ar['2739'] = [];
	ar['2739'][0]="Extension to FTC";
	ar['2736'] = [];
	ar['2736'][0]="FT to PT";
	ar['2736'][1]="PT to FT";
	ar['2736'][2]="PT to PT";
	ar['2732'] = [];
	ar['2732'][0]="Job Reclassification";
	ar['2732'][1]="Lateral Change";
	ar['2741'] = [];
	ar['2741'][0]="Work location transfer";
	ar['2808'] = [];
	ar['2808'][0]="Change in management team";
//console.log(ar[1][0]);
	var j = 0;
	for(var i=1; i<x; i++){
		//console.log(ar[subtopic][j] + ' = '+document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options[i].text);
		if(ar[subtopic][j] == document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").options[i].text){
			j++;
		}else{
			document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR555").remove(i);
		}
	}
};

//------------------------ Capgemini Developed Enable and Disable Code ---------------------
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
/**************************
* Launch Javascript on init
***************************/


window.launchOnInit = function(){
console.log('Modify Form');
	copy_fields();
	//updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    //updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
	
	setAllPopups();
	disableCusFields();
	/********* for auto values **************/
	calculate_AnnualSalaryProrated();
	calculate_TargetVarCompProrated();
	calculate_AnnualSalaryAtActualFTE();
	calculate_TargetVarCompProratedNPI();
    /********* for auto values **************/
    
    //document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR249").onkeyup = function() {
        formulaire.INTERVENTIONS_EN_COURS$VALEUR249.onkeyup = function(){
            calculate_AnnualSalaryProrated();
            calculate_TargetVarCompProrated();
        };
        
        formulaire.INTERVENTIONS_EN_COURS$VALEUR278.onkeyup = function(){
            calculate_AnnualSalaryAtActualFTE();
        };
    
        formulaire.INTERVENTIONS_EN_COURS$VALEUR385.onkeyup = function(){
            calculate_TargetVarCompProratedNPI();
        };



	//document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR249").onkeyup = function() {calculate_AnnualSalaryProrated();};
	//document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR249").onkeyup = function() {calculate_TargetVarCompProrated();};
	//document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR278").onkeyup = function() {calculate_AnnualSalaryAtActualFTE();};
	//document.getElementById("ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_VALEUR385").onkeyup = function() {calculate_TargetVarCompProratedNPI();};
 };
neocase.form.event.bind("init",launchOnInit);


window.launchOnComplete = function(){
	//showActionReason();
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT")); // disable subtopic
	//showWorkingHoursSection();
	//showNonPayrollSection();
	if(document.getElementById('sectionc8fded7f6ce7b8116c5d').style.display != "none"){	
		initialstartDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR333').getValue();
		initialEndDate =  neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').getValue();

		setTimeout(function(){
			// function definition is on technical field where parameter1 = AbsenceStartDateField ; parameter2 = AbsenceendDateField in validAbsenceStartEndDate(parameter1, parameter2)
		   validAbsenceStartEndDate('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503');
		}, 800);
	}
	
	
	if(document.getElementById('sectionbaf5cef04094c6c8cccc').style.display != "none"){
		initialStartDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR373').getValue();
		initialEndDate =  neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR374').getValue();
		setTimeout(function(){
			// function definition is on technical field where parameter1 = AbsenceStartDateField ; parameter2 = AbsenceendDateField in validAbsenceStartEndDate(parameter1, parameter2, parameter3)
		   validAbsenceStartEndDate('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374');
		}, 800);
	}


 };
neocase.form.event.bind('loadcomplete',launchOnComplete);
/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { 
	// validAbsenceStartEndDate();
};
neocase.form.event.bind("submit", launchOnSubmit);
