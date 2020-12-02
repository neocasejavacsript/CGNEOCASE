//FR_EDC_EE(MGR)(M) - FRONT END - Technical Code
/*---------------------------------------------/
Developer   - Surajit Dalal
Date	    - 07/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Signataire Employeur Nom  (EN = Signer 1 Name) pop-up
---------------------------------------------/
Developer   - Smita Singh
Date	    - 09/28/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Remove the pop up on the field "Signataire Employeur adresse mail (EN = Signer 1 email address)".
----------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/13/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description -  make Motif si refus” to be mandatory only if “Decision Manager” is filled with “Refusé” or else editable
-----------------------------------------------**/

//hide technical section
neocase.form.section("section28c441b555191c24c9e1").hide();


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

/* ------------- MOD-001 ----------------- */
window.setPopups = function(){

//Documents
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR438,"/Custom_Referential/employee signer.aspx");	// MOD-004
//popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR439,"/Custom_Referential/employee signer.aspx");	// MOD-004 //MOD-002

};

window.disableFields = function(){

	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"));

	//Documents Fields disable
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR438"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR439"));

};

/* ------------- MOD-001 ----------------- */

window.setRejectionMandate = function(){ // ++MOD-003
    var decManager = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR273').getCode();
    if(decManager !== '430'){
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274').noMandatory();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR274').mandatory();
    }
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

neocase.form.section('sectiona2e40fb2909aa3b1bb4a').hide();

setPopups();		// MOD-001
disableFields();	// MOD-001

};
neocase.form.event.bind("init",launchOnInit);


window.launchOnLoadComplete = function () {  
    setRejectionMandate();// ++MOD-003
};
neocase.form.event.bind("loadcomplete", launchOnLoadComplete);
