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
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/01/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - hide request details for FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)(3089)
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/08/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - hide additional information for for subtopic FR_Addendum return;Renvoi avenant (3701)
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 01/12/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - hide additional information for for subtopic FR_Work from home allowance (on medical recommendation without addendum or more than 70%),Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%) (3714)
			- Show amount and hide supporting document for WFH exceptional allowance & medical allowances
			- hide request details for Work from home exceptional allowance 
----------------------------------------------------------------------------*/

/*---- MOD-001 STARS ----*/
//Hide Technical Section
document.getElementById("sectiond6eb468e062bac8dde2c").style.display = "none";
//Hide Hidden Section
document.getElementById("sectionfbdcfa0715d768bb875a").style.display = "none";
/*---- MOD-001 ENDS ----*/

$(document).ready(function(){
	var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
	if((subtopic == 'FR_Addendum return' || subtopic == 'Renvoi avenant')||(subtopic == 'FR_Work from home allowance (new agreement)' || subtopic == 'Indemnités télétravail (nouvel accord)')||(subtopic == 'FR_Work from home allowance (exceptional reason)'|| subtopic == 'Indemnités télétravail (Circonstances exceptionnelles)')){ // Subtopic: FR_Addendum return;Renvoi avenant (3701)
		document.querySelectorAll('.bloc-question')[0].style.display = 'none'; // hide Request detail
		document.getElementById('section6e882a6f246deed213dd').style.display = 'none'; // hide Request Detail header
		if((subtopic == 'FR_Addendum return' || subtopic == 'Renvoi avenant') || (subtopic == 'FR_Work from home allowance (exceptional reason)'|| subtopic == 'Indemnités télétravail (Circonstances exceptionnelles)')){
			if(typeof document.querySelectorAll('.complete_request_header')[0] !== 'undefined'){
				document.querySelectorAll('.complete_request_header')[0].style.display = 'none'; //Hide additional information header
				document.querySelectorAll('.complete_request_content')[0].querySelector('textarea').style.display = 'none';//Hide additional information content
				document.querySelectorAll('.mix-caseDetail-buttonBar')[0].style.display = 'none';
				document.querySelectorAll('.complete_request_content')[0].querySelector('.mix-multipleFileUpload').style.display = 'none'; 
			}
		}
		
	}
	document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR876').style.display = "none";
	if((subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)' || subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)')){
		if(typeof document.querySelectorAll('.complete_request_header')[0] !== 'undefined'){
			document.querySelectorAll('.complete_request_header')[0].style.display = 'none'; //Hide additional information header
			document.querySelectorAll('.complete_request_content')[0].querySelector('textarea').style.display = 'none';//Hide additional information content
			document.querySelectorAll('.mix-caseDetail-buttonBar')[0].style.display = 'none';
			document.querySelectorAll('.complete_request_content')[0].querySelector('.mix-multipleFileUpload').style.display = 'none'; 
		}
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR876').style.display = "block";
	}
	if((subtopic == 'FR_Work from home allowance (new agreement)' || subtopic == 'Indemnités télétravail (nouvel accord)')||(subtopic == 'FR_Work from home allowance (on medical recommendation without addendum or more than 70%)' || subtopic == 'Indemnités télétravail (sur preco médecin du travail sans avenant ou supérieur à 70%)') || (subtopic == 'FR_Work from home allowance (exceptional reason)'|| subtopic == 'Indemnités télétravail (Circonstances exceptionnelles)')){ // Subtopic: FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord) (3089), WFH medical allowance(3714), WFH exceptional allowance(3715)
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR964').style.display = 'block';
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR945').style.display = 'none';
	}else{
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR964').style.display = 'none';
		document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR945').style.display = 'block';
	}
});
