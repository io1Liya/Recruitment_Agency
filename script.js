document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const resume = document.getElementById('resume').value;
    const coverLetter = document.getElementById('cover-letter').value;

    // Here you could send the data to a server using fetch/AJAX
    // For demonstration, we'll just display a success message
    const responseMessage = document.getElementById('response-message');
    responseMessage.classList.remove('hidden');
    responseMessage.textContent = `Thank you, ${name}! Your application for the position of ${position} has been submitted.`;

    // Optionally clear the form
    document.getElementById('application-form').reset();
});