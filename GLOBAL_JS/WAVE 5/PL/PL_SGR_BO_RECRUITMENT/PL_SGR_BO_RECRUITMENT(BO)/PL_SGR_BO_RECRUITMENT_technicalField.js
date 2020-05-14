//PL_SGR_BO_REQUIREMENT - BACK OFFICE - Technical Code
/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 10/21/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
----------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------
Developer   - Pierrick Juy (Neocase)
Date	    - 01/09/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Hide New joiner no show details
----------------------------------------------------------------------------*/

//empty list of new framework fields called


//hide technical section
neocase.form.section("section0a452cf3df829cd84377").hide();

// window.hideNewJoinerSection = function(){
// console.log('before hide : ',document.getElementById('champsobligatoiresproprietes').value);
//     if(neocase.form.field('ELEMENTS').getValue() === '3362' ){
//         neocase.form.section("sectionb5a53eba999e3a8bd98d").show();
//     }else{
//         neocase.form.section("sectionb5a53eba999e3a8bd98d").hide();
//         console.log('after hide : ',document.getElementById('champsobligatoiresproprietes').value);
//     }
// };

/*-----------------------------------MOD_001-----------------------------------------*/

    
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    hideNewJoinerSection();
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
