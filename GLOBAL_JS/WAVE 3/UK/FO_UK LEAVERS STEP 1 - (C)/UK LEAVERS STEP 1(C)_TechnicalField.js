/* --------- UK_Leavers(C)_TechField ---------- */

/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 08/01/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical Section and make subtopic readonly
------------------------------------------------------------------------*/

//hide technical section
neocase.form.section("section3e62168f1776e39b7eab").hide();


/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    var urlString = window.location.href,
        optionValue = urlString.split("subtopic=")[1];//get subtopic id from URL
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT')['name']).find("option[value=" + optionValue +"]").attr('selected', true);
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE')['name']).attr('disabled', true);    
    $('#'+neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT')['name']).attr('disabled', true);
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){


};
neocase.form.event.bind("submit",launchOnSubmit);

// neocase.form.field(INTERVENTIONS_EN_COURS$VALEUR5)
