
/* --- SCFI_SGR_PO_TT(C)Technical Fields --- */
/*
Developer   - Arnab Guha
Date	    - 10/16/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - 
----------------------------------------------------------------------------------------------

*/

neocase.form.section("sectionca83c141eb69729df3fd").hide();
neocase.form.section("sectioncd8b5bfe212ca3a2cea1").hide();



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
