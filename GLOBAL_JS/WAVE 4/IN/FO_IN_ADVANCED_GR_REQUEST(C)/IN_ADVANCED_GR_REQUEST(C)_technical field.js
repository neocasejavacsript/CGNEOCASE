// JavaScript Document
/************** IN_ADVANCED_GR_EMPLOYEE(c) *************
*****************************************
Version - MOD-001
Author - Md Shahbaz Khan	
Creation Date - 22/09/2017
Description - Hiding Concerned Employee Details Section for all pages
              other than manager pages.
******************************************************************
Version - MOD-002
Author - Debraj Sarkar	
Creation Date - 10/03/2020
Description - Hiding Concerned Employee Details Section for all pages
              other than manager pages.
******************************************************************
Version - MOD-003
Author - Pierrick Juy (Neocase)
Creation Date - 29/04/2021
Description -   Prevent an infinite loop due to methode updateAndDisabledField on loadcomplete event
                which trigger the dependencies
                which trigger loadcomplete event
                which trigger back methode updateAndDisableField and so on...
                Adding controles, variables and methodes to simplify the code

******************************************************************
Version - MOD-004
Author - Ahana Sarkar
Creation Date - 27/07/2021
Description -  Add loadTopic() to generate topic from URL parameter
******************************************************************/

/******************
* DECLARE VARIABLES
*******************/
var fieldTopicStandard = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE');
var fieldTopic203 = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR203');
var fieldSubtopicStandard = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT');
var fieldSubtopic204 = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR204');
var pageId = getParamFromUrl('PageId');
var sectionEmployeeDetails = neocase.form.section("section570");
var sectionTechnical = neocase.form.section("section247");

/******************
 * DECLARE METHODES
 ******************/
window.hideEmployeeSection = function(){
    try {
        if (pageId != '1373' && pageId != '1372') {
            sectionEmployeeDetails.hide();
        }
    } catch (error) {
        console.log('hideEmployeeSection =>',error.message);
    }
};

window.updateSubtopic = function(){
    console.log('function updateSubtopic on technical field');
    try {

        //update standard field
        var subtopic = getParamFromUrl('subtopic');
        if(fieldSubtopicStandard.getValue() !== subtopic){
            updateAndDisableField(fieldSubtopicStandard,subtopic);
        }
        //hide custom fields
        fieldTopicStandard.hide();
        if(pageId != '1376'){
            fieldSubtopicStandard.hide();
        }else{
            fieldSubtopic204.hide();
        }
		//update custom fields
        fieldTopic203.setValue(fieldTopicStandard.getText());
        if(fieldSubtopicStandard.getValue()){
			fieldSubtopic204.setValue(fieldSubtopicStandard.getText());
			console.log(fieldTopicStandard.getText()+','+fieldSubtopicStandard.getText());
		}
        

    } catch (error) {
        console.log('updateSubtopic =>', error.message);
    }
};
window.loadTopic = function () {
    if(getParamFromUrl('topic') !== null){
        if (neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null) {
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
        }
    }
};
/**************
* CALL METHODES
***************/
window.launchOnInit = function(){
	if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
	sectionTechnical.hide();
    hideEmployeeSection();
};
neocase.form.event.bind("init",launchOnInit);
/********************************************
* Launch Javascript only once on loadcomplete
*********************************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        loadTopic();
        setTimeout(function () {
            updateSubtopic();
        }, 800);
        
    }
};
/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnLoadComplete = function(){	
	launchOnceLoadComplete();
};
neocase.form.event.bind("loadcomplete",launchOnLoadComplete);

/*---- MOD-001 ENDS ----*/
