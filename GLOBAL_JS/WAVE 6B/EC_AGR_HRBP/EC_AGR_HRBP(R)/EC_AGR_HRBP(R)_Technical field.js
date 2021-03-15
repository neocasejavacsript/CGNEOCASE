/* --- EC_AGR_HRBP(R)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/02/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/23/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - partTimeLeaveVisibility() added
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-003
Description - countryWiseSectionVisibility() updated - Work schedule (new) visibility for BE & LU
---------------------------------------------------------*/ 

// hide Technical section
checkSectionHide("section37b6e0495886e35199ed");
//neocase.form.section("section550460fcf10a3fbc2f45").hide();

// hide hidden section
checkSectionHide("section33f1be6929ce3e00b6be");
//neocase.form.section("section581d27eda7446c464ab0").hide();

window.countryWiseSectionVisibility = function(){
    var countryIsoCode = document.getElementById('divFieldUTILISATEURS_CHAMPU19').children[0].innerText,
        countrySAPCode = document.getElementById('divFieldUTILISATEURS_CHAMPU232').children[0].innerText;
    var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    try{
        document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR748').parentElement.style.display = 'none';//Company Transfer date field
        document.getElementById('sectionfa528ab303799366caed').style.display = 'none'; //Only for China : Additional Pay
        document.getElementById('section4b46190382e80df0747b').style.display = 'none'; //Only for China : Additional Pay : Allowances
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            document.getElementById('section40f08ffa22efc26c3d7d').style.display = 'block';
            document.getElementById('section427f15229084f1a43748').style.display = 'block';
            if(subtopic == 'EC_Cost center change' || subtopic == 'EC_Work location transfer' || subtopic == 'EC_Grade / Job change' || subtopic == 'EC_Contract change' || subtopic == 'EC_Promotion/demotion' || subtopic == 'EC_Company change'){//EC_Cost center change ;EC_Work location transfer;EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion;EC_Company Change // +MOD-003
                document.getElementById('sectionfa528ab303799366caed').style.display = 'block';//Only for China : Additional Pay
            }
            if(subtopic == 'EC_Contract change' || subtopic == 'EC_Promotion/demotion' || subtopic == 'EC_Pay change' || subtopic == 'EC_Company change'){
                document.getElementById('section4b46190382e80df0747b').style.display = 'block'; //Only for China : Additional Pay : Allowances
            }
            if(subtopic == 'EC_Work location transfer'){
                document.getElementById('section2230db16f4162c31e868').style.display = 'block';
            }
            else if(subtopic == 'EC_Company change'){ // +MOD-003
                document.getElementById('section2230db16f4162c31e868').style.display = 'block'; //Client location
                document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'block'; //Variable Pay Scheme details
                document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR748').parentElement.style.display = 'inline-flex';//Company Transfer date field
            }
            else{
                document.getElementById('section2230db16f4162c31e868').style.display = 'none';
                document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'none'; //Variable Pay Scheme details
            }
            document.getElementById('section84e881c7b3478d8d1722').style.display = 'none';
        }
        else if(countryIsoCode == 'BE' && countrySAPCode == '12'){
            if(subtopic == 'EC_Pay change' || subtopic == 'EC_Contract change' || subtopic == 'EC_Promotion/demotion'){
                document.getElementById('section84e881c7b3478d8d1722').style.display = 'block';
            }
            else{
                document.getElementById('section84e881c7b3478d8d1722').style.display = 'none';
            }
            document.getElementById('section40f08ffa22efc26c3d7d').style.display = 'none';
            document.getElementById('section2230db16f4162c31e868').style.display = 'none';
            document.getElementById('section427f15229084f1a43748').style.display = 'none';
            document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'none';
        }
        else if(countryIsoCode == 'CZ' || countryIsoCode == 'HU' || countryIsoCode == 'IE' || countryIsoCode == 'IT' ){
            if(subtopic == 'EC_Promotion/demotion'){
                document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'block';

            }else{
                document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'none';
            }
            document.getElementById('section40f08ffa22efc26c3d7d').style.display = 'none';
            document.getElementById('section427f15229084f1a43748').style.display = 'none';
            document.getElementById('section2230db16f4162c31e868').style.display = 'none';
            document.getElementById('section84e881c7b3478d8d1722').style.display = 'none';
        }
        else{
            document.getElementById('section40f08ffa22efc26c3d7d').style.display = 'none';
            document.getElementById('section2230db16f4162c31e868').style.display = 'none';
            document.getElementById('section84e881c7b3478d8d1722').style.display = 'none';
            document.getElementById('section427f15229084f1a43748').style.display = 'none';
            document.getElementById('section3f5fe52bb66ddf74f137').style.display = 'none';
        }
        if(subtopic == "EC_Contract change" && (countryIsoCode == 'LU' || countryIsoCode == 'BE')){
            console.log('Work schedule show');
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR755').parentElement.style.display = 'flex';
        }else{
            console.log('Work schedule hide');
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR755').parentElement.style.display = 'none';
        }
    }catch(error){
        console.log(error);
    }
};
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = document.getElementById('divFieldUTILISATEURS_CHAMPU19').children[0].innerText,
        countrySAPCode = document.getElementById('divFieldUTILISATEURS_CHAMPU232').children[0].innerText;
    var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText || neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
        document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR752').parentElement.style.display = 'none';
    if(countryIsoCode == 'LU'){
        if(subtopic == 'EC_Change in working hours' || subtopic == 'EC_Contract change'){
            document.getElementById('divLblINTERVENTIONS_EN_COURS_VALEUR752').parentElement.style.display = 'flex';
        }
    }
};
$(document).ready(function(){
	countryWiseSectionVisibility();
    partTimeLeaveVisibility();
});
