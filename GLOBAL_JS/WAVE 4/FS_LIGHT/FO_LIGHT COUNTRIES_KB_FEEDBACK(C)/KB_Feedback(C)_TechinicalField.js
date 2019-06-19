// JavaScript Document
/**************		LC_KB_FeedBack Front Office (C) Technical Fields	*************
********************************************************************************
Developer   - Smita Singh
Date	    - 06/07/2019
Change No   - MOD-001
Description - LC to set value in field 'Please mention the article name'
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
neocase.form.section("sectione2bff43de27561e8d39d").hide();
//document.getElementById("sectione2bff43de27561e8d39d").style.display = "none";


/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {

var value = localStorage.getItem("articlename"); 
console.log(value);
neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR254').setValue(value);
//field.setValue(value);

};
//ThisForm.Bind('loadcomplete', onloadForm);
neocase.form.event.bind('loadcomplete', onloadForm);