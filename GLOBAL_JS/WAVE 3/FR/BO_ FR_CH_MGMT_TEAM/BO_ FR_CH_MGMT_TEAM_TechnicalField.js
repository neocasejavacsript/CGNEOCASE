/*************FR_CH_MGMT_TEAM - BO - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/28/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			- Hide Technical Section
			- Read only 'Request Details'
----------------------------------------------------------------------------*/ 

//Hide Technical Section
neocase.form.section("section2fa5b90f2259270af036").hide();


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
};

neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
