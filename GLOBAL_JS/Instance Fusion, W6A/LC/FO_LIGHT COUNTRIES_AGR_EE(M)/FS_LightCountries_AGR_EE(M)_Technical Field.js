// JavaScript Document
/**************		FS_EDC_EE Front Office (M) Technical Fields	*************
********************************************************************************
Developer   - 
Date	    - 10/16/2017
Change No   - MOD-001
Description - 
***************************************************************************
Developer   - Smita singh
Date	    - 02/05/2019
Change No   - MOD-002
Description - Rewriting JS
***************************************************************************
Developer   - Smita singh
Date	    - 06/26/2019
Change No   - MOD-003
Description - No backdated selection to be allowed for employee

***********************************************************/

/*****************
 * Hide Sections
 *****************/
ThisForm.HideSection("sectiond468895ba7e076561ca9");

/*-------START -- Restrict user to input back date -- SS -- 06/26/2019 -------*/
window.setResignationDateRange = function(){
	var dateElement = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR376").elementHTML;
	$(dateElement).parent().find('span#wrongDate').remove();
	var dateSelected = "";
	dateSelected = dateElement.value;

if( dateSelected != "" )
{
	
	var today = new Date();
	var currMonth = today.getMonth()+1; //jan = 0;
	var currDay = today.getDate();
	var currYear = today.getFullYear();
	var todayDateText = currMonth + "/" + currDay + "/" + currYear;
	var todayDateFormatted = new Date(currYear,currMonth,currDay);
	
	newDateSelected = new Date(dateSelected);
	var newSelectedMonth = newDateSelected.getMonth()+1; //jan = 0;
	var newSelectedDay = newDateSelected.getDate();
	var newSelectedYear = newDateSelected.getFullYear();
	
	var selectedDateFormatted = new Date(newSelectedYear,newSelectedMonth,newSelectedDay);
	

	
	if(selectedDateFormatted< todayDateFormatted){
		console.log("smaller");
		$(dateElement).after("<span id='wrongDate' style='color:red;'>Date cannot be back dated</span>");
		//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled");
		 $(".submitSimpleRequestButton").css("pointer-events","none");

	}
	else{
		//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled');
		 $(".submitSimpleRequestButton").css("pointer-events","");
		console.log("greater");
	}
	
	
}

};
/*------- END -- Restrict user to input back date -- SS -- 06/26/2019 -------*/

/************************************************
 * FUNCTIONS CALLED BY POPUP TO FILL CUSTOM FIELDS
 *************************************************/

//Management Popup - Reviewer
FillCf_Reviewer_First_Name = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value = fieldValue;
};
FillCf_Reviewer_LastName = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR154.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR154, false);
};

FillCf_Reviewer_PersonelNum = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR158.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR158, false);
};
//Management Popup - Supervisor
FillCf_Supervisor_First_Name = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value = fieldValue;
};
FillCf_Supervisor_LastName = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR183.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR183, false);
};

FillCf_Supervisor_PersonelNum = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR187.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR187, false);
};

//Management Popup - Mentor 
FillCf_Mentor_First_Name = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value = fieldValue;
};
FillCf_Mentor_LastName = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR166.value += " " + fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR166, false);
};

FillCf_Mentor_PersonelNum = function(fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR170.value = fieldValue;
    champObligatoire(formulaire.INTERVENTIONS_EN_COURS$VALEUR170, false);
}; 

