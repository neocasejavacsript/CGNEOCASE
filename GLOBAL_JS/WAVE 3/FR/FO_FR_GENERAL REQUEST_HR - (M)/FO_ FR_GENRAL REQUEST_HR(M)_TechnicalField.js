// JavaScript Document
/************** FR_GeneralRequest_HR(M) *************
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
/**************
* Hide Sections
***************/
//Technical section
ThisForm.HideSection("section304");

/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function()
{
formulaire.question.readOnly = "true";
};
ThisForm.Bind('loadcomplete', onloadForm);


