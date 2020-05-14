/* ------------ SCFI_AGR_EE(BO)_TechnicalField ------------- */

/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/06/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide technical section
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/21/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - copy Base Location current value
----------------------------------------------------------------------------*/

neocase.form.section("sectioncde206789fedba0494b1").hide();

window.copyFunctions = function(){
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    copyFunctions();
};
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);