// Step 1: Wait for the form to be submitted
document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page from refreshing

  // Step 2: Get input values from the form
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.querySelector('input[name="gender"]:checked');

  // Step 3: Validate inputs
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert("Please enter a valid day, month, and year.");
    return;
  }
  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Step 4: Calculate the day of the week
  let date = new Date(year, month - 1, day); // JS months are 0-11
  let dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let akanName = (gender.value === "male") 
    ? maleNames[dayOfWeek] 
    : femaleNames[dayOfWeek];

  // Step 5: Display result
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = `You were born on a ${daysOfWeek[dayOfWeek]}. Your Akan name is ${akanName}.`;

  // Step 6: Clear form after showing result
  document.getElementById("akanForm").reset();
});
