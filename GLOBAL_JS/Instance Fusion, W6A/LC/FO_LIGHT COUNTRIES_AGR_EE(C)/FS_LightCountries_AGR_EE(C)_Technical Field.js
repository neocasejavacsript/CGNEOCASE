/* --- LC_AGR_EE (C) Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 03/06/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Rewriting JS
LC_AGR_EE (C)
---------------------------------------------------------*/ 
// hide Technical section
neocase.form.section("section27ccdb3ef8455f99e9ad").hide();


// Get the value of the country
var countrySAPCode = neocase.form.field("UTILISATEURS_CHAMPU232").getValue();

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
window.populateReasonForLOAPaid = function(){
    console.log("called Paid method");
    //setTimeout(function(){
    //var reasonForLOA = document.getElementById("ctl04_ctl12_ctl00_INTERVENTIONS_EN_COURS_VALEUR690");
    var reasonForLOA_new = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name'];
    var reasonForLOALength = $("#"+reasonForLOA_new+ " option").length;
    var reasonForLOA = document.getElementById(reasonForLOA_new);

    console.log(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name']);
    console.log("reasonForLOA_new::::::"+neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR690')['name']);
    console.log("reasonForLOALength is: "+reasonForLOALength);

    // for (var t=0; t<reasonForLOALength; t++){
    //     var optiont = reasonForLOA.options[t];
    //     console.log(t+" "+optiont.value);
    //     console.log("hulala");
    // }

    // console.log("==============================================");

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
window.populateReasonForLOAUnpaid = function(){
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
window.populateReasonForTermination = function(){
    console.log("Inside function: populateReasonForTermination");
    console.log(countrySAPCode);
    
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

/*******************************************
* Function to set default date as today's date
********************************************/
window.getDefaultResignationDate = function()
{
    try{
        var datePickerType = $.datepicker._defaults.dateFormat;
        //console.log(datePickerType);
    }
    catch ( e ) {
        console.log("Error: " + e.description );
     }
     finally {
         if(datePickerType){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0! 
            var yyyy = today.getFullYear();
            var currDate;

             if(datePickerType == 'm/d/yy'){
                currDate = mm+'/'+dd+'/'+yyyy;

             }else if(datePickerType == 'dd/mm/yy'){
                 currDate = (('0'+dd).slice(-2))+'/'+('0'+mm).slice(-2)+'/'+yyyy;	

             }else{
                 console.log("//Do nothing");
             }
         }
       neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR687").setValue(currDate);
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

// window.removeDuplicatesFromDropdown = function(){
//     console.log("called");
//     var code = {};
//     setTimeout(function(){
//     $("select[name='ctl04$ctl12$ctl00$INTERVENTIONS_EN_COURS_VALEUR690'] > option").each(function () {
//         if(code[this.text]) {
//             console.log("THIS TEXT:::"+this.text);
//             $(this).remove();

//         } else {
//             console.log("THIS value:::"+this.value);
//             code[this.text] = this.value;
//         }
//     });
// }, 400);
// };


window.checkSubtopicValue = function(subtopic){
    
    //console.log("Subtopic value inside check subtopic function: "+subtopic);
    //console.log("Selected subtopic is: "+subtopic);
    if(subtopic=="LC_LOA Paid"){
        populateReasonForLOAPaid();
    }else if (subtopic=="LC_LOA Unpaid"){
        populateReasonForLOAUnpaid();
    } else {
        
    }
    

};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
//console.log("AGR_EE_C");
    neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').hide();
	neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').hide();
    
	
    updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic'));
    setTimeout(function(){

        // Get the text values from Topic and Subtopic dropdown fields
        var getTopicValue = neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').getText();
        var getSubtopicValue = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
        
        //Set the topic / subtopic in text fields
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').setValue(getTopicValue);
        neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').setValue(getSubtopicValue);
        
        //updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
        manageFields();

        // If the topic is LC_Start/Update leave of absence, hide the text fields, instead show the dropdowns
        if(getParamFromUrl('topic')==2710){
            neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').hide();
			neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').hide();
            neocase.form.section("section2646a8afdb6517fa2fc9").show();
        }else{
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
            neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').hide();
			neocase.form.field('INTERVENTIONS_EN_COURS_MOTCLE').hide();
            neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR203').show();
			neocase.form.field('INTERVENTIONS_EN_COURS_VALEUR204').show();
        }
    }, 600);
    
};
neocase.form.event.bind("init",launchOnInit);

/****************************
* Launch Javascript on form load
*****************************/
window.onloadForm = function(){
    console.log("LC_AGR_EE_C");

    var topic = getParamFromUrl('topic');
    if(topic==2708){
        getDefaultResignationDate();
    }

    var getSubtopicValue = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    populateReasonForTermination();
    checkSubtopicValue(getSubtopicValue);
};
ThisForm.Bind('loadcomplete', onloadForm);
