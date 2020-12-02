// JavaScript Document
/************** IN_START_AND_STOP_SALARY(C) **********
Version - Initial
Author - Smita Singh
Creation Date - 25/07/2017
Description - France plan B 
******************************************************************
Version - MOD-001
Author - MD SHAHBAZ KHAN
Creation Date - 14/11/2017
Description - Implementing Javascript for requirement described
			  in behavior column of W4 Design
******************************************************************
Version - MOD-002
Author - Riya Dutta
Creation Date - 12/26/2018 (MM/DD/YYYY)
Description - 1)Change checkForm function for pop-up alert missing field issue			  
******************************************************************
Version - MOD-003
Author - Riya Dutta	
Creation Date - 01/04/2019 (MM/DD/YYYY)
Description - Upgrading to New JS Framework (//need update)
**********************************************************************
Version - MOD-004
Author - Riya Dutta	
Creation Date - 05/22/2019 (MM/DD/YYYY)
Description - Start Stop Date new logic during UAT
			- add Most Recent Hire Date & logic
			- Stop payment date logic changes 
			- Submit restciction function Changes - 07/01/2019
            - Disable Stop payment date for Existing emp - 07/02/2019
**********************************************************************
Version - MOD-005
Author - Smita Singh
Creation Date - 10/07/2019 (MM/DD/YYYY)
Description - Request details to be filled on submit
**********************************************************************
Version - MOD-006
Creation Date - 12/10/2019 (MM/DD/YYYY)
Description - The validation message restriction for Jan and Dec
**********************************************************************
Version - MOD-007
Creation Date - 11/03/2020 (MM/DD/YYYY)
Description - The validation message restriction for Jan and Dec
**********************************************************************/
var consDisciplinaryAction = "S5";
var consOthers = "S6";
//Hide Technical Section
neocase.form.section("section102").hide();
neocase.form.section("section247").hide();
neocase.form.section("section8376ad531b2dcf0e614f").hide();


window.hideBlock = function(sectionTitleField, blockField)
{
	neocase.form.section(sectionTitleField).hide();
	$("."+blockField).eq(0).hide();
	neocase.form.field("question").setValue("  ");
	var blockComment = neocase.form.field("question").elementHTML;
	$(blockComment).trigger("change");
	
};

window.showBlock = function(sectionTitleField, blockField)
{	
	neocase.form.section(sectionTitleField).show();	
	$("."+blockField).eq(0).show();
	neocase.form.field("question").setValue("");
	var blockComment = neocase.form.field("question").elementHTML;
	$(blockComment).trigger("change");
};

//********** End of MOD-001++ ****************************
//MOD-004 Starts
//decide Stop payment date as per logic changes
window.getStopPayDate = function()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0! 
	var nextMonth = mm+1; 
	var yyyy = today.getFullYear();

	if (dd >= 1 && dd<= 25){
		// Date = 1st of current month
		var firstDayCurrMonth = '';	
		var hire_dt = neocase.form.field("UTILISATEURS$CHAMPU47").elementHTML;
		var parts_hire_dt = hire_dt.value.split('/');
		if(parts_hire_dt[2] == yyyy){
			if(parts_hire_dt[1] == mm){
				firstDayCurrMonth = hire_dt.value;
			}else{
				firstDayCurrMonth = '1/'+mm+'/'+yyyy;
			}
			
		}else{
			firstDayCurrMonth = '1/'+mm+'/'+yyyy;
		}
		return firstDayCurrMonth;
	}else{
		//Date = 1st of next month
		if(nextMonth>12)
		{
			nextMonth = nextMonth - 12; //Year has only 12 month
			yyyy = yyyy+1;
		}
		var firstDayNextMonth = '1/'+nextMonth+'/'+yyyy;	
		return firstDayNextMonth;	
	}
	
};
//MOD-004 Starts 

