function calcInsurance() {
    personAge = document.getElementById("age").value;
    personHeight = document.getElementById("height").value;
    personWeight = document.getElementById("weight").value;
    personSystolic = document.getElementById("systolic").value;
    personDiastolic = document.getElementById("diastolic").value;  
    alert("Thank you")
    
    personHeight = personHeight.replace(/\D/g,'');
    personWeight = personWeight.replace(/\D/g,'');
    
    //This is the BMI portion
    BMICalced = ((personWeight / (personHeight * personHeight)) * 703)
    if (BMICalced > 18.5 && BMICalced < 24.9) {
        BMI = 0
    } else if (BMICalced > 25 && BMICalced < 29.9) {
        BMI = 30
    } else if (BMICalced > 30) {
        BMI = 75
    } else {
        BMI = 0
        alert("Please Try again your BMI was either negative or 0")
    }

    document.getElementById("bmi_risk").value = BMI

    //this is the blood pressue portion
    if (personSystolic == "less_than_120" && personDiastolic == "less_than_80") {
        bloodpressure = 0 
    } else if (personSystolic == "120_to_130" && personDiastolic == "less_than_80") {
        bloodpressure = 15
    } else if (personSystolic == "130_to_140" && personDiastolic == "80_to_90") {
        bloodpressure = 30
    } else if (personSystolic == "140_to_180" && personDiastolic == "90_to_120") {
        bloodpressure = 75
    } else if (personSystolic == "more_than_180" && personDiastolic == "more_than_120") {
        bloodpressure = 100
    } else {
        alert("Error with blood pressure make sure your bounds are correct")
    }
    document.getElementById("blood_pressure_risk").value = bloodpressure

    //this is the age portion
    if (personAge == "under_30") {
        Age = 0 
    } else if (personAge == "30_to_45") {
        Age = 10
    } else if (personAge == "45_to_60") {
        Age = 20 
    } else if (personAge == "other") {
        Age = 30 
    }
    document.getElementById("age_risk").value = Age

    family = 0
    if (document.getElementById("d_yes").checked) {
        family = family + 10
        
    } 
    if (document.getElementById("c_yes").checked) {
        family = family + 10
    } 
    if (document.getElementById("a_yes").checked) {
        family = family + 10
    } 

    document.getElementById("family_history").value = family 
    if (BMI + bloodpressure + Age + family <= 20) {
        document.getElementById("result").value = "low risk"
    } else if(BMI + bloodpressure + Age + family <= 50) {
        document.getElementById("result").value = "moderate risk"
    } else if(BMI + bloodpressure + Age + family <= 75) {
        document.getElementById("result").value = "high risk"
    } else {
        document.getElementById("result").value = "Uninsurable"
        
    }
    
    
}