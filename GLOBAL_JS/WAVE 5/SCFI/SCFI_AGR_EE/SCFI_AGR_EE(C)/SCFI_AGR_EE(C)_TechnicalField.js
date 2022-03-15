/* --- SCFI_AGR_EE(C)Technical Fields --- */
/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/14/2019 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical & hidden section
            - Popup and fill up on Base Location
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/01/2019 (MM/DD/YYYY)
Change No   - MOD-002
Description - Autofill topic and subtopics form URL
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/08/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - Set minimum date of related start and end date field
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 06/22/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - Add 'blur' function for the end date in'setDateLimit' menthod(if User manuaaly enter the date by typing)
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 08/21/2020 (MM/DD/YYYY)
Change No   - MOD-005
Description - Section containing article link display for LOA subtopic
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 09/21/2020 (MM/DD/YYYY)
Change No   - MOD-006
Description - Field “Last Working Day” will be visible and mandatory only when reason = Salary Continuance
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/19/2020 (MM/DD/YYYY)
Change No   - MOD-007
Description - Rollback Mod-006
            - Remove reason = Salary Continuance from dropdown
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 04/16/2021 (MM/DD/YYYY)
Change No   - MOD-008
Description - mandateDocument(fieldname,subtopic) to make file type field mandatory for specific subtopics
            - displayDoc() - merged function for all the show/hide field and section except LOA
-------------------------------------------------------------------------
Developer   - Choudhury Shahin
Date	    - 05/01/2021 (MM/DD/YYYY)
Change No   - MOD-009
Description - Add method 'checkQuestion' to replace space by empty
---------------------------------------------------------*/ 

// hide Technical section
neocase.form.section("section8d84eb62f3f258e9ab22").hide();
// hide hidden section
neocase.form.section("section42c3e651394b657ff1f3").hide();


SC_Nm_SubAreaCode = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR121.value = fieldValue;
};
SC_Nm_SubAreaDesc = function(fieldValue) { // Base location code(new) 
    formulaire.INTERVENTIONS_EN_COURS$VALEUR123.value = fieldValue;
};
window.setPopups = function(){
    popupLink(formulaire.INTERVENTIONS_EN_COURS$VALEUR123, "/Custom_Referential/SubArea.aspx?Id_User="); //set popup link to Base location(new)
    
};
window.disableAllFields = function(){
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR123")); //disbale Base location(new) 
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR121")); //disbale Base location code (new) 
};
window.loadTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE"),getParamFromUrl('topic')); 
        }
};