window.getParamFromUrl = function(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function(m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;

};

/****************************
 * MANAGE SECTION
 *****************************/
window.hideAllSection = function() {
	
	neocase.form.section("section19a724421fa2bcf87255").hide(); //Effective date section
	neocase.form.section("section458").hide();
	neocase.form.section("section388").hide();
	neocase.form.section("section253").hide();
	neocase.form.section("sectionc66882a8b1a5fe6b9f78").hide();
	neocase.form.section("sectiondfb1c572fed6c3cbfa1b").hide();
	neocase.form.section("section978").hide();
	neocase.form.section("section3ee5542f26a2def7f5bf").hide();  //Termination info
  neocase.form.section("section68c682c7983b6784dfdf").hide();  //Resignation info
 // neocase.form.section("section5da0b635bb7c2fa7da10").hide();  //Last working day
  neocase.form.section("sectiona03e205dbc1585c07446").hide();  //LOA
  neocase.form.section("section3393ec064b2dcf13f2bf").hide();  //Return LOA
	
	console.log("hideAllSection");
	
};

window.manageSection = function() {
	try{
	hideAllSection();
	
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getNumber();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getNumber();


		if (topic == '2209') {
			//	Mass Upload
			if (subtopic == '2117') {
				// Supervisor / reviewer
			}
			if (subtopic == '2223') {
				//Personal data
			}
		}
		if (topic == '2237') {
			//Employment data change
			if (subtopic == '2169') {
				//Management team FO
			}
			if (subtopic == '2170') {
				//Probation Period update
				neocase.form.section('section458').show();
			}
		}


		if (topic == '2241') {
			neocase.form.section('sectiona03e205dbc1585c07446').show();
			document.getElementById('sectiona03e205dbc1585c07446').style.display = 'block'; //LOA details
		}
	
		if (topic == '2239') {
			//	Leave involuntary FO
			if (subtopic == '2199') {
				//Involuntary leave
				neocase.form.section('section3ee5542f26a2def7f5bf').show(); //Termination info
			//	neocase.form.section('section5da0b635bb7c2fa7da10').show(); //Last working day
				//document.getElementById("section3ee5542f26a2def7f5bf").style.display = "block";		//Termination info
			}
			if (subtopic == '2200') {
				//End of Fixed Term Contract - MGR
				neocase.form.section('section253').show(); //Fixed Term Contract
				neocase.form.section('section3ee5542f26a2def7f5bf').show(); //Termination info
			//	neocase.form.section('section5da0b635bb7c2fa7da10').show(); //Last working day
				//document.getElementById("section3ee5542f26a2def7f5bf").style.display = "block";		//Confirmed Leaving dates
			}
			if (subtopic == '2143') {
			//Retirement 
			//	neocase.form.section('section5da0b635bb7c2fa7da10').show(); //Last working day
				//document.getElementById("section3ee5542f26a2def7f5bf").style.display = "block";		//Confirmed Leaving dates
			}
			/*if(subtopic == "2374") {	//Resignation withdrawn
			document.getElementById("section3ee5542f26a2def7f5bf").style.display = "block";		//Confirmed Leaving dates 
		} */
		}
		if (topic == '2242') {
			if (subtopic == '2376') {
				//LOA Unpaid
				neocase.form.section('sectiona03e205dbc1585c07446').show();
				document.getElementById('sectiona03e205dbc1585c07446').style.display = 'block'; //LOA details
			}
		}
		if (topic == '2243') {
			if (subtopic == '2021') {
				//Return from LOA
				neocase.form.section('section3393ec064b2dcf13f2bf').show();
				document.getElementById('section3393ec064b2dcf13f2bf').style.display = 'block'; //Return from LOA details
			}
		}

		if (topic == '2240') {
			//	Leave voluntary FO
			if (subtopic == '2142') {
				//End of Fixed Term Contract - EE
				neocase.form.section('section253').show();
				neocase.form.section('section3ee5542f26a2def7f5bf').show(); //Confirmed Leaving dates
				document.getElementById('section3ee5542f26a2def7f5bf').style.display = 'block'; //Confirmed Leaving dates
				neocase.form.section('section68c682c7983b6784dfdf').show(); //Resignation info
				document.getElementById('section68c682c7983b6784dfdf').style.display = 'block'; //Resignation info
			}
			if (subtopic == '2143') {
				//Retirement
				//document.getElementById('section3ee5542f26a2def7f5bf').style.display = 'block'; //Confirmed Leaving dates
				//neocase.form.section('section3ee5542f26a2def7f5bf').show(); //Confirmed Leaving dates
			//	neocase.form.section('section5da0b635bb7c2fa7da10').show(); //Last working day
			}
			if (subtopic == '2240') {
				//	Voluntary leave
				neocase.form.section('section68c682c7983b6784dfdf').show(); //Resignation info
				document.getElementById('section68c682c7983b6784dfdf').style.display = 'block'; //Resignation info
				//	document.getElementById("section3ee5542f26a2def7f5bf").style.display = "block";	//Confirmed Leaving dates
				//	neocase.form.section("section3ee5542f26a2def7f5bf").show();	//Confirmed Leaving dates
				//last working day section
				//document.getElementById("section5da0b635bb7c2fa7da10").style.display = "block";
			//	neocase.form.section('section5da0b635bb7c2fa7da10').show();
			}
		}
		if (topic == '2244') {
			//	General request
			if (subtopic == '2316') {
				//Other request (EE)
			}
		}

		console.log('manageSection');
	} catch (error) {
		console.log(error.message);
	}
};


/****************************
 * AUTOMATICALLY FILL TOPIC
 *****************************/
window.manageTopicSubtopic = function() {
	
	setTimeout(function() {
		var gettingval1 = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
		neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').setValue(gettingval1);
	}, 1000);
	
	setTimeout(function() {
		var gettingval2 = neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').getText();
		neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').setValue(gettingval2);
	}, 1000);

};

/*************************************
 * MANAGE PROBATION STATUS DEPENDANCIES
 **************************************/
window.probationCodeToDesc = function() {
	
	
		//Définition des variables
		var msg = "fonction probationCodeToDesc : ";
		var probationCode = formulaire.INTERVENTIONS_EN_COURS$VALEUR130;
		var probationType = formulaire.INTERVENTIONS_EN_COURS$VALEUR132;
		if (probationCode) {
			if (probationType) {
				//Si les 2 champs concernés sont trouvés, on exécute la fonction
				if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "408") {
					$(probationType).find('option[code*=413]').prop('selected', true);
					//probationType.code = "413";
				} else if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "409") {
					$(probationType).find('option[code*=414]').prop('selected', true);
					//probationType.code = "414";
				} else if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "410") {
					$(probationType).find('option[code*=415]').prop('selected', true);
					//probationType.code = "415";
				} else if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "411") {
					$(probationType).find('option[code*=416]').prop('selected', true);
					//probationType.code = "416";
				} else if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "227") {
					$(probationType).find('option[code*=228]').prop('selected', true);
					//probationType.code = "228";
				} else if (probationCode.options[probationCode.selectedIndex].getAttribute("code") == "412") {
					$(probationType).find('option[code*=417]').prop('selected', true);
					//probationType.code = "417";
				}
			} else {
				msg += "var probationType (formulaire.INTERVENTIONS_EN_COURS$VALEUR132) non trouvée > champ absent ou non chargé";
				console.log(msg);
			}
		} else {
			msg += "var probationCode (formulaire.INTERVENTIONS_EN_COURS$VALEUR130) non trouvée > champ absent ou non chargé";
			console.log(msg);
		}
	
};
window.probationDescToCode = function() {

		//Définition des variables
		var msg = "fonction probationDescToCode : ";
		var probationCode = formulaire.INTERVENTIONS_EN_COURS$VALEUR130;
		var probationType = formulaire.INTERVENTIONS_EN_COURS$VALEUR132;
		if (probationCode) {
			if (probationType) {
				//Si les 2 champs concernés sont trouvés, on exécute la fonction
				if (probationType.options[probationType.selectedIndex].getAttribute("code") == "413") {
					$(probationCode).find('option[code*=408]').prop('selected', true);
					//probationCode.code = "408Þ01";
				} else if (probationType.options[probationType.selectedIndex].getAttribute("code") == "414") {
					$(probationCode).find('option[code*=409]').prop('selected', true);
					//probationCode.code = "409Þ02";
				} else if (probationType.options[probationType.selectedIndex].getAttribute("code") == "415") {
					$(probationCode).find('option[code*=411]').prop('selected', true);
					//probationCode.code = "411Þ04";
				} else if (probationType.options[probationType.selectedIndex].getAttribute("code") == "416") {
					$(probationCode).find('option[code*=411]').prop('selected', true);
					//probationCode.code = "411Þ04";
				} else if (probationType.options[probationType.selectedIndex].getAttribute("code") == "228") {
					$(probationCode).find('option[code*=227]').prop('selected', true);
					//probationCode.code = "227Þ05";
				} else if (probationType.options[probationType.selectedIndex].getAttribute("code") == "417") {
					$(probationCode).find('option[code*=412]').prop('selected', true);
					//probationCode.code = "412Þ06";
				}
			} else {
				msg += "var probationType (formulaire.INTERVENTIONS_EN_COURS$VALEUR132) non trouvée > champ absent ou non chargé";
				console.log(msg);
			}
		} else {
			msg += "var probationCode (formulaire.INTERVENTIONS_EN_COURS$VALEUR130) non trouvée > champ absent ou non chargé";
			console.log(msg);
		}
	
};



