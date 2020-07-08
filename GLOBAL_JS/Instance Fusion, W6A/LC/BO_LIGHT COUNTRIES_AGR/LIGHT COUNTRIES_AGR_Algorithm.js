/*
//FS_AGR_BO - Algorithm field BACKOFFICE
_________________________________________
launch with 'ThisForm.Bind(loadcomplete)'
_________________________________________
V2 - PJU - 12/10/2015
	- Manage fields visibilities
	- Add file fields management
	- Add only mandatory fields conditions
	- update function 'champObligatoire' to work on backoffice
	- add 'ETATS' field exception
V3 - PJU - 11/02/2016
	- don't launch mandatory function when mandatory conditions are undefined
V3.1 - PJU - 25/02/2016
	- add ID management and 'ETATS' field exception in section 6A
V3.2 - PJU - 22/04/2016
	- add file fields mandatory exception
	- add 'PROVENANCE' field exception
	- add 'champsobligatoiresclient' update for backoffice mandatory fields
V4.0 - PJU - 13-05-2016
	- update 'manageField' & 'affichageChamp' functions : test if label exist before doing action on it
v5.0 - PJU - 18/05/2016
	- update 'champObligatoire' function : apply label red style only when mandatory field is requested + check if mandatory field was originaly set before activate it
v6.0 - PJU - 26/05/2016
	- create manageCheckbox function : checkbox always have value "on" when opening a form. The function give the value 0 or 1.
V7.0 - PJU - 29/06/2016
	- add variable 'enableManageField' to prevent '(M) forms' unwilling function launch on the 'onchange'
V8.0 - PJU - 28/11/2016
	- add 'ELEMENT' field exception
V9.0 - PJU - 08/12/2016
	- add 'iframe' management
V10.0 - PJU - 02/01/2016
	- manage var 'OBLIGATOIRE_RESPECTEE' and 'OBLIGATOIRE_NON_RESPECTEE' in section 9E
V10.1 - PJU - 17/01/2017
	- manage var 'OBLIGATOIRE_RESPECTEE' and 'OBLIGATOIRE_NON_RESPECTEE' in section 9C, 9D
V11 - PJU - 18/01/2017
	- Ajout de la variable enableManageField = true; dans l'ouverture c�t� backoffice
V12 - PJU - 10/05/2017
	- update the function 'viderChamp' > use selectedIndex to empty list fields
V13 - PJU - 15/11/2017
	- manage var 'OBLIGATOIRE_NON_RESPECTEE' in section 6A > 9B
V14 - PJU - 14/12/2017
    - 'affichageSection' modifi� pour prendre en compte les 'textarea'
V15 - PJU - 04/01/2018
    - fonction 'mandatoryList' rajout�e pour mettre � jour la liste des champs obligatoires dans le champ algorithm
V16 - PJU/WIL - 05/01/2018
    - fonction 'manageCheckbox' mise � jour pour fonctionner c�t� front et back
V17 - PJU - 11/01/2018
	- delete var enableManageField
	- update functions 'champObligatoire' and 'mandatoryList' to use localStorage instead of custom field input to store mandatory fields list
V18 - PJU - 01/03/2018
	- add specific code for 'MOTCLE' in manageFields
***************************************************************************
Developer   - Smita Singh
Date	    - 01/21/2019
Change No   - MOD-002
Description - Implementing new Js Framework code
***************************************************************************
*/

/**************************
Fields and display settings
***************************/
var Tableau = [
	
	//Display Probation Update
	'section102#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_Probation Period update',
	//Display Fixed Term Contract
	'section365#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_End of Fixed Term Contract;',
	//Display Termination info
	'section2fecf6651c15581a0c6c#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_End of Fixed Term Contract;FS/LC_Involuntary leaver',
	//Display Resignation info
   'section60ceec25b46ed23641b9#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_Resignation',
	//Display Last working day
	  'section71c805d9d30258ead277#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_Retirement;FS/LC_Resignation;FS/LC_End of Fixed Term Contract;FS/LC_Involuntary leaver',
	//Display Leave of absence details
	'section7a270b6eb274a6748adb#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_LOA Unpaid;FS/LC_LOA Paid',
	//Display Return from Leave of Absence
   'section0799b13d6b658217979d#formulaire.INTERVENTIONS_EN_COURS$ELEMENT|FS/LC_Return Leave of Absence'

];
var enableManageField;

/**************************
IMPLEMENTATION DE FONCTIONS
***************************/
//fonctions d'affichage des messages dans la console si elle est ouverte
window.msg = function (MESSAGE) {
    if (console) {
        console.log(MESSAGE);
    }
};

