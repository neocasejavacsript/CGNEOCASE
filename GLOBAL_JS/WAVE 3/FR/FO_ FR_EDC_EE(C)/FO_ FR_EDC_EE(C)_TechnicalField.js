//------ FR_EDC_EE(C)  (Technical)
/*---------------------------------------------*/
//hide technical section
neocase.form.section("sectionbfe60022f9a8c8b57e7f").hide();

//code removed
window.updateLOA = function () {
    var subtopicCode = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
    var typeLOACode = formulaire.INTERVENTIONS_EN_COURS$VALEUR378;
    if (subtopicCode) { //subtopicCode field exist

        if (typeLOACode) { //typeLOACode field exist

            var subtopicCodeValue = subtopicCode.options[subtopicCode.selectedIndex].getAttribute('value');
            console.warn(subtopicCodeValue);
            switch (subtopicCodeValue) {
                case "2498": //FR_01-Paternity leave				
                case "2499": //FR_02-Maternity leave
                case "2511"://FR_14-Adoption				
                case "2501"://FR_04-Training leave (paid)
                    $(typeLOACode).find('option[code*=555]').prop('selected', true);
                    break;
                case "2500": //FR_03-Parental leave
                case "2502"://FR_05-Training leave (unpaid)
                case "2503"://FR_06-Unpaid leave > 1 month
                case "2504"://FR_07-Sabbatical leave
                case "2505"://FR_08-Business creation leave
                case "2506"://FR_09-Parental presence leave
                case "2507"://FR_10-Family support leave
                case "2508"://FR_11-Family leave
                case "2509"://FR_12-International solidarity leave
                case "2510"://FR_13-Adoption preparation leave
                case "2512"://FR_15-Educational leave				
                    $(typeLOACode).find('option[code*=556]').prop('selected', true);
                    break;
                default:
                    typeLOACode.value = "";
                    break;
            }
        }
        else { //typeLOACode field or value missing
            msg += "var typeLOACode (formulaire.INTERVENTIONS_EN_COURS$VALEUR305) not found> field missing or not loaded";
            console.log(msg);
        }

    }
    else { //subtopicCode field or value missing
        msg += "var subtopicCode (formulaire.INTERVENTIONS_EN_COURS$VALEUR305) not found> field missing or not loaded";
        console.log(msg);
    }
    updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378"), neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378").getValue());

};

