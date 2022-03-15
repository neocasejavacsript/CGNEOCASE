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
-----------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/22/2020 (MM/DD/YYYY)
Change No   - MOD-008
Description - copy Assistant name
------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/02/2020 (MM/DD/YYYY)
Change No   - MOD-009
Description - show section for 02 Addedum for given days
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-010
Description - setNomenclature() added to add “n°rq_GGID_LASTNAME_Firstname”
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-011
Description - Section visibility updated for WFH subtopics
-------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	      - 02/17/2022 (MM/DD/YYYY)
Change No   - MOD-016
Description - Add method 'visibilityHealthInsurance' for LOA type variation
            - Hide Imagenow related document sections
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
    //neocase.form.field('UTILISATEURS$CHAMPU36').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR6');

    //copy Employee group desc value
    neocase.form.field('UTILISATEURS$CHAMPU37').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR8');

    //copy Local grade value
    neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');

    //copy Job title desc value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');

    //copy HR Delivery Partner name value
    neocase.form.field('UTILISATEURS$CHAMPU60').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR141');

    //copy Employee Subgroup (code) value
    //neocase.form.field('UTILISATEURS$CHAMPU38').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR178');

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

    //copy Assistant name ++Mod-008
    neocase.form.field('UTILISATEURS$CHAMPU324').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR950');  
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
window.setNomenclature = function(){
    var reqNo = neocase.form.field('INTERVENTIONS_EN_COURS$NUMERO').getValue(),
    ggid = neocase.form.field("UTILISATEURS$CHAMPU1").getValue(),
    lastname = neocase.form.field("UTILISATEURS$CHAMPU8").getValue(),
    firstname = neocase.form.field("UTILISATEURS$CHAMPU9").getValue();
    var nomenclature = reqNo + '_' + ggid + '_' + lastname + '_' + firstname;
    var nomenclatureField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR963');
    if(nomenclatureField){
        nomenclatureField.setValue(nomenclature);
    }    
    //disableField(nomenclatureField);
};


var subcategoryByDocumentType = {
  "FR_Contrat de travail / convention": [{code:"2666", value:"Contrat de travail"}],
  "FR_Dossier d'embauche": [{code:"2667", value:"Dossier d'embauche"}],
  "FR_Avenant / courrier": [{code:"2668", value:"Avenant et courriers"}],
  "FR_Période d'essai": [{code:"2669", value:"Période d'essai"}],
  "FR_Lettre de remunération": [{code:"2670", value:"Variable"}],
  "FR_Pièce d'identité": [{code:"2671", value:"Pièce d'identité"}],
  "FR_Diplôme": [{code:"2672", value:"Diplôme"}],
  "FR_Attestation Sécurité Sociale": [{code:"2673", value:"Attestation Sécurité Sociale"}],
  "FR_Titre de séjour": [{code:"2674", value:"Autorisation de Travail"}],
  "FR_Att des chartes et notices du groupe": [{code:"2675", value:"Att des chartes et notices du groupe"}],
  "FR_Attestation assurance télétravail": [{code:"2676", value:"Justificatif"}],
  "FR_DPAE": [{code:"2677", value:"DPAE"}],
  "FR_Impatriation": [{code:"2678", value:"Mobilité internationale"}],
  "FR_Autorisation de travail": [{code:"2678", value:"Mobilité internationale"}],
  "FR_Suspension de contrat": [{code:"2679", value:"Suspension de contrat"}],
  "FR_Expatriation": [{code:"2679", value:"Suspension de contrat"}],
  "FR_Arrêt de travail": [{code:"2680", value:"Arrêt de travail"}],
  "FR_Déclaration AT": [{code:"2681", value:"Accident de travail/trajet"}],
  "FR_Avis médecin du travail": [{code:"2682", value:"Visite médicale"}],
  "FR_RQTH": [{code:"2683", value:"RQTH"}],
  "FR_Sortie": [{code:"2684", value:"Sortie"}],
  "FR_Disciplinaire": [{code:"2685", value:"Disciplinaire"}],
  "FR_Saisie sur salaire / ATD": [{code:"2686", value:"Saisie sur salaire / ATD"}]
};

