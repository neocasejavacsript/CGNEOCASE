//LC_GR_BO - BO - Technical Field
/*---------------------------------------------
Developer   - Ayan Dey
Date	    - 03/12/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Rewriting JS
---------------------------------------------*/

//hide technical section
neocase.form.section("section96abacd14842aa6e494f").hide();	


/* ------------- Popup Links ----------------- */
window.setPopups = function(){
    // Personal Area
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR119, "/Custom_Referential/PersonalArea.aspx?Id_User=");
    // Contract
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR291, "/Custom_Referential/ContratType.aspx?Id_User=");
    // Notice Period
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR293, "/Custom_Referential/NoticePeriod.aspx?Id_User=");
    // Grade
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR41, "/Custom_Referential/Grade.aspx?Id_User=");
    // Employee Group
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR315, "/Custom_Referential/EmployeeGroup.aspx?Id_User=");
    // Production Unit
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR17, "/Custom_Referential/PU.aspx?Id_User=&Id_Demande=");
	// Company moving to 
	popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR924, "/Custom_Referential/CountryMoving.aspx?Id_User=");
};


//  // Personal Area
// FillCf_personal_area_code_new = function (fieldValue) {
//     console.log("personal_area_code");
//     console.log(fieldValue);
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR284.value = fieldValue;
// };
// FillCf_personal_area_desc_new = function (fieldValue) {
//     console.log("personal_area_desc");
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR285.value = fieldValue;
// };
// FillCf_personal_sub_area_code = function (fieldValue) {
//     console.log("personal_sub_area_code");
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
// };
// FillCf_personal_sub_area_desc = function (fieldValue) {
//     console.log("personal_sub_area_desc");
//     formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
// };

 // Production Unit / Cost Center
 FillCf_pu_code = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR15.value = fieldValue;
};
FillCf_pu_desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR17.value = fieldValue;
};
FillCf_sbu_desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR231.value = fieldValue;
};
FillCf_bu_desc = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR232.value = fieldValue;
};

//popup for Country moving to 
FillCf_CountryMovingCode = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR926.value = fieldValue; //Company Code
};
FillCf_CountryMovingDescription = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR924.value = fieldValue; //Campany Name
};
FillCf_CountryMoving = function (fieldValue) {
    formulaire.INTERVENTIONS_EN_COURS$VALEUR927.value = fieldValue; //Country
};

window.hideAllSection = function(){

    //Header section
    neocase.form.section("sectionc361dfbab2adcf57b977").hide();
    //Display Pay
    neocase.form.section("sectiond6e811084de0f8470af4").hide();
    //Display Work Location
    neocase.form.section("section783f5111c8d3b895d876").hide();	
    //Display Fixed Term Contract
    neocase.form.section("section1cc0f2546b2006d886f3").hide();
    //Display Contract details
    neocase.form.section("section9da44f3431fe1d7ca84d").hide();
    //Display Working hours
    neocase.form.section("sectionae35a6bb498be4a10b51").hide();
    //Display EE Group-Subgroup
    neocase.form.section("sectionf334c2f9d0829d589e87").hide();
    //Display Grades
    neocase.form.section("sectionf465503142256f31e6d1").hide();
    //Display PU / Cost Center
    neocase.form.section("sectione7b7d5a4db2986377708").hide();
    //Mass Upload
    neocase.form.section("section61b54107f407ad36a8fb").hide();
	
	// Action reason
	neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").hide();
	// Supporting document
	neocase.form.section("sectioncf04783363f5752d18a3").hide();
	// Hiring Details
	neocase.form.section("sectioncbede5e384dc5aa583ff").hide();
	// Expected end date
	neocase.form.section("section163e540e5f0cfc7ec5b6").hide();
	// Confirm assignment end date
	neocase.form.section("section125000426108747a8005").hide();
	// Change date of joining
	neocase.form.section("sectione4ff17526b922e842826").hide();
	// Non employee deactivation details
	neocase.form.section("section1612baf455d84532a55f").hide();
	// Termination dates
	neocase.form.section("section9fd35b23427bed356e75").hide();
	// Last working day
	neocase.form.section("sectione5bb9825d5427c7ec6ee").hide();
	// Deployment model
	neocase.form.section("section13b467d4cebe2535b838").hide();
	// Country company moving to
	neocase.form.section("section5f450cc5c53822e193e7").hide();
	// No Show
	neocase.form.section("sectionfc9626218d1c304c654a").hide();
	// Attachement Section
	neocase.form.section("section415ba29b12f9df2e77ee").hide();
	
};

