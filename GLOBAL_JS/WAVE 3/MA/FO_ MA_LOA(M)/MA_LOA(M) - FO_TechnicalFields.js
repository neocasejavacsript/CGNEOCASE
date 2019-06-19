/**************		MA_LOA(M) - FO Technical Fields	*************
******************************************************************
Modified version - MD-001
Developer Name: Surajit Dalal
Date: 17/06/2017
Description: Intitial Version
******************************************************************
Version - MOD-002
Author -  Md Shahbaz Khan
Date - 	  23/06/2017
Description - Default the effective date to current date
******************************************************************
*******************************************************************
*************************************
Developer   - Leconte Romain
Date	    - 29/06/2017
Change No   - MOD-003
Description - Changed value to code for jobCode function
**************************************/


/**************
* Hide Sections
***************/
//Technical section 
ThisForm.HideSection("section479");	// Assignment Status
ThisForm.HideSection("section388");	// Technical Field

/***********************************
* COPY VALUE FROM 1 FIELD TO ANOTHER
************************************/
window.copyValue = function(copyField,pasteField){
	var msg = "fonction copyValue : ";
	var fieldTd = document.getElementsByClassName("fieldTD");
	if(fieldTd.length > 0){
	//BackOffice side
		msg += "backoffice side";
		//COPY BKO FIELD
		//--------------
		var bkoCopyFieldValue = "";
		if(document.getElementById(copyField) === null){
		//if copy field not found
			console.log("field to copy "+copyField+" not found");
			//return false;
		}else{
		//if copy field exists
			//get field value
			if(document.getElementById(copyField).type == "select" || document.getElementById(copyField).type == "select-one"){
			//copy select field
				bkoCopyFieldValue = document.getElementById(copyField).options[document.getElementById(copyField).selectedIndex].text;
			}else{
			//copy text field
				bkoCopyFieldValue = document.getElementById(copyField).value;
			}
		}
		
		//PASTE BKO FIELD
		//---------------
		//Only paste value if copy field existes
		if(bkoCopyFieldValue != ""){
			var bkoPasteFieldValue = "";
			if(document.getElementById(pasteField) === null){
			//if paste field not found
				console.log("field to paste "+pasteField+" not found");
				//return false;
			}else{
			//if both fields exists we paste the values
				//Read Only fields
				if(pasteField.readOnly === true){
					//Readonly fields, disable it
					document.getElementById(pasteField).readOnly = false;
					//paste value
					document.getElementById(pasteField).value = bkoCopyFieldValue;
					//save
					ThisCase.BackgroundMode.Begin();
					ThisCase.BackgroundMode.Execute('enregistreronly()');
					//enable readOnly
					document.getElementById(pasteField).readOnly = true;
					ThisCase.BackgroundMode.Execute('enregistreronly()');
					ThisCase.BackgroundMode.Stop();
				}else{
				//Standard custom fields
					if(document.getElementById(pasteField).type == "select" || document.getElementById(pasteField).type == "select-one"){
						//select fields
					}else{
						//text fields
						document.getElementById(pasteField).value = bkoCopyFieldValue;
					}
				}
			}
		}
	}else{
	//FrontOffice side
		msg += "frontOffice side";
		//get copy field type and valeur
		var froCopyFieldCustomType = "";
		var froCopyFieldValeur = "";
		var froCopyFieldId = "";
		if(copyField.search("_") != -1){
			if(copyField.split("$").length > 0){
				if(copyField.split("_").length > 0){
					froCopyFieldCustomType = copyField;
					var froCopyFieldValeurSplit = copyField.split("_");
					var froCopyFieldValeurSplitLength = Number(froCopyFieldValeurSplit.length);
					froCopyFieldValeur = froCopyFieldValeurSplit[froCopyFieldValeurSplitLength-1];
				}else{
					froCopyFieldCustomType = copyField.split("$")[0];
					froCopyFieldValeur = copyField.split("$")[1];
				}
			}else if(copyField.split("_").length > 0){
				froCopyFieldCustomType = copyField;
				var froCopyFieldSplit = copyField.split("_");
				var froCopyFieldSplitLength = Number(froCopyFieldSplit.length);
				froCopyFieldValeur = froCopyFieldSplit[froCopyFieldSplitLength-1];
			}else{
				msg += " / copyfield values not found";
				console.log(msg);
			}
		}else{
			if(copyField.search("MOTSCLES") != -1){
				froCopyFieldId = "MOTCLE";
			}else{
				msg += "no copyField found";
				console.log(msg);
			}
		}
		//get paste field type and valeur
		var froPasteFieldCustomType = "";
		var froPasteFieldValeur = "";
		var froPasteFieldId = "";
		if(pasteField.search("_") != -1){
			if(pasteField.split("$").length > 1){
				if(copyField.split("_").length > 0){
					froPasteFieldCustomType = pasteField;
					var froPasteFieldValeurSplit = pasteField.split("_");
					var froPasteFieldValeurSplitLength = Number(froPasteFieldValeurSplit.length);
					froPasteFieldValeur = froPasteFieldValeurSplit[froPasteFieldValeurSplitLength-1];
				}else{
					froPasteFieldCustomType = pasteField.split("$")[0];
					froPasteFieldValeur = pasteField.split("$")[1];
				}
			}else if(pasteField.split("_").length > 1){
				froPasteFieldCustomType = pasteField;
				var froPasteFieldSplit = pasteField.split("_");
				var froPasteFieldSplitLength = Number(froPasteFieldSplit.length);
				froPasteFieldValeur = froPasteFieldSplit[froPasteFieldSplitLength-1];
			}else{
				msg += " / pastefield values not found";
				console.log(msg);
			}
		}else{
			if(pasteField.search("MOTSCLES") != -1){
				froPasteFieldId = "MOTCLE";
			}else{
				msg += "no pasteField found";
				console.log(msg);
			}
		}
		//variables
		var froCopyField = "";
		var froCopyFieldValue = "";
		var froPasteField = "";
		var froPasteFieldType = "";
		
		//COPY FRO FIELD
		//--------------
		//get form sections
		var sections = document.getElementsByClassName("bloc");
		if(sections.length > 0){
			//loop on every sections
			for(s=0; s<sections.length; s++){
				var froSelect = sections[s].getElementsByTagName("select");

				//LOOP ON SELECT
				//--------------
				if(froSelect.length > 0){
					for(fs=0; fs<froSelect.length; fs++){
						//search copy field
						if(froCopyFieldId == ""){
							//search type correspondance
							if(froSelect[fs].id.search(froCopyFieldCustomType) != -1){
								//search valeur correspondance
								var froSelectCopySplit = froSelect[fs].id.split("_");
								var froSelectCopyValeur = Number(froSelectCopySplit.length);
								var froSelectCopyLast = froSelectCopySplit[froSelectCopyValeur-1];
								if(froSelectCopyLast == froCopyFieldValeur){
									//if correspondance is found, we stock the copy field
									froCopyField = froSelect[fs];
									froCopyFieldValue = froSelect[fs].options[froSelect[fs].selectedIndex].text;
								}
							}
						}else{
							if(froSelect[fs].id.search(froCopyFieldId) != -1){
								//if correspondance is found, we stock the copy field
								froCopyField = froSelect[fs];
								froCopyFieldValue = froSelect[fs].options[froSelect[fs].selectedIndex].text;
							}
						}
						
						//search paste field
						if(froPasteFieldId == ""){
							//search type correspondance
							if(froSelect[fs].id.search(froPasteFieldCustomType) != -1){
								//search valeur correspondance
								var froSelectPasteSplit = froSelect[fs].id.split("_");
								var froSelectPasteValeur = Number(froSelectPasteSplit.length);
								var froSelectPasteLast = froSelectPasteSplit[froSelectPasteValeur-1];
								if(froSelectPasteLast == froPasteFieldValeur){
									//if correspondance is found, we stock the paste field
									froPasteField = froSelect[fs];
									froPasteFieldType = "select";
								}
							}
						}else{
							if(froSelect[fs].id.search(froPasteFieldId) != -1){
								//if correspondance is found, we stock the paste field
								froPasteField = froSelect[fs];
								froPasteFieldType = "select";
							}
						}
					}
				}
				//if one of the copy/paste field isn't found, we search on input
				if(froCopyField == "" || froPasteField == ""){
					var froInput = sections[s].getElementsByTagName("input");
					
					//LOOP ON INPUT
					//-------------
					if(froInput.length > 0){
						for(fi=0; fi<froInput.length; fi++){
							//search copy field
							if(froCopyFieldId == ""){
								//search type correspondance
								if(froInput[fi].id.search(froCopyFieldCustomType) != -1){
									//search valeur correspondance
									var froTextCopySplit = froInput[fi].id.split("_");
									var froTextCopyValeur = Number(froTextCopySplit.length);
									var froTextCopyLast = froTextCopySplit[froTextCopyValeur-1];
									if(froTextCopyLast == froCopyFieldValeur){
										//if correspondance is found, we stock the copy field
										froCopyField = froInput[fi];
										froCopyFieldValue = froInput[fi].value;
									}
								}
							}else{
								if(froInput[fi].id.search(froCopyFieldId) != -1){
									//if correspondance is found, we stock the copy field
									froCopyField = froInput[fi];
									froCopyFieldValue = froInput[fi].value;
								}
							}
							
							//search paste field
							if(froPasteFieldId == ""){
								//search type correspondance
								if(froInput[fi].id.search(froPasteFieldCustomType) != -1){
									//search valeur correspondance
									var froTextPasteSplit = froInput[fi].id.split("_");
									var froTextPasteValeur = Number(froTextPasteSplit.length);
									var froTextPasteLast = froTextPasteSplit[froTextPasteValeur-1];
									if(froTextPasteLast == froPasteFieldValeur){
										//if correspondance is found, we stock the paste field
										froPasteField = froInput[fi];
										froPasteFieldType = "text";
									}
								}
							}else{
								if(froInput[fi].id.search(froPasteFieldId) != -1){
									//if correspondance is found, we stock the paste field
									froPasteField = froInput[fi];
									froPasteFieldType = "text";
								}
							}
						}
					}
				}
				//if one of the copy/paste field isn't found, we search on readonly fields
				if(froCopyField == "" || froPasteField == ""){
					var froSpan = sections[s].getElementsByTagName("span");
					
					//LOOP ON SPAN
					//------------
					if(froSpan.length > 0){
						for(fsp=0; fsp<froSpan.length; fsp++){
							//take away mandatory fields indicators span
							if(froSpan[fsp].id.search("Validator") == -1){
								//search copy field
								if(froCopyFieldId == ""){
									//search type correspondance
									if(froSpan[fsp].id.search(froCopyFieldCustomType) != -1){
										//search valeur correspondance
										var froReadonlyCopySplit = froSpan[fsp].id.split("_");
										var froReadonlyCopyValeur = Number(froReadonlyCopySplit.length);
										var froReadonlyCopyLast = froReadonlyCopySplit[froReadonlyCopyValeur-1];
										if(froReadonlyCopyLast == froCopyFieldValeur){
											//if correspondance is found, we stock the copy field
											froCopyField = froSpan[fsp];
											froCopyFieldValue = froSpan[fsp].innerHTML;
										}
									}
								}else{
									if(froSpan[fsp].id.search(froCopyFieldId) != -1){
										//if correspondance is found, we stock the copy field
										froCopyField = froSpan[fsp];
										froCopyFieldValue = froSpan[fsp].innerHTML;
									}
								}
								
								//search paste field
								if(froPasteFieldId == ""){
									//search type correspondance
									if(froSpan[fsp].id.search(froPasteFieldCustomType) != -1){
										//search valeur correspondance
										var froReadonlyPasteSplit = froSpan[fsp].id.split("_");
										var froReadonlyPasteValeur = Number(froReadonlyPasteSplit.length);
										var froReadonlyPasteLast = froReadonlyPasteSplit[froReadonlyPasteValeur-1];
										if(froReadonlyPasteLast == froPasteFieldValeur){
											//if correspondance is found, we stock the paste field
											froPasteField = froSpan[fsp];
											froPasteFieldType = "readonly";
										}
									}
								}else{
									if(froSpan[fsp].id.search(froPasteFieldId) != -1){
										//if correspondance is found, we stock the paste field
										froPasteField = froSpan[fsp];
										froPasteFieldType = "readonly";
									}
								}
							}
						}
					}
				}
			}
		}
		
		//PASTE FRO FIELD
		//---------------
		//first check if both fields exist
		if(froCopyField == ""){
			//alert("field to copy "+copyField+" not found");
		}else if(froPasteField == ""){
			//alert("field to paste "+pasteField+" not found");
		}else{
		//If fields exist, we paste the value
			if(froPasteFieldType == "select"){
			//if paste field is a select
			}else if(froPasteFieldType == "text"){
			//if paste field is a text
				froPasteField.value = froCopyFieldValue;
			}else if(froPasteFieldType == "readonly"){
			//if paste field is in read only
				froPasteField.innerHTML = froCopyFieldValue;
			}else{
			//error, no matching type found for paste field
				alert("Unknown type for "+froPasteField);
			}
		}
	}
};


