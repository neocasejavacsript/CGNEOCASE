initialStartDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR373').getValue();
initialEndDate =  neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR374').getValue();

setTimeout(function(){
    // function definition is on technical field where parameter1 = AbsenceStartDateField ; parameter2 = AbsenceendDateField in validAbsenceStartEndDate(parameter1, parameter2)
   validAbsenceStartEndDate('INTERVENTIONS_EN_COURS$VALEUR373','INTERVENTIONS_EN_COURS$VALEUR374');
}, 800);
