//FR EDC MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Riya Dutta
Date	    - 03/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
---------------------------------------------
Developer   - Suman Saha
Date	    - 05/15/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Popup section update
-----------------------------------------------
Developer   - Riya Dutta
Date	    - 05/17/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Phase 3
---------------------------------------------
Developer   - Surajit Dalal
Date	    - 07/23/2018 (MM/DD/YYYY)
Change No   - MOD-004
Description - Signataire Employeur Nom  (EN = Signer 1 Name) pop-up and Disabling both the fields
---------------------------------------------
Developer   - Smita Singh
Date	    - 09/27/2018 (MM/DD/YYYY)
Change No   - MOD-005
Description - Remove the pop up on the field "Signataire Employeur adresse mail (EN = Signer 1 email address)".
------------------------------------------------
Developer   - Smita Singh
Date	    - 01/28/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - copy Qualification desc – Home & Annual Working time desc – Home value
-----------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/28/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Read only 'Request Details'
----------------------------------------------------------------------------*/ 


//hide technical section
neocase.form.section("sectionb0db2555c209c78721f6").hide();	//MOD-001
/************************************************
 * FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
 *************************************************/


window.getASPid = function (fieldName) {
    //Only on FrontOffice Side
    if (document.getElementsByClassName("bloc-content").length > 0) {
        var label = document.getElementsByClassName("bloc-content")[0].getElementsByTagName("label");
        for (lbl = 0; lbl< label.length; lbl++) {

            //if we find an ASP.NET id we return the dynamic ID number
            if (label[lbl].id.search("_lbl") != -1) {
                fieldName = label[lbl].id.split("lbl")[0] + fieldName;
                fieldName = fieldName.replace("$", "_");
                return fieldName;
            }

        }
    }
    return fieldName;
};

FillCf = function (fieldValue, fieldName) {
    var msg = "function FillCf : ";
    //properly target field
    if (fieldName.search("VALEUR0") != -1) {
        fieldName = fieldName.replace("VALEUR0", "VALEUR");

    }
    fieldName = getASPid(fieldName);
    var field = neocase.form.field(fieldName);


    if (field) {
        field.setValue(fieldValue);
    } else {
        msg += "field " + fieldName + " not found";
        console.log(msg);
    }
};

/* --------------------------------------- Start of MOD-002 changes ---------------------------------------*/
window.copyFunctions = function () {

    //copy Employee Group code value
    neocase.form.field('UTILISATEURS$CHAMPU36').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR6');

    //copy Employee group desc value
    neocase.form.field('UTILISATEURS$CHAMPU37').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR8');

    //copy Local grade value
    neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');

    //copy Job title desc value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');

    //copy HR Delivery Partner name value
    neocase.form.field('UTILISATEURS$CHAMPU60').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR141');

    //copy Employee Subgroup (code) value
    neocase.form.field('UTILISATEURS$CHAMPU38').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR178');

    //copy Employee Subgroup description value
    neocase.form.field('UTILISATEURS$CHAMPU39').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR180');

    //copy Admin Supervisor name value
    neocase.form.field('UTILISATEURS$CHAMPU152').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR182');

    //copy HRBP name value
    neocase.form.field('UTILISATEURS$CHAMPU58').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR427');

    //copy Default Approver name value
    neocase.form.field('UTILISATEURS$CHAMPU234').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR428');

    //copy Qualification desc – Home value ++ Mod-006
    neocase.form.field('UTILISATEURS$CHAMPU282').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR928');

    //copy Annual Working time desc – Home value ++ Mod-006
    neocase.form.field('UTILISATEURS$CHAMPU288').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR929');
     
};

window.calculate_annualBaseSalActualFTE = function () {
    var annualBaseSalNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR278');
    var capUtilisEffDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR412');
    var annualBaseSalActualFTE = neocase.form.field('UTILISATEURS$CHAMPU168');

    if (annualBaseSalNew) {
        if (capUtilisEffDate) {
            if (annualBaseSalActualFTE) {
                var annualBaseSalNewValue = parseFloat(annualBaseSalNew.getValue());
                var capUtilisEffDateValue = parseFloat(capUtilisEffDate.getValue());
                if (isNaN(annualBaseSalNewValue)) {
                    annualBaseSalNewValue = 0;
                }
                if (isNaN(capUtilisEffDateValue)) {
                    capUtilisEffDateValue = 0;
                }

                annualBaseSalActualFTE.setValue(((annualBaseSalNewValue * capUtilisEffDateValue) / 100).toFixed(2));
            }

        }

    }

};