window.popupLink = function(field, url) {
    var msg = "function popupLink : ";
    if (field) {
        //get field label
        var fieldId = field.id;
        var fieldLabel;
        if (fieldId.search("INTERVENTIONS") != -1) {
            fieldLabel = fieldId.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (fieldId.search("UTILISATEURS") != -1) {
            fieldLabel = fieldId.replace("UTILISATEURS", "lblUTILISATEURS");
        } else {
            msg += "type de champ non prit en compte " + fieldId;
            console.log(msg);
        }
        if (fieldLabel.search("_display") != -1) {
            fieldLabel = fieldLabel.replace("_display", "");
        }
        //add case number in the URL if needed
        if (url.search("Id_Demande") != -1) {
            url = url.replace("Id_Demande=", "Id_Demande=" + numeroIntervention);
        }
        //add contact ID in the URL if needed
        if (url.search("Id_User") != -1) {
            url = url.replace("Id_User=", "Id_User=" + CodeUtilisateurBis);
        }
        //Create hyperlink on label
        var onclick = "window.open('" + url + "','_blank')";
        var createPopup = document.createElement("a");
        createPopup.setAttribute("onclick", onclick);
        var popupText = document.getElementById(fieldLabel).innerHTML;
        var t = document.createTextNode(popupText);
        createPopup.appendChild(t);
        if (document.getElementById(fieldLabel).innerHTML.search("</a>") == -1) {
            document.getElementById(fieldLabel).innerHTML = "";
            document.getElementById(fieldLabel).appendChild(createPopup);
        }
    } else {
        msg += "champ non trouvé";
        console.log(msg);
    }
};

window.popupLinkFunction = function() {
	
	//neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR154').setLink('/Custom_Referential/SubArea.aspx?Id_User=','_blank','style-button');
	popupLink(document.getElementById("INTERVENTIONS_EN_COURS$VALEUR154"), "/Custom_Referential/ManagerReviewer.aspx");
	popupLink(document.getElementById("INTERVENTIONS_EN_COURS$VALEUR166"), "/Custom_Referential/ManageMentor.aspx");
	popupLink(document.getElementById("INTERVENTIONS_EN_COURS$VALEUR183"), "/Custom_Referential/ManageSupervisor.aspx");
};


window.disableField = function(field) {
    var msg = "function disableField : ";
    if (field) {
        field.onkeydown = function() { return false; };
    } else {
        msg += "field undefined or readonly";
        console.log(msg);
    }
};

window.disableFields = function() {
	//Mangement team
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR154);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR158);
    disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR183);
    disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR187);
    disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR170);
    disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR166);
	
	console.log("disableFields");
	
};

