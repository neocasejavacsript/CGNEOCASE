initialStartDate = neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR333').getValue();
initalEndDate =  neocase.form.field('INTERVENTIONS_EN_COURS$VALEUR503').getValue();

setTimeout(function(){
    // function definition is on technical field where parameter1 = AbsenceStartDateField ; parameter2 = AbsenceendDateField in validAbsenceStartEndDate(parameter1, parameter2)
   validAbsenceStartEndDate('INTERVENTIONS_EN_COURS$VALEUR333','INTERVENTIONS_EN_COURS$VALEUR503');
}, 800);
