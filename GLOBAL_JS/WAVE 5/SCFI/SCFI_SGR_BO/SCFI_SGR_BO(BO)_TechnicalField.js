/* --- SCFI_SGR_BO_Technical Fields --- */

/*--------------------------------------------------------------------------
Developer   - Ahana Sarkar
Date	    - 01/08/2020 (MM/DD/YYYY)
Change No   - MOD-001
Description - convertTitleToHTML() implemented for BO to convert Title string to HTML format
-----------------------------------------------------------------------------*/

/*---------Convert Title string to HTML format-----------*/
window.convertTitleToHTML = function(sectionId){
    var sectionTitle = neocase.form.section(sectionId).elementHTML.querySelector('a');
    if(localStorage.getItem(sectionId) === null){
        localStorage.setItem(sectionId,sectionTitle.innerText);
    }
    sectionTitle.innerHTML = localStorage.getItem(sectionId);
};

/**************************
 * Launch Javascript on loadcomplete
 ***************************/
window.launchOnloadcomplete = function () {
    convertTitleToHTML('sectionc4e9b81d0f2ad427714a');
};
neocase.form.event.bind("loadcomplete", launchOnloadcomplete);
