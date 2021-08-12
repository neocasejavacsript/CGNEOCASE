//FR General request - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-001
Description - setNomenclature() added to add “n°rq_GGID_LASTNAME_Firstname”
----------------------------------------------------------------------------*/ 


//hide technical section
neocase.form.section("sectionab9d78769608a6cd42bc").hide();

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

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
//* ------------- End of MOD-002 changes -------------*//
window.launchOncomplete = function () {
    setNomenclature();
};

neocase.form.event.bind('loadcomplete', launchOncomplete);

