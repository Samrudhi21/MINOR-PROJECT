document.getElementById('membership-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting in the traditional way (page reload)
    event.preventDefault();

    // Optionally, you can collect form data here, for example:
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const timing = document.getElementById('timing').value;

    // For demonstration, just log the values to the console (you can handle it differently)
    console.log(`Name: ${name}, Age: ${age}, Phone: ${phone}, Preferred Timing: ${timing}`);

    // Show the success message
    document.getElementById('success-message').style.display = 'block';

    // Optionally, hide the form after successful submission
    document.getElementById('membership-form').style.display = 'none';
});
