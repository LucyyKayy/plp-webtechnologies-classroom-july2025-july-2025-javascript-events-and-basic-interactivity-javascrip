// 🎉 Part 1: Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("message").innerText = "You clicked the button!";
});

// 🎮 Part 2: Interactive Features
// Light/Dark mode toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").innerText = count;
});

// FAQ collapsible
const faqQuestion = document.querySelector(".faq-question");
faqQuestion.addEventListener("click", () => {
  const answer = faqQuestion.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
});

// 📋✅ Part 3: Form Validation
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").innerText = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").innerText = "";
  }

  // Email validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Please enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").innerText = "";
  }

  // Password validation (min 6 chars)
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  // If valid
  if (valid) {
    document.getElementById("formMessage").innerText = "✅ Registration successful!";
    this.reset();
  }
});