window.getParamFromUrl = function(param){
var vars = {};
  window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
      vars[key] = value !== undefined ? value : '';
    }
  );

  if ( param ) {
    return vars[param] ? vars[param] : null;  
  }
  return vars;

};


/****************************
* AUTOMATICALLY FILL SUBTOPIC
*****************************/
window.manageSubtopic = function(){
var msg = "function manageSubtopic : ";
	var getSubtopic = localStorage.getItem('subtopic');
	var field = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
	
	//if(field.value != "0"){
	var subtopic = getParamFromUrl('subtopic');
		if(subtopic){
			if(field){
				field.value = subtopic;
			}else{
				msg += "field undefined";
				console.log(msg);
			}
		}else{
			msg += subtopic + " undefined";
			console.log(msg);
		}
	//}
	/*
	if(field.value != "0"){
		if(getSubtopic){
			if(field){
				if(getSubtopic == "Longterm sickness"){
					field.value = "2208";
				}else if(getSubtopic == "Maternity Leave"){
					field.value = "2202";
				}else if(getSubtopic == "Transfer Out") {
					field.value = "2121";
				}else if(getSubtopic == "Unpaid leave") {
					field.value = "2220";
				}else if(getSubtopic == "Work accident long term") {
					field.value = "2256";
				}else if(getSubtopic == "Work accident short term") {
					field.value = "2255";
				}else {
					msg += "no matching value found between field list and localStorage.getItem(subtopic)";
				}
				if(field.value != ""){
					champObligatoire(formulaire.INTERVENTIONS_EN_COURS$ELEMENT, false);
				}
			}else{
				msg += "field undefined";
				console.log(msg);
			}
			//launch dependencies
			//INTERVENTIONS_EN_COURS_ELEMENT_onchange();
		}else{
			msg += "localStorage.getItem(subtopic) undefined";
			console.log(msg);
		}
	} */
	
};