/**************************************
* Update mandatory fields alert message
***************************************/
window.checkForm = function () {
    //Declare Variables
    var validator = document.getElementsByClassName('ValidatorCautionBox');
    var msg = "";
    var lang = document.getElementById("PageHtml").lang.split("-")[0];
    if (lang == "fr") {
        msg = "Merci de renseigner les champs obligatoires suivant :";
    } else {
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
    //					msg += "\n- Initial question";
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
function customMandatory() {
    this.setTimeout(function () {
        var textVal = $('#ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_ELEMENT').find("option[value=2507]").text();
        if (textVal == 'FR_10-Family support leave') {
            console.log('textVal', textVal);
            ($('#ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_ELEMENT').find("option[value=2507]")).empty();
            ($('#ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_ELEMENT').find("option[value=2507]")).append("FR_10-Congé de proche aidant");

        } else if (textVal == '10-Congé soutien familial') {
            console.log('textVal', textVal);
            ($('#ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_ELEMENT').find("option[value=2507]")).empty();
            ($('#ctl04_ctl14_ctl00_INTERVENTIONS_EN_COURS_ELEMENT').find("option[value=2507]")).append("10-Congé de proche aidant");
        }


    }, 1000);

}
// window.addrsMandate = function(){
// 	var subtopicVal = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
// 	if( subtopicVal != '2517'){
// 		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR348').noMandatory();
// 	}
// 	else{
// 		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR348').mandatory();
// 	}
// };
window.wfhSubtopicVisibility = function(){
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    if(subtopic !== '2517'){ // Subtopic : FR_01-Work from home initial request
        neocase.form.section('section03df308ecdd4f061ceeb').hide();// Work from home demand Section
        neocase.form.section('sectionafd9cfda7a2324fd5d1c').hide();// New work from home addendum article Section
        neocase.form.section('section8224e97d2f94b6ecb2da').hide();// Work from home rythm
        if(subtopic == '2519'){//Subtopic : FR_02-Work from home suspension
            neocase.form.section('sectionafd9cfda7a2324fd5d1c').show();// New work from home addendum article Section
            $('#section2b8271224bbd6619f541').find('hr').remove();//Work from home suspension Section
            if($('#sectionafd9cfda7a2324fd5d1c').find('hr').length< 1){// New work from home addendum article Section
                $('#sectionafd9cfda7a2324fd5d1c').append('<hr>');// New work from home addendum article Section
            }
            if($('#section1171c624df5df12dcd3e').find('hr').length< 1){//Effective date Section
                $('#section1171c624df5df12dcd3e').append('<hr>');
            }
            if($('#sectionaa5b769650c88557d364').find('hr').length< 1){//End work from home Section
                $('#sectionaa5b769650c88557d364').append('<hr>');
            }
        }
        if(subtopic == '2525'){// Subtopic: FR_03-End of suspension
            neocase.form.section('sectionafd9cfda7a2324fd5d1c').show();// New work from home addendum article Section
            $('#section1171c624df5df12dcd3e').find('hr').remove();//Effective date Section
            if($('#sectionafd9cfda7a2324fd5d1c').find('hr').length< 1){// New work from home addendum article Section
                $('#sectionafd9cfda7a2324fd5d1c').append('<hr>');// New work from home addendum article Section
            }
            if($('#section2b8271224bbd6619f541').find('hr').length< 1){//Work from home suspension Section
                $('#section2b8271224bbd6619f541').append('<hr>');
            }
            if($('#sectionaa5b769650c88557d364').find('hr').length< 1){//End work from home Section
                $('#sectionaa5b769650c88557d364').append('<hr>');
            }
        }
        if(subtopic == '2521'){// Subtopic : FR_04-End work from home
            neocase.form.section('sectionafd9cfda7a2324fd5d1c').show();// New work from home addendum article Section
            $('#sectionaa5b769650c88557d364').find('hr').remove();//End work from home Section
            if($('#sectionafd9cfda7a2324fd5d1c').find('hr').length< 1){// New work from home addendum article Section
                $('#sectionafd9cfda7a2324fd5d1c').append('<hr>');// New work from home addendum article Section
            }
            if($('#section2b8271224bbd6619f541').find('hr').length< 1){//Work from home suspension Section
                $('#section2b8271224bbd6619f541').append('<hr>');
            }
            if($('#section1171c624df5df12dcd3e').find('hr').length< 1){//Effective date Section
                $('#section1171c624df5df12dcd3e').append('<hr>');
            }
        }        
    }else{
        neocase.form.section('section03df308ecdd4f061ceeb').show();// Work from home demand Section
        neocase.form.section('sectionafd9cfda7a2324fd5d1c').show();// New work from home addendum article Section
        neocase.form.section('section8224e97d2f94b6ecb2da').show();// Work from home rythm
        neocase.form.section('section1171c624df5df12dcd3e').hide();// Effective date
        $('#section03df308ecdd4f061ceeb').find('hr').remove();// Work from home demand Section
        if($('#sectionafd9cfda7a2324fd5d1c').find('hr').length< 1){// New work from home addendum article Section
            $('#sectionafd9cfda7a2324fd5d1c').append('<hr>');// New work from home addendum article Section
        }
        var effectiveDate = $('#'+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5')['elementHTML']['id']);
        effectiveDate.datepicker('option', 'minDate', new Date(2021,11,1));
    }
    neocase.form.section('section2b8271224bbd6619f541').hide();
    neocase.form.section('sectionaa5b769650c88557d364').hide();
    if(subtopic == '2521' || subtopic == '2519' || subtopic == '2525'){ // Subtopic : FR_04-End work from home || FR_02-Work from home suspension || FR_03-End of suspension
        neocase.form.section('section1171c624df5df12dcd3e').show();// Effective date
        if(subtopic == '2521'){//Subtopic : FR_04-End work from home
            neocase.form.section('sectionaa5b769650c88557d364').show();
            var reasonOfEndArray = [].slice.call(formulaire.INTERVENTIONS_EN_COURS$VALEUR711.options);
            reasonOfEndArray.forEach(function(item, index, array){ 
                var itemCode = item.getAttribute('code');
                if(itemCode !== '2728' && itemCode !== '2729' && itemCode !== '2730' && itemCode !== '2731' &&  item.getAttribute('value') !== '')  {
                    // item.remove(); //ie doesnot support
                    $(item).remove();
                }         
            });
        }
        if(subtopic == '2519'){
            neocase.form.section('section2b8271224bbd6619f541').show();
            var reasonOfSuspensionArray = [].slice.call(formulaire.INTERVENTIONS_EN_COURS$VALEUR712.options);
            reasonOfSuspensionArray.forEach(function(item, index, array){
                console.log(typeof item.getAttribute('code'));
                if(item.getAttribute('code') == '2726' || item.getAttribute('code') == '2727'){
                    // item.remove();//ie doesnot support
                    $(item).remove();
                }
            });
        }
    }
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function () {
    //update 'level 1' value
    updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"), getParamFromUrl('topic'));
    // popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR264, "/Custom_Referential/WorkFromHome.aspx");
    //Disable fields
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR262"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR263"));
    // disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR264"));
    //disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR421"));
    neocase.form.section('sectioned6d242fae72700857e9').hide();
    customMandatory();

};
neocase.form.event.bind("init", launchOnInit);

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
	// addrsMandate();
    wfhSubtopicVisibility();
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function () {
    //add control before submit
    checkForm();

};
neocase.form.event.bind("submit", launchOnSubmit);