window.setImSubcategory = function(sourceField, destinationField){
    var sourceFieldId = "INTERVENTIONS_EN_COURS$VALEUR"+sourceField;
    var destinationFieldId = "INTERVENTIONS_EN_COURS$VALEUR"+destinationField;
    console.log("SourceField: "+sourceField);//INTERVENTIONS_EN_COURS$VALEUR881
    console.log("Destination: "+destinationField);//INTERVENTIONS_EN_COURS$VALEUR880
    var ImDocumentTypeValue = neocase.form.field(sourceFieldId).getValue();
  if (ImDocumentTypeValue === 'PLEASE CHOOSE...' || ImDocumentTypeValue === 'A QUALIFIER'){
      document.getElementById(destinationFieldId).innerHTML = "<option value='PLEASE CHOOSE...'>PLEASE CHOOSE...</option>";
      
  }else {
      var catOptions = "";
      for (categoryId in subcategoryByDocumentType[ImDocumentTypeValue]) {
          //catOptions += "<option value='"+subcategoryByDocumentType[ImDocumentTypeValue][categoryId].value+"'>"+subcategoryByDocumentType[ImDocumentTypeValue][categoryId].value+"</option>";
          catOptions += '<option value="'+subcategoryByDocumentType[ImDocumentTypeValue][categoryId].value+'">'+subcategoryByDocumentType[ImDocumentTypeValue][categoryId].value+'</option>';

      }
      document.getElementById(destinationFieldId).innerHTML = catOptions;
      
  }
  setTimeout(function(){ 
    var element = document.getElementById(destinationFieldId);
    element.dispatchEvent(new Event("change"));
   }, 1000);

};

var documentTypeBySubcategory = {
    2666: [{code:"2687", value:"FR_Contrat de travail / convention"}],
    2667: [{code:"2688", value:"FR_Dossier d'embauche"}],
    2668: [{code:"2689", value:"FR_Avenant / courrier"}],
    2669: [{code:"2690", value:"FR_Période d'essai"}],
    2670: [{code:"2691", value:"FR_lettre de remunération"}],
    2671: [{code:"2692", value:"FR_Pièce d'identité"}],
    2672: [{code:"2693", value:"FR_Diplôme"}],
    2673: [{code:"2694", value:"FR_Attestation Sécurité Sociale"}],
    2674: [{code:"2695", value:"FR_Titre de séjour"}],
    2675: [{code:"2696", value:"FR_Attestation des chartes et notices du groupe"}],
    2676: [{code:"2697", value:"FR_Attestation assurance télétravail"}],
    2677: [{code:"2698", value:"FR_DPAE"}],
    2678: [{code:"2699", value:"FR_Impatriation"}, {code:"2700", value:"FR_Autorisation de travail"}],
    2679: [{code:"2701", value:"FR_Suspension de contrat"}, {code:"2702", value:"FR_Expatriation"}],
    2680: [{code:"2703", value:"FR_Arrêt de travail"}],
    2681: [{code:"2704", value:"FR_Déclaration AT"}],
    2682: [{code:"2705", value:"FR_Avis médecin du travail"}],
    2683: [{code:"2706", value:"FR_RQTH"}],
    2684: [{code:"2707", value:"FR_Sortie"}],
    2685: [{code:"2708", value:"FR_Disciplinaire"}],
    2686: [{code:"2709", value:"FR_Saisie sur salaire / ATD"}]
};
window.setImDocumentType = function(sourceField, destinationField){
    var sourceFieldId = "INTERVENTIONS_EN_COURS$VALEUR"+sourceField;
    var destinationFieldId = "INTERVENTIONS_EN_COURS$VALEUR"+destinationField;
    console.log("SourceField: "+sourceFieldId);//INTERVENTIONS_EN_COURS$VALEUR778
    console.log("Destination: "+destinationFieldId);//INTERVENTIONS_EN_COURS$VALEUR779
    var ImSubcategoryValue = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR778').getCode();
    console.log(ImSubcategoryValue);
    if (ImSubcategoryValue === '0'){
        document.getElementById(sourceFieldId).innerHTML = "<option value='PLEASE CHOOSE...' code='0'></option>";
    }else {
        var catOptions = "";
        for (categoryId in documentTypeBySubcategory[ImSubcategoryValue]) {
            catOptions += "<option value='"+documentTypeBySubcategory[ImSubcategoryValue][categoryId].value+"' code='"+documentTypeBySubcategory[ImSubcategoryValue][categoryId].code+"'>"+documentTypeBySubcategory[ImSubcategoryValue][categoryId].value+"</option>";
        }
        document.getElementById(destinationFieldId).innerHTML = catOptions;
    }

};

