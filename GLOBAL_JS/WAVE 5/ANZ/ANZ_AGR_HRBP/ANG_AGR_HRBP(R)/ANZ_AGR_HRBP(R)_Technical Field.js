/*************ANZ_AGR_HRBP (R) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Debraj Sarkar
Date	    - 10/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
----------------------------------------------------------------------------*/ 
/*---- MOD-001 STARTS ----*/
//Hide Technical Section
//neocase.form.section("section39a7bc679a35938def73").hide();
checkSectionHide("section39a7bc679a35938def73");

//Hide Hidden Section
//neocase.form.section("sectionc3be57db76bac2ebe401").hide();

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
console.log('working2');
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
	//copy Target Var pay
	copyValue("UTILISATEURS$CHAMPU170", "INTERVENTIONS_EN_COURS$VALEUR77");
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
				calculation = (val_targetVarCompActual / val_employmentPercentage) * 100;
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

window.setAllPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR46, "/Custom_Referential/JobName.aspx?Id_User="); //set popup link to Job title new
    
};
window.disableCusFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR46")); //disbale Job title new
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR48")); //disbale Job category default (new)

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
console.log('Read Form');
	//copy_fields();
	//updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    //updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
	/********* for auto values **************/
	calculate_AnnualSalaryProrated();
	calculate_TargetVarCompProrated();
	calculate_AnnualSalaryAtActualFTE();
	calculate_TargetVarCompProratedNPI();
	/********* for auto values **************/
 };
neocase.form.event.bind("loadcomplete",launchOnInit);

/*---- MOD-001 ENDS ----*/
