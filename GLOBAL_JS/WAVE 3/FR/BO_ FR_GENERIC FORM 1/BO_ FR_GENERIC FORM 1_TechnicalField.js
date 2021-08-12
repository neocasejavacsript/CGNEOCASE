//FR GENERAL REQUEST - BO - Technical Field
/*---------------------------------------------

Developer   - Smita Singh
Date	    - 10/31/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - Hide Technical section
------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 03/05/2020 (MM/DD/YYYY)
Change No   - MOD-002
Description - Read only 'Request Details'
-------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 11/09/2020 (MM/DD/YYYY)
Change No   - MOD-003
Description - calculate,Show or hide monthly annual salary field based on topic FR_Certificates (in English) / Attestations (in French) [code=2813] or subtopics under the same
------------------------------------------
Developer   - Ahana Sarkar
Date	    - 05/11/2021 (MM/DD/YYYY)
Change No   - MOD-004
Description - setNomenclature() added to add “n°rq_GGID_LASTNAME_Firstname”
----------------------------------------------------------------------------*/ 

//hide technical section
neocase.form.section("sectionb36e5127657a3dd43dd0").hide();	//MOD-001
window.setNomenclature = function(){
    var reqNo = neocase.form.field('INTERVENTIONS_EN_COURS$NUMERO').getValue(),
    ggid = neocase.form.field("UTILISATEURS$CHAMPU1").getValue(),
    lastname = neocase.form.field("UTILISATEURS$CHAMPU8").getValue(),
    firstname = neocase.form.field("UTILISATEURS$CHAMPU9").getValue();
    var nomenclature = reqNo + '_' + ggid + '_' + lastname + '_' + firstname;
    var nomenclatureField = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR963');
    if(nomenclatureField){
        nomenclatureField.setValue(nomenclature);
    }    
};

/************************************
 * Launch Javascript on loadcomplete
 ************************************/
window.launchOnloadcomplete = function(){
	/*-- Read only 'Request Details'--*/
	if(formulaire.question.value !== ''){
        formulaire.question.readOnly = true;
    }
    else{
        formulaire.question.readOnly = false;
    }
    /*--X-- Read only 'Request Details'--X--*/
    
    //++MOD-003
    var payPeriods = neocase.form.field('UTILISATEURS$CHAMPU293').getValue(),
        annualSal = neocase.form.field('UTILISATEURS$CHAMPU292').getValue();
    if(annualSal !== '' && payPeriods !== '' ){
        var monthlySal = parseFloat(annualSal)/parseFloat(payPeriods);
        if(neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').getValue() == ''){
            neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').setValue(monthlySal.toFixed(2));
        }  
    }
       
    var topic = neocase.form.field('INTERVENTIONS_EN_COURS$MOTCLE').getCode(),
        subtopic = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getCode();

    if(topic == '2813' || subtopic == '2327' || subtopic =='2328' || subtopic =='2694' || subtopic =='3591' || subtopic =='2309'){ 
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').show();
    }else{
        neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR429').hide();
    }
    setNomenclature();
};

neocase.form.event.bind('loadcomplete', launchOnloadcomplete);
