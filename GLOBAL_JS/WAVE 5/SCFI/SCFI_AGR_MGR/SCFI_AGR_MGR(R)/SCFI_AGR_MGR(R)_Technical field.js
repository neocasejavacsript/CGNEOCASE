/* --- SCFI_AGR_MGR(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/07/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide Technical section & Hidden Section
------------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/07/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Contract End date (new) to be hidden if contract type (new) is permanent ; function is called from on document load
------------------------------------------------------------------------*/ 

// hide Technical section
checkSectionHide("section550460fcf10a3fbc2f45");
//neocase.form.section("section550460fcf10a3fbc2f45").hide();

// hide hidden section
checkSectionHide("section581d27eda7446c464ab0");
//neocase.form.section("section581d27eda7446c464ab0").hide();

// Contract End date (new) to be hidden if contract type (new) is permanent ; ++MOD-002
window.checkContractType = function(){
    var contractElementsSection = document.getElementById('section391befec5139532337c0').style.display,
        contractTypeNew = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR528').querySelector('span').getAttribute('id'), // get Contract type (new) field id
        valueContractTypeNew = document.getElementById(contractTypeNew).innerText; // get option value for Contract type (new) :
    if(contractElementsSection != 'none'){
        if(valueContractTypeNew == 'Permanent'){ // if value is permanent
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR126').parentNode.parentNode.style.display = "none"; // hide Contract end date (new)
        }else{
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR126').parentNode.parentNode.style.display = "block";
        }   
    }
};
$(document).ready(function(){
    checkContractType();   
});