	//Calculate Monthly Salary - Starts
	var annualBaseSal = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR278");
	var payPeriods = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR279");
	var monthlySal = neocase.form.field("INTERVENTIONS_EN_COURS_VALEUR430");
	calculate_monthlySalary(annualBaseSal,payPeriods,monthlySal);
	//Calculate Monthly Salary - Ends
