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
--------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/01/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Field “Last Working Day” will be visible only when reason = Salary Continuance
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/20/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - Termination details section will be visible and Termination Date field will be renamed as Planned termination date if reason = Salary Continuance
---------------------------------------------------------*/ 

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
var terminateElemOldLabel = document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR220').children[0].innerText;
window.showLwd = function(){ // ++MOD-003
    var reasonForAbsenceVal = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR517').children[0].innerHTML,
        lwdElem = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR221').parentElement,
        terminateElem = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR220').parentElement,
        terminateElemLabel = document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR220').children[0],
        erdElem = document.getElementById('divFieldUTILISATEURS_CHAMPU311').parentElement,
        erdNewElem = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR503').parentElement;
    if(reasonForAbsenceVal !== "Salary Continuance"){
        document.getElementById('section35033381ef6ef4eb36ad').style.display = 'none';
        // terminateElemLabel.innerText = terminateElemOldLabel;
        erdElem.style.display = "flex";
        erdNewElem.style.display = "flex";
    }
    else{
        document.getElementById('section35033381ef6ef4eb36ad').style.display = 'block';
        terminateElemLabel.innerText = "Planned termination date :";
        erdElem.style.display = "none";
        erdNewElem.style.display = "none";
    }
};
$(document).ready(function(){
    checkContractType();  
    // ++MOD-003
    if(document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText == 'SCFI_Start/update leave of absence'){ // if subtopic = SCFI_Start/update leave of absence 
        showLwd(); 
    }
});