window.calculate_targetVarCompensActualFTE = function () {

    var targetVarComensARC_new = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR328');
    var capUtilisEffDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR412');
    var targetVarCompens_ActualFTE = neocase.form.field('UTILISATEURS$CHAMPU170');

    if (targetVarComensARC_new) {
        if (capUtilisEffDate) {
            if (targetVarCompens_ActualFTE) {
                var targetVarComensARCnew_Value = parseFloat(targetVarComensARC_new.getValue());
                var capUtilisEffDate_Value = parseFloat(capUtilisEffDate.getValue());
                if (isNaN(targetVarComensARCnew_Value)) {
                    targetVarComensARCnew_Value = 0;
                }
                if (isNaN(capUtilisEffDate_Value)) {
                    capUtilisEffDate_Value = 0;
                }
                targetVarCompens_ActualFTE.setValue(((targetVarComensARCnew_Value * capUtilisEffDate_Value) / 100).toFixed(2));
            }

        }

    }
};

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
            url = url.replace("Id_User=", "Id_User=" + CodeUtilisateur);
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
        msg += "champ non trouvĂ©";
        console.log(msg);
    }
};
/* --------------------------------------- End of MOD-002 changes ---------------------------------------*/
/* ------------- Starts of MOD-001 changes -------------*/

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

window.copyValueToField = function (fieldToCopy, field) {
    console.log('copyValueTo');
    console.log(neocase.form.field(fieldToCopy).getValue());
    console.log(neocase.form.field(field).getValue());

    try {
        // var fieldToCopyValue = neocase.form.field(fieldToCopy).getValue();
        // // var fieldValue = neocase.form.field(field).getValue();

        // neocase.form.field(field).setValue(fieldToCopyValue);
        neocase.form.field(fieldToCopy).copyValueTo(field);

    } catch (error) {
        console.log(error.message);
    }
};


/* ------------- Popup Link ----------------- */
window.setPopups = function () {
    //Pop-up Employee group desc (new)
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR315, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
    //Documents
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438, "/Custom_Referential/employee signer.aspx");	// MOD-004
    //popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR439,"/Custom_Referential/employee signer.aspx");	// MOD-004 //MOD-005

};


window.checkSubtopicValue = function () {

    console.log('localStorage', localStorage);

    var v1 = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    var v = document.getElementById('ELEMENTS').value;
    
    console.log("Current Subtopic V1: " + v1);
	console.log("Current Subtopic is: " + v);
    if (v == "FR_01-With Pay Change" || v == "01- Avec changement de salaire" || v == 2605) {

        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR412').mandatory("This field is mandatory");

    } else {
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR412').noMandatory();
    }
};



/* ------------- Starts of MOD-002 changes ****CopyValueTo***** -------------*/

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
//* ------------- End of MOD-002 changes -------------*//
window.launchOnInit = function () {
    console.log("429field",neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').getValue());
    console.log(neocase.form.field('UTILISATEURS$CHAMPU297').getValue());

    // console.log(neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT'));

    checkSubtopicValue();
    console.log("executed");
    copyValueToField('INTERVENTIONS_EN_COURS$VALEUR134', 'INTERVENTIONS_EN_COURS$VALEUR903');
    copyValueToField('INTERVENTIONS_EN_COURS$VALEUR5', 'INTERVENTIONS_EN_COURS$VALEUR902');

    //Popup Link
    setPopups();

    //
    //Disable Employee group desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR315"));
    //Disable Employee group code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR363"));

    //Disable Employee subgroup desc (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR365"));

    //Disable Employee subgroup code (new)
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR364"));

    //Disabling Documents FIELDS
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR438"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR439"));

    //copy value ++MOD-002
    copyFunctions();
    // setCurrFields();

    calculate_annualBaseSalActualFTE();
    calculate_targetVarCompensActualFTE();
    disableField(neocase.form.field("UTILISATEURS$CHAMPU168"));	// MOD-004
    disableField(neocase.form.field("UTILISATEURS$CHAMPU170"));	// MOD-004
    
	
	/*-- Read only 'Request Details'--*/
	if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
	/*--X-- Read only 'Request Details'--X--*/
	
	console.log("all done");

};
// neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);

