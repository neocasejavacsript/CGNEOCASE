initialStartDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR568').getValue();
initialEndDate =  neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR334').getValue();

setTimeout(function(){
    // function definition is on technical field where parameter1 = AbsenceStartDateField ; parameter2 = AbsenceendDateField in validAbsenceStartEndDate(parameter1, parameter2)
   validAbsenceStartEndDate('INTERVENTIONS_EN_COURS$VALEUR568','INTERVENTIONS_EN_COURS$VALEUR334');
}, 800);
