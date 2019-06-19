/**************		MA_LEAVERS_INVOLUNTARY - (C) - FO Technical Fields	*************
****************************************************************
Modified version - MOD-001
Developer Name: Smita Singh
Date: 25/05/2017
Description: To modify the existing code with the new requirement
****************************************************************
****************************************************************
Modified version - MOD-002
Developer Name: SURAJIT DALAL
Date: 17/06/2017
Description: Updated WHOLE JS
****************************************************************
****************************************************************
Modified version - MOD-003
Developer Name: SMITA SINGH
Date: 21/06/2017
Description: Updated JS for break of probation
****************************************************************
****************************************************************
Modified version - MOD-004
Developer Name: Benjamin Chesson
Date: 29/06/2017
Description: Change value property by code

****************************************************************
****************************************************************/

/**************
 * Hide Sections
 ***************/
//Technical section
ThisForm.HideSection("section505");


/********************************************* Begin modifed version MOD-001 ********************************************
******************************************
Function to separate code from description
******************************************/


/*window.getCodeFromString = function(myString){

	var code1 = myString.split("|");
	var code2 = myString.split("Þ");
	var flag = "0";
	
	if(code1.length > 1) {
		flag = 1;
		return code1[0];
	}
	if(code2.length > 1) {
		flag = 1;
		return code2[0];
	}
	
	if(flag == "0"){
		return "";
	}
}; */


//Rehire eligible
window.RehireEligibleDropBoxChng = function() {
    if (formulaire.INTERVENTIONS_EN_COURS$VALEUR222.options[formulaire.INTERVENTIONS_EN_COURS$VALEUR222.selectedIndex].getAttribute("code") == "352") {
        (formulaire.INTERVENTIONS_EN_COURS$VALEUR355).value = "1";
    }
    if (formulaire.INTERVENTIONS_EN_COURS$VALEUR222.options[formulaire.INTERVENTIONS_EN_COURS$VALEUR222.selectedIndex].getAttribute("code") == "353") {
        (formulaire.INTERVENTIONS_EN_COURS$VALEUR355).value = "2";
    }
};

/********************************************* End modifed version MOD-001 ********************************************/




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


window.getParamFromUrl = function(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function(m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;

};


/****************************
 * AUTOMATICALLY FILL SUBTOPIC
 *****************************/
window.manageSubtopic = function() {
    var msg = "function manageSubtopic : ";
    var getSubtopic = localStorage.getItem('subtopic');

    var field = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;

    //if(field.value != "0"){
    var subtopic = getParamFromUrl('subtopic');
    if (subtopic) {
        if (field) {
            field.value = subtopic;
        } else {
            msg += "field undefined";
            console.log(msg);
        }
    } else {
        msg += subtopic + " undefined";
        console.log(msg);
    }
    //}
    /*
    if(field.value != "0"){
    	if(getSubtopic){
    		if(field){
    			if(getSubtopic == "Involuntary Leave (Planned)"){
    				field.value = "2198";
    			}else if(getSubtopic == "Involuntary Leave (Confirmed)") {
    				field.value = "2199";
    			}else if(getSubtopic == "End of Fixed Term Contract Confirmed") {
    				field.value = "2200";
    			}else if(getSubtopic == "Break of Probation Period Confirmed") {
    				field.value = "2201";
    							
    			}else{
    				msg += "no matching value found between field list and localStorage.getItem(subtopic)";
    			}
    			if(field.value != ""){
    				champObligatoire(formulaire.INTERVENTIONS_EN_COURS$ELEMENT, false);
    			}
    		}else{
    			msg += "field undefined";
    			console.log(msg);
    		}
    		//launch dependencies
    		//INTERVENTIONS_EN_COURS_ELEMENT_onchange();
    	}else{
    		msg += "localStorage.getItem(subtopic) undefined";
    		console.log(msg);
    	}
    }else{
    console.log("field value is 0");
    } */
};
/*************************************************
 * Manage Default Probation status code and Desc
 **************************************************/

window.defaultProbationStatusCodeDesc = function() {
    var msg = "function default Pobation status desc : ";

    var probationStatusDescField = formulaire.INTERVENTIONS_EN_COURS$VALEUR132;
    //var probationStatusDescValue = "415ÞUnsuccessful";
    if (probationStatusDescField) {
        //probationStatusDescField.value = probationStatusDescValue;
        $(probationStatusDescField).find('option[code*=415]').prop('selected', true); //default to unsuccessful		
    } else {
        msg += "Probation status description field non found";
        console.log(msg);
    }
};

/***************
 * DISABLE FIELDS
 ****************/
window.disableField = function(field) {
    var msg = "function disableField : ";
    if (field) {
        field.onkeydown = function() { return false; };
    } else {
        msg += "field undefined or readonly";
        console.log(msg);
    }
};
window.disableFields = function() {
    disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR220);
};

