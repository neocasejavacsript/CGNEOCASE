/* --- SCFI_AGR_EE(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/06/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/30/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Field “Last Working Day” will be visible only when reason = Salary Continuance
---------------------------------------------------------*/ 

// hide Technical section
checkSectionHide("section63510a9b9ac05f626157");
// neocase.form.section("section63510a9b9ac05f626157").hide();

// hide hidden section
checkSectionHide("sectiond4d8289a621b28bca47f");
// neocase.form.section("sectiond4d8289a621b28bca47f").hide();

//++MOD-002
window.showLwd = function(){
    var reasonForAbsenceVal = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR517').children[0].innerHTML,
        lwdElem = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR221').parentElement,
        erdElem = document.getElementById('divFieldUTILISATEURS_CHAMPU311').parentElement,
        erdNewElem = document.getElementById('divFieldINTERVENTIONS_EN_COURS_VALEUR503').parentElement;
    if(reasonForAbsenceVal !== "Salary Continuance"){
        lwdElem.style.display = "none";
        erdElem.style.display = "flex";
        erdNewElem.style.display = "flex";
    }
    else{
        lwdElem.style.display = "flex";
        erdElem.style.display = "none";
        erdNewElem.style.display = "none";

    }
};

$(document).ready(function(){
    // ++MOD-002
    if(document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText == 'SCFI_Start/update leave of absence'){ // if subtopic = SCFI_Start/update leave of absence 
        showLwd(); 
    }
});

