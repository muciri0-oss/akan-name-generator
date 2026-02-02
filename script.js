document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dateInput = document.getElementById("date").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');
  const result = document.getElementById("result");

  if (!dateInput || !genderInput) {
    alert("Please enter your birth date and select your gender.");
    return;
  }

  const date = new Date(dateInput);

  if (isNaN(date.getTime())) {
    alert("Please enter a valid date.");
    return;
  }

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];

  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  const dayOfWeek = date.getDay();
  let akanName;

  if (genderInput.value === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  result.textContent = "Your Akan name is: " + akanName;

  // clear form (polish)
  document.getElementById("akanForm").reset();
});