/*********************************
FONCTION AFFICHER/MASQUER UN CHAMP
**********************************/
window.affichageChamp = function (FIELD, VALID) {
    if (document.getElementById(FIELD.id)) {
        //ID du champ et de son libell�
        var FIELD_ID = FIELD.id;
        var LABEL_FIELD_ID;
        if (FIELD_ID.search("INTERVENTIONS") != -1) {
            LABEL_FIELD_ID = FIELD_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (FIELD_ID.search("UTILISATEURS") != -1) {
            LABEL_FIELD_ID = FIELD_ID.replace("UTILISATEURS", "lblUTILISATEURS");
        }
        if (LABEL_FIELD_ID.search("_display") != -1) {
            LABEL_FIELD_ID = LABEL_FIELD_ID.replace("_display", "");
        }
        if (VALID === true) {
            //afficher le champ
            if (document.getElementById(LABEL_FIELD_ID) !== null) {
                document.getElementById(LABEL_FIELD_ID).parentNode.style.display = "";
            }
            if (document.getElementById(FIELD_ID).parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.style.display = "";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.style.display = "";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.style.display = "";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.style.display = "";
            }
        } else {
            //masquer le champ
            if (document.getElementById(LABEL_FIELD_ID) !== null) {
                document.getElementById(LABEL_FIELD_ID).parentNode.style.display = "none";
            }
            if (document.getElementById(FIELD_ID).parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.style.display = "none";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.style.display = "none";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.style.display = "none";
            } else if (document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.tagName == "TD" || document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.tagName == "DIV") {
                document.getElementById(FIELD_ID).parentNode.parentNode.parentNode.parentNode.style.display = "none";
            }
        }
    }
};

/**************************************
FONCTION GERANT LES CHAMPS OBLIGATOIRES
***************************************/
window.champObligatoire = function (FIELD, VALID) {
    if (document.getElementById(FIELD.id)) {
        //ID du champ obligatoire
        var FIELD_ID = FIELD.id;
        var LBL_FIELD_ID;
        if (FIELD_ID.search("INTERVENTIONS") != -1) {
            LBL_FIELD_ID = FIELD_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
        } else if (FIELD_ID.search("UTILISATEURS") != -1) {
            LBL_FIELD_ID = FIELD_ID.replace("UTILISATEURS", "lblUTILISATEURS");
        }
        /**************
        C�TE BACKOFFICE
        ***************/
        var BACKOFFICE_MANDATORY = document.getElementById("champsobligatoiresproprietes");
        if (BACKOFFICE_MANDATORY) {
            BM_FIELD = FIELD_ID.replace("$", "\\$");
            BM_SEARCH = "!" + BM_FIELD + "!";
            BM_REPLACE = "!" + FIELD_ID + "!";
            var BM_VALUES = document.getElementById("champsobligatoiresproprietes").value;
            var BM_CLIENT = document.getElementById("champsobligatoiresclient").value;
            //store mandatory fields list for the 1st time
            if (localStorage.getItem("mandatoryListFields") === null) {
                if (BM_VALUES != "" && BM_VALUES != " ") {
                    localStorage.setItem("mandatoryListFields", BM_VALUES);
                } else if (BM_CLIENT != "" && BM_CLIENT != " ") {
                    localStorage.setItem("mandatoryListFields", BM_CLIENT);
                }
            }
            if (VALID === false) {
                //disable mandatory field
                if (BM_VALUES.search(BM_SEARCH) != -1 || BM_CLIENT.search(BM_SEARCH) != -1) {
                    BM_CLIENT = BM_CLIENT.replace(BM_REPLACE, "");
                    BM_VALUES = BM_VALUES.replace(BM_REPLACE, "");
                    document.getElementById(LBL_FIELD_ID).className = "label";
                }
                document.getElementById("champsobligatoiresproprietes").value = BM_VALUES;
                document.getElementById("champsobligatoiresclient").value = BM_CLIENT;
            } else {
                //enable mandatory field
                if (localStorage.getItem("mandatoryListFields").search(BM_SEARCH) != -1) {
                    if (BM_VALUES.search(BM_SEARCH) == -1 && BM_CLIENT.search(BM_SEARCH) == -1) {
                        if (BM_VALUES != "" && BM_VALUES != " ") {
                            BM_VALUES = BM_VALUES + BM_REPLACE;
                            document.getElementById("champsobligatoiresproprietes").value = BM_VALUES;
                        } else if (BM_CLIENT != "" && BM_CLIENT != " ") {
                            BM_CLIENT = BM_CLIENT + BM_REPLACE;
                            document.getElementById("champsobligatoiresclient").value = BM_CLIENT;
                        }
                        document.getElementById(LBL_FIELD_ID).className = "label req";
                    }
                }
            }
        }

        /*******************************
        VALIDATOR DES CHAMPS FORMULAIRES
        ********************************/
        var VALIDATOR_FIELD_ID;
        if (FIELD_ID.search("INTERVENTIONS") != -1) {
            VALIDATOR_FIELD_ID = FIELD_ID.replace("INTERVENTIONS", "Validator_INTERVENTIONS");
        } else if (FIELD_ID.search("UTILISATEURS") != -1) {
            VALIDATOR_FIELD_ID = FIELD_ID.replace("UTILISATEURS", "Validator_UTILISATEURS");
        } else if (FIELD_ID.search("n_question") != -1) {
            VALIDATOR_FIELD_ID = FIELD_ID.replace("n_question", "n_questionvalidator");
        }
        //manage file fields
        if (VALIDATOR_FIELD_ID.search("_display") != -1) {
            VALIDATOR_FIELD_ID = VALIDATOR_FIELD_ID.replace("_display", "");
        }
        //on v�rifie que le validator existe avant d'activer/d�sactiver champ obligatoire
        if (document.getElementById(VALIDATOR_FIELD_ID)) {
            ValidatorEnable(document.getElementById(VALIDATOR_FIELD_ID), VALID);
        }

        /*********************************
        VALIDATOR DES BOUTONS RADIO CUSTOM
        **********************************/
        if (document.getElementById(FIELD.id + "_radio_Validator")) {
            var RADIO_VALIDATOR_ID = FIELD.id + "_radio_Validator";
            if (VALID === true) {
                document.getElementById(RADIO_VALIDATOR_ID).style.display = "";
            } else {
                document.getElementById(RADIO_VALIDATOR_ID).style.display = "none";
            }
        }
    }
};

/*************************
FONCTION VIDANT LES CHAMPS
**************************/
window.viderChamp = function (FIELD) {
    if (document.getElementsByName(FIELD.name + "_radio").length > 0) {
        /****************************
        DECOCHER BOUTONS RADIO CUSTOM
        *****************************/
        //r�cup�rer les boutons radio
        var RADIO_NAME = document.getElementsByName(FIELD.name + "_radio");
        //d�cocher tous les boutons radio
        for (e = 0; e< RADIO_NAME.length; e++) {
            RADIO_NAME[e].checked = false;
        }
        //mettre la valeur par d�faut au champ select masqu�
        FIELD.value = "";
    } else {
        /**************************
        DECOCHER LES CHAMPS NEOCASE
        ***************************/
        if (FIELD.type == "checkbox") {
            //D�cocher case � cocher
            FIELD.checked = false;
            FIELD.value = 0;
        } else if (FIELD.type == "text") {
            //vider un champ text
            FIELD.value = "";
        } else if (FIELD.type == "select-one") {
            //valeur par d�faut sur un champ select
            FIELD.selectedIndex = "0";
        }
    }
};

/************************************************************
FONCTION PERMETTANT DE TRANSFORMER UNE LISTE EN BOUTONS RADIO
*************************************************************/
window.boutonRadio = function (FIELD) {
    //r�cup�rer l'ID/le name du champ
    var CHAMP_SELECT_ID = FIELD.id;
    var CHAMP_SELECT_NAME = FIELD.name;
    var CHAMP_SELECT_VALUE = FIELD.value;
    //r�cup�rer l'ID du label
    var SELECT_LABEL_ID;
    var SELECT_OBLIGATOIRE_ID;
    if (CHAMP_SELECT_ID.search("INTERVENTIONS") != -1) {
        SELECT_LABEL_ID = CHAMP_SELECT_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
        SELECT_OBLIGATOIRE_ID = CHAMP_SELECT_ID.replace("INTERVENTIONS", "Validator_INTERVENTIONS");
    } else if (CHAMP_SELECT_ID.search("UTILISATEURS") != -1) {
        SELECT_LABEL_ID = CHAMP_SELECT_ID.replace("UTILISATEURS", "lblUTILISATEURS");
        SELECT_OBLIGATOIRE_ID = CHAMP_SELECT_ID.replace("UTILISATEURS", "Validator_UTILISATEURS");
    }
    //Si le champ est obligatoire, on masque simplement l'�toile d'origine et on cr� une nouvelle �toile � c�t� du label
    if (document.getElementById(SELECT_OBLIGATOIRE_ID)) {
        //document.getElementById(SELECT_OBLIGATOIRE_ID).style.display = "none";
        //document.getElementById(SELECT_LABEL_ID).outerHTML += "<span style='color: Red; visibility: visible;' class='ValidatorCautionBox' id='"+CHAMP_SELECT_ID+"_radio_Validator' title='Champ obligatoire'></span>";
    }
    //faire une boucle sur les options � partir de 1 pour ne pas prendre la valeur nulle
    window[CHAMP_SELECT_ID].onloadcomplete = function () {
        var selectObject = FIELD;
        var ajaxList = selectObject.id;
        var SELECT_OPTIONS = selectObject.options;
        for (var o = SELECT_OPTIONS.length - 1; o >= 1; o--) {
            var RADIO_ID = selectObject.id + "_radio" + o;
            var RADIO_NAME = selectObject.name + '_radio';
            var RADIO_ID_LBL = RADIO_ID + '_lbl';
            var RADIO_NAME_LBL = RADIO_NAME + '_lbl';
            var OPTION_VALUE = SELECT_OPTIONS[o].value;
            selectObject.insertAdjacentHTML("afterend", "<span class='radio_button'><input type='radio' value = '" + OPTION_VALUE + "' id='" + RADIO_ID + "' name='" + RADIO_NAME + "' onchange='getSelectValue(this)' class='radio_input'><span id='" + RADIO_ID_LBL + "' name='" + RADIO_NAME_LBL + "' class='radio_label'>" + OPTION_VALUE + "</span></span>");
            if (OPTION_VALUE == selectObject.value) {
                document.getElementById(RADIO_ID).checked = true;
            }
        }
    };

    //eval(CHAMP_SELECT_ID).onloadcomplete = new Function("var selectObject = FIELD;var ajaxList = eval(selectObject.id);msg(ajaxList);var SELECT_OPTIONS = selectObject.options;msg(SELECT_OPTIONS);for(var o=SELECT_OPTIONS.length-1; o>=1; o--){var RADIO_ID = selectObject.id+\"_radio\"+o;var RADIO_NAME = selectObject.name+\'_radio\';var RADIO_ID_LBL = RADIO_ID+\'_lbl\';var RADIO_NAME_LBL = RADIO_NAME+\'_lbl\';var OPTION_VALUE = SELECT_OPTIONS[o].value;selectObject.insertAdjacentHTML(\"afterend\", \"<input type=\'radio\' value = \'\"+OPTION_VALUE+\"\' id=\'\"+RADIO_ID+\"\' name=\'\"+RADIO_NAME+\"\' onchange=\'getSelectValue(this)\'><span id=\'\"+RADIO_ID_LBL+\"\' name=\'\"+RADIO_NAME_LBL+\"\'>\"+OPTION_VALUE+\"</span>\");if(OPTION_VALUE == selectObject.value){document.getElementById(RADIO_ID).checked = true;}}");
    //Une fois les boutons cr��s, on masque le SELECT
    FIELD.style.display = "none";
};

/**************************************************************
 * FONCTION MASQUANT UNE SECTION SI TOUS SES CHAMPS SONT MASQUES
 ***************************************************************/
window.masquerSection = function (SECTION) {
    /*var ST_TD = SECTION.getElementsByTagName("td");
    var FIELD_DISPLAY;
    //boucle sur les TD d'une section
    for(z=0; z<ST_TD.length; z++){
      if(ST_TD[z].childNodes.length > 1){
        //on �limine les TDs vides
        if(ST_TD[z].style.display != "none"){
          FIELD_DISPLAY = true;

        }
      }
    }
    if(FIELD_DISPLAY !== true){
      SECTION.style.display = "none";
    }else{
      SECTION.style.display = "";
    }*/
};

/****************************************
 * FONCTION AFFICHANT/MASQUANT UNE SECTION
 *****************************************/
window.affichageSection = function (SECTION, VALID) {
    //d�clarer les variables
    var SECTION_INPUT = SECTION.getElementsByTagName("input");
    var SECTION_SELECT = SECTION.getElementsByTagName("select");
    var SECTION_TEXTAREA = SECTION.getElementsByTagName("textarea");

    if (VALID === true) {
        //Afficher la section
        SECTION.style.display = "";
        //Rendre champs obligatoires
        for (i = 0; i< SECTION_INPUT.length; i++) {
            champObligatoire(SECTION_INPUT[i], true);
        }
        for (s = 0; s< SECTION_SELECT.length; s++) {
            champObligatoire(SECTION_SELECT[s], true);
        }
        for (t = 0; t< SECTION_TEXTAREA.length; t++) {
            champObligatoire(SECTION_TEXTAREA[t], true);
        }
    } else {
        //Masquer la section
        SECTION.style.display = "none";
        //Rendre champs non obligatoires et les vider
        for (i = 0; i< SECTION_INPUT.length; i++) {
            champObligatoire(SECTION_INPUT[i], false);
            viderChamp(SECTION_INPUT[i]);
        }
        for (s = 0; s< SECTION_SELECT.length; s++) {
            champObligatoire(SECTION_SELECT[s], false);
            viderChamp(SECTION_SELECT[s]);
        }
        for (t = 0; t< SECTION_TEXTAREA.length; t++) {
            champObligatoire(SECTION_TEXTAREA[t], false);
            viderChamp(SECTION_TEXTAREA[t]);
        }
    }
};

/******************************************
FONCTION ATTRIBUANT UNE VALEUR AUX CHECKBOX
*******************************************/
window.manageCheckbox = function () {
    var formInput = document.getElementsByTagName("input");
    for (i = 0; i< formInput.length; i++) {
        //get checkboxes
        if (formInput[i].type == "checkbox") {
            var checkbox = formInput[i];
            //gives the value 0 or 1 based on the 'checked' attribute
            if (checkbox.checked === true) {
                checkbox.value = "O";
            } else {
                checkbox.value = "N";
            }
        }
    }
};

window.mandatoryList = function () {
    if(document.getElementById("champsobligatoiresproprietes")){
        var BM_VALUES = document.getElementById("champsobligatoiresproprietes").value;
        var BM_CLIENT = document.getElementById("champsobligatoiresclient").value;
        if (localStorage.getItem("mandatoryListFields") !== null && localStorage.getItem("mandatoryListFields") !== "") {
            localStorage.setItem("mandatoryListFields", BM_VALUES + BM_CLIENT);
        }
    }
    
};

/*************************************************
ALGORITHME GERANT L'AFFICHAGE DYNAMIQUE DES CHAMPS
**************************************************/
window.manageFields = function (DECLENCHEUR) {
    if (enableManageField === true) {
        /**********************
        0-AFFICHER LE DECLENCHEUR
        ***********************/
        if (DECLENCHEUR == "ouverture") {
            msg(DECLENCHEUR + " du formulaire");
        } else {
            msg("champ d�clencheur : " + DECLENCHEUR);
        }

        var SECTION_ARRAY = [];

        //0.a - launch 'manageCheckbox' function to manage checkboxes
        manageCheckbox();

        /********************
        1-BOUCLE SUR LE TABLEAU
        *********************/
        for (b = 0; b< Tableau.length; b++) {
            //2-nouvelle ligne du tableau
            var PARAMETER = Tableau[b].split("#");

            /************************
            DECLARATION DES VARIABLES
            *************************/
            //d�finir les variables de condition d'affichage du champ
            var CONDITION = undefined;
            var CONDITION_RESPECTEE = undefined;
            var CONDITION_NON_RESPECTEE = undefined;
            var OBLIGATOIRE_RESPECTEE = undefined;
            var OBLIGATOIRE_NON_RESPECTEE = undefined;
            var PARAMETER_FIELD = [];
            var PARAMETER_VALUE = [];
            var PARAMETER2_FIELD = [];
            var PARAMETER2_VALUE = [];
            var MSG_CONSOLE = "";
            var FIELD_STRING = PARAMETER[0];
            var FIELD = "";
            var FIELD_ID = "";
            var FIELD_TYPE = "";
            var FIELD_FILE = "";
            var LABEL_FIELD = "";
            var LABEL_FIELD_ID = "";
            var SPLIT_FIELD_STRING = "";
            var SECTION = "";
            var SECTION_EXIST = "";
            //GET ORIGINAL BACKOFFICE MANDATORY FIELDS
            var bko = document.getElementById("champsobligatoiresproprietes");
            if (bko) {
                bkoMandatoryOrigin = document.getElementById("champsobligatoiresproprietes").value;
                bkoMandatoryClientOrigin = document.getElementById("champsobligatoiresclient").value;
            }

            /***********************************
            3-INFORMATIONS SUR LE CHAMP A AFFICHER
            ************************************/
            //s'il s'agit d'une section
            if (FIELD_STRING.search("section") != -1) {
                FIELD_TYPE = "section";
                FIELD = document.getElementById(FIELD_STRING);
                FIELD_ID = FIELD.id;
                MSG_CONSOLE = FIELD_STRING + " | ";
            } else if (FIELD_STRING.search("iframe") != -1) {
                FIELD_TYPE = "iframe";
                FIELD = document.getElementById(FIELD_STRING);
                FIELD_ID = FIELD.id;
                MSG_CONSOLE = FIELD_STRING + " | ";
            } else {
                //s'il s'agit d'un champ
                //Si le champ est en lecture seule
                if (FIELD_STRING.search("getElementById") != -1) {
                    SPLIT_FIELD_STRING = FIELD_STRING.split("\"");
                    FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
                } else {
                    //Si le champ est en cr�ation
                    SPLIT_FIELD_STRING = FIELD_STRING.split(".");
                    if (SPLIT_FIELD_STRING.length == 3) {
                        FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[2] + "_display");
                        if (FIELD_FILE) {
                            FIELD = FIELD_FILE;
                        } else {
                            FIELD = document.getElementById(SPLIT_FIELD_STRING[2]);
                        }
                    } else if (SPLIT_FIELD_STRING.length == 2) {
                        FIELD_FILE = document.getElementById(SPLIT_FIELD_STRING[1] + "_display");
                        if (FIELD_FILE) {
                            FIELD = FIELD_FILE;
                        } else {
                            FIELD = document.getElementById(SPLIT_FIELD_STRING[1]);
                        }
                    }
                }
                //ID du champ et de son label
                FIELD_ID = FIELD.id;
                if (FIELD_ID.search("INTERVENTIONS") != -1) {
                    LABEL_FIELD_ID = FIELD_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
                } else if (FIELD_ID.search("UTILISATEURS") != -1) {
                    LABEL_FIELD_ID = FIELD_ID.replace("UTILISATEURS", "lblUTILISATEURS");
                }
                if (LABEL_FIELD_ID.search("_display") != -1) {
                    LABEL_FIELD_ID = LABEL_FIELD_ID.replace("_display", "");
                }
                LABEL_FIELD = document.getElementById(LABEL_FIELD_ID);
                if (LABEL_FIELD !== null) {
                    if (LABEL_FIELD.innerText !== undefined) {
                        MSG_CONSOLE += LABEL_FIELD.innerText + " | ";
                    } else if (LABEL_FIELD.innerHTML !== undefined) {
                        MSG_CONSOLE += LABEL_FIELD.innerHTML + " | ";
                    }
                }
                if (FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id.search("section") != -1) {
                    SECTION = FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                } else if (FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id.search("section") != -1) {
                    SECTION = FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                } else if (FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id.search("section") != -1) {
                    SECTION = FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                } else if (FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id.search("section") != -1) {
                    SECTION = FIELD.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                }
            }

            /*******************************
            3b-BOUCLE SUR LE TABLEAU SECTION
            ********************************/
            for (x = 0; x< SECTION_ARRAY.length; x++) {
                if (SECTION_ARRAY[x] == SECTION) {
                    SECTION_EXIST = true;
                }
            }
            if (SECTION_EXIST !== true) {
                SECTION_ARRAY[SECTION_ARRAY.length] = SECTION;
            }

            /**************************
            4-BOUCLE SUR LES CONDITIONS
            ***************************/
            for (c = 1; c< PARAMETER.length; c++) {
                //5-nouvelle condition

                //d�finir les variables de v�rification de condition
                var VALEUR_VERIFIEE = undefined;

                /**************************
                6-TRAITEMENT DES PARAMETRES
                ***************************/
                var PARAMETERS = PARAMETER[c].split("|");
                if (PARAMETERS.length > 1) {

                    /*************************************************
                    6a-SI ON TEST DEUX CHAMPS DANS LA CONDITION
                    **************************************************/
                    var CONDITION1_RESPECTEE = undefined;
                    var CONDITION2_RESPECTEE = undefined;
                    if (PARAMETERS.length >= 4) {
                        MSG_CONSOLE += "on test deux champs / ";
                        /********************************
                        7a-INFORMATIONS SUR LE PREMIER CHAMP
                        *********************************/
                        var PARAMETER1_SPLIT;
                        //r�cup�rer le champ1 en lecture
                        if (PARAMETERS[0].search("getElementById") != -1) {
                            PARAMETER1_SPLIT = PARAMETERS[0].split("\"");
                            PARAMETER_FIELD[c] = document.getElementById(PARAMETER1_SPLIT[1]);
                        } else {
                            //r�cup�rer le champ1 en cr�ation
                            PARAMETER1_SPLIT = PARAMETERS[0].split(".");
                            if (PARAMETER1_SPLIT.length == 3) {
                                PARAMETER_FIELD[c] = document.getElementById(PARAMETER1_SPLIT[2]);
                            } else if (PARAMETER1_SPLIT.length == 2) {
                                PARAMETER_FIELD[c] = document.getElementById(PARAMETER1_SPLIT[1]);
                                //Exceptions for 'ETATS' field
                                if (PARAMETER1_SPLIT[1].search("ETAT") != -1) {
                                    PARAMETER_FIELD[c] = document.getElementById("ETATS");
                                } else if (PARAMETER1_SPLIT[1].search("PROVENANCE") != -1) {
                                    //Exceptions for 'PROVENANCE' field
                                    PARAMETER_FIELD[c] = document.getElementById("PROVENANCES");
                                } else if (PARAMETER1_SPLIT[1].search("ELEMENT") != -1) {
                                    //Exceptions for 'ELEMENT' field
                                    PARAMETER_FIELD[c] = document.getElementById("ELEMENTS");
                                }else if (PARAMETER1_SPLIT[1].search("MOTCLE") != -1) {
                                    //Exceptions for 'MOTCLE' field
                                    PARAMETER_FIELD[c] = document.getElementById("MOTSCLES");
                                }
                            }
                        }
                        //ID et label du champ1
                        var PARAMETER1_ID = PARAMETER_FIELD[c].id;
                        var PARAMETER1_LABEL;
                        if (PARAMETER1_ID.search("INTERVENTIONS") != -1) {
                            PARAMETER1_LABEL = PARAMETER1_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
                        } else if (PARAMETER1_ID.search("UTILISATEURS") != -1) {
                            PARAMETER1_LABEL = PARAMETER1_ID.replace("UTILISATEURS", "lblUTILISATEURS");
                        }
                        //valeur du champ1
                        var PARAMETER1_FIELD_VALUE;
                        if (PARAMETER_FIELD[c].tagName == "SPAN") {
                            PARAMETER1_FIELD_VALUE = PARAMETER_FIELD[c].innerText;
                        } else {
                            PARAMETER1_FIELD_VALUE = PARAMETER_FIELD[c].value;
                        }
                        PARAMETER_VALUE[c] = PARAMETERS[1];

                        /***********************************
                        7b-INFORMATION SUR LE DEUXIEME CHAMP
                        ************************************/
                        var PARAMETER2_SPLIT;
                        //r�cup�rer le champ2 en lecture
                        if (PARAMETERS[2].search("getElementById") != -1) {
                            PARAMETER2_SPLIT = PARAMETERS[2].split("\"");
                            PARAMETER2_FIELD[c] = document.getElementById(PARAMETER2_SPLIT[1]);
                        } else {
                            //r�cup�rer le champ2 en cr�ation
                            PARAMETER2_SPLIT = PARAMETERS[2].split(".");
                            if (PARAMETER2_SPLIT.length == 3) {
                                PARAMETER2_FIELD[c] = document.getElementById(PARAMETER2_SPLIT[2]);
                            } else if (PARAMETER2_SPLIT.length == 2) {
                                PARAMETER2_FIELD[c] = document.getElementById(PARAMETER2_SPLIT[1]);
                                //Exceptions for 'ETATS' field
                                if (PARAMETER2_SPLIT[1].search("ETAT") != -1) {
                                    PARAMETER2_FIELD[c] = document.getElementById("ETATS");
                                } else if (PARAMETER2_SPLIT[1].search("PROVENANCE") != -1) {
                                    //Exceptions for 'PROVENANCE' field
                                    PARAMETER2_FIELD[c] = document.getElementById("PROVENANCES");
                                } else if (PARAMETER2_SPLIT[1].search("ELEMENT") != -1) {
                                    //Exceptions for 'ELEMENT' field
                                    PARAMETER2_FIELD[c] = document.getElementById("ELEMENTS");
                                }else if (PARAMETER2_SPLIT[1].search("MOTCLE") != -1) {
                                    //Exceptions for 'MOTCLE' field
                                    PARAMETER2_FIELD[c] = document.getElementById("MOTSCLES");
                                }
                            }
                        }
                        //ID et label du champ2
                        var PARAMETER2_ID = PARAMETER2_FIELD[c].id;
                        var PARAMETER2_LABEL;
                        if (PARAMETER2_ID.search("INTERVENTIONS") != -1) {
                            PARAMETER2_LABEL = PARAMETER2_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
                        } else if (PARAMETER2_ID.search("UTILISATEURS") != -1) {
                            PARAMETER2_LABEL = PARAMETER2_ID.replace("UTILISATEURS", "lblUTILISATEURS");
                        }
                        //valeur du champ2 pour comparer
                        var PARAMETER2_FIELD_VALUE;
                        if (PARAMETER2_FIELD[c].tagName == "SPAN") {
                            PARAMETER2_FIELD_VALUE = PARAMETER2_FIELD[c].innerText;
                        } else {
                            PARAMETER2_FIELD_VALUE = PARAMETER2_FIELD[c].value;
                        }
                        PARAMETER2_VALUE[c] = PARAMETERS[3];

                        /*************************************
                        8a - ANALYSE DES VALEURS DU PARAMETRE1
                        **************************************/

                        /****************************
                        9a-S'IL Y A PLUSIEURS VALEURS
                        *****************************/
                        if (PARAMETER_VALUE[c].search(";") != -1) {
                            var PARAMETER1_VALUES = PARAMETER_VALUE[c].split(";");
                            for (i = 0; i< PARAMETER1_VALUES.length; i++) {
                                //d�finir ou mettre � 0 les variables de v�rification des valeurs
                                //10a-Si le champ � tester est vide, la condition est remplie
                                if (PARAMETER1_VALUES[i] == "null") {
                                    if (PARAMETER1_FIELD_VALUE == "" || PARAMETER1_FIELD_VALUE == " " || PARAMETER1_FIELD_VALUE == "S�lectionnez..." || PARAMETER1_FIELD_VALUE == "Select...") {
                                        VALEUR_VERIFIEE = true;
                                    }
                                } else {
                                    //10b-Si la valeur du champ � tester est �gale � celle du param�tre, la condition est remplie
                                    if (PARAMETER1_FIELD_VALUE == PARAMETER1_VALUES[i]) {
                                        VALEUR_VERIFIEE = true;
                                    }
                                }
                            }
                        } else {

                            /***************************
                            9b-S'IL Y A UNE SEULE VALEUR
                            ****************************/
                            //d�finir ou mettre � 0 les variables de v�rification des valeurs
                            //10a-Case � cocher
                            if (PARAMETER_VALUE[c] === true || PARAMETER_VALUE[c] === false) {
                                //Si la case est coch�e, la condition est remplie
                                if (PARAMETER1_FIELD_VALUE === PARAMETER_VALUE[c]) {
                                    VALEUR_VERIFIEE = true;
                                }
                            } else {

                                //10b-Champ input
                                if (PARAMETER_VALUE[c] == "null") {
                                    //Si le champ test� est vide, la condition est remplie
                                    if (PARAMETER1_FIELD_VALUE == "" || PARAMETER1_FIELD_VALUE == " " || PARAMETER1_FIELD_VALUE == "S�lectionnez..." || PARAMETER1_FIELD_VALUE == "Select...") {
                                        VALEUR_VERIFIEE = true;
                                    }
                                } else {
                                    //Si la valeur du champ � test� est �gale � celle du param�tre, la condition est remplie
                                    if (PARAMETER1_FIELD_VALUE == PARAMETER_VALUE[c]) {
                                        VALEUR_VERIFIEE = true;
                                    }
                                }
                            }
                        }
                        if (VALEUR_VERIFIEE === true) {
                            CONDITION1_RESPECTEE = true;
                            if (document.getElementById(PARAMETER1_LABEL) === null) {
                                MSG_CONSOLE += "param�tre 1 : " + PARAMETER1_FIELD_VALUE + " (la condition 1 est remplie) / ";
                            } else {
                                MSG_CONSOLE += "param�tre 1 : " + document.getElementById(PARAMETER1_LABEL).innerText + PARAMETER1_FIELD_VALUE + " (la condition 1 est remplie) / ";
                            }
                        } else {
                            if (document.getElementById(PARAMETER1_LABEL) === null) {
                                MSG_CONSOLE += "param�tre 1 : " + PARAMETER1_FIELD_VALUE + " (la condition 1 n'est pas remplie) / ";
                            } else {
                                MSG_CONSOLE += "param�tre 1 : " + document.getElementById(PARAMETER1_LABEL).innerText + PARAMETER1_FIELD_VALUE + " (la condition 1 n'est pas remplie) / ";
                                CONDITION1_RESPECTEE = false;
                            }
                        }

                        //on vide la variable VALEUR_VERIFIEE pour tester le second param�tre
                        VALEUR_VERIFIEE = undefined;

                        /***********************************
                        8b-ANALYSE DES VALEURS DU PARAMETRE2
                        ************************************/

                        /****************************
                        9a-S'IL Y A PLUSIEURS VALEURS
                        *****************************/
                        if (PARAMETER2_VALUE[c].search(";") != -1) {
                            var PARAMETER2_VALUES = PARAMETER2_VALUE[c].split(";");
                            for (j = 0; j< PARAMETER2_VALUES.length; j++) {
                                //d�finir ou mettre � 0 les variables de v�rification des valeurs
                                //10a-Si le champ � tester est vide, la condition est remplie
                                if (PARAMETER2_VALUES[j] == "null") {
                                    if (PARAMETER2_FIELD_VALUE == "" || PARAMETER2_FIELD_VALUE == " " || PARAMETER2_FIELD_VALUE == "S�lectionnez..." || PARAMETER2_FIELD_VALUE == "Select...") {
                                        VALEUR_VERIFIEE = true;
                                    }
                                } else {
                                    //10b-Si la valeur du champ � tester est �gale � celle du param�tre, la condition est remplie
                                    if (PARAMETER2_FIELD_VALUE == PARAMETER2_VALUES[j]) {
                                        VALEUR_VERIFIEE = true;
                                    }
                                }
                            }
                        } else {

                            /***************************
                            9b-S'IL Y A UNE SEULE VALEUR
                            ****************************/
                            //d�finir ou mettre � 0 les variables de v�rification des valeurs
                            //10a-case � cocher
                            if (PARAMETER2_VALUE[c] === true || PARAMETER2_VALUE[c] === false) {
                                //Si la case est coch�e, la condition est remplie
                                if (PARAMETER2_FIELD_VALUE === PARAMETER2_VALUE[c]) {
                                    VALEUR_VERIFIEE = true;
                                }
                            } else {

                                //10b-champ input
                                if (PARAMETER2_VALUE[c] == "null") {
                                    //Si le champ test� est vide, la condition est remplie
                                    if (PARAMETER2_FIELD_VALUE == "" || PARAMETER2_FIELD_VALUE == " " || PARAMETER2_FIELD_VALUE == "S�lectionnez..." || PARAMETER2_FIELD_VALUE == "Select...") {
                                        VALEUR_VERIFIEE = true;
                                    }
                                } else {
                                    //Si la valeur du champ � test� est �gale � celle du param�tre, la condition est remplie
                                    if (PARAMETER2_FIELD_VALUE == PARAMETER2_VALUE[c]) {
                                        VALEUR_VERIFIEE = true;
                                    }
                                }
                            }
                        }
                        if (VALEUR_VERIFIEE === true) {
                            CONDITION2_RESPECTEE = true;
                            if (document.getElementById(PARAMETER2_LABEL) === null) {
                                MSG_CONSOLE += "param�tre 2 : " + PARAMETER2_FIELD_VALUE + " (la condition 2 est remplie) / ";
                            } else {
                                MSG_CONSOLE += "param�tre 2 : " + document.getElementById(PARAMETER2_LABEL).innerText + PARAMETER2_FIELD_VALUE + " (la condition 2 est remplie) / ";
                            }
                        } else {
                            if (document.getElementById(PARAMETER2_LABEL) === null) {
                                MSG_CONSOLE += "param�tre 2 : " + PARAMETER2_FIELD_VALUE + " (la condition 2 n'est pas remplie) / ";
                            } else {
                                MSG_CONSOLE += "param�tre 2 : " + document.getElementById(PARAMETER2_LABEL).innerText + PARAMETER2_FIELD_VALUE + " (la condition 2 n'est pas remplie) / ";
                            }
                            CONDITION2_RESPECTEE = false;
                        }
                        if (CONDITION1_RESPECTEE === true || CONDITION2_RESPECTEE === true) {
                            //Condition respect�e
                            CONDITION_RESPECTEE = true;
                            OBLIGATOIRE_NON_RESPECTEE = false;
                            MSG_CONSOLE += " (au moins l'une des deux conditions est remplie) | ";
                        } else if (CONDITION1_RESPECTEE === false && CONDITION2_RESPECTEE === false) {
                            CONDITION_NON_RESPECTEE = true;
                            MSG_CONSOLE += " (aucune des 2 conditions n'est remplie) | ";
                        }
                    } else {
                        /*****************************************
                        6b-ON TEST UN SEUL CHAMP DANS LA CONDITION
                        ******************************************/
                        MSG_CONSOLE += "on test un seul champ / ";
                        /*********************************
                        7-INFORMATIONS SUR LE CHAMP A TESTER
                        **********************************/
                        var PARAMETER_SPLIT;
                        //Si le champ est en lecture seule
                        if (PARAMETERS[0].search("getElementById") != -1) {
                            PARAMETER_SPLIT = PARAMETERS[0].split("\"");
                            PARAMETER_FIELD[c] = document.getElementById(PARAMETER_SPLIT[1]);
                        } else {
                            //Si le champ est en cr�ation
                            PARAMETER_SPLIT = PARAMETERS[0].split(".");
                            if (PARAMETER_SPLIT.length == 3) {
                                PARAMETER_FIELD[c] = document.getElementById(PARAMETER_SPLIT[2]);
                            } else if (PARAMETER_SPLIT.length == 2) {
                                PARAMETER_FIELD[c] = document.getElementById(PARAMETER_SPLIT[1]);
                                //Exceptions for 'ETATS' field
                                if (PARAMETER_SPLIT[1].search("ETAT") != -1) {
                                    PARAMETER_FIELD[c] = document.getElementById("ETATS");
                                } else if (PARAMETER_SPLIT[1].search("PROVENANCE") != -1) {
                                    //Exceptions for 'PROVENANCE' field
                                    PARAMETER_FIELD[c] = document.getElementById("PROVENANCES");
                                } else if (PARAMETER_SPLIT[1].search("ELEMENT") != -1) {
                                    //Exceptions for 'ELEMENT' field
                                    PARAMETER_FIELD[c] = document.getElementById("ELEMENTS");
                                }else if (PARAMETER_SPLIT[1].search("MOTCLE") != -1) {
                                    //Exceptions for 'MOTCLE' field
                                    PARAMETER_FIELD[c] = document.getElementById("MOTSCLES");
                                }
                            }
                        }
                        //ID du champ et de son label
                        var PARAMETER_ID = PARAMETER_FIELD[c].id;
                        var PARAMETER_LABEL;
                        if (PARAMETER_ID.search("INTERVENTIONS") != -1) {
                            PARAMETER_LABEL = PARAMETER_ID.replace("INTERVENTIONS", "lblINTERVENTIONS");
                        } else if (PARAMETER_ID.search("UTILISATEURS") != -1) {
                            PARAMETER_LABEL = PARAMETER_ID.replace("UTILISATEURS", "lblUTILISATEURS");
                        } else if (PARAMETER_ID == "ETATS") {
                            PARAMETER_LABEL = "lblINTERVENTIONS_EN_COURS$ETAT";
                        } else if (PARAMETER_ID == "PROVENANCES") {
                            PARAMETER_LABEL = "lblINTERVENTIONS_EN_COURS$PROVENANCE";
                        } else if (PARAMETER_ID == "ELEMENTS") {
                            PARAMETER_LABEL = "lblINTERVENTIONS_EN_COURS$ELEMENT";
                        } else if (PARAMETER_ID == "MOTSCLES") {
                            PARAMETER_LABEL = "lblINTERVENTIONS_EN_COURS$MOTCLE";
                        }
                        //Valeur du champ � tester
                        var PARAMETER_FIELD_VALUE;
                        if (PARAMETER_FIELD[c].tagName == "SPAN") {
                            PARAMETER_FIELD_VALUE = PARAMETER_FIELD[c].innerHTML;
                        } else if (PARAMETER_FIELD[c].tagName == "SELECT") {
                            if (PARAMETER_FIELD[c].options[PARAMETER_FIELD[c].selectedIndex] === undefined) {
                                PARAMETER_FIELD_VALUE = "";
                            } else {
                                PARAMETER_FIELD_VALUE = PARAMETER_FIELD[c].options[PARAMETER_FIELD[c].selectedIndex].text;
                            }
                        } else {
                            PARAMETER_FIELD_VALUE = PARAMETER_FIELD[c].value;
                        }
                        PARAMETER_VALUE[c] = PARAMETERS[1];

                        /*********************
                        8-ANALYSE DES PARAMETRES
                        **********************/
                        if (PARAMETER_VALUE[c].search(";") != -1) {
                            var PARAMETER_VALUES = PARAMETER_VALUE[c].split(";");

                            /********************************************************************************************
                            9a-PARAMETRE CHAMP OBLIGATOIRE. LA VALEUR DU CHAMP DOIT ETRE DIFFERENTE DE CELLE EN PARAMETRE.
                            *********************************************************************************************/
                            if (PARAMETER_VALUE[c].search("obligatoire") != -1 && PARAMETER_VALUE[c].search("diff�rent") != -1) {
                                MSG_CONSOLE += "champ obligatoire / ";
                                for (l = 0; l< PARAMETER_VALUES.length; l++) {
                                    if (PARAMETER_VALUES[l] != "obligatoire" && PARAMETER_VALUES[l] != "diff�rent") {
                                        if (PARAMETER_VALUES[l] == "null") {
                                            //10a-Si le champ test� est vide, le champ � afficher n'est pas obligatoire
                                            if (PARAMETER_FIELD_VALUE == "" || PARAMETER_FIELD_VALUE == " " || PARAMETER_FIELD_VALUE == "S�lectionnez..." || PARAMETER_FIELD_VALUE == "Select...") {
                                                VALEUR_VERIFIEE = false;
                                            }
                                        } else {
                                            //10c-Si le champ test� � une valeur diff�rente du param�tre, le champ � afficher est obligatoire
                                            if (PARAMETER_FIELD_VALUE == PARAMETER_VALUES[l]) {
                                                VALEUR_VERIFIEE = false;
                                            }
                                        }
                                    }
                                }
                                if (VALEUR_VERIFIEE === false) {
                                    OBLIGATOIRE_NON_RESPECTEE = true;
                                    if (document.getElementById(PARAMETER_LABEL) === null) {
                                        MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition champ obligatoire non remplie) | ";
                                    } else {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition champ obligatoire non remplie) | ";
                                    }
                                } else {
                                    OBLIGATOIRE_RESPECTEE = true;
                                    if (document.getElementById(PARAMETER_LABEL) === null) {
                                        MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition champ obligatoire remplie) | ";
                                    } else {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition champ obligatoire remplie) | ";
                                    }
                                }
                            } else {
                                if (PARAMETER_VALUE[c].search("obligatoire") != -1) {

                                    /***************************************
                                    9b-SI LE PARAMETRE DEFINI UN CHAMP OBLIGATOIRE
                                    ****************************************/
                                    MSG_CONSOLE += "champ obligatoire / ";
                                    for (g = 0; g< PARAMETER_VALUES.length; g++) {
                                        if (PARAMETER_VALUES[g] != "obligatoire") {
                                            if (PARAMETER_VALUES[g] == "null") {
                                                //10a-Si le champ test� est vide, le champ � afficher est obligatoire
                                                if (PARAMETER_FIELD_VALUE == "" || PARAMETER_FIELD_VALUE == " " || PARAMETER_FIELD_VALUE == "S�lectionnez..." || PARAMETER_FIELD_VALUE == "Select...") {
                                                    VALEUR_VERIFIEE = true;
                                                }
                                            } else {
                                                //10b-Si la valeur du param�tre est �gal � la valeur du champ test�, le champ � afficher est obligatoire
                                                if (PARAMETER_FIELD_VALUE == PARAMETER_VALUES[g]) {
                                                    VALEUR_VERIFIEE = true;
                                                }
                                            }
                                        }
                                    }
                                    if (VALEUR_VERIFIEE === true) {
                                        OBLIGATOIRE_RESPECTEE = true;
                                        if (document.getElementById(PARAMETER_LABEL) === null) {
                                            MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition champ obligatoire remplie) | ";
                                        } else {
                                            MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition champ obligatoire remplie) | ";
                                        }
                                    } else {
                                        OBLIGATOIRE_NON_RESPECTEE = true;
                                        if (document.getElementById(PARAMETER_LABEL) === null) {
                                            MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition champ obligatoire non remplie) | ";
                                        } else {
                                            MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition champ obligatoire non remplie) | ";
                                        }
                                    }
                                } else if (PARAMETER_VALUE[c].search("diff�rent") != -1) {

                                    /**************************
                                    9c-PARAMETRE 'DIFFERENT DE'
                                    ***************************/
                                    for (k = 0; k< PARAMETER_VALUES.length; k++) {
                                        if (PARAMETER_VALUES[k] != "diff�rent") {
                                            if (PARAMETER_VALUES[k] == "null") {
                                                //10a-Si le champ est rempli, la condition est respect�e
                                                if (PARAMETER_FIELD_VALUE == "" || PARAMETER_FIELD_VALUE == " " || PARAMETER_FIELD_VALUE == "S�lectionnez..." || PARAMETER_FIELD_VALUE == "Select...") {
                                                    VALEUR_VERIFIEE = false;
                                                }
                                            } else {
                                                //10b-Si la valeur du champ est diff�rent de la valeur pass�e en param�tre, la condition est respect�e
                                                if (PARAMETER_FIELD_VALUE == PARAMETER_VALUES[k]) {
                                                    VALEUR_VERIFIEE = false;
                                                }
                                            }
                                        }
                                    }
                                    if (VALEUR_VERIFIEE === false) {
                                        CONDITION_NON_RESPECTEE = true;
                                        if (document.getElementById(PARAMETER_LABEL) === null) {
                                            MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                        } else {
                                            MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                        }
                                    } else {
                                        CONDITION_RESPECTEE = true;
                                        OBLIGATOIRE_NON_RESPECTEE = false;
                                        if (document.getElementById(PARAMETER_LABEL) === null) {
                                            MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                        } else {
                                            MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                        }
                                    }
                                } else {

                                    /****************************
                                    9d-S'IL Y A PLUSIEURS VALEURS
                                    *****************************/
                                    for (f = 0; f< PARAMETER_VALUES.length; f++) {
                                        //10a-Si la valeur du champ test� correspond � l'une des valeurs en param�tre, la condition est respect�e
                                        if (PARAMETER_VALUES[f] == "null") {
                                            if (PARAMETER_FIELD_VALUE == "" || PARAMETER_FIELD_VALUE == " " || PARAMETER_FIELD_VALUE == "S�lectionnez..." || PARAMETER_FIELD_VALUE == "Select...") {
                                                VALEUR_VERIFIEE = true;
                                            }
                                        } else {
                                            if (PARAMETER_FIELD_VALUE == PARAMETER_VALUES[f]) {
                                                VALEUR_VERIFIEE = true;
                                            }
                                        }
                                    }
                                    if (VALEUR_VERIFIEE === true) {
                                        CONDITION_RESPECTEE = true;
                                        OBLIGATOIRE_NON_RESPECTEE = false;
                                        if (document.getElementById(PARAMETER_LABEL) !== null) {
                                            if (document.getElementById(PARAMETER_LABEL).innerText !== undefined) {
                                                MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                            } else if (document.getElementById(PARAMETER_LABEL).innerHTML !== undefined) {
                                                MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerHTML + PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                            }
                                        }
                                    } else {
                                        CONDITION_NON_RESPECTEE = true;
                                        if (document.getElementById(PARAMETER_LABEL) !== null) {
                                            if (document.getElementById(PARAMETER_LABEL).innerText !== undefined) {
                                                MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                            } else if (document.getElementById(PARAMETER_LABEL).innerHTML !== undefined) {
                                                MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerHTML + PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                            }
                                        }
                                    }
                                }
                            }
                        } else {

                            /******************
                            9e-UNE SEULE VALEUR
                            *******************/
                            //10a-case � cocher
                            if (PARAMETER_VALUE[c] === true || PARAMETER_VALUE[c] === false) {
                                if (PARAMETER_FIELD_VALUE === PARAMETER_VALUE[c]) {
                                    VALEUR_VERIFIEE = true;
                                    MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition remplie)";
                                }
                            } else {
                                //10b-champ input
                                if (PARAMETER_VALUE[c] == "null") {
                                    //Si le champ test� est vide, la condition est respect�e
                                    if (PARAMETER_FIELD_VALUE == "" || PARAMETER_FIELD_VALUE == " " || PARAMETER_FIELD_VALUE == "S�lectionnez..." || PARAMETER_FIELD_VALUE == "Select...") {
                                        VALEUR_VERIFIEE = true;
                                        MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition remplie)";
                                    }
                                } else {
                                    //Si la valeur du champ test� est �gale � celle du param�tre, la condition est respect�e
                                    if (PARAMETER_FIELD_VALUE == PARAMETER_VALUE[c]) {
                                        VALEUR_VERIFIEE = true;
                                        MSG_CONSOLE += PARAMETER_FIELD_VALUE + " (condition remplie)";
                                    }
                                }
                            }
                            if (VALEUR_VERIFIEE === true) {
                                CONDITION_RESPECTEE = true;
                                OBLIGATOIRE_NON_RESPECTEE = false;
                                if (document.getElementById(PARAMETER_LABEL) !== null) {
                                    if (document.getElementById(PARAMETER_LABEL).innerText !== undefined) {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                    } else if (document.getElementById(PARAMETER_LABEL).innerHTML !== undefined) {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerHTML + PARAMETER_FIELD_VALUE + " (condition remplie) | ";
                                    }
                                }
                            } else {
                                CONDITION_NON_RESPECTEE = true;
                                if (document.getElementById(PARAMETER_LABEL) !== null) {
                                    if (document.getElementById(PARAMETER_LABEL).innerText !== undefined) {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerText + PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                    } else if (document.getElementById(PARAMETER_LABEL).innerHTML !== undefined) {
                                        MSG_CONSOLE += document.getElementById(PARAMETER_LABEL).innerHTML + PARAMETER_FIELD_VALUE + " (condition non remplie) | ";
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //5 - fin d'analyse des param�tres. Affichage du champ.
            if (CONDITION_NON_RESPECTEE === true) {
                MSG_CONSOLE += "une condition n'est pas respect�e, ";
                CONDITION = false;
            } else {
                if (CONDITION_RESPECTEE === true) {
                    MSG_CONSOLE += "toutes les conditions sont respect�es, ";
                    CONDITION = true;
                }
            }
            if (CONDITION === false) {
                if (FIELD_TYPE == "section") {
                    MSG_CONSOLE += "section masqu�e";
                    msg(MSG_CONSOLE);
                    //FIELD.style.display = "none";
                    affichageSection(FIELD, false);
                } else if (FIELD_TYPE == "iframe") {
                    MSG_CONSOLE += "iframe masqu�e";
                    msg(MSG_CONSOLE);
                    //FIELD.style.display = "none";
                    affichageSection(FIELD, false);
                } else {
                    MSG_CONSOLE += "champ masqu�";
                    msg(MSG_CONSOLE);
                    affichageChamp(FIELD, false);
                    champObligatoire(FIELD, false);
                    viderChamp(FIELD);
                }
            } else if (CONDITION === true) {
                if (FIELD_TYPE == "section") {
                    MSG_CONSOLE += "section affich�e";
                    msg(MSG_CONSOLE);
                    //FIELD.style.display = "";
                    affichageSection(FIELD, true);
                } else if (FIELD_TYPE == "iframe") {
                    MSG_CONSOLE += "iframe affich�e";
                    msg(MSG_CONSOLE);
                    //FIELD.style.display = "";
                    affichageSection(FIELD, true);
                } else {
                    MSG_CONSOLE += "champ affich�";
                    msg(MSG_CONSOLE);
                    affichageChamp(FIELD, true);
                    if (OBLIGATOIRE_RESPECTEE === undefined && OBLIGATOIRE_NON_RESPECTEE === undefined) {
                        //do nothing
                    } else {
                        if (OBLIGATOIRE_NON_RESPECTEE !== true) {
                            champObligatoire(FIELD, true);
                        } else {
                            champObligatoire(FIELD, false);
                        }
                    }
                }
            } else {
                if (OBLIGATOIRE_NON_RESPECTEE === true) {
                    champObligatoire(FIELD, false);
                    msg(MSG_CONSOLE);
                } else if (OBLIGATOIRE_RESPECTEE === true) {
                    champObligatoire(FIELD, true);
                    msg(MSG_CONSOLE);
                } else {
                    MSG_CONSOLE += " erreur";
                    msg(MSG_CONSOLE);
                }
            }
        }
        for (y = 0; y< SECTION_ARRAY.length; y++) {
            masquerSection(SECTION_ARRAY[y]);
        }
    }
};

