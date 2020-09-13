// JavaScript Document
/************** IN_ADVANCED_GR_EMPLOYEE(M) *************
*****************************************
Version - MOD-001
Author - Itaï Rosilio
Date - 31/07/2017
Description - Put the question field read only
*******************************************************************
Version - MOD-002
Author - smita singh
Date - 21/09/2017
Description - To make the question field read only 
*******************************************************************
Version - MOD-003
Author - Md Shahbaz Khan	
Creation Date - 21/09/2017
Description - Hiding Concerned Employee Details Section for all pages
              other than manager pages.
******************************************************************
Version - MOD-003
Author - Smita Singh	
Creation Date - 27/09/2017
Description - Make the download option on modify form readOnly
********************************************************************
Version - MOD-004
Author - Riya Dutta	
Creation Date - 01/02/2019 (MM/DD/YYYY)
Description - Upgrading to New JS Framework (//need update)
********************************************************************
Version - MOD-004
Author - Debraj Sarkar	
Creation Date - 11/03/2020 (MM/DD/YYYY)
Description - Upgrading to New JS Framework (//need update)
********************************************************************/

/************************************
* Hide Technical Sections
************************************/
neocase.form.section("section247").hide();

/***************************************************************************
Manage download option on the HTML DOM and make it readonly for modify form
*****************************************************************************/

window.manageDownloadField = function(){

	var buttonId= document.getElementsByClassName("btn btn-upload multifileinput-button")[0].childNodes[2].id;
		document.getElementById(buttonId).readOnly = true;
		console.log("The download button is not working");

};


/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function()
{

	//To make the Comment box as readOnly
	formulaire.question.readOnly = true; //MOD-002

	//Manage Visiblity of Concerned Employee Section
	var pageId = getParamFromUrl('PageId');
	//Hide When employee tries to create a request for itself.
	//Show when employee tries to create a request on behalf of someone.
	if(pageId != '1236'){
		//Hide Technical section
		neocase.form.section("section570").hide();
	}
	

	//Manage download button in modify form
	//manageDownloadField();
	//disableField(neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE'));
	//disableField(neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT'));
	
	};
neocase.form.event.bind('loadcomplete', onloadForm);
