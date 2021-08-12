/*************FR_AGR_PAYROLL(R) - FRONT END - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Riya Dutta
Date	    - 02/12/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - JS started 1st time for this form
			 -Hide Technical Section
			 -Hide Hidden Section
---------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 07/06/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - Hide Request details for subtopic FR_Addendum return;Renvoi avenant (3701)
----------------------------------------------------------------------------*/
/*---- MOD-001 STARS ----*/
//Hide Technical Section
document.getElementById("sectiond6eb468e062bac8dde2c").style.display = "none";
//Hide Hidden Section
document.getElementById("sectionfbdcfa0715d768bb875a").style.display = "none";
/*---- MOD-001 ENDS ----*/

$(document).ready(function(){
	var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
	if(subtopic == 'FR_Addendum return' || subtopic == 'Renvoi avenant'){ // Subtopic: FR_Addendum return;Renvoi avenant (3701)
		document.querySelectorAll('.bloc-question')[0].style.display = 'none'; // hide Request detail
		document.getElementById('section6e882a6f246deed213dd').style.display = 'none'; // hide Request Detail header
	}
	if(subtopic == 'FR_Work from home allowance (new agreement)' || subtopic == 'Indemnités télétravail (nouvel accord)'){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord) (3089)
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR964').style.display = 'block';
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR945').style.display = 'none';
	}else{
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR964').style.display = 'none';
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR945').style.display = 'block';
	}
});
