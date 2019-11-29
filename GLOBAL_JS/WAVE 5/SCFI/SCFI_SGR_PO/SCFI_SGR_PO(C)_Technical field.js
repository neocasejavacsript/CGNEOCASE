
/* --- SCFI_SGR_PO(C)Technical Fields --- */
/*
Developer   - Arnab Guha
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - 
----------------------------------------------------------------------------------------------

*/

neocase.form.section("sectionab5e08c937bde68251dd").hide();

neocase.form.section("section8db036b0a153e6b8dad6").hide();


window.loadTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").
        getValue() !== null) {
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
    }
};

window.loadSubTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null) {
        if (neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null) {
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"), getParamFromUrl('subtopic'));
        }
    }
};




/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function () {
    // setAllPopups();
    // disableCusFields();
    loadTopic();
    setTimeout(function () {
        
        loadSubTopic();

    }, 500);


};
neocase.form.event.bind("init", launchOnInit);