/**************************************
 * UPDATE MANDATORY FIELDS ALERT MESSAGE
 ***************************************/
//Check if neocase namespace already exist. If not it's create.
if (typeof Neocase == "undefined") {
    Type.registerNamespace('Neocase');
}
//function which allow to execute a function before another one
Neocase.attachBefore = function(obj, funcName, advice) {
    var old = obj[funcName];
    obj[funcName] = function() {
        var bReturn = advice.apply(this, arguments);
        if (bReturn) {
            return old.apply(this, arguments);
        } else {
            return false;
        }
    };
};

//custom function
Neocase.checkForm = function() {
    console.log("function Neocase.checkForm");
    //PLACE YOUR CODE HERE
    /**************************************
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
    if (validator.length > 0) {
        for (v = 0; v< validator.length; v++) {
            var validatorVisibility = validator[v].style.visibility;
            if (validatorVisibility == "visible") {
                if (validator[v].id.search("question") != -1) {
                    msg += "\n- question";
                } else {
                    var validatorField = validator[v].parentNode.previousSibling.previousSibling;
                    if (validatorField) {
                        var validatorLabel = "";
                        if (validatorField.getElementsByTagName("a").length > 0) {
                            validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
                        } else if (validatorField.getElementsByTagName("label").length > 0) {
                            validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
                        } else {
                            validatorLabel = "undefined";
                        }
                        msg += "\n- " + validatorLabel;
                    }
                }
            }
        }
        //update the alert message
        m_requiredFieldsUndefined = msg;
        console.log("var m_requiredFieldsUndefined updated : " + m_requiredFieldsUndefined);
    }

    //If all previous control are valid, the function return "true" to execute the Submit function
    return true;
};

//Execute the custom function before the submit function
Neocase.attachBefore(window, 'ValidatorAlertRequiredFieldsOnSubmit', function() { return Neocase.checkForm(); });

//Replace the label
window.replaceField = function(field, replace) {
    if (field) {
        var currentLabel = field.getElementsByTagName('label');
        currentLabel[0].innerHTML = currentLabel[0].innerHTML.replace(' :', replace);
    }
};

/*
 *********************************
 * Function to calculate date fields
 ***********************************/
window.calculDate = function(dateDebutChamp, dateFinChamp, dureeMois, dureeJours) {
    //récupérer date d'embauche
    dateDebutChamp = dateDebutChamp.value;
    var splitDateDebut = dateDebutChamp.split("/");
    var jourDebut = parseFloat(splitDateDebut[0]);
    var moisDebut = parseFloat(splitDateDebut[1]) - 1;
    var anneeDebut = parseFloat(splitDateDebut[2]);
    var dateDebut = new Date(anneeDebut, moisDebut, jourDebut);
    var dateFin = new Date(anneeDebut, moisDebut, jourDebut);
    //calcul date de fin
    if (dureeMois > 0 || dureeJours > 0) {
        //ajouter durée en jours
        if (dureeJours > 0) {
            dateFin.setDate(dateFin.getDate() - dureeJours);
        }
        //ajouter durée en mois
        if (dureeMois > 0) {
            dateFin.setMonth(dateFin.getMonth() - dureeMois);
        }
        //renseigner le champ "date fin période d'essai"
        var jourFin = dateFin.getDate();
        var moisFin = dateFin.getMonth() + 1;
        if (moisFin == "10" || moisFin == "11" || moisFin == "12") {
            //do nothing
        } else {
            moisFin = "0" + moisFin;
        }
        var anneeFin = dateFin.getFullYear();
        var dateFinale = jourFin + "/" + moisFin + "/" + anneeFin;
        dateFinChamp.value = dateFinale;
        dateFinChamp.parentNode.getElementsByTagName("img")[0].style.display = "none";
        //dateFinChamp.onkeydown = function(){return false;};
        //disableField(dateFinChamp);

    }
};

/************
 * HIDE FIELDS
 *************/
window.hideField = function(FIELD_STRING) {
    var msg = "function hideField : ";
    var FIELD = "";
    //Si le champ est en lecture seule
    if (FIELD_STRING.search("getElementById") != -1) {
        SPLIT_FIELD_STRING = FIELD_STRING.split("\"");
        FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
    } else {
        //Si le champ est en création
        SPLIT_FIELD_STRING = FIELD_STRING.split(".");
        if (SPLIT_FIELD_STRING.length == 3) {
            FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[2] + "_display");
            if (FIELD_FILE) {
                FIELD = FIELD_FILE;
            } else {
                FIELD = document.getElementById(SPLIT_FIELD_STRING[2]);
            }
        } else if (SPLIT_FIELD_STRING.length == 2) {
            FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[1] + "_display");
            if (FIELD_FILE) {
                FIELD = FIELD_FILE;
            } else {
                FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
            }
        } else {
            msg += "field " + FIELD_STRING + " is undefined";
            console.log(msg);
        }
    }
    if (FIELD != "") {
        affichageChamp(FIELD, false);
    } else {
        msg += "var FIELD is undefined";
        console.log(msg);
    }
};
window.hideFields = function() {

    //Probation period unit and dtime
    //************************* BEGIN MOD-003********************************
    hideField("formulaire.UTILISATEURS$CHAMPU187", false);
    hideField("formulaire.INTERVENTIONS_EN_COURS$VALEUR130", false);
    //************************* END MOD-003********************************
    hideField("formulaire.INTERVENTIONS_EN_COURS$VALEUR215", false);
    hideField("formulaire.INTERVENTIONS_EN_COURS$VALEUR216", false);

};
/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {

    //HIDE FIELDS FRONTOFFICE
    console.log("before hidefields");
    hideFields();
    console.log("after hidefields");


    //To disable the fields
    disableFields();

    //Manage subtopic
    manageSubtopic();
    manageFields();
	
	//COPY/PASTE TOPIC&SUBTOPIC VALUE
	copyValue("INTERVENTIONS_EN_COURS$MOTCLE","INTERVENTIONS_EN_COURS$VALEUR203");
	copyValue("INTERVENTIONS_EN_COURS$ELEMENT","INTERVENTIONS_EN_COURS$VALEUR204");
	

    //Manage Default Probation status code and Desc
    defaultProbationStatusCodeDesc();

    copyValue("INTERVENTIONS_EN_COURS$VALEUR132", "INTERVENTIONS_EN_COURS$VALEUR198"); // ++ MOD-003
    //call function inside the ‘onloadform’ function
    //calculDate(formulaire.INTERVENTIONS_EN_COURS$VALEUR5,formulaire.INTERVENTIONS_EN_COURS$VALEUR220,0,1);


    //Rehire eligible
    var sel2 = formulaire.INTERVENTIONS_EN_COURS$VALEUR222;
    sel2.addEventListener('change', function() { RehireEligibleDropBoxChng(); }, false);


};
ThisForm.Bind('loadcomplete', onloadForm);
