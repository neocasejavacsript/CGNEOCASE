// JavaScript Document
/************** IN_ADVANCED_GR_EMPLOYEE(R) *************
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
******************************************************************/
/**************
 * Hide Sections
 ***************/
//Hide Technical Section
// neocase.form.section("section247").hide();
checkSectionHide("section247");
// console.log(neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText());

/******************
* get URL parameter
*******************/
window.getParamFromUrl = function(param){
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if(param){
		return vars[param] ? vars[param] : null;  
	}
	return vars;
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){	
	/*neocase.form.field('INTERVENTIONS_EN_COURS$TYPE').hide();
	neocase.form.field('INTERVENTIONS_EN_COURS$DELAI').hide();
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
	console.log(topic+','+subtopic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR203').setValue(topic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR204').setValue(subtopic);*/
	var pageId = getParamFromUrl('PageId');
    if (pageId != '1372' && pageId != '1373') {
        // neocase.form.section("section570").hide();
        console.log('hello');
        checkSectionHide("section570");
    }
 };
// neocase.form.event.bind("loadcomplete",launchOnInit);
$(document).ready(function(){
	launchOnInit();
});


/*---- MOD-001 ENDS ----*/
