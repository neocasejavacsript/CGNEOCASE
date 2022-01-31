//------ FR_EDC_MGR(EE) M  (Technical)
/*---------------------------------------------
Developer   - Riya Dutta
Date	    - 03/29/2018 (MM/DD/YYYY)
Change No   - MOD-001
Description - code Clean up
-----------------------------------------------*/ 
/*---------------------------------------------
Developer   - Suman Saha
Date	    - 05/17/2018 (MM/DD/YYYY)
Change No   - MOD-002
Description - Hidden section
-----------------------------------------------*/ 
/*---------------------------------------------
Developer   - Md Shahbaz Khan
Date	    - 06/01/2018 (MM/DD/YYYY)
Change No   - MOD-003
Description - Fixing Issue: History of Response Not showing.
			  Solution: Question was already disabled in algorithm
			  but in technical section, it was again trying to disable it
			  so, there was an error coming, which was holding History of 
			  Response from Showing.

------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 12/02/2020 (MM/DD/YYYY)
Change No   - MOD-004
Description - show section for 02 Addedum for given days
----------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	     - 12/08/2020 (MM/DD/YYYY)
Change No   - MOD-005
Description - restrict this field Nombre de jours demandés (max 20), to not allow users to enter anything more than 20.
----------------------------------------------------------------------------*/ 

/* ------------- Start of MOD-001 changes -------------*/
//hide technical section
neocase.form.section("section2768aff2e9a727689da1").hide();
/* ------------- Start of MOD-002 changes -------------*/
//hide Hidden section
neocase.form.section("section57bf2d341f024ce4bae3").hide();
var checkFlag = 0;
var NombreDeJoursDemandesOldVal = !formulaire.INTERVENTIONS_EN_COURS$VALEUR953 ? formulaire.INTERVENTIONS_EN_COURS$VALEUR953.value : '';
window.maxTwentyInField = function(){ //++MOD-005
  var NombreDeJoursDemandes = formulaire.INTERVENTIONS_EN_COURS$VALEUR953.value;
  var HTMLlang = document.documentElement.lang;
  var errorText = HTMLlang == 'fr-FR'?'Nombre de jours demandés doit être au maximum de 20':'Nb of days requested should be max 20';
  if(NombreDeJoursDemandes > 20){
    alert(errorText);
    if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').length< 1){
      $('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').append('<span class="error" style="color:red">'+errorText+'</span>');
      formulaire.INTERVENTIONS_EN_COURS$VALEUR953.value = NombreDeJoursDemandesOldVal;
      checkFlag = 1;
    }    
  }else{
    if($('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').length > 0){
      $('#divFieldINTERVENTIONS_EN_COURS_VALEUR953').find('.error').remove();
      checkFlag = 0;
    }
  }
};
/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

	//Disable fields
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE")); // MOD-003--
	//disableField(neocase.form.field("question_question"));//******MOD-2********// MOD-003--

};
neocase.form.event.bind('loadcomplete', function () {
    var subtopicVal = neocase.form.field('INTERVENTIONS_EN_COURS$ELEMENT').getText();
    if(subtopicVal == '02- Avenant don de jours' || subtopicVal == 'FR_02-Addendum for given days'){
        neocase.form.section('sectionb92db6fd0939bf716601').show();
    }else{
        neocase.form.section('sectionb92db6fd0939bf716601').hide();
    }
    neocase.form.section('section4c10406ee92561cdfd32').hide();//Work from home suspension
    if(subtopicVal == 'FR_02-Work from home suspension' || subtopicVal == '02-Suspension du télétravail'){
        neocase.form.section('section4c10406ee92561cdfd32').show();//Work from home suspensio
        $('#section4c10406ee92561cdfd32').find('hr').remove();// Work from home suspension
        if($('#section5988b22221a91f473fa2').find('hr').length< 1){// New work from home addendum article Section
            $('#section5988b22221a91f473fa2').append('<hr>');// New work from home addendum article Section
        }
    }
    if(subtopicVal == '03-Fin de suspension du télétravail' || subtopicVal == 'FR_03-End of suspension'){
      $('#section3637520dcf0aa92a2d58').find('hr').remove();// Effective date
      if($('#section5988b22221a91f473fa2').find('hr').length< 1){// New work from home addendum article Section
          $('#section5988b22221a91f473fa2').append('<hr>');// New work from home addendum article Section
      }
    }
    if(subtopicVal == 'FR_04-End work from home' || subtopicVal == '04-Arrêt du télétravail'){
      $('#section3637520dcf0aa92a2d58').find('hr').remove();// Effective date
      if($('#section5988b22221a91f473fa2').find('hr').length< 1){// New work from home addendum article Section
          $('#section5988b22221a91f473fa2').append('<hr>');// New work from home addendum article Section
      }
    }
    
});
neocase.form.event.bind("init",launchOnInit);
/* ------------- End of MOD-001 changes -------------*/
/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function () {
    maxTwentyInField();
};
neocase.form.event.bind("submit", launchOnSubmit);
