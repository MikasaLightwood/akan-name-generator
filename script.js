//Wait for the form to be submitted
document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page from refreshing

  //Get input values from the form
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);
  let gender = document.querySelector('input[name="gender"]:checked');

  console.log("Day entered:", day);
  console.log("Month entered:", month);
  console.log("Year entered:", year);
  console.log("Gender selected:", gender ? gender.value : "None");

  //Validate inputs
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

  //Calculate the day of the week
  // JavaScript's Date object: months start at 0 (Jan = 0, Dec = 11)
  let date = new Date(year, month - 1, day);
  let dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ... Saturday = 6

  console.log("Calculated day of week (0=Sun...6=Sat):", dayOfWeek);

  // Akan names for each day
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //Choose Akan name based on gender
  let akanName = (gender.value === "male") 
    ? maleNames[dayOfWeek] 
    : femaleNames[dayOfWeek];

  console.log("Akan Name generated:", akanName);

  //Display result on page
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = `You were born on a ${daysOfWeek[dayOfWeek]}. Your Akan name is ${akanName}.`;

  // Clear form after showing result
  document.getElementById("akanForm").reset();
});

// Function for Clear button (to also remove result)
function clearResult() {
  document.getElementById("akanForm").reset();
  document.getElementById("result").textContent = "";
}
