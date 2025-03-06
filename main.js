function bmi(weight, height) {
  let bmiHolder = weight / (height*height);
  
  if (bmiHolder <= 18.5) {
    return "Underweight";
  } else if ( bmiHolder <= 25.0) {
    return "Normal";
  } else if (bmiHolder <= 30.0) {
    return "Overweight";
  } else if (bmiHolder > 30) {
    return "Obese"
  }
}