// Background toggle
document.getElementById("toggle-btn").addEventListener("click", () => {
    document.body.classList.toggle("alt-bg");
  });
  
  // Tab switching
  function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Image slideshow
  const images = ["images/photo1.jpg", "images/photo2.jpg"];
  let current = 0;
  function nextImage() {
    current = (current + 1) % images.length;
    document.getElementById("gallery-img").src = images[current];
  }
  
  // Keypress detection
  document.addEventListener("keydown", e => {
    document.getElementById("keypress-output").textContent = `You pressed: ${e.key}`;
  });
  
  // Secret double-click
  document.getElementById("main-title").addEventListener("dblclick", () => {
    document.getElementById("secret-msg").style.display = "block";
  });
  
  // Real-time password feedback
  document.getElementById("password").addEventListener("input", e => {
    const feedback = document.getElementById("feedback");
    feedback.textContent = e.target.value.length >= 8 ? "✅ Strong password" : "❌ Too short";
  });
  
  // Form validation
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted!");
  });
  