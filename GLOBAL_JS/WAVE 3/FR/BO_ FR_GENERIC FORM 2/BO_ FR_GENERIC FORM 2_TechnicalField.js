//FR GENERAL REQUEST - GENERIC FORM 2-BO - Technical Field
/*---------------------------------------------

Developer   - Smita Singh
Date	    - 10/22/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section
------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/05/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Read only 'Request Details'
-------------------------------------------------------*/ 

//hide technical section
neocase.form.section("sectionf0c153b8a166e640619c").hide();	//MOD-001


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