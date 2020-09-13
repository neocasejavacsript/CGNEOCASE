/*************LC_MASS_UPLOAD (M) - Technical Field Code*************/
/*--------------------------------------------------------------------------
Developer   - Ayan Dey
Date	    - 03/23/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - Rewriting JS
Form        - LC_MASS_UPLOAD (M)
--------------------------------------------------------------------------*/

//Hide Technical Section
neocase.form.section("section7967bc3132ce68ddf008").hide();

/************************************************
To check if the response is field is empty or not
*************************************************/
window.checkValueOfField = function(fieldId){
    if (!$.trim($("#" + fieldId ).val())) {
            return false;
    }else{
            return true;
    }
};

/*********************************
Get the text area id
*********************************/
window.findTextAreabyID = function(nameElement) {
    var tempData = true,
        possibleElements = $('[id*="' + nameElement + '"]');
        for (var i = 0; i< possibleElements.length; ++i) {
            if (possibleElements[i].localName === "textarea") {
                tempData = checkValueOfField(possibleElements[i].id);
            }
        }
        
    return tempData;
}; 

/**************************
* Launch Javascript on init
***************************/
window.launchOnInit = function(){
    formulaire.question.readOnly = "true";
};
neocase.form.event.bind("init",launchOnInit);


/****************************
* Launch Javascript on submit
*****************************/
window.launchOnSubmit = function(){
    var againTempData = true;
	againTempData = findTextAreabyID("response");
	if(againTempData)
		{
		//checkForm();
		}
	else{
        alert("Response field is mandatory");
        return false;
    } 
};
neocase.form.event.bind("submit",launchOnSubmit);
