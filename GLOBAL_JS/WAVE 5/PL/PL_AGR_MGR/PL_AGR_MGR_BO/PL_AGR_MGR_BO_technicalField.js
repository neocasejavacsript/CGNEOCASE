//PL_AGR_MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Ayan Dey
Date	    - 11/22/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------*/

//hide technical section
neocase.form.section("sectionfccd23778decdd7724c6").hide();	

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);
