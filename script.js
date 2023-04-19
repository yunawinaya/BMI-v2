function calculateBMI() {
  
  firstName = prompt("What is your first name?")
  weight = prompt("What is your weight? (kg)")
  height = prompt("What is your height? (metres)")
  bmi = weight / height ** 2
  console.log(firstName)
  console.log(weight)
  console.log(height)
  alert(firstName + ", your BMI is " + bmi + "!")
  
}