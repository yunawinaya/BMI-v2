function calculateBMI() {

  const firstNameInput = document.getElementById("firstName");
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const result = document.getElementById("result");

  const firstName = firstNameInput.value;
  const height = heightInput.value;
  const weight = weightInput.value;
  
  
  const bmi = weight / height ** 2;
  console.log(firstName);
  console.log(weight);
  console.log(height);

  result.innerHTML = `${firstName}, your BMI is ${bmi.toFixed(2)}!`
  
}