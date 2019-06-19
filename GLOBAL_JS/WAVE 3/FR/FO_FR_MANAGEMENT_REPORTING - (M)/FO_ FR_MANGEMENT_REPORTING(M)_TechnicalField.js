// JavaScript Document
/************** FR_ManagementReporting(M) *************
*****************************************
Version - MOD-001
Author - Itaï Rosilio
Date - 31/07/2017
Description - Put the question field read only
*******************************************************************
Version - MOD-002
Author - smita singh
Date - 09/05/2017
Description - To make the question field read only 
*******************************************************************/
/*-----------------------------------------
Developer   - Riya Dutta
Date	    - 03/29/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - hide technical section
-------------------------------------------*/ 
/**************
* Hide Sections
***************/
//Technical section
/* ThisForm.HideSection("section272"); */ // MOD-003 --

/* ------------- Start of MOD-003 changes -------------*/
document.getElementById("section272").style.display = "none"; //MOD-003 ++
/* ------------- End of MOD-003 changes -------------*/	

/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function()
{
formulaire.question.readOnly = "true";
};
ThisForm.Bind('loadcomplete', onloadForm);
