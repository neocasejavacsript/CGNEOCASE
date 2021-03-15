//EC_AGR_MGR - BO - Technical Field
/*---------------------------------------------
Developer   - Ahana Sarkar
Date	    - 10/30/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Basic JS
---------------------------------------------- 
Developer   - Ahana Sarkar
Date	    - 12/01/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - countryWiseSectionVisibility() to show/hide sections based on country
            - generateDocumentButtonDisplay() to show/hide generate document button based on country
            - copyFunctions() to copy values from one field to another
----------------------------------------------
Developer   - Ahana Sarkar
Date	    - 12/29/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - completedButtonDisplayHide() to display completed button based on topic/subtopic
----------------------------------------------*/


//hide technical section
neocase.form.section("section2f6123534cd0910a1d30").hide();

window.copyFunctions = function() {
	//copy Job Title Desc. value
    neocase.form.field('UTILISATEURS$CHAMPU27').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR285');
    //copy Base Location value
    neocase.form.field('UTILISATEURS$CHAMPU29').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR122');
    //copy SBU description
    neocase.form.field('UTILISATEURS$CHAMPU31').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR737');
    //copy BU description
    neocase.form.field('UTILISATEURS$CHAMPU33').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR736');
    //copy Cost Centre / PU Code value
    neocase.form.field('UTILISATEURS$CHAMPU24').copyValueTo('INTERVENTIONS_EN_COURS$VALEUR14');	
};
window.countryWiseSectionVisibility = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
        countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText();
    var subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getValue();
    console.log('countryWiseSectionVisibility' + subtopic);
    neocase.fieldInstances = [];
    try{
        if(countryIsoCode == 'CN' && countrySAPCode == '28'){
            neocase.form.section('sectionef9a73fadd03e6002aa8').show();
        }else{
            neocase.form.section('sectionef9a73fadd03e6002aa8').hide();
        }
    }catch(error){
        console.log(error);
    }
};
window.generateDocumentButtonDisplay = function(){
    var countryIsoCode = neocase.form.field('UTILISATEURS$CHAMPU19').getText(),
    countrySAPCode = neocase.form.field('UTILISATEURS$CHAMPU232').getText(),
    elementGenerateButton = document.getElementById('bouton_evenement3562');
    try{
        if(elementGenerateButton !== null){
            if(countryIsoCode == 'PT' ||countryIsoCode == 'CN' || countryIsoCode == 'LU' || countryIsoCode == 'BE' || countryIsoCode == 'IE'){
                elementGenerateButton.style.display = 'block';
            }else{
                elementGenerateButton.style.display = 'none';
            }
        }
    }catch(error){
        console.log(error);
    }
};
window.completedButtonDisplayHide = function(){ //++MOD-003
    var elementCompletedButton = document.getElementById('bouton_evenement3560'), // Compelted button
        topic = formulaire.INTERVENTIONS_EN_COURS$MOTCLE.value,
        subtopic = formulaire.INTERVENTIONS_EN_COURS$ELEMENT.value;
    try{
        console.log(topic,subtopic);
        if(elementCompletedButton !== null){
            if(topic == '2773' && subtopic == '2989'){ // topic = EC_General request; subtopic = EC_Other request(MGR)
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
    generateDocumentButtonDisplay();
    completedButtonDisplayHide();
    countryWiseSectionVisibility();
    
};
//neocase.form.event.bind("init",launchOnInit);
neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