window.loadSubTopic = function(){
    if(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE").getValue() !== null ){
		if(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() && neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() !== null ){ 
            updateAndDisableField(neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT"),getParamFromUrl('subtopic'));
		}
	}
};
/*-------------Set minimum date of related start and end date field--------+MOD-003-----*/
window.setDateLimit = function(startDateField, endDateField){
    var stD,stDate,endD,endDate,nextDay,alertMsg;
    var startDateFieldId = $('#'+ neocase.form.field(startDateField)['elementHTML']['id']),
        endDateFieldId = $('#'+ neocase.form.field(endDateField)['elementHTML']['id']),
        today = new Date(),
        errorMsg = '<span style="color:red" class="error-msg-date"> Date should be greater than the start date</span>';
    
    //startDateFieldId.datepicker( "option", "minDate", today);
    //endDateFieldId.datepicker( "option", "minDate", today);
    
    startDateFieldId.change(function(){
        stD = startDateFieldId.val();
        endD = endDateFieldId.val();

        stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
        endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';

        if((endD == '' && stD !== '' && !isNaN(stDate)) || endDate > stDate){
            nextDay = new Date(stDate  + (24 * 60 * 60 * 1000 ));
            endDateFieldId.datepicker( "option", "minDate", nextDay);
        }
        else if(endDate<= stDate){
            endDateFieldId.val('');
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD)? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            nextDay = new Date(stDate  + (24 * 60 * 60 * 1000 ));
            endDateFieldId.datepicker( "option", "minDate", nextDay);
            if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                endDateFieldId.after(errorMsg);
            }
            alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.row').find('label').text()) + ' ' + stD;
            alert(alertMsg);
            
        }
        else{
            endDateFieldId.datepicker( "option", "minDate", '');
            //endDateFieldId.datepicker( "option", "minDate", today);
        }        
    });
    endDateFieldId.change(function(){
        if(endDateFieldId.closest('div').find('.error-msg-date').length  > 0){
            endDateFieldId.closest('div').find('.error-msg-date').remove();
        }
    });
    endDateFieldId.blur(function(){ //++MOD-004
        endD = endDateFieldId.val();
        if(endD != ''){
            stD = startDateFieldId.val();
            stDate = stD !== ''|| typeof stD !== 'undefined' || !isNaN(stD) ? new Date(stD.split('/')[2],stD.split('/')[1] - 1,stD.split('/')[0]).getTime() : '';
            endDate = endD !== ''|| typeof endD !== 'undefined'|| !isNaN(endD) ? new Date(endD.split('/')[2],endD.split('/')[1] - 1,endD.split('/')[0]).getTime() : '';
    
            if(endDate<= stDate){
                endDateFieldId.val('');
                if(endDateFieldId.closest('div').find('.error-msg-date').length< 1){
                    endDateFieldId.after(errorMsg);
                }
                alertMsg = 'Select date after '+$.trim(startDateFieldId.closest('.row').find('label').text()) + ' ' + stD;
                alert(alertMsg);
            }
        }

    });
};
/*---------XXXXXX----Set minimum date of related start and end date field----XXXXXX---------*/
/*---------Section containing article link display for LOA subtopic---++MOD-005------*/
window.displayLoaDoc = function(){
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
        countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue(),
        countrySAPCode = neocase.form.field("UTILISATEURS$CHAMPU232").getValue();
    if(subtopic == '2887'){
        if(countryISOCode == 'DK' || countrySAPCode == '09'){
            neocase.form.section('section5367761aa6f2f5f043f7').show();
            neocase.form.section('section352ef5f60d45eb5e36f3').hide();
            neocase.form.section('sectione2a9cdd3890bb42d1be6').hide();
            neocase.form.section('section69d7aa1876322693b594').hide();
        }else if(countryISOCode == 'FI' || countrySAPCode == '44'){
            neocase.form.section('section352ef5f60d45eb5e36f3').show();
            neocase.form.section('section5367761aa6f2f5f043f7').hide();
            neocase.form.section('sectione2a9cdd3890bb42d1be6').hide();
            neocase.form.section('section69d7aa1876322693b594').hide();
        }else if(countryISOCode == 'NO' || countrySAPCode == '20'){
            neocase.form.section('sectione2a9cdd3890bb42d1be6').show();
            neocase.form.section('section352ef5f60d45eb5e36f3').hide();
            neocase.form.section('section5367761aa6f2f5f043f7').hide();
            neocase.form.section('section69d7aa1876322693b594').hide();
        }else if(countryISOCode == 'SE' || countrySAPCode == '23'){
            neocase.form.section('section69d7aa1876322693b594').show();
            neocase.form.section('sectione2a9cdd3890bb42d1be6').hide();
            neocase.form.section('section352ef5f60d45eb5e36f3').hide();
            neocase.form.section('section5367761aa6f2f5f043f7').hide();
        }
    }else{
        neocase.form.section('section69d7aa1876322693b594').hide();
        neocase.form.section('sectione2a9cdd3890bb42d1be6').hide();
        neocase.form.section('section352ef5f60d45eb5e36f3').hide();
        neocase.form.section('section5367761aa6f2f5f043f7').hide();
    }
};
/*----xxxxx-----Section containing article link display for LOA subtopic---xxxxx------*/
// window.showLwd = function(){ // ++MOD-006
//     if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getCode() == '1829' || neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517').getValue() == 'Salary Continuance'){
//         neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').show();
//         neocase.form.field('UTILISATEURS$CHAMPU311').hide();
//         neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').hide();
//     }else{
//         neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR221').hide();
//         neocase.form.field('UTILISATEURS$CHAMPU311').show();
//         neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').show();
//     }
// };

/*---------Make Document field as Mandatory for required subtopic---++MOD-008------*/
window.mandateDocument = function(fieldName, subtopic){ // ++MOD-008
    var subtopicPopulated = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    var fieldLabel = $.trim(neocase.form.field(fieldName).label().split(':')[0]),
        divEle = $(neocase.form.field(fieldName)['elementHTML']).closest('div');
        if(subtopicPopulated == subtopic){
                neocase.form.field(fieldName).mandatory(fieldLabel);
                if($(divEle).find('.ValidatorCautionBox').length< 1){
                    $(divEle).find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
                }
                $($(divEle).find('.btn').children()[2]).attr('neo-required-message', fieldLabel);
        }
        $($(divEle).find('.btn').children()[1]).on('change', function () {    
            console.log('Changing...');
                if(subtopicPopulated == subtopic){
                    var interval  = setInterval(function() {
                        if($($(divEle).find('.btn').children()[2]).val() != '' && $(divEle).find('.ValidatorCautionBox').length > 0){
                            console.log('File uploaded'+$('.fileinput-display').children().length);
                            $(divEle).find('.ValidatorCautionBox').remove();
                            $($(divEle).find('.btn').children()[2]).removeAttr('neo-required-message');
                            clearInterval(interval);
                        }
                    }, 1000);
                }
    
         });
        $($(divEle).find('.btn').children()[2]).on('change', function () {    
            console.log('Changing to...');
                if(subtopicPopulated == subtopic){
                    if ($($(divEle).find('.btn').children()[2]).val() == '' && $(divEle).find('.ValidatorCautionBox').length<= 0){
                        console.log('File removed');
                        if($(divEle).find('.ValidatorCautionBox').length< 1){
                            $(divEle).find('.fileupload').append("<span class='ValidatorCautionBox'></span>");
                            $($(divEle).find('.btn').children()[2]).attr('neo-required-message', fieldLabel);
                        }
                    }
                }  
        });       
    //} 
};
/*----xxxxx-----Make Document field as Mandatory for required subtopic---xxxxx------*/

