//EC_AGR_HRBP - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/02/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
---------------------------------------------- 
Developer   - Ahana Sarkar
Date	    - 12/04/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - countryWiseSectionVisibility() to show/hide sections based on country
            - generateDocumentButtonDisplay() to show/hide generate document button based on country
            - copyFunctions() to copy values from one field to another
            - salConROA() to show/hide fields & section based on topic/subtopic & Reason of absence field value
----------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/29/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - completedButtonDisplayHide() to display completed button based on topic/subtopic
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 02/23/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - partTimeLeaveVisibility() added
---------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/12/2021 (MM/DD/YYYY)
Change No   - MOD-005
Description - countryWiseSectionVisibility() updated - Work schedule (new) visibility for BE & LU
---------------------------------------------------------*/ 

//hide technical section
neocase.form.section("section2f6123534cd0910a1d30").hide();	

window.copyFunctions = function() {
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    // copy Grade
    neocase.form.field('UTILISATEURS$CHAMPU35').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR40');
    //copy Cost Centre / PU Code value
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');
	//copy SBU description
    neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR737');
    //copy Company value
    neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR736');
    //copy Base location code (current) value
    neocase.form.field('UTILISATEURS$CHAMPU384').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR478');
    //copy Job Title Desc. value
    neocase.form.field('UTILISATEURS$CHAMPU40').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR45');  
    //copy Personal area
    neocase.form.field('UTILISATEURS$CHAMPU27').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR285');  	
};
/*---------------------------------------------------------------*/
window.countryWiseSectionVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    neocase.fieldInstances = [];
    try{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR748').hide();//Company Transfer date field
        neocase.form.section('sectionb4413bd750568ec43b8a').hide(); //Only for China : Additional Pay 
        neocase.form.section('section245234279744398154ba').hide(); //Only for China : Additional Pay: Allowances   
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            
            neocase.form.section('sectionef9a73fadd03e6002aa8').show();
            neocase.form.section('section427f15229084f1a43748').show();
            if(subtopic == '2969' || subtopic == '2970' || subtopic == '2971' || subtopic == '2973' || subtopic == '2974' || subtopic == '2977'){//EC_Cost center change ;EC_Work location transfer;EC_Grade / Job change;EC_Contract change;EC_Promotion/demotion;EC_Company Change // +MOD-003
                neocase.form.section('sectionb4413bd750568ec43b8a').show(); //Only for China : Additional Pay
            }
            if(subtopic == '2973' || subtopic == '2974' || subtopic == '2975' || subtopic == '2977'){//EC_Contract change,EC_Promotion/demotion,EC_Pay change,EC_Company change
                neocase.form.section('section245234279744398154ba').show(); //Only for China : Additional Pay : Allowances
            }
            if(subtopic == '2970'){
                neocase.form.section('sectioncf1f15e3eccc8ab1e1ab').show();
                neocase.form.section('section18a545ec1d9cea2a8917').hide(); //Variable Pay Scheme details // +MOD-003
            }else if(subtopic == '2977'){ // EC_Company change // +MOD-003
                neocase.form.section('section2230db16f4162c31e868').show(); //Client location
                neocase.form.section('section18a545ec1d9cea2a8917').show(); //Variable Pay Scheme details
                neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR748').show();//Company Transfer date field
            }
            else{
                neocase.form.section('sectioncf1f15e3eccc8ab1e1ab').hide();
                neocase.form.section('section18a545ec1d9cea2a8917').hide(); //Variable Pay Scheme details
            }
            neocase.form.section('sectionc905e00d48b94f75eaba').hide();
            //neocase.form.section('section18a545ec1d9cea2a8917').hide();//Variable Pay Scheme details
        }
        else if(countryIsoCode == 'BE' && countrySAPCode == '12'){
            if(subtopic == '2975' || subtopic == '2973' || subtopic == '2974'){
                neocase.form.section('sectionc905e00d48b94f75eaba').show();
            }
            else{
                neocase.form.section('sectionc905e00d48b94f75eaba').hide();
            }
            neocase.form.section('sectionef9a73fadd03e6002aa8').hide();
            neocase.form.section('sectioncf1f15e3eccc8ab1e1ab').hide();
            neocase.form.section('section427f15229084f1a43748').hide();
            neocase.form.section('section18a545ec1d9cea2a8917').hide();
        }
        else if(countryIsoCode == 'CZ' || countryIsoCode == 'HU' || countryIsoCode == 'IE' || countryIsoCode == 'IT' ){
            if(subtopic == '2974'){
                neocase.form.section('section18a545ec1d9cea2a8917').show();

            }else{
                neocase.form.section('section18a545ec1d9cea2a8917').hide();
            }
            neocase.form.section('sectionef9a73fadd03e6002aa8').hide();
            neocase.form.section('section427f15229084f1a43748').hide();
            neocase.form.section('sectioncf1f15e3eccc8ab1e1ab').hide();
            neocase.form.section('sectionc905e00d48b94f75eaba').hide();
        }
        else{
            neocase.form.section('sectionef9a73fadd03e6002aa8').hide();
            neocase.form.section('sectioncf1f15e3eccc8ab1e1ab').hide();
            neocase.form.section('sectionc905e00d48b94f75eaba').hide();
            neocase.form.section('section427f15229084f1a43748').hide();
            neocase.form.section('section18a545ec1d9cea2a8917').hide();
        }
        console.log('work schedule');
        if(subtopic == "2973" && (countryIsoCode == 'LU' || countryIsoCode == 'BE')){
            console.log('Work schedule show');
            neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").show();
        }else{
            console.log('Work schedule hide');
            neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR755").hide();
        }
    }catch(error){
        console.log(error);
    }
};
window.partTimeLeaveVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
        subtopic = neocase.form.field("INTERVENTIONS_EN_COURS$ELEMENT").getValue();
    neocase.form.field('UTILISATEURS$CHAMPU39').hide();
    neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').hide();
    if(countryIsoCode == 'LU'){
        if(subtopic == '2968'|| subtopic == '2973'){ // EC_Change in working hours OR EC_contract change
            neocase.form.field('UTILISATEURS$CHAMPU39').show();
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR752').show();
        }
    }
};
window.generateDocumentButtonDisplay = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
    countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
    elementGenerateButton = document.getElementById('bouton_evenement3537');
    try{
        if(elementGenerateButton !== null){
            if(countryIsoCode == 'PT' || countryIsoCode == 'CN' || countryIsoCode == 'LU' || countryIsoCode == 'BE' || countryIsoCode == 'IE'){
                elementGenerateButton.style.display = 'block';
            }else{
                elementGenerateButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};
window.salConROA = function(){
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue(),
        reasonOfAbsenceVal = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR732').getValue();
    neocase.fieldInstances = [];
    
    if(subtopic == '2997'){ // Subtopic = EC_LOA paid
        console.log('salConROA function-> subtopic = ' + subtopic + ' reasonOfAbsenceVal = ' + reasonOfAbsenceVal);
        if(reasonOfAbsenceVal == 'Salary Continuance'){ // 1928 - Salary Continuance.
            document.getElementById('section0198994ef733c13139de').style.display = 'block';
            document.getElementById('UTILISATEURS$CHAMPU311').parentElement.style.display = 'none';
            document.getElementById('lblUTILISATEURS$CHAMPU311').parentElement.style.display = 'none';
            document.getElementById('INTERVENTIONS_EN_COURS$VALEUR334').parentElement.style.display = 'none';
            document.getElementById('lblINTERVENTIONS_EN_COURS$VALEUR334').parentElement.style.display = 'none';
            
        }else{
            document.getElementById('section0198994ef733c13139de').style.display = 'none';
            document.getElementById('UTILISATEURS$CHAMPU311').parentElement.style.display = 'block';
            document.getElementById('lblUTILISATEURS$CHAMPU311').parentElement.style.display = 'block';
            document.getElementById('INTERVENTIONS_EN_COURS$VALEUR334').parentElement.style.display = 'block';
            document.getElementById('lblINTERVENTIONS_EN_COURS$VALEUR334').parentElement.style.display = 'block';
        }
    }
};
window.completedButtonDisplayHide = function(){ //++MOD-003
    var elementCompletedButton = document.getElementById('bouton_evenement3534'), // Completed button
        topic = formulaire.INTERVENTIONS_EN_COURS$MOTCLE.value,
        subtopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT.value;
    try{
        console.log(topic,subtopic);
        if(elementCompletedButton !== null){
            if(topic == '2773' && subtopic == '2990'){ // topic = EC_General request; subtopic = EC_Other request(HRBP)
                elementCompletedButton.style.display = 'block';
            }else{
                elementCompletedButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};
/**************************
 * Launch Javascript on init
 ***************************/
window.launchOnloadcomplete = function(){
    if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
    copyFunctions();  
    salConROA();
    generateDocumentButtonDisplay();
    completedButtonDisplayHide();
    countryWiseSectionVisibility();
    partTimeLeaveVisibility();
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
