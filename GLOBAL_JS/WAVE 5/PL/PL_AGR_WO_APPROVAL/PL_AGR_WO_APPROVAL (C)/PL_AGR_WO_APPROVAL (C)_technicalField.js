/* --- PL_AGR_WO_APPROVAL (C) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 11/18/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section

---------------------------------------------------------

Developer   - Soumyashree Nayak
Date	    - 02/17/2021 (MM/DD/YYYY)
Change No   - MOD-002
Description - set Other location value according to Delivery address

---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("sectionb02be3a7974f055f17f2").hide();

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


/* function to show / hide or Enable / Disable fields for subtopic: PL_Employee initiated resignation */
window.checkRequestByEmployee = function(){
    
    // Get the selected value from field: I'm requesting on my own
    var requestByEmployee = formulaire.INTERVENTIONS_EN_COURS$VALEUR615.value;
    
    if(requestByEmployee == "Yes"){
        console.log("Yes");
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "No";
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").setAttribute("disabled", "disabled");
    } else if(requestByEmployee == "No"){
        console.log("No");
        formulaire.INTERVENTIONS_EN_COURS$VALEUR616.value = "Yes";
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").setAttribute("disabled", "disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").removeAttribute("disabled");
        
    } else {
        console.log("else");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR616").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR617").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR618").removeAttribute("disabled");
        document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR619").removeAttribute("disabled");
    }

};


window.updateReasonForAbsence = function(){
	var absenceType = formulaire.INTERVENTIONS_EN_COURS$VALEUR601.value;
	var selectReasonForAbsence=document.getElementById('ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604');
	$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').prop('selectedIndex',0);

	if(absenceType == "Paid Leave"){
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').show();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').show();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();

		// // For Paid Leave absence type, Remove Parental from dropdown
        //     for (i=0;i<selectReasonForAbsence.length;  i++) {
        //         if(selectReasonForAbsence.options[i].value =='Parental' || selectReasonForAbsence.options[i].value =='Unpaid Leave') {
        //             selectReasonForAbsence.remove(i);
        //             i--; // options have now less element, then decrease i
        //         }
        //     }

	} else if(absenceType == "Unpaid Leave"){
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').show();

		// // For Unpaid Leave absence type, Remove Parental from dropdown        
        //     for (i=0;i<selectReasonForAbsence.length;  i++) {
        //         if(selectReasonForAbsence.options[i].value =='Unpaid Leave' || selectReasonForAbsence.options[i].value =='Maternity Leave') {
        //             selectReasonForAbsence.remove(i);
        //             i--; // options have now less element, then decrease i
        //         }
        //     }

	} else {
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Parental"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Unpaid Leave"]').hide();
		$('#ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR604').children('option[value="Maternity Leave"]').hide();
	}
};

/**
 * Remove option for topic and subtopic
 * If subtopic = PL_Start Unpaid leave of absence [3330] : only "Unpaid Leave" will be available for Reason for absence
 * If subtopic = PL_Start Unpaid leave of absence [3330] : absence type should show "Select..." with 2 possible values : "Paid Leave" or "Unpaid leave"
 **/

window.addAttri = function() {
    console.log("Called");
    
    // For absence type
    var select = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR702');
    var option;

    for (var i=0; i<select.options.length; i++) {
    option = select.options[i];

    if (option.value == 'Unpaid Leave') {
        option.selected = true;
         return;
    } 
    }
  };
  window.addAttri1 = function() {
    console.log("Called1");
    
    // For absence type
    var select1 = document.getElementById('INTERVENTIONS_EN_COURS$VALEUR703');
    var option1;

    for (var i=0; i<select1.options.length; i++) {
    option1 = select1.options[i];

    if (option1.value == 'Unpaid Leave') {
        option1.selected = true;
         return;
    } 
    }
  };

window.loadTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
			copyValue("INTERVENTIONS_EN_COURS$MOTCLE","INTERVENTIONS_EN_COURS$VALEUR203");
        }
};

window.loadSubTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){ 
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
			copyValue("INTERVENTIONS_EN_COURS$ELEMENT","INTERVENTIONS_EN_COURS$VALEUR204");
		}
	}
};

// -------------------------MOD-002-Start--------------------------------//

window.setOtherLocation = function(){
	var fieldValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR709").getCode();
    console.log(fieldValue);
    var otherLocationLabel = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR478").label();
	if(fieldValue == "2092" || fieldValue == "2093"){ // Private address = 2092; Other office location=2093
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR478").mandatory(otherLocationLabel);
	}else{
		neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR478").noMandatory();
	}
};

// -------------------------MOD-002-end--------------------------------//

/********************************************
* Launch Javascript only once on loadcomplete
*********************************************/
window.launchOnceLoadComplete = function(){
    if(!sessionStorage.getItem('loadcomplete')){
        sessionStorage.setItem('loadcomplete',true);
        console.log("launched once on loadcomplete");
        loadTopic();
        setTimeout(function () {
            loadSubTopic();  
        }, 800);
    }
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
        
    }
    if($('#requestarea').length > 0){
        if($('.not-mandatory-msg').length > 0){
            $('.not-mandatory-msg').hide();
        }
    }
   
};
neocase.form.event.bind("init",launchOnInit);

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
    launchOnceLoadComplete();
	manageFields();
	if(document.getElementById('section366aa5a550dd5a165f76').style.display !== 'none'){ 
		addAttri();
		addAttri1();
	}
    setOtherLocation();
    console.log('launch load complete');
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
};
neocase.form.event.bind("submit",launchOnSubmit);
