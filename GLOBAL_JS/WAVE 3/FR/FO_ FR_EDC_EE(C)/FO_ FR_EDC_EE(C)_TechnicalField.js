//hide technical section
neocase.form.section("sectionbfe60022f9a8c8b57e7f").hide();

//code removed
window.updateLOA = function(){
	var subtopicCode=formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
	var typeLOACode=formulaire.INTERVENTIONS_EN_COURS$VALEUR378;
	if (subtopicCode){ //subtopicCode field exist

			if (typeLOACode){ //typeLOACode field exist
			
				var subtopicCodeValue = subtopicCode.options[subtopicCode.selectedIndex].getAttribute('value');
				console.warn(subtopicCodeValue);
				switch(subtopicCodeValue)
				{
					case "2498": //FR_01-Paternity leave				
					case "2499": //FR_02-Maternity leave
					case "2511"://FR_14-Adoption				
					case "2501"://FR_04-Training leave (paid)
					$(typeLOACode).find('option[code*=555]').prop('selected',true); 
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
					$(typeLOACode).find('option[code*=556]').prop('selected',true); 
					break;				
					default:
					typeLOACode.value="";
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
		updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378"),neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR378").getValue());

};

/**************************************
* Update mandatory fields alert message
***************************************/
window.checkForm = function(){
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
	if(validator.length > 0){
		for(v=0; v<validator.length; v++){
			var validatorVisibility = validator[v].style.visibility;
			if(validatorVisibility == "visible"){
				if(validator[v].id.search("question") != -1){
					if(lang == "fr"){
						msg += "\n- Demande initiale";
					}else{
						msg += "\n- Initial question";
					}
				}else{
					var validatorField = validator[v].parentNode.previousSibling.previousSibling;
					if(validatorField){
						var validatorLabel = "";
						if(validatorField.getElementsByTagName("a").length > 0){
							validatorLabel = validatorField.getElementsByTagName("a")[0].innerHTML.split(":")[0];
						}else if(validatorField.getElementsByTagName("label").length > 0){
							validatorLabel = validatorField.getElementsByTagName("label")[0].innerHTML.split(":")[0];
						}else{
							validatorLabel = "undefined";
						}
						msg += "\n- "+validatorLabel;
					}
				}
			}
		}
		//update the alert message
		m_requiredFieldsUndefined = msg;
	}

	//If all previous control are valid, the function return "true" to execute the Submit function
	return true;
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	//update 'level 1' value
	updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR264,"/Custom_Referential/WorkFromHome.aspx");
	//Disable fields
disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR262"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR263"));
	disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR264"));
disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR421"));
neocase.form.section('sectioned6d242fae72700857e9').hide();

};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	//add control before submit
	checkForm();
};
neocase.form.event.bind("submit",launchOnSubmit);
