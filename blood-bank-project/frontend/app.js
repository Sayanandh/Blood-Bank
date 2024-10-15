// Hospital Login Form Handling
document.getElementById('hospital-login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const hospitalID = document.getElementById('hospital-id').value;
    const password = document.getElementById('password').value;
    
    // Simulate an API request to validate login credentials
    if (hospitalID === 'hospital123' && password === 'password123') {
      alert('Login successful!');
      // Redirect to blood resource page
      window.location.href = 'blood_resources.html';
    } else {
      document.getElementById('login-error-message').innerText = 'Invalid Hospital ID or Password';
      document.getElementById('login-error-message').style.display = 'block';
    }
  });
  