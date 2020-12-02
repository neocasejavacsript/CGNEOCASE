/* --- EC_AGR_MGR(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/29/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
--------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/01/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - countryWiseSectionVisibility() for section display based on country(China)
-----------------------------------------------------------*/ 

// hide Technical section
checkSectionHide("section1882b8598378661e788e");

// hide hidden section
checkSectionHide("sectione295d41b8c7053b5e0e3");

window.countryWiseSectionVisibility = function(){
    var countryIsoCode = document.getElementById('divFieldUTILISATEURS_CHAMPU19').children[0].innerText,
        countrySAPCode = document.getElementById('divFieldUTILISATEURS_CHAMPU232').children[0].innerText;
    try{
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            document.getElementById('sectionf3c108636298aa54572a').style.display = 'block';
        }else{
            document.getElementById('sectionf3c108636298aa54572a').style.display = 'none';
        }
    }catch(error){
        console.log(error);
    }
};

$(document).ready(function(){
	countryWiseSectionVisibility();
});
