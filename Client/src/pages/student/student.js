document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("studentEmail").value.trim();
    const password = document.getElementById("password").value.trim();
    const captchaInput = document.getElementById("captchaInput").value.trim();
    const expectedCaptcha = "AB12C"; // You can make this dynamic in future
  
    // CAPTCHA validation
    if (captchaInput !== expectedCaptcha) {
      alert("❌ Invalid CAPTCHA!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
  
      // Save JWT token to localStorage
      localStorage.setItem("token", data.token);
  
      alert("✅ Login successful!");
      window.location.href = "/Client/src/pages/maintenance/maintence.html"; // Check spelling of 'maintence' vs 'maintenance'
  
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  });
  