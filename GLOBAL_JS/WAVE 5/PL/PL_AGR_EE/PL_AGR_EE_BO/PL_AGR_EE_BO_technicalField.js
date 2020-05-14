//PL_AGR_WO_APPROVAL - BO - Technical Field
/*---------------------------------------------
Developer   - Ayan Dey
Date	    - 4/12/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide the technical section
            - Popup link generate for Employee-group
---------------------------------------------*/

//hide technical section
neocase.form.section("section4d3a383294ea86463cca").hide();	


window.copyValueToField = function(fieldToCopy, field) {

};
/* ------------- disable fields ----------------- */
window.disableAllFields = function(){

};

/* ------------- Popup Link ----------------- */
// window.setPopups = function(){
//     popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR363, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
// };

/**
 * Remove option for topic and subtopic
 * If subtopic = PL_Start Unpaid leave of absence [3330] : only "Unpaid Leave" will be available for Reason for absence
 * If subtopic = PL_Start Unpaid leave of absence [3330] : absence type should show "Select..." with 2 possible values : "Paid Leave" or "Unpaid leave"
 **/

window.removeOption = function() {
	console.log("Called");

    if(document.getElementById('ELEMENTS').value == "3330"){
		console.log("I'm Here");
        // For absence type
        var selectAbsenceType=document.getElementById("INTERVENTIONS_EN_COURS$VALEUR601");
            for (i=0;i<selectAbsenceType.length; i++) {
				console.log(i);
				console.log("BLAHH");
                if(selectAbsenceType.options[i].value =='Paid Leave') {
					console.log("INSIDE");
                    selectAbsenceType.remove(i);
                    i--; // options have now less element, then decrease i
                }
            }


        // For Reason for absence
        var selectReasonForAbsence=document.getElementById("INTERVENTIONS_EN_COURS$VALEUR604");
            for (i=0;i<selectReasonForAbsence.length;  i++) {
                if(selectReasonForAbsence.options[i].value =='Parental' || selectReasonForAbsence.options[i].value =='Maternity Leave') {
                    selectReasonForAbsence.remove(i);
                    i--; // options have now less element, then decrease i
                }
            }
        }
  };

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
    //setPopups(); 
	removeOption();	
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnInit);

