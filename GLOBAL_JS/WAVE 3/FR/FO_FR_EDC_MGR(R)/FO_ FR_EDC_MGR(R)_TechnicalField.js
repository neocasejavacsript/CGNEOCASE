/*-----------------------------------------
Developer   - Riya Dutta
Date	    - 03/23/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - hide technical section
-------------------------------------------
Developer   - Suman Saha
Date	    - 05/22/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - hide Hidden section
------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 12/02/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - show section for 02 Addedum for given days
----------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 10/01/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - Visibility of section updated for 2 subtopics.
--------------------------------------------------------------------*/ 

/* ------------- Start of MOD-001 changes -------------*/
document.getElementById("section3803e028f8171d781013").style.display = "none";
    console.log("question : " +formulaire.INTERVENTIONS_EN_COURS$QUESTION);
    console.log("question : " +formulaire.QUESTION);
/* ------------- End of MOD-001 changes -------------*/	

document.getElementById("sectionea1eb0db908e5c46db5a").style.display = "none";	// mod-002++

$(document).ready(function(){
    var subtopicVal = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').children[0].innerText;
    if(subtopicVal == '02- Avenant don de jours' || subtopicVal == 'FR_02-Addendum for given days'){
        document.getElementById('sectione1f18b879578ddb1e491').style.display = 'block';
    }else{
        document.getElementById('sectione1f18b879578ddb1e491').style.display = 'none';
    }
    if(subtopicVal == 'FR_04-End work from home' || subtopicVal == '04-Arrêt du télétravail'){
        document.getElementById('section0a8fde7bc4a751179ae5').style.display = 'block';
    }else{
        document.getElementById('section0a8fde7bc4a751179ae5').style.display = 'none';
    }
    if(subtopicVal == 'FR_02-Work from home suspension' || subtopicVal == '02-Suspension du télétravail'){//MOD-004
        document.getElementById('sectionf8a448c0fc103bcdbeaf').style.display = 'block';
    }else{
        document.getElementById('sectionf8a448c0fc103bcdbeaf').style.display = 'none';
    }
    var topic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_MOTCLE').children[0].innerText;
    if(topic == 'FR_Work from home' || topic == 'Télétravail'){
        document.getElementById('divINTERVENTIONS_EN_COURS_VALEUR357').style.display = 'none';
    }
});