//MANDATORY FIELDS
window.noMandatories = function() {
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR132').noMandatory();	//Probation status desc (new)
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR134').noMandatory();	//Last day of probation (new)
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').noMandatory();	//Confirmed Leaving dates -> Termination date
};

window.manageMandatoryFields = function() {
	
	console.log("In Mandatory FIELDS");
	
	noMandatories();
	
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getNumber();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getNumber();
	
	if(topic == "2237") {	//Employment data change
		if(subtopic == "2170") {	//Probation Period update
			setTimeout(function() {
				neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR132').mandatory("Termination date Need to be filledup");	//Probation status desc (new)
				neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR134').mandatory("Termination date Need to be filledup");	//Last day of probation (new)
			}, 2000);
			
		}
	}
	
	if((topic == "2239")||(topic == "2240")) {	//	Leave involuntary FO  ||	Leave voluntary FO
		if((subtopic == "2199")|| (subtopic == "2200")||(subtopic == "2142") || (subtopic == "2143") || (subtopic == "2240")) {	//Involuntary leave	||	End of Fixed Term Contract - MGR || End of Fixed Term Contract - EE || Retirement || Resignation info
			setTimeout(function() {
				//neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR220').mandatory("Termination date Need to be filledup");	//Confirmed Leaving dates -> Termination date
			}, 2000);
		}
	}
	
	console.log("manageMandatoryFields");
};



/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {
	
	formulaire.question.readOnly = "true"; 

	manageTopicSubtopic();
	manageSection();
	//disableFields();
	//manageMandatoryFields();
	var sel1 = formulaire.INTERVENTIONS_EN_COURS_VALEUR130;
	var sel2 = formulaire.INTERVENTIONS_EN_COURS_VALEUR132;
	
	//sel1.addEventListener('change', function() { probationCodeToDesc(); }, false);
	//sel2.addEventListener('change', function() { probationDescToCode(); }, false);
    
	//popupLinkFunction();
	
};
neocase.form.event.bind('loadcomplete', onloadForm);