window.stopPaymentReasonDescToCode = function(){
	//Définition des variables
	var msg = "fonction stopPaymentReasonDescToCode : ";
	var stopPaymentReasonCode = formulaire.INTERVENTIONS_EN_COURS$VALEUR681;
	var stopPaymentReasonDesc = formulaire.INTERVENTIONS_EN_COURS$VALEUR684;
	if(stopPaymentReasonCode){
		if(stopPaymentReasonDesc){
			
			
		
			var stopPaymentReasonDescValue = stopPaymentReasonDesc.options[stopPaymentReasonDesc.selectedIndex].getAttribute('code');
			
			switch(stopPaymentReasonDescValue) {
			case "1579": //Modalité 1 (35 h)
				$(stopPaymentReasonCode).find('option[code*=1577]').prop('selected',true); //M1.1
				break;
			case "1580": //Modalité 1 (39 h)
				$(stopPaymentReasonCode).find('option[code*=1578]').prop('selected',true); //M1.2
				break;
			default:
				stopPaymentReasonCode.value="";
				break;
			}	
				
		
		}else{
			msg += "var stopPaymentReasonDesc (formulaire.INTERVENTIONS_EN_COURS$VALEUR681) non trouvée > champ absent ou non chargé";
			console.log(msg);
		}
	}else{
		msg += "var stopPaymentReasonCode (formulaire.INTERVENTIONS_EN_COURS$VALEUR682) non trouvée > champ absent ou non chargé";
		console.log(msg);
	}
};


//display "Most Recent Hire Date" for new joinees
window.calculateHireDate = function() {
	neocase.form.field("UTILISATEURS$CHAMPU47").hide();
	console.log('passed2');
	var monthDiff=0;
	var today = new Date();
	var mm = today.getMonth()+1;  //05 for may
	var dd = today.getDate();
	var hDate = neocase.form.field("UTILISATEURS$CHAMPU47").getValue();
	//console.log(hDate);
	var parts =hDate.split('/');
	var hDateNew=parts[1]+"/"+parts[0]+"/"+parts[2];
	var hireDate = new Date(hDateNew);
	var hireDatemm = hireDate.getMonth(); //03 for march

	var todayYYYY=today.getFullYear();
	var hireYYYY=hireDate.getFullYear();
	//console.log(mm+" - "+hireDatemm+" +(12 * ( "+todayYYYY+" - "+hireYYYY+" ))");
	//monthDiff = (mm - hireDatemm)+(12 * ( todayYYYY- hireYYYY));
	//console.log(parts[2]+"-"+parts[1]+"-"+parts[0]);
	//console.log(todayYYYY+"-"+mm+"-"+dd);
	hireutc = Date.UTC(parts[2], parts[1], parts[0]);
	todayutc = Date.UTC(todayYYYY, mm, dd);
    var dayDiff = (todayutc - hireutc)/(86400*1000);
	//console.log("day diff : "+dayDiff);
	return dayDiff;

};


//MOD-004 Ends

