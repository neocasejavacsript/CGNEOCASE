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

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
	//add control before submit
	checkForm();
	};
neocase.form.event.bind("submit",launchOnSubmit);
