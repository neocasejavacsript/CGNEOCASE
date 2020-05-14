/* --- PL_AGR_MGR Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 11/21/2019
Change No   - MOD-001
Description - Hide technical section
            - Autofill topic and subtopics form URL
---------------------------------------------------------*/ 

// hide Technical section
neocase.form.section("sectiond149a591b504d15c91de").hide();


window.loadTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null) {
        updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
    }
};

window.loadSubTopic = function () {
    if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null) {
        if (neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null) {
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"), getParamFromUrl('subtopic'));
        }
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function () {
    loadTopic();
    setTimeout(function () {
        loadSubTopic();
    }, 800);
};
neocase.form.event.bind("init", launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    copyFields(); // Copy Employee Catalog field values to Request Catalog field
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);


/****************************
 * Launch Javascript on submit
 *****************************/
window.launchOnSubmit = function () { };
neocase.form.event.bind("submit", launchOnSubmit);