/******************************
* Manage payroll status change
*******************************/

window.payrollStatus = function(){
	var msg = "function payrollStatus: ";
	var subTopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT;
	var payroll = formulaire.INTERVENTIONS_EN_COURS$VALEUR338;
	
	/**********************************Begin to Modif 1.1 ***********************************************/
	if(subTopic){
		if(payroll){
			//payroll.readonly = true;
			if(subTopic.value == "2208" || subTopic.value == "2202" ||	subTopic.value == "2121" || subTopic.value == "2220" ||
			subTopic.value == "2256" || subTopic.value == "2155"){
			$(payroll).find('option[code*=290]').prop('selected',true); //To set LOA 290ÞLOA Unpaid
			//payroll.value= "288ÞLOA Unpaid";
			//payroll.disabled = true;
		}
		/*else if(subTopic.value == "2124" || subTopic.value == "2202" || subTopic.value == " 2203" || 
			subTopic.value == "2204" || subTopic.value == "2205" || subTopic.value == "2206" ||
			subTopic.value == "2207" ||	subTopic.value == "2208" || subTopic.value == "2209"){
			payroll.value= "287ÞLOA Paid";
			payroll.disabled = true;
		} 
		*****************************************End tp Modify 1.1*********************************************/
		}else{
		msg += "payroll not found";
		console.log(msg);
		}
		
	}else{
	msg += "subtopic not found";
		console.log(msg);
	}
};


