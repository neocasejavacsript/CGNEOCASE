//PL_SGR_BO - BACK OFFICE - Technical Code
/*--------------------------------------------------------------------------
Developer   - Soumyashree Nayak
Date	    - 11/1/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
----------------------------------------------------------------------------*/

//hide technical section
neocase.form.section("section0a452cf3df829cd84377").hide();

/*-----------------------------------MOD_001-----------------------------------------*/

    
    /**************************
     * Launch Javascript on init
     ***************************/
    window.launchOnInit = function(){
        //setPopups();    
    };
    //neocase.form.event.bind("init",launchOnInit);
    neocase.form.event.bind('loadcomplete', launchOnInit);
