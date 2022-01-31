//------ FR_EDC_EE(M)  (Technical)
/*---------------------------------------------*/
//hide technical section
neocase.form.section("section2768aff2e9a727689da1").hide();

window.checkForm = function(){
	/***************************************
	* Update mandatory fields alert message
	***************************************/
	//Declare Variables
	var validator = document.getElementsByClassName('ValidatorCautionBox');
	var msg = "";
	var lang = document.getElementById("PageHtml").lang.split("-")[0];
	if(lang == "fr"){
		msg = "Merci de renseigner les champs obligatoires suivant :";
	}else{
		msg = "Please fill the following mandatory fields :";
	}

	//If mandatory fields are blanked, we add their name in the alert message
	//if(validator.length > 0){
	//	for(v=0; v<validator.length; v++){
	//		var validatorVisibility = validator[v].style.visibility;
	//		if(validatorVisibility == "visible"){
	//			if(validator[v].id.search("question") != -1){
	//				if(lang == "fr"){
	//					msg += "\n- Demande initiale";
	//				}else{
	//					msg += "\n- Initial request";
	//				}	
	//			}else{
	//				var validatorField = validator[v].parentNode.previousSibling.previousSibling;
	//				if(validatorField){
	//					var validatorLabel = "";
	//					if(validatorField.getElementsByTagName("a").length > 0){
	//						validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
	//					}else if(validatorField.getElementsByTagName("label").length > 0){
	//						validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
	//					}else{
	//						validatorLabel = "undefined";
	//					}
	//					msg += "\n- "+validatorLabel;
	//				}
	//			}
	//		}
	//	}
		//update the alert message
		m_requiredFieldsUndefined = msg;
	//}
	//If all previous control are valid, the function return "true" to execute the Submit function
	return true;
};
window.wfhSubtopicVisibility = function(){
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    if(subtopic !== 'FR_01-Work from home initial request' && subtopic !== '01-Demande initiale de télétravail'){
        neocase.form.section('section63d25d9f4d7ef7ab3dbe').hide();//Work from home demand
        neocase.form.section('sectiona35b7fed1fca3cc19b4f').hide();//New work from home addendum article
        neocase.form.section('section1db9fd2001c0a2429163').hide();//Work from home rythm
		if(subtopic == 'FR_02-Work from home suspension' || subtopic == '02-Suspension du télétravail'){//Subtopic : FR_02-Work from home suspension(2519)
            neocase.form.section('sectiona35b7fed1fca3cc19b4f').show();// New work from home addendum article Section
            $('#section9b86c3660f0744c1d01a').find('hr').remove();//Work from home suspension Section
            if($('#sectiona35b7fed1fca3cc19b4f').find('hr').length< 1){// New work from home addendum article Section
				$('#sectiona35b7fed1fca3cc19b4f').append('<hr>');// New work from home addendum article Section
			}
			if($('#section141').find('hr').length< 1){//Effective date Section
                $('#section141').append('<hr>');
            }
            if($('#section80455f4981c51c4da722').find('hr').length< 1){//End work from home Section
                $('#section80455f4981c51c4da722').append('<hr>');
            }
        }
        if(subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){// Subtopic: FR_03-End of suspension(2525)
            neocase.form.section('sectiona35b7fed1fca3cc19b4f').show();// New work from home addendum article Section
            $('#section141').find('hr').remove();//Effective date Section
			if($('#sectiona35b7fed1fca3cc19b4f').find('hr').length< 1){// New work from home addendum article Section
				$('#sectiona35b7fed1fca3cc19b4f').append('<hr>');// New work from home addendum article Section
			}
            if($('#section9b86c3660f0744c1d01a').find('hr').length< 1){//Work from home suspension Section
                $('#section9b86c3660f0744c1d01a').append('<hr>');
            }
            if($('#section80455f4981c51c4da722').find('hr').length< 1){//End work from home Section
                $('#section80455f4981c51c4da722').append('<hr>');
            }
        }
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){// Subtopic : FR_04-End work from home(2521)
            neocase.form.section('sectiona35b7fed1fca3cc19b4f').show();// New work from home addendum article Section
            $('#section80455f4981c51c4da722').find('hr').remove();//End work from home Section
			if($('#sectiona35b7fed1fca3cc19b4f').find('hr').length< 1){// New work from home addendum article Section
				$('#sectiona35b7fed1fca3cc19b4f').append('<hr>');// New work from home addendum article Section
			}
            if($('#section9b86c3660f0744c1d01a').find('hr').length< 1){//Work from home suspension Section
                $('#section9b86c3660f0744c1d01a').append('<hr>');
            }
            if($('#section141').find('hr').length< 1){//Effective date Section
                $('#section141').append('<hr>');
            }
        }
    }else{
        neocase.form.section('section63d25d9f4d7ef7ab3dbe').show();//Work from home demand
        neocase.form.section('sectiona35b7fed1fca3cc19b4f').show();//New work from home addendum article
        neocase.form.section('section1db9fd2001c0a2429163').show();//Work from home rythm
        neocase.form.section('section141').hide();//Effective date
        $('#section63d25d9f4d7ef7ab3dbe').find('hr').remove();//Work from home demand
        if($('#sectiona35b7fed1fca3cc19b4f').find('hr').length< 1){//New work from home addendum article
            $('#sectiona35b7fed1fca3cc19b4f').append('<hr>');//New work from home addendum article
        }
		var effectiveDate = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5')['elementHTML']['id']);
        effectiveDate.datepicker('option', 'minDate', new Date(2021,11,1));
    }
	neocase.form.section('section80455f4981c51c4da722').hide();//End work from home
	neocase.form.section('section9b86c3660f0744c1d01a').hide();//Work from home suspension
    if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail' || subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail' || subtopic == 'FR_03-End of suspension' || subtopic == '03-Fin de suspension du télétravail'){
        neocase.form.section('section141').show();//Effective date
        if(subtopic == 'FR_04-End work from home' || subtopic == '04-Arrêt du télétravail'){
            neocase.form.section('section80455f4981c51c4da722').show();//End work from home
			var reasonOfEndArray = [].slice.call(formulaire.INTERVENTIONS_EN_COURS$VALEUR711.options);
            reasonOfEndArray.forEach(function(item, index, array){
                var itemCode = item.getAttribute('code');
                if(itemCode !== '2728' && itemCode !== '2729' && itemCode !== '2730' && itemCode !== '2731' &&  item.getAttribute('value') !== '')  {
                    // item.remove(); //ie doesnot support
                    $(item).remove();
                }         
            });
        }
        if(subtopic == 'FR_02-Work from home suspension'|| subtopic == '02-Suspension du télétravail'){
            neocase.form.section('section9b86c3660f0744c1d01a').show();//Work from home suspension
            var reasonOfSuspensionArray = [].slice.call(formulaire.INTERVENTIONS_EN_COURS$VALEUR712.options);
            reasonOfSuspensionArray.forEach(function(item, index, array){
                console.log(typeof item.getAttribute('code'));
                if(item.getAttribute('code') == '2726' || item.getAttribute('code') == '2727'){
                    // item.remove(); //ie doesnot support
                    $(item).remove();
                }
            });
        }

    }
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"));
	disableField(neocase.form.field("question"));
// popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR264,"/Custom_Referential/WorkFromHome.aspx");
	//Disable fields
disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR262"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR263"));
	// disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR264"));
//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR421"));
neocase.form.section('sectioncbdfbcdcef6fe827cf7a').hide();


};
neocase.form.event.bind("init",launchOnInit);
/**************************
 * Launch Javascript on loadcomplete
 ***************************/
 window.launchOnloadcomplete = function () {
	
    wfhSubtopicVisibility();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	//add control before submit
	checkForm();
	};
neocase.form.event.bind("submit",launchOnSubmit);