/**************************************
* UPDATE MANDATORY FIELDS ALERT MESSAGE
***************************************/
//Check if neocase namespace already exist. If not it's create.
if(typeof Neocase == "undefined"){
	Type.registerNamespace('Neocase');
}
//function which allow to execute a function before another one
Neocase.attachBefore = function(obj, funcName, advice) {
	var old = obj[funcName];
	obj[funcName] = function() {
		var bReturn = advice.apply(this, arguments);
		if(bReturn) {
			return old.apply(this, arguments);
		}else{
			return false;
		}
	};
};

//custom function
Neocase.checkForm = function(){
	console.log("function Neocase.checkForm");
	//PLACE YOUR CODE HERE
	/**************************************
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
	if(validator.length > 0){
		for(v=0; v<validator.length; v++){
			var validatorVisibility = validator[v].style.visibility;
			if(validatorVisibility == "visible"){
				if(validator[v].id.search("question") != -1){
					msg += "\n- question";
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
		console.log("var m_requiredFieldsUndefined updated : "+m_requiredFieldsUndefined);
	}
	
	//If all previous control are valid, the function return "true" to execute the Submit function
	return true;
};

//Execute the custom function before the submit function
Neocase.attachBefore(window, 'ValidatorAlertRequiredFieldsOnSubmit', function(){return Neocase.checkForm();});

//Replace the label
window.replaceField = function(field, replace){
	if(field){
		var currentLabel = field.getElementsByTagName('label');
		currentLabel[0].innerHTML = currentLabel[0].innerHTML.replace(' :', replace);
	}
};

//********************************Begin of MOD-002 ++ **********************************
//Default the Effective Date
window.setStrtDate = function(){

var eftvDateField = formulaire.INTERVENTIONS_EN_COURS$VALEUR5;
var strtDateField = formulaire.INTERVENTIONS_EN_COURS$VALEUR333;

strtDateField.value = eftvDateField.value;	

//eftvDateField.value = date.getDate()+"/"+(Number(date.getMonth())+1)+"/"+date.getFullYear();

};

window.setEftvDate = function(){

var eftvDateField = formulaire.INTERVENTIONS_EN_COURS$VALEUR5;
var strtDateField = formulaire.INTERVENTIONS_EN_COURS$VALEUR333;

eftvDateField.value	 = strtDateField.value;

};
//********************************End of MOD-002 ++ **********************************

/***************************
 ACTIONS ON LOAD COMPLETE
**************************/
window.onloadForm = function(){
	
	//Manage subtopic
	//manageSubtopic();
	manageFields();
	
	//COPY/PASTE TOPIC&SUBTOPIC VALUE
	//copyValue("INTERVENTIONS_EN_COURS$MOTCLE","INTERVENTIONS_EN_COURS$VALEUR203");
	//copyValue("INTERVENTIONS_EN_COURS$ELEMENT","INTERVENTIONS_EN_COURS$VALEUR204");

	
	//Manage payroll Status value
	payrollStatus();
	
};
ThisForm.Bind('loadcomplete', onloadForm);