/*---------Document display for required subtopic---------*/
window.displayDoc = function(){
    var subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue() || getParamFromUrl('subtopic'),
        countryISOCode = neocase.form.field("UTILISATEURS$CHAMPU19").getValue();
    //neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR705').noMandatory();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR705').hide(); // Hide Supporting document
    neocase.form.section('sectioncda689c3ac67f0fa3cbf').hide();
    if(countryISOCode == 'SE'){
        if(subtopic == '2889'){ // SCFI_Change in working hours
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR705').show(); // Show Supporting document
            neocase.form.section('sectioncda689c3ac67f0fa3cbf').show();
            mandateDocument("INTERVENTIONS_EN_COURS$VALEUR705", '2889'); // Here subtopic = 3319
        }
    }
    neocase.form.section('sectione9065459a3c77f8d97c1').hide();
    neocase.form.section('section9a8e38f65d8a41ef52d1').hide();
    if(countryISOCode == 'FI'){
        if(subtopic == '3319'){ // SCFI_Retirement
            neocase.form.section('sectione9065459a3c77f8d97c1').show();  
            mandateDocument("INTERVENTIONS_EN_COURS$VALEUR510", '3319'); // Here subtopic = 3319
        }
        else if(subtopic == '3318'){ // SCFI_Resignation
            neocase.form.section('section9a8e38f65d8a41ef52d1').show();
            mandateDocument("INTERVENTIONS_EN_COURS_VALEUR509", '3318'); // Here subtopic = 3318
        }        
    }    
};
/*----xxxxx-----Document display for required subtopic---xxxxx------*/

/*---------Monthly fixed salary based on current work% need to be auto populated as Base salary/12---------*/
window.baseSalaryNew = function(){
    var baseSalaryValue = neocase.form.field("UTILISATEURS$CHAMPU168").getValue();
    var baseSalaryNewValue=	neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR76');
    console.log(baseSalaryValue);
    console.log(baseSalaryNewValue);
    var baseSalaryNew = baseSalaryValue/12;
    baseSalaryNewValue.setValue(baseSalaryNew);
    disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR76"));

};
/*----xxxxx-----Monthly fixed salary based on current work% need to be auto populated as Base salary/12---xxxxx------*/

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    if(sessionStorage.getItem('loadcomplete')){
        sessionStorage.removeItem('loadcomplete');
    }
    setPopups();
    disableAllFields();
};
neocase.form.event.bind("init",launchOnInit);

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
            displayDoc();
            baseSalaryNew(); 
        }, 800);
    }
};

window.checkQuestion = function () {
    var question = neocase.form.field('question');
    var trimmedValue = question.elementHTML.value.replaceAll(' ', '');
    if (trimmedValue.length === 0) {
        question.emptyValue();
    }
};

/**************************
* Launch Javascript on loadcomplete
***************************/
window.launchOnloadcomplete = function(){
    //document.getElementById('section03d7e2c4c635f3419c26').style.display == 'none';
    // neocase.form.section('section03d7e2c4c635f3419c26').hide();
    launchOnceLoadComplete();
    //++MOD-003
    if(document.getElementById('sectione0594f31164773401e4d').style.display !== 'none'){ // Section: Start/Update leave of absence details
        setDateLimit('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503'); //Fields: 'Absence start date (new) :' , 'Expected return date (new) :'
        displayLoaDoc(); //++MOD-005
        //showLwd();// ++MOD-006
    }
    var reasonAbsenceSalCode = $("#"+ neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR517')['elementHTML']['id'] + " option[code='1829']");
    if($(reasonAbsenceSalCode).length > 0){
        $(reasonAbsenceSalCode).remove(); // ++MOD-007
    }
    console.log('launch load complete');
};
neocase.form.event.bind("loadcomplete",launchOnloadcomplete);

/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
    checkQuestion();
};
neocase.form.event.bind("submit",launchOnSubmit);
