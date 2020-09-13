// JavaScript Document
/**************		LC_KB_FeedBack Front Office (C) Technical Fields	*************
********************************************************************************
Developer   - Ayan Dey
Date	    - 03/13/2020
Change No   - MOD-001
Description - Set value in field 'Article name' & 'Keywords used to search the article'
***************************************************************************
***********************************************************/
/*****************
 * Hide Sections
 *****************/
//Technical section
neocase.form.section("section238b01af0e4a239f51e6").hide();


/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {
var value = localStorage.getItem("articlename"); 
// console.log(value);
if(value){
	var rex = /(<([^>]+)>)/ig;
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR254').setValue((value.replace(rex , "")).trim());
}
$('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR254')['name']).attr('readonly','readonly');

var searchText = localStorage.getItem("searchkeyword"); 
if(searchText){
	// console.log(searchText);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR324').setValue(localStorage.getItem("searchkeyword"));
}
$('#'+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR324')['name']).attr('readonly','readonly');
//field.setValue(value);
localStorage.removeItem("articlename");
localStorage.removeItem("searchkeyword");
};
//ThisForm.Bind('loadcomplete', onloadForm);
neocase.form.event.bind('loadcomplete', onloadForm);