/******************************************************************
PASSER LA VALEUR DU BOUTON RADIO SUR LE SELECT MASQUE CORREPSONDANT
*******************************************************************/
window.getSelectValue = function (RADIO_BUTTON) {
    var SPLIT_RADIO_ID = RADIO_BUTTON.id.split("_radio");
    var SELECT_ID = SPLIT_RADIO_ID[0];
    var RADIO_VALIDATOR_ID = SELECT_ID + "_radio_Validator";
    var RADIO_INDEX = RADIO_BUTTON.index;
    if (RADIO_BUTTON.value == "") {
        champObligatoire(document.getElementById(SELECT_ID), true);
    } else {
        champObligatoire(document.getElementById(SELECT_ID), false);
    }
    document.getElementById(SELECT_ID).selectedIndex = RADIO_BUTTON.index;
    document.getElementById(SELECT_ID).value = RADIO_BUTTON.value;
    if (document.getElementById(SELECT_ID).fireEvent) {
        document.getElementById(SELECT_ID).fireEvent('onchange');
    } else if (document.getElementById(SELECT_ID).dispatchEvent) {
        var oEvent = document.createEvent("HTMLEvents");
        oEvent.initEvent("change", true, true);
        document.getElementById(SELECT_ID).dispatchEvent(oEvent);
    }

};

