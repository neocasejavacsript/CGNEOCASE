/*************LC_AGR (M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 03/22/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Rewriting JS
Form Name   - LC_AGR (M)
--------------------------------------------------------------------------*/

//Hide Technical Section
neocase.form.section("section27ccdb3ef8455f99e9ad").hide();

var fsLightCountries =  
[ 
    {"name":"IN","code":"40"},  
    {"name":"CN","code":"28"},
    {"name":"HK","code":"27"},
    {"name":"JP","code":"22"},  
    {"name":"MY","code":"14"},
    {"name":"PH","code":"48"},  
    {"name":"SA","code":"24"},
    {"name":"SG","code":"25"},  
    {"name":"ZA","code":"16"},
    {"name":"CH","code":"02"},
    {"name":"TW","code":"42"},  
    {"name":"AE","code":"AE"},
    {"name":"GB","code":"08"},  
    {"name":"VN","code":"VN"}
]; 

var waveSixACountries =  
[ 
    {"name":"CZ","code":"18"},
    {"name":"HU","code":"21"},  
    {"name":"IE","code":"11"}
];

// Function to populate the reason for LOA Unpaid
window.populateReasonForLOAPaid = function(countrySAPCode){
    console.log("called Paid method");
    //setTimeout(function(){
    //var reasonForLOA = document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR690");
    var reasonForLOA_new = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name'];
    var reasonForLOALength = $("#"+reasonForLOA_new+ " option").length;
    var reasonForLOA = document.getElementById(reasonForLOA_new);

    console.log(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name']);
    console.log("reasonForLOA_new::::::"+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name']);
    console.log("reasonForLOALength is: "+reasonForLOALength);

    for (var i = 0; i< reasonForLOA.length; i++){
    var option = reasonForLOA.options[i];
    // now have option.text, option.value
    //console.log(i+" "+option.value);

    //Check if the WAVE 6 country should display the option, else remove
    for(var j = 0; j< waveSixACountries.length; j++) {
        var obj = waveSixACountries[j];
        if(obj.code == countrySAPCode){
             $('#'+reasonForLOA_new).children('option[value="Training leave (paid)"]').remove();
             $('#'+reasonForLOA_new).children('option[value="Mobility Leave (paid)"]').remove();
             $('#'+reasonForLOA_new).children('option[value="Paid leave"]').remove();
             $('#'+reasonForLOA_new).children('option[value="Redeployment leave"]').remove();
        }
    }

    for(var k = 0; k< fsLightCountries.length; k++) {
        var object = fsLightCountries[k];
        if(object.code == countrySAPCode){
            $('#'+reasonForLOA_new).find('option[value="Other"]').remove();
            $('#'+reasonForLOA_new).find('option[value="Jury service"]').remove();
            $('#'+reasonForLOA_new).find('option[value="Work Accident"]').remove();
            $('#'+reasonForLOA_new).find('option[value="Parental Leave (paid)"]').remove();
            $('#'+reasonForLOA_new).find('option[value="Educational Leave (paid)"]').remove();
        }
    }
    }   

};



// Function to populate the reason for LOA Unpaid
window.populateReasonForLOAUnpaid = function(countrySAPCode){
    console.log("called Unpaid method");
    //setTimeout(function(){
    //var reasonForLOA = document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR690");

    var reasonForLOA_new = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name'];
    var reasonForLOALength = $("#"+reasonForLOA_new+ " option").length;
    var reasonForLOA = document.getElementById(reasonForLOA_new);

    for (var i = 0; i< reasonForLOA.length; i++){
    var option = reasonForLOA.options[i];
    // now have option.text, option.value
    //console.log(i+" "+option.value);

    //Check if the WAVE 6 country should display the option, else remove
    for(var j = 0; j< waveSixACountries.length; j++) {
        var obj = waveSixACountries[j];
        if(obj.code == countrySAPCode){
            //console.log("country SAP Code is: "+countrySAPCode+" AND I AM WITHIN WAVE6 COUNTRIES for LOA UNNN PAID");
            $('#'+reasonForLOA_new).children('option[value="Adoption preparation leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Business creation leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Disability"]').remove();
            //$('#'+reasonForLOA_new).children('option[value="Family leave"]').hide();
            $('#'+reasonForLOA_new).children('option[value="Family support leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="International solidarity leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Mobility leave (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Parental presence leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Training leave (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Transfers"]').remove();
        }
    }

    for(var k = 0; k< fsLightCountries.length; k++) {
        var object = fsLightCountries[k];
        if(object.code == countrySAPCode){
            //console.log("country SAP Code is: "+countrySAPCode+" AND I AM WITHIN FSLIGHT COUNTRIES for LOA UNNN PAID");
            $('#'+reasonForLOA_new).children('option[value="Military Leave"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Longterm Sickness (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Paternity leave (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Maternity leave (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Other"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Adoption (unpaid)"]').remove();
            $('#'+reasonForLOA_new).children('option[value="Career break"]').remove();
            //$('#'+reasonForLOA_new).children('option[value="Family leave"]').hide();
            $('#'+reasonForLOA_new).children('option[value="Bereavement"]').remove();
        }
    }
    }   

};

// Function to populate the reason for termination dropdown
window.populateReasonForTermination = function(countrySAPCode){
    //console.log("Inside function: populateReasonForTermination");
    //console.log(countrySAPCode);
	//var reasonForTermination = document.getElementById("ctl04_ctl13_ctl00_INTERVENTIONS_EN_COURS_VALEUR692");

	var reasonForTermination_new = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR692')['name'];
    var reasonForTerminationLength = $("#"+reasonForTermination_new+ " option").length;
    var reasonForTermination = document.getElementById(reasonForTermination_new);


    for (var i = 0; i< reasonForTermination.length; i++){
      var option = reasonForTermination.options[i];
      // now have option.text, option.value

      //Check if the country should display the option, else remove
      for(var j = 0; j< waveSixACountries.length; j++) {
            var obj = waveSixACountries[j];
            if(obj.code == countrySAPCode){
                $('#'+reasonForTermination_new).children('option[value="Conduct related"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Gross misconduct"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Leave Expired"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Failed Employment Check"]').remove();
                $('#'+reasonForTermination_new).children('option[value="eVerify Involuntary"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Non Performance Related"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Quit Performance Plan"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Capability Related"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Redundancy (Compulsory)"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Involuntary Termination"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Dismissal"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Hired by Client"]').remove();
            }
        }

        for(var k = 0; k< fsLightCountries.length; k++) {
            var object = fsLightCountries[k];
            if(object.code == countrySAPCode){
                $('#'+reasonForTermination_new).children('option[value="Other"]').remove();
                $('#'+reasonForTermination_new).children('option[value="End of Client Contract"]').remove();
                $('#'+reasonForTermination_new).children('option[value="TUPE Transfer Out"]').remove();
                $('#'+reasonForTermination_new).children('option[value="End Temporary Employment"]').remove();
                $('#'+reasonForTermination_new).children('option[value="InterCo./CrossCountry Transfer"]').remove();
                $('#'+reasonForTermination_new).children('option[value="New joiner no show"]').remove();
                $('#'+reasonForTermination_new).children('option[value="Candidate withdrawal"]').remove();
            }
        }
    }   

};

/*************************************
* Restrict user to input back date 
**************************************/
window.setResignationDateRange = function(){
	var dateElement = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR687").elementHTML;
    $(dateElement).parent().find('span#wrongDate').remove();
    //var dateElement = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR376");

	var dateSelected = "";
	dateSelected = dateElement.value;

    if( dateSelected != "" ) {
        var today = new Date();
        var currMonth = today.getMonth()+1; //jan = 0;
        var currDay = today.getDate();
        var currYear = today.getFullYear();
        var todayDateText = currMonth + "/" + currDay + "/" + currYear;
        var todayDateFormatted = new Date(currYear,(currMonth-1),currDay);
        
        var newDate = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR687").getValue();
        var splitDate= newDate.split('/');

        var dd = parseInt(splitDate[0]);
        var mm = splitDate[1]-1;
        var yyyy = splitDate[2];

        var selectedDateFormatted = new Date(yyyy,mm,dd);

        console.log("todayDateFormatted:  "+todayDateFormatted);
        console.log("selectedDateFormatted:  "+selectedDateFormatted);

        if(selectedDateFormatted< todayDateFormatted){
            //console.log("smaller");
            $(dateElement).after("<span id='wrongDate' style='color:red;'>Date cannot be back dated</span>");
            $(".submitSimpleRequestButton").css("pointer-events","none");

        }
        else{
            $(".submitSimpleRequestButton").css("pointer-events","");
            //console.log("greater");
        }
    }

};

//Function to set default date as today's date
window.defaultLastWorkingDate = function()
{
    try{
        var datePickerType = $.datepicker._defaults.dateFormat;
    }
    catch ( e ) {
        console.log("Error: " + e.description );
    }
     finally {
         if(datePickerType){
            var rDate = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR687").getValue();
            var resignationDate;
            var newResignationDate;
            var resignationDatedd;
            var resignationDatemm; 
            var resignationYYYY;
            var defaultDate = "";
            
            if(datePickerType == 'm/d/yy'){
                resignationDate = new Date(rDate);
                newResignationDate = resignationDate.addMonths(1);
                resignationDatedd = newResignationDate.getDate();
                resignationDatemm = newResignationDate.getMonth() + 1; //03 for march
                resignationYYYY = newResignationDate.getFullYear();            
                defaultDate = resignationDatemm +'/'+resignationDatedd+'/'+ resignationYYYY;	
             }else if(datePickerType == 'dd/mm/yy'){
				var a = rDate.split('/');
				resignationDate = new Date(a[2],a[1],a[0]);
				newResignationDate = resignationDate.addMonths(1);
                resignationDatedd = newResignationDate.getDate();
                resignationDatemm = newResignationDate.getMonth(); //03 for march
                resignationYYYY = newResignationDate.getFullYear();           
                defaultDate = (('0'+resignationDatedd).slice(-2))+'/'+('0'+resignationDatemm).slice(-2)+'/'+resignationYYYY;	

             }else{
                 console.log("//Do nothing");
             }     
             
         }
           return defaultDate;
     }
        
};

/************************************************
To check if the response is field is empty or not
*************************************************/
window.checkValueOfField = function(fieldId){
    if (!$.trim($("#" + fieldId ).val())) {
            return false;
    }else{
            return true;
    }
};

/*********************************
Get the text area id
*********************************/
window.findTextAreabyID = function(nameElement) {
    var tempData = true,
        possibleElements = $('[id*="' + nameElement + '"]');
        for (var i = 0; i< possibleElements.length; ++i) {
            if (possibleElements[i].localName === "textarea") {
                tempData = checkValueOfField(possibleElements[i].id);
            }
        }
        
    return tempData;
}; 
/*----------------- calculate annual Salary Prorated -----------------*/
window.calculateAnnualSalProrated = function() {
	
	var annualSalProNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR78');
	var annualSalActualFTENew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76');
	var empPercentage = neocase.form.field('UTILISATEURS$CHAMPU248').getValue();
	var empPercentageNew = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR249').getValue();
	//Annual salary prorated  (new) =If Employment percentage (new) is NOT empty ROUND((Annual salary at actual FTE (new) * Employment percentage (new)) / 100, 2) else ROUND((Annual salary at actual FTE (new) * Employment percentage) / 100, 2)
	
	if(annualSalActualFTENew) {
        if (empPercentageNew != ''){
			if (annualSalProNew){
				var annualSalActualFTENewVal = parseFloat(annualSalActualFTENew.getValue());
                var empPercentageNewValue = parseFloat(empPercentageNew);
				if (isNaN(annualSalActualFTENewVal)) {
					annualSalActualFTENewVal = 0;
				}
				if (isNaN(empPercentageNewValue)) {
					empPercentageNewValue = 0;
				}
				annualSalProNew.setValue(((annualSalActualFTENewVal * empPercentageNewValue)/100).toFixed(2));
			}
			
		}
        else if (empPercentage!= ''){
			if (annualSalProNew){
				var annualSalActualFTENewVal1 = parseFloat(annualSalActualFTENew.getValue());
                var empPercentageValue = parseFloat(empPercentage);
				if (isNaN(annualSalActualFTENewVal1)) {
					annualSalActualFTENewVal1 = 0;
				}
				if (isNaN(empPercentageValue)) {
					empPercentageValue = 0;
				}
				annualSalProNew.setValue(((annualSalActualFTENewVal1 * empPercentageValue)/100).toFixed(2));
			}
        }
        else{
            console("No value present");
        }
		
	}
};
window.launchOnInit = function(){
    formulaire.question.readOnly = "true";
};
neocase.form.event.bind("init",launchOnInit);

/**************************
* Launch Javascript on init
***************************/
window.onloadForm = function(){

    setTimeout(function() {
    var topic = neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    
    // neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').setValue(subtopic);
    // neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').setValue(topic);

    // neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').hide();
    // neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').hide();

    var countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    
    var lastWorkingDate = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR221");
   
    if(subtopic == "LC_Resignation"){
        if(lastWorkingDate.getValue() == ""){
            lastWorkingDate.setValue(defaultLastWorkingDate());
        }else{
            //Do nothing
           
        }
    } 

     
    populateReasonForTermination(countrySAPCode);

    if(subtopic=="LC_LOA Paid"){
        populateReasonForLOAPaid(countrySAPCode);
        console.log("Calling function: populateReasonForLOAPaid with SAP CODE: "+countrySAPCode);
    }else if(subtopic=="LC_LOA Unpaid"){
        populateReasonForLOAUnpaid(countrySAPCode);
        console.log("Calling function: populateReasonForLOAUnpaid with SAP CODE: "+countrySAPCode);
    } else {

    }
    }, 800);
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR78"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"));
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"));
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR264, "/Custom_Referential/WorkFromHome.aspx");
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR264"));
};
neocase.form.event.bind("loadcomplete",onloadForm);


window.launchOnSubmit = function(){
    var againTempData = true;
	againTempData = findTextAreabyID("response");
	if(againTempData)
		{
		//checkForm();
		}
	else{
        alert("Response field is mandatory");
        return false;
    } 
};
neocase.form.event.bind("submit",launchOnSubmit);


/*---- MOD-001 ENDS ----*/
