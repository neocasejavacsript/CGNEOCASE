//FR GENERAL REQUEST - GENERIC FORM 2-BO - Technical Field
/*---------------------------------------------

Developer   - Smita Singh
Date	    - 10/22/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section
------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/05/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Read only 'Request Details'
------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - setNomenclature() added to add “n°rq_GGID_LASTNAME_Firstname”
----------------------------------------------------------------------------*/ 

//hide technical section
neocase.form.section("sectionf0c153b8a166e640619c").hide();	//MOD-001

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
};
/************************************
 * Launch Javascript on loadcomplete
 ************************************/
window.launchOnloadcomplete = function(){
	/*-- Read only 'Request Details'--*/
	if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
    /*--X-- Read only 'Request Details'--X--*/
    setNomenclature();
};

neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