/**************************
* Summation and result cal
***************************/
window.calOnPopulation = function() {

var employPercentage = formulaire.UTILISATEURS$CHAMPU248.value;
var annualSalaryAtFTE = formulaire.UTILISATEURS$CHAMPU168.value;
var employPourcent = formulaire.INTERVENTIONS_EN_COURS$VALEUR249.value;
var targetVarCompAtFTE = formulaire.UTILISATEURS$CHAMPU170.value;
var empPerc = Number(annualSalaryAtFTE / employPercentage);
var finalAnnualSalary = Number(employPourcent * empPerc);
finalAnnualSalary = finalAnnualSalary.toFixed(2);
var targetVar = Number(targetVarCompAtFTE / employPercentage);
var finalTargetVar =  Number(employPourcent * targetVar);
finalTargetVar = finalTargetVar.toFixed(2);
if(finalAnnualSalary != "0" || finalAnnualSalary != " " || finalAnnualSalary != "NaN" || finalAnnualSalary != "null"  ){
neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR384').setValue(finalAnnualSalary);
	//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR384"));
}
if(finalTargetVar != "0" || finalTargetVar != " " || finalTargetVar != "NaN" || finalTargetVar != "null"  ){
neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR385').setValue(finalTargetVar);
//disableField(neocase.form.field("INTERVENTIONS_EN_COURS$VALEUR385"));
}
//formulaire.INTERVENTIONS_EN_COURS$VALEUR384.value = finalAnnualSalary;
//formulaire.INTERVENTIONS_EN_COURS$VALEUR385.value = finalTargetVar;

};


/**************************************************************************************
APPEL DES FONCTIONS GERANT L'AFFICHAGE DES CHAMPS UNE FOIS QUE LE FORMULAIRE EST CHARGE
***************************************************************************************/
window.onloadForm = function () {
    mandatoryList();
    enableManageField = true;
    manageFields("ouverture");
//calOnPopulation();

};
neocase.form.event.bind('loadcomplete', onloadForm);