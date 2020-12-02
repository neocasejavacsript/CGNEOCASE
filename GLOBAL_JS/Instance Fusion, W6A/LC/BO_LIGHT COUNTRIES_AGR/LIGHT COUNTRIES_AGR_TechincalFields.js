//LC_AGR - Technical field BACKOFFICE
/*************************************
V 1.0 - Initial Version
*************************************/
/*************************************
Developer   - Ayan Dey
Date        - 10/03/2020 (mm/dd/yyyy)
Change No   - MOD-01
Description - Rewriting JS
**************************************/
/************************
* Hide Technical section
*************************/
neocase.form.section("sectione126f7e1e6f0506241fb").hide();

// Get the value of the country

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

// Function to populate the reason for LOA Paid
window.populateReasonForLOAPaid = function(countrySAPCode){
    var reasonForLOA = document.getElementById("INTERVENTIONS_EN_COURS$VALEUR690");

    for (var i = 0; i< reasonForLOA.length; i++){
    var option = reasonForLOA.options[i];
    // now have option.text, option.value
    //console.log(i+""+option.value);

    //Check if the WAVE 6 country should display the option, else remove
    for(var j = 0; j< waveSixACountries.length; j++) {
        
        var obj = waveSixACountries[j];
                
        if(obj.code == countrySAPCode){
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Training leave (paid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Mobility Leave (paid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Paid leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Redeployment leave"]').remove();
        }
       
    }

    for(var k = 0; k< fsLightCountries.length; k++) {
        var object = fsLightCountries[k];
        if(object.code == countrySAPCode){
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Other"]').remove();
            //$('#INTERVENTIONS_EN_COURS$VALEUR690').children('option[value="Other"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Jury service"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Work Accident"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Parental Leave (paid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Educational Leave (paid)"]').remove();
        }
       
    }

    }   
   

};


// Function to populate the reason for LOA Unpaid
window.populateReasonForLOAUnpaid = function(countrySAPCode){
    console.log("called Unpaid method");
    //setTimeout(function(){
    var reasonForLOA = document.getElementById("INTERVENTIONS_EN_COURS$VALEUR690");

    for (var i = 0; i< reasonForLOA.length; i++){
    var option = reasonForLOA.options[i];
    // now have option.text, option.value
    //console.log(i+" "+option.value);

    //Check if the WAVE 6 country should display the option, else remove
    for(var j = 0; j< waveSixACountries.length; j++) {
        var obj = waveSixACountries[j];
        if(obj.code == countrySAPCode){
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Adoption preparation leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Business creation leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Disability"]').remove();
            //$("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Family leave"]').hide();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Family support leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="International solidarity leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Mobility leave (unpaid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Parental presence leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Training leave (unpaid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Transfers"]').remove();
        }
    }

    for(var k = 0; k< fsLightCountries.length; k++) {
        var object = fsLightCountries[k];
        if(object.code == countrySAPCode){
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Military Leave"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Longterm Sickness"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Paternity leave (unpaid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Maternity leave (unpaid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Other"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Adoption (unpaid)"]').remove();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Career break"]').remove();
            //$("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Family leave"]').hide();
            $("select[name='INTERVENTIONS_EN_COURS$VALEUR690']").children('option[value="Bereavement"]').remove();
        }
    }
    }   

};

// Function to populate the reason for termination dropdown
window.populateReasonForTermination = function(countrySAPCode){
    console.log("Inside function: populateReasonForTermination");
    console.log(countrySAPCode);
    var reasonForTermination = document.getElementById("INTERVENTIONS_EN_COURS$VALEUR692");

    for (var i = 0; i< reasonForTermination.length; i++){
      var option = reasonForTermination.options[i];
      // now have option.text, option.value

      //Check if the country should display the option, else remove
      for(var j = 0; j< waveSixACountries.length; j++) {
            var obj = waveSixACountries[j];
            if(obj.code == countrySAPCode){
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Conduct related"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Gross misconduct"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Leave Expired"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Failed Employment Check"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="eVerify Involuntary"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Non Performance Related"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Quit Performance Plan"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Capability Related"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Redundancy (Compulsory)"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Involuntary Termination"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Dismissal"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Hired by Client"]').remove();
            }
        }

        for(var k = 0; k< fsLightCountries.length; k++) {
            var object = fsLightCountries[k];
            if(object.code == countrySAPCode){
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Other"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="End of Client Contract"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="TUPE Transfer Out"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="End Temporary Employment"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="InterCo./CrossCountry Transfer"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="New joiner no show"]').remove();
                $("select[name='INTERVENTIONS_EN_COURS$VALEUR692']").children('option[value="Candidate withdrawal"]').remove();
            }
        }
    }   

};

window.checkSubtopicValue = function(subtopic,countrySAPCode){
    
    // console.log("Subtopic value inside check subtopic function: "+subtopic);
    // console.log("Selected subtopic is: "+subtopic);
    if(subtopic=="LC_LOA Paid"){
        populateReasonForLOAPaid(countrySAPCode);
    }else if(subtopic=="LC_LOA Unpaid"){
        populateReasonForLOAUnpaid(countrySAPCode);
    } else {

    }
    
};

/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {
    setTimeout(function(){
        var countrySAPCode1 = neocase.form.field("UTILISATEURS$CHAMPU232").getValue();
        var countrySAPCode = document.getElementById('UTILISATEURS$CHAMPU232').value;
        // console.log("Country SAP Code is: "+countrySAPCode);

        //var getSubtopicValue = document.getElementById('ELEMENTS').value;
        var getSubtopicValue = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
        checkSubtopicValue(getSubtopicValue,countrySAPCode);
        populateReasonForTermination(countrySAPCode);
    },500);
	
};

neocase.form.event.bind('loadcomplete', onloadForm);