window.copyFunctions = function() {

    //copy SBU Description
	neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('UTILISATEURSBIS$CHAMPU31');

	//copy BU Description
    neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('UTILISATEURSBIS$CHAMPU33');
    
	//copy Job title desc value
	//neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');

	//copy personal area Code value
	neocase.form.field('UTILISATEURS$CHAMPU26').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR284');

	//copy personal area desc value
	neocase.form.field('UTILISATEURS$CHAMPU27').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR285');

	//copy personal sub area code value
	neocase.form.field('UTILISATEURS$CHAMPU28').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR120');

	//copy personal sub area desc value
	neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');

	//copy FTC extension value
	neocase.form.field('UTILISATEURS$CHAMPU43').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR124');

	//copy EE group code value
	neocase.form.field('UTILISATEURS$CHAMPU36').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR6');

	//copy EE group desc value
	neocase.form.field('UTILISATEURS$CHAMPU37').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR8');

	//copy EE subgroup code value
	neocase.form.field('UTILISATEURS$CHAMPU38').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR178');

	//copy EE subgroup desc value
	neocase.form.field('UTILISATEURS$CHAMPU39').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR180');

	//copy Global grade Code value
	neocase.form.field('UTILISATEURS$CHAMPU34').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR238');

	//copy Local grade value
	neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');

	//copy production unit code value
	neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');

	//copy production unit description value
    neocase.form.field('UTILISATEURS$CHAMPU25').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR16');
    
    //copy production unit description value
	//neocase.form.field('UTILISATEURS$CHAMPU361').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
};


/************************
MANDATORY FIELDS
***************************/
window.noMandatories = function() {
	try {
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').noMandatory(); //Effective date / Start date
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76').noMandatory(); //Annual base salary (new)
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').noMandatory(); //Fixed term contract end date (new)
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR17').noMandatory(); //Production unit description  (new)
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR344').noMandatory(); //Rundate mass upload not before
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR346').noMandatory(); //Number of attached files

	} catch (error) {
		console.log(error.message);
	}
};

window.disableField = function (field) {
    var msg = "function disableField : ";
    if (field) {
        field.onkeydown = function () {
            return false;
        };
    } else {
        msg += "field undefined or readonly";
        console.log(msg);
    }
};

window.disableFields = function() {
	//Grade
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR41);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR234);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR236);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR237);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR239);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR240);	
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR241);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR242);
	
	//Work Location
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR118);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR119);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR121);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR123);
	
	//Cost Center
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR15);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR17);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR231);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR232);
	
	//Contract Detail - Contract type
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR290);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR291);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR310);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR311);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR292);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR293);

	//EE Group-Subgroup
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR363);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR315);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR364);
	disableField(formulaire.INTERVENTIONS_EN_COURS$VALEUR365);
};