window.hideImageNowFields = function(){
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR971"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR972"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR974"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR975"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR778"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR777"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR880"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR879"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR883"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR882"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR886"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR885"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR889"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR888"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR892"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR891"));

  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR895"));
  disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR894"));
};

/* ------------- Starts of MOD-002 changes ****CopyValueTo***** -------------*/
window.convertTitleToHTML = function(sectionId){
    //var sectionTitle = neocase.form.section(sectionId).elementHTML.querySelector('a');
    // localStorage.removeItem(sectionId);
    var sectionTitle = neocase.form.section(sectionId).elementHTML.querySelector('.title');
    if(localStorage.getItem(sectionId) === null){
        localStorage.setItem(sectionId,sectionTitle.innerText);
    }
    sectionTitle.innerHTML = localStorage.getItem(sectionId);  
};
window.visibilityHealthInsurance = function(){
    neocase.form.section('sectionb5a2647cf0284bf6f44a').hide();
    var LOAType = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR378').getCode();
    console.log(LOAType);
    if(LOAType == '556'){
        neocase.form.section('sectionb5a2647cf0284bf6f44a').show();
		convertTitleToHTML('sectionb5a2647cf0284bf6f44a');
    }
};
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
//* ------------- End of MOD-002 changes -------------*//
window.launchOnInit = function () {
    console.log("429field",neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').getValue());
    console.log(neocase.form.field('UTILISATEURS$CHAMPU297').getValue());

    // console.log(neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT'));

    
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
    //++MOD-009
	var subtopicVal = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    if(subtopicVal == '2950'){ //FR_02-Addendum for given days
        neocase.form.section('section30a2dc194eb698303bb6').show();
    }else{
        neocase.form.section('section30a2dc194eb698303bb6').hide();
    }

    if(subtopicVal !== '2521'){ // FR_04-End work from home 
        neocase.form.section('sectionfed1be4e714a5abbced4').hide();
    }else{
        neocase.form.section('sectionfed1be4e714a5abbced4').show();
    }
    //++MOD-011
    neocase.form.section('section303d556ce846bed7c043').hide();//Work from home suspension
    if(subtopicVal == '2519'){ // FR_02-Work from home suspension 
        neocase.form.section('section303d556ce846bed7c043').show();
    }
    var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getValue();
    console.log('topic'+topic);
    if(topic == '2361'){//FR_Work form home
        document.getElementById('INTERVENTIONS_EN_COURS$VALEUR357').closest('.fieldTD').style.display = 'none';
        document.getElementById('lblINTERVENTIONS_EN_COURS$VALEUR357').closest('.fieldTD').style.display = 'none';
        convertTitleToHTML('section1d682ae70e4dfa152f56');
    }
    checkSubtopicValue();
    setNomenclature();
    hideImageNowFields();
    console.log("executed");
	console.log("all done");
    visibilityHealthInsurance();
    // Hide Image now related sections
    // Section Employee Documents
    neocase.form.section("sectiond77fee2e9543fe8fa2a8").hide();	
    // Section Leave Documents
    neocase.form.section("sectiond2310bddab82cd23df9b").hide();	
    // Section: Additional Documents
    neocase.form.section("section96985415c7c4fd4f40e8").hide();	
    // Section: Hiring Documents
    neocase.form.section("section50b50e380bdfc8c57e32").hide();
};
// neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
