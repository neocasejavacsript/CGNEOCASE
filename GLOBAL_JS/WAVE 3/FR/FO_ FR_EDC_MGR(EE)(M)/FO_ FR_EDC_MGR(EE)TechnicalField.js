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
-----------------------------------------------*/ 

/* ------------- Start of MOD-001 changes -------------*/
//hide technical section
neocase.form.section("section2768aff2e9a727689da1").hide();
/* ------------- Start of MOD-002 changes -------------*/
//hide Hidden section
neocase.form.section("section57bf2d341f024ce4bae3").hide();

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){

	//Disable fields
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$MOTCLE")); // MOD-003--
	//disableField(neocase.form.field("question_question"));//******MOD-2********// MOD-003--

};
neocase.form.event.bind("init",launchOnInit);
/* ------------- End of MOD-001 changes -------------*/
