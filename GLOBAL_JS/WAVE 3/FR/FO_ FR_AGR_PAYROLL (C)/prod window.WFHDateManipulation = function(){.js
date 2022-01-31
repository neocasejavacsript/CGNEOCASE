window.WFHDateManipulation = function(){ //++MOD-017
	var year = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue(),
    	wfhMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue();
    var date = new Date(year, wfhMonth, 0).getDate();
	var newDate = year+"-"+wfhMonth+"-"+date;
    neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR947").setValue(newDate);
    
	var d = new Date();
	var currentMonth = d.getMonth(),
		currentYear = d.getFullYear();

	// var currentMonth = 0;//To test
	// var currentYear = 2022;
	
	var shortYear = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getText(),
		shortMonth = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getText();
	
	var msg = "",
    	lang = document.getElementById("PageHtml").lang.split("-")[0];
	msg = (lang == "fr") ? "Merci de renseigner les champs obligatoires suivant :" : "Please fill the following mandatory fields :";
	//Get Value from WFH Year and WFH Month
	var wfhYearValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR943").getValue(),
		wfhMonthValue = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR948").getValue(),
		subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic');
	var januaryMonth = 0,
		decemberMonth = 11;
	var returnFlag = 1; //True = 1, False = 0
	if(wfhYearValue!="" && wfhMonthValue!=""){
		if(currentYear == 2020 && currentMonth == 8){ // current month = September & current year = 2020 // ++MOD-009
			if(shortYear<=currentYear){	
				if(shortMonth>currentMonth+1 || shortMonth<= currentMonth){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{

				msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
				alert(msg);
				returnFlag = 0;
			}
		}
		else if(currentYear == 2021 && currentMonth == januaryMonth){ // Current year: 2021 and Curent Month: January

			if(shortYear<currentYear){	
				
				if(shortMonth>=1 && shortMonth<11){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(shortYear==currentYear){	
				
				if(shortMonth!=1){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{
				imsg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
				alert(msg);
				returnFlag = 0;
			}
		}
		else if(currentYear == 2021 && currentMonth == decemberMonth){ // current month = December & current year = 2021 // ++MOD-017
			if(subtopic == '3089'){
				if(shortYear<=currentYear){	
					if(shortMonth>currentMonth+1 || shortMonth<= currentMonth){
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois en cours." : "The work from home declaration must be only for current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois en cours." : "The work from home declaration must be only for current month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(subtopic == '3595'){
				if(shortYear<=currentYear){	
					if(shortMonth >= (currentMonth + 1) || shortMonth<= (currentMonth-1)){
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier." : "The work from home declaration must be only for last month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier." : "The work from home declaration must be only for last month";
					alert(msg);
					returnFlag = 0;
				}
			}
		}
		else if(currentYear == 2022 && currentMonth == januaryMonth){ // current month = January & current year = 2022 // ++MOD-017
			if(shortYear<currentYear){	
				if(shortMonth>=1 && shortMonth<12){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else if(shortYear==currentYear){	
				if(shortMonth!=1){
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{
				msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
				alert(msg);
				returnFlag = 0;
			}
		}
		else {
			if(subtopic == '3089'){ //++MOD-017 : Subtopic - FR_Work from home allowance (new agreement);Indemnités télétravail (nouvel accord)
				if(shortYear< currentYear){ 
					if(currentMonth == 1 && (shortMonth>januaryMonth && shortMonth<12)){
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
					if((shortMonth>currentMonth+1 || shortMonth< currentMonth - 1 || shortMonth<= currentMonth + 1) && currentMonth > 1){ 
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
				}
				else if(shortYear == currentYear){ 
					if(shortMonth>currentMonth+1 || shortMonth< currentMonth - 1){ // ++MOD-009 
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
						alert(msg);
						returnFlag = 0;
					}
				}
				else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement les 2 mois dernier ou le mois en cours." : "The work from home declaration must be only for last 2 months or current month";
					alert(msg);
					returnFlag = 0;
				}
			}else{
				if(shortYear< currentYear){
					if(shortMonth>=currentMonth+1 || shortMonth<= currentMonth){ // ++MOD-011
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else if(shortYear == currentYear){
					if(shortMonth>currentMonth+1 || shortMonth< currentMonth){ // ++MOD-009 
						msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
						alert(msg);
						returnFlag = 0;
					}
				}else{
					msg = (lang == "fr") ? "La déclaration télétravail (hors avenant) doit concerner uniquement le mois dernier ou le mois en cours." : "The work from home declaration must be only for last month or current month";
					alert(msg);
					returnFlag = 0;
				}
			}
		}
	}
	return returnFlag;
};