/*------- Stop Salary Date Range Restriction rule -- RD -- 05/24/2019 -------*/
window.setStopDateRange = function(){
	var dateElement = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR682").elementHTML;
	var hireDate = neocase.form.field("UTILISATEURS$CHAMPU47").elementHTML;
	$(dateElement).parent().find('span#wrongDate').remove();
	var dateSelected = "";

//dateSelected = dateElement.value;
var parts_hiredate = hireDate.value.split('/');
//console.log(parts_hiredate);
var parts_date = dateElement.value.split('/');
dateSelected = parts_date[1]+"/"+parts_date[0]+"/"+parts_date[2];
//console.log(dateSelected);
if( dateSelected != "" )
{
	
	var selectedDate = new Date(dateSelected); 
	var selectedMonth = selectedDate.getMonth(); 
	var selectedYear = selectedDate.getFullYear(); 
	var selectedDay = selectedDate.getDate();
	//console.log(selectedDate);
	var today = new Date();
	var currMonth = today.getMonth(); //jan = 0;
	var max =new Date();
	var min =new Date();
	//var nextMonth = currMonth + 1;  //5
	//var preMonth = currMonth - 1;  //3 addYears(-5);
	var nextMonth = max.addMonths(1).getMonth(); //Feb = 1;
	var preMonth = min.addMonths(-1).getMonth(); //Dec = 11;
	
	var currYear = today.getFullYear(); 
	var nextYear = currYear + 1; 
	var preYear = currYear - 1; 
	
	var janFlag=0;
	var decFlag=11;
	if(currYear == selectedYear) //if the date is in same year
	{
		//console.log(parts_hiredate[2]+'->'+selectedYear);
		
		
		
		if(preMonth == decFlag){ //++MOD-006
			preMonth = preMonth - 12;
		}
		else if(nextMonth == janFlag){
			nextMonth = 12;
		}
		
		if(!(preMonth<= selectedMonth && selectedMonth<= nextMonth))	
		{
			$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Date must be in between Previous month & Next month from now</span>");
			/*Submit restciction function Changes : MOD-004 */
			//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
			$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
		}
		else
		{
			/*Submit restciction function Changes : MOD-004 */
			//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled'); // MOD-004 --
			if(parts_hiredate[2] == selectedYear){
				//console.log(parts_hiredate[1]+'->'+selectedMonth);
				if(parts_hiredate[1] == (selectedMonth+1)){
					//console.log(parts_hiredate[0]+'->'+selectedDay);
					if(parts_hiredate[0] > selectedDay){
						//neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR682").setValue("");
						$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Selected date must be greater than or equal to hire date.</span>");
						$(".submitSimpleRequestButton").css("pointer-events","none");
					}
				}
				else if(parts_hiredate[1] > (selectedMonth+1)){
					$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Selected date must be greater than or equal to hire date.</span>");
					$(".submitSimpleRequestButton").css("pointer-events","none");
				}else{
					$(".submitSimpleRequestButton").css("pointer-events","");
				}
			}
			
		}
	
	}
	else if (selectedYear == nextYear){ //if the date is in next year 2020
	//if Jan then allow
	
		if(selectedMonth == janFlag && currMonth == decFlag){
		/*Submit restciction function Changes : MOD-004 */
		//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled'); // MOD-004 --
		$(".submitSimpleRequestButton").css("pointer-events","");
		}
	//else not allow
		else 
		{
		$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Date must be in between Previous month & Next month from now</span>");
		/*Submit restciction function Changes : MOD-004 */
		//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
		$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
		}
	
	}
	else if (selectedYear == preYear){ //if the date is in Previous year 2018
		
		if(selectedMonth == decFlag && currMonth == janFlag){ //dec 2018
		/*Submit restciction function Changes : MOD-004 */ // MOD-004 --
		//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled');
			if(parts_hiredate[2] > selectedYear){
				$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Selected date must be greater than or equal to hire date.</span>");
				$(".submitSimpleRequestButton").css("pointer-events","none");
			}else{
				$(".submitSimpleRequestButton").css("pointer-events","");
			}
		//$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Date must be in between Previous month & Next month from now</span>");
		//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled");
		}
		else 
		{
		//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled');
		$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Date must be in between Previous month & Next month from now</span>");
		/*Submit restciction function Changes : MOD-004 */
		//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
		$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
		}
	}
	else{ //if the date is not within the range of Previous year & Next Year
		$(dateElement).parent().append("<span id='wrongDate' style='color:red;'>Date must be in between Previous month & Next month from now</span>");
		/*Submit restciction function Changes : MOD-004 */
		// $(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
		$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
	}
	
}
};