window.generateDocumentButtonDisplay = function(){
    var getSubtopicValue = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText(),
        elementGenerateButton = document.getElementById('btncustom565');
        
    console.log(getSubtopicValue);
    try{
        if(elementGenerateButton !== null){
            if(getSubtopicValue == 'LC_Employment Verification Letter (HRBP)' || getSubtopicValue == 'LC_Employment Verification Letter (MGR)' || getSubtopicValue == 'LC_Employment Verification Letter (EE)'){
                elementGenerateButton.style.display = 'block';
            }else{
                elementGenerateButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};

/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnInit = function(){
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR875').hide();
    var topic = formulaire.INTERVENTIONS_EN_COURS$MOTCLE.value;
    var subTopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT.value;
    setPopups(); 
    copyFunctions();
    // Initially hide all secions
    hideAllSection();
    noMandatories();
	//DISABLE FIELDS
	disableFields();
    // show / hide sections based on topic / subtopic
    
    // if no topic is selected and the value of subtopic is "Please choose", Hide all sections
    if((!topic || topic=="" || topic=="0") && subTopic=="0"){
        console.log("No topic is selected. Hiding all sections");
        hideAllSection();
    }

    if(topic == "2703"){
        console.log("Topic is: 2703 - Hire / rehire");
        hideAllSection();
        
		
		// If subtopic is LC_Experienced Hire 
		if(subTopic == "3537"){
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
		}else if(subTopic == "3532" || subTopic == "3541" || subTopic=="3058"){
			// LC_College Hire  || LC_Hire With Prior Service || LC_Contract to Hire
			
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
		}else if(subTopic=="3054"){
			// if subtopic = LC_Change In Date Of Joining 
			neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Show the Change date of joining section
			neocase.form.section("sectione4ff17526b922e842826").show();
		}else if(subTopic=="3056"){
			// Subtopic = LC_No Show 
			// show the No Show section
			neocase.form.section("sectionfc9626218d1c304c654a").show();
		}else if(subTopic=="3053"){
			// Subtopic = LC_Company Change Within Country 
			// show the attachment section
			neocase.form.section("section415ba29b12f9df2e77ee").show();
		}else if(subTopic=="3072"){
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
		}else{
			hideAllSection();
		}
    }

    if(topic == "2707"){
        console.log("Topic is: 2707 - Mass Upload");
        // Hide all sections except mass upload
        hideAllSection();
        neocase.form.section("section61b54107f407ad36a8fb").show();
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR344').mandatory('Rundate mass upload not before'); //Rundate mass upload not before
		neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR346').mandatory('Number of attached files'); //Number of attached files
    }

    if(topic == "2700"){
		console.log("Topic is: 2700 - LC_Employment data change");
		var tp = document.getElementById("ELEMENTS");
		console.log("Length of subtopic: "+tp.length);
		for (var i = 0; i< tp.length; i++){
			console.log(tp.options[i].value);
			var option = tp.options[i];
			// now have option.text, option.value
			console.log(i+" "+option.value);
			$('#ELEMENTS').children('option[value="3551"]').remove();
		}
		
        console.log("Topic is: 2700 - Employment Data Change");
        // Check subtopic and show / hide sections
        if(subTopic == "3533"){
            console.log("Subtopic is 3533 - LC_Company Change");
            //show header section
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
            // show Work Location section
            neocase.form.section("section783f5111c8d3b895d876").show();
            // show PU / Cost Center section
            neocase.form.section("sectione7b7d5a4db2986377708").show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date
			neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR17').mandatory('Production unit description  (new)'); //Production unit description  (new)
        } else if(subTopic == "3534"){
            console.log("Subtopic is 3534 - LC_Contract change");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();
            //Display Contract section
            neocase.form.section("section9da44f3431fe1d7ca84d").show();
            //Display Working hours
            neocase.form.section("sectionae35a6bb498be4a10b51").show();
            //Display EE Group-Subgroup
            neocase.form.section("sectionf334c2f9d0829d589e87").show();
        } else if(subTopic == "3538"){
            console.log("Subtopic is 3538 - LC_Fixed term contract extension");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();
            // show Fixed term contract section
            neocase.form.section("section1cc0f2546b2006d886f3").show();

            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR126').mandatory('Fixed term contract end date(new)'); //Fixed term contract end date (new)
            
        } else if(subTopic == "3540"){
            console.log("Subtopic is 3540 - LC_Grade change ");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();
            // show Grade section
            neocase.form.section("sectionf465503142256f31e6d1").show();

            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date

        } else if(subTopic == "3549"){
            console.log("Subtopic is 3549 - LC_Pay change");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();
            // show Pay section
            neocase.form.section("sectiond6e811084de0f8470af4").show();

            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76').mandatory('Annual base salary (new)'); //Annual base salary (new)
            
        } else if(subTopic == "3552"){
            console.log("Subtopic is 3552 - LC_Promotion/demotion ");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();			
            // show Pay section
            neocase.form.section("sectiond6e811084de0f8470af4").show();               
            // show Grade section
            neocase.form.section("sectionf465503142256f31e6d1").show();

            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76').mandatory('Annual base salary (new)'); //Annual base salary (new)
            
        }else if(subTopic == "3558"){
            console.log("Subtopic is 3558 - LC_Work location transfer ");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Action reason
			neocase.form.section("sectionbfd3bd2e7cb8d60fb17f").show();            
            
        } else {
            hideAllSection();
            //neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date
        }
		
		/*else if(subTopic == "3551"){
            console.log("Subtopic is 3551 - LC_Probation Period update ");
            // show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();

            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR5').mandatory('Effective date / Start date'); //Effective date / Start date

        }*/
		
    }
	
	
	// If topic = LC_Permanent Transfer
	if(topic=="2828"){
		hideAllSection();
		// If subtopic = LC_InterCo./CrossCountry transfer
		if(subTopic=="3072"){
			// show Last working day
			neocase.form.section("sectione5bb9825d5427c7ec6ee").show();
			// show Attachement Section
			neocase.form.section("section415ba29b12f9df2e77ee").show();
			
		}else{
			hideAllSection();
		}
		
	}
	
	
	
	// If topic = LC_Assignment outbound
	if(topic=="2831"){
		hideAllSection();
		// If subtopic = LC_Assignment Outbound Start 
		if(subTopic=="3074"){
			// show header
            neocase.form.section("sectionc361dfbab2adcf57b977").show();
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
			// Show the Supporting document section
			neocase.form.section("sectioncf04783363f5752d18a3").show();
			// Show the Expected end date section
			neocase.form.section("section163e540e5f0cfc7ec5b6").show();
			// Show the Deployment model section
			neocase.form.section("section13b467d4cebe2535b838").show();
			// Show the Country / Company Moving to section
			neocase.form.section("section5f450cc5c53822e193e7").show();
		}else if(subTopic=="3075"){
			// if subtopic = LC_Assignment Outbound Extension
			
			// Show the Supporting document section
			neocase.form.section("sectioncf04783363f5752d18a3").show();
			// Show the Expected end date section
			neocase.form.section("section163e540e5f0cfc7ec5b6").show();
		
		}else if(subTopic=="3076"){
			// if subtopic = LC_Assignment Outbound End
			// Show the Confirm assignment end date
			neocase.form.section("section125000426108747a8005").show();
			// Show the Country / Company Moving to section
			neocase.form.section("section5f450cc5c53822e193e7").show();
		
		}else{
			hideAllSection();
		}
		
	}
	
	
	// If topic = LC_Assignment Inbound
	if(topic=="2832"){
		hideAllSection();
		// If subtopic = LC_Assignment Inbound Start 
		if(subTopic=="3077"){
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
			// Show the Supporting document section
			neocase.form.section("sectioncf04783363f5752d18a3").show();
			// Show the Expected end date section
			neocase.form.section("section163e540e5f0cfc7ec5b6").show();
			// Show the Deployment model section
			neocase.form.section("section13b467d4cebe2535b838").show();
			// Show the Country / Company Moving to section
			neocase.form.section("section5f450cc5c53822e193e7").show();
		}else if(subTopic=="3078"){
			// if subtopic = LC_Assignment Inbound Extension 
			
			// Show the Supporting document section
			neocase.form.section("sectioncf04783363f5752d18a3").show();
			// Show the Expected end date section
			neocase.form.section("section163e540e5f0cfc7ec5b6").show();
		
		}else if(subTopic=="3079"){
			// if subtopic = LC_Assignment Inbound End 
			// Show the Confirm assignment end date
			neocase.form.section("section125000426108747a8005").show();
			// Show the Country / Company Moving to section
			neocase.form.section("section5f450cc5c53822e193e7").show();
			
			// Show the Termination dates section
			neocase.form.section("section9fd35b23427bed356e75").show();
		
		}else{
			hideAllSection();
		}
		
	}
	
	// If topic = LC_Non Employee Deactivation
	if(topic=="2827"){
		hideAllSection();
		// If subtopic = LC_Non Employee Deactivation
		if(subTopic=="3071"){
			// Show the Non employee deactivation details section
			neocase.form.section("section1612baf455d84532a55f").show();
			// Show the Hiring Details section
			neocase.form.section("sectioncbede5e384dc5aa583ff").show();
		}else{
			hideAllSection();
		}
		
	}
	
	// If topic = LC_Company Change Within Country
	if(topic=="2830"){
		hideAllSection();
		// If subtopic = LC_Company Change Within Country
		if(subTopic=="3053"){
			// show Last working day
			neocase.form.section("sectione5bb9825d5427c7ec6ee").show();
			// show Attachement Section
			neocase.form.section("section415ba29b12f9df2e77ee").show();
		}else{
			hideAllSection();
		}
		
	}
	
	// If topic = LC_Change In Last Working Day 
	if(topic=="2829"){
		hideAllSection();
		// If subtopic = LC_Change In Last Working Day 
		if(subTopic=="3073"){
			// show Last working day
			neocase.form.section("sectione5bb9825d5427c7ec6ee").show();
		}else{
			hideAllSection();
		}
		
	}
	// If topic = General Request
	if(topic=="2701"){
		hideAllSection();
		// If subtopic = LC_HR Reporting 
		if(subTopic=="3068"){
			// show Attachement Section
			neocase.form.section("section415ba29b12f9df2e77ee").show();
			// show password protected field
			neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR875").show();
		}else{
			hideAllSection();
		}
	}
};
    neocase.form.event.bind('loadcomplete', launchOnInit);
	
	/*************************
 * ACTIONS ON LOAD COMPLETE
 **************************/
window.onloadForm = function() {
    generateDocumentButtonDisplay();  
};

neocase.form.event.bind('loadcomplete', onloadForm);
