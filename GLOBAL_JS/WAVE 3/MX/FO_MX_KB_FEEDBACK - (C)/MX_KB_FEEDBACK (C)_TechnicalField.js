// JavaScript Document
/**************		MX_KB_FeedBack Front Office (C) Technical Fields	*************
********************************************************************************
Developer   - Ahana Sarkar
Date	    - 06/26/2019
Change No   - MOD-001
Description - IN to set value in field 'Article Name' & 'Keywords used to search the article'
***************************************************************************
------------------------------------
Code inserted in th eKB search page +++
------------------------------------

window.setArticleNameToLink = function() {
var value=document.getElementsByClassName('ArticleDetailTitle mix-articleDetail-container-content-title'[0].innerHTML);
console.log(value);
localStorage.setItem("articlename", value);
};
setArticleNameToLink();

***********************************************************/
/*****************
 * Hide Sections
 *****************/
//Technical section
neocase.form.section("sectionecdbe96791d92c778945").hide();
//document.getElementById("section7e9ed77ac3b366d19ce2").style.display = "none";


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