window.manageSection_EmployeeDetails = function(){
	//Hide Stop Payment Section when [Current Stop Payment Reason] is disability or others
	//Hide Start Payment Section when [Current Stop Payment Reason] is blank
	var currentSPR = neocase.form.field("UTILISATEURS$CHAMPU318").getValue();
	console.log('mansec2: '+currentSPR);
	//var currentSPR = neocase.form.field("UTILISATEURS_CHAMPU16").getValue();
	var currSbtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
	//First Hide Stop Payment Section
	neocase.form.section("section1bdbdc095a06bd9fb65f").hide();	
	//First Hide Start Payment Section
	neocase.form.section("sectionfd249f27f5a6eb66f80e").hide();
	//Hide Error Message Section
	neocase.form.section("section8376ad531b2dcf0e614f").hide();
	//Hide comment Block
	hideBlock("section102","mix-caseForm-bloc-question");
	//Remove previous section display error message
	//$("#secErrorMessage").remove();
	//Enable Submit button if it was previously disabled
	//Submit enable disable function
	//$(".submitSimpleRequestButton").eq(0).removeAttr('disabled');
    console.log(currSbtopic);
	switch(currSbtopic) {
		case '3563': //Stop Payment
			if( currentSPR == "" ){		
				//Show Stop Payment Section
				neocase.form.section("section1bdbdc095a06bd9fb65f").show();	
				//Auto Populate Stop Payment date with 1st day of next month
				//neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR367").setValue(getNextMontthFirstDate());
				neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR682").setValue(getStopPayDate());
				//Triggering Change event manually so that attached validations work
				$(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR682").elementHTML).trigger("change");
				/*Disable Stop payment date field for Existing emp Starts of MOD-004 */
				//fieldDisable("INTERVENTIONS_EN_COURS$VALEUR367"); -- Commented by MD to test Date Issue - 21st Jan 2019
				//var calMonthsDiff=calculateHireDate();
				//if(calMonthsDiff > 60){
					disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR682"));
				//}
				/*Disable Stop payment date field for Existing emp End of MOD-004 */
				var spr = neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR681").getValue();
				if(spr === consOthers){
					showBlock("section102","mix-caseForm-bloc-question");
				}

			}else{
				console.log("Payment already stopped");
					neocase.form.section("section8376ad531b2dcf0e614f").show();
					$("#section8376ad531b2dcf0e614f").html("<br/><span id='secErrorMessage' style='font-size:20px; color:red;' >We cannot process your request, Payment is already stopped earlier.</span>");
					/*Submit restciction function Changes : MOD-004 */
					//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); //-- MOD-004
					$(".submitSimpleRequestButton").css("pointer-events","none"); //++ MOD-004
			}
			break;
		case '3564': //Start Payment
		   if( currentSPR != "" ){
				if ( currentSPR === consDisciplinaryAction || currentSPR === consOthers){
					//Show Start Payment Section
					console.log("consDisciplinaryAction matched");
					neocase.form.section("sectionfd249f27f5a6eb66f80e").show();
					//Start Payment date should be indetical to Stop payment date
					neocase.form.field("UTILISATEURS$CHAMPU320").copyValueTo("INTERVENTIONS_EN_COURS$VALEUR683");	
					//copyValue("UTILISATEURS$CHAMPU320", "INTERVENTIONS_EN_COURS$VALEUR368");
					neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR684").noMandatory();
					//Disable Start payment date field
					//fieldDisable("INTERVENTIONS_EN_COURS$VALEUR368");
					disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR683"));
					if(currentSPR === consDisciplinaryAction){
						neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR685").setValue("P6");
					}else{
						neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR685").setValue("P7");
					}
					
				}else{
					neocase.form.section("section8376ad531b2dcf0e614f").show();
					$("#section8376ad531b2dcf0e614f").html("<br/><span id='secErrorMessage' style='font-size:20px; color:red;' >Payment was not stopped via Neocase, so you cannot re-start it here either.</span>");
					/*Submit restciction function Changes : MOD-004 */
					//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
					$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
				}
			}else{
				neocase.form.section("section8376ad531b2dcf0e614f").show();
				$("#section8376ad531b2dcf0e614f").html("<br/><span id='secErrorMessage' style='font-size:20px; color:red;' >Payment is not stopped so cannot be restarted</span>");
				/*Submit restciction function Changes : MOD-004 */
				//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
				$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
			}
			
			break;
		default:
			neocase.form.section("section8376ad531b2dcf0e614f").show();
			$("#section8376ad531b2dcf0e614f").html("<br/><span id='secErrorMessage' style='font-size:20px; color:red;' >No valid subtopic is selected</span>");
			/*Submit restciction function Changes : MOD-004 */
			//$(".submitSimpleRequestButton").eq(0).attr("disabled", "disabled"); // MOD-004 --
			$(".submitSimpleRequestButton").css("pointer-events","none"); // MOD-004 ++
	}
	

};

window.manage_Fields = function()
{
	neocase.form.field("UTILISATEURS$CHAMPU318").hide();
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR685").hide();
	neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR681").hide();
	//MOD-004 Starts
	//display "Most Recent Hire Date" for new joinees
	console.log('passed1');
	var calDayDiff=calculateHireDate();
	//console.log("month diff: "+calMonthDiff);
	if(calDayDiff<= 60){
		neocase.form.field("UTILISATEURS$CHAMPU47").show();
	}
	//MOD-004 Ends
};

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
	//manage field 
	neocase.form.field('INTERVENTIONS_EN_COURS$TYPE').hide();
	neocase.form.field('INTERVENTIONS_EN_COURS$DELAI').hide();
	
	manageSection_EmployeeDetails();
	manage_Fields();
	
	var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getText();
	var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
	console.log(topic+','+subtopic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR203').setValue(topic);
	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR204').setValue(subtopic);
	disableField(neocase.form.field("UTILISATEURS$CHAMPU47"));
 };
neocase.form.event.bind('loadcomplete',launchOnInit);
/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){

	console.log("submit event");
    var msg = "This request is submitted from portal"; //MOD-005
    neocase.form.field("question").setValue(msg); //MOD-005
    
};
neocase.form.event.bind("submit",launchOnSubmit);
