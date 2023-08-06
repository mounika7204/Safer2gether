// Function to display a pop-up message
function showAlert(message) {
    alert(message);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      const formData = new FormData(signupForm);
      const name = formData.get('name');
      const password = formData.get('password');
  
      // Make a POST request to the backend API for user registration
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })
      .then(response => response.json())
      .then(data => {
        showAlert(data.message); // Show the response message from the server
        signupForm.reset(); // Reset the form after successful registration
      })
      .catch(error => console.error('Error during signup:', error));
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      const formData = new FormData(loginForm);
      const name = formData.get('name');
      const password = formData.get('password');
  
      // Make a POST request to the backend API for user login
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Output the response from the server to the browser console
        if (data.token) {
          // Show a pop-up message to indicate successful login
          showAlert('Login successful!'); // You can customize this message as needed.
  
          // Store the token in local storage or a cookie for future authenticated requests
          // For simplicity, we'll just display it here.
          console.log('Token:', data.token);
          loginForm.reset(); // Reset the form after successful login
        } else {
          // Show a pop-up message for any other response message from the server
          showAlert(data.message); // You can customize this message as needed.
        }
      })
      .catch(error => console.error('Error during login:', error));
    });
  });
  