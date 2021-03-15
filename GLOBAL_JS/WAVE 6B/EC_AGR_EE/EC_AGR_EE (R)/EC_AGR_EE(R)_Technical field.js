/* --- EC_AGR_EE(R) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 24/11/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/23/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - partTimeLeaveVisibility() added
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - sectionVisibilityFunc() added - Work schedule (new) visibility for BE & LU
---------------------------------------------------------*/ 

// hide Hidden section
//neocase.form.section("section71c50cbc95143123b1f0").hide();
checkSectionHide("section71c50cbc95143123b1f0");
// hide Technical section
checkSectionHide("section05562a03952574726a99");

window.partTimeLeaveVisibility = function(){
    var countryIsoCode = document.getElementById('divFieldUTILISATEURS_CHAMPU19').children[0].innerText,
        countrySAPCode = document.getElementById('divFieldUTILISATEURS_CHAMPU232').children[0].innerText;
    var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
        document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR752').parentElement.style.display = 'none';
    if(countryIsoCode == 'LU'){
        if(subtopic == 'EC_Change in working hours'){
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR752').parentElement.style.display = 'flex';
        }
    }
};
window.reasonForAbsenceFields = function(){
	if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() == "EC_LOA paid"){
		// Get the selected value from field: Reason for absence
		var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR732.value;
		
		if(requestByEmployee == "Salary Continuance"){
			erdElem = document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR334').parentElement;
			erdElem.style.display = "none";
			document.getElementById("section86e718b448092d19fb96").style.display = 'none';
		}else{
			erdElem = document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR334').parentElement;
			erdElem.style.display = "block";
			document.getElementById("section86e718b448092d19fb96").style.display = 'block';
		}
		
		
	}
};
window.sectionVisibilityFunc = function(){
    var countryIsoCode = document.getElementById('divFieldUTILISATEURS_CHAMPU19').children[0].innerText,
        countrySAPCode = document.getElementById('divFieldUTILISATEURS_CHAMPU232').children[0].innerText;
    var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    if(subtopic == "EC_Change in working hours" && (countryIsoCode == 'LU' || countryIsoCode == 'BE')){
        console.log('Work schedule show');
		document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR755').parentElement.style.display = 'flex';
    }else{
        console.log('Work schedule hide');
        document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR755').parentElement.style.display = 'none';
    }
};
$(document).ready(function(){
   reasonForAbsenceFields();
   partTimeLeaveVisibility();
   sectionVisibilityFunc();
});
