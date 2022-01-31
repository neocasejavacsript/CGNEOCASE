//------ FR_EDC_EE(R)  (Technical)
/*---------------------------------------------*/
window.wfhSubtopicVisibility = function(){
    var subtopic = document.getElementById('divFieldINTERVENTIONS_EN_COURS_ELEMENT').innerText.trim();
    if(subtopic !== 'FR_01-Work from home initial request' && subtopic !== '01-Demande initiale de télétravail'){
        document.getElementById("section2fe4c17dee9d57fd8e74").style.display = "none"; //Work from home demand
        document.getElementById("section61760182fd651f8b42a7").style.display = "none";//New work from home addendum article
        document.getElementById("section191210123acdd394c90c").style.display = "none";//Work from home rythm
        if(subtopic == 'FR_02-Work from home suspension' || subtopic == '02-Suspension du télétravail'){//Subtopic : FR_02-Work from home suspension(2519)
            document.getElementById("section61760182fd651f8b42a7").style.display = "block";// New work from home addendum article Section
        }
        if(subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){// Subtopic: FR_03-End of suspension(2525)
            document.getElementById("section61760182fd651f8b42a7").style.display = "block";// New work from home addendum article Section
        }
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){// Subtopic : FR_04-End work from home(2521)
            document.getElementById("section61760182fd651f8b42a7").style.display = "block";// New work from home addendum article Section
        }
    }else{
        console.log(subtopic);
        document.getElementById("section2fe4c17dee9d57fd8e74").style.display = "block";//Work from home demand
        document.getElementById("section61760182fd651f8b42a7").style.display = "block";//New work from home addendum article
        document.getElementById("section191210123acdd394c90c").style.display = "block";//Work from home rythm
        document.getElementById("section85d300fad9f1ed53878b").style.display = "none";//Effective date
        // $('#section2fe4c17dee9d57fd8e74').find('hr').remove();
        // if($('#section61760182fd651f8b42a7').find('hr').length< 1){
        //     $('#section61760182fd651f8b42a7').append('<hr>');
        // }
    }
    document.getElementById("sectione8486e5e23b2d5d687eb").style.display = "none";//Work from home suspension
	document.getElementById("sectionbd2e1587fcb871b34fbb").style.display = "none";//End work from home
    if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail' || subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail' || subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){
        document.getElementById("section85d300fad9f1ed53878b").style.display = "block";//Effective date
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){
            document.getElementById("sectionbd2e1587fcb871b34fbb").style.display = "block";//End work from home
        }
        if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail'){
            document.getElementById("sectione8486e5e23b2d5d687eb").style.display = "block";//Work from home suspension
        }
    }
};    

//hide technical section
$(document).ready(function(){
    document.getElementById("section5cb19e4490fb99a4d503").style.display = "none";
    //neocase.form.section('section1171498a9f2aa365bab7').hide();
    document.getElementById("section1171498a9f2aa365bab7").style.display = "none";

    wfhSubtopicVisibility();
});
