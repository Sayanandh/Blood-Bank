document.getElementById('donor-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('blood-type').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
  
    const donorData = { name, bloodType, dob, contact };
  
    fetch('http://localhost:5000/api/donors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(donorData)
    })
      .then(response => response.json())
      .then(data => {
        alert('Donor registered successfully');
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  