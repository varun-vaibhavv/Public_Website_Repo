const responseMessage = document.getElementById('response-message');
document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = { name, email, message };

    try {
        const response = await fetch('http://localhost:5500/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const result = await response.json();
            document.getElementById('response-message').innerText = result.message;
            responseMessage.style.color = 'green';
        } else {
            const error = await response.json();
            document.getElementById('response-message').innerText = error.message;
            responseMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Error submitting the contact form:', error);
        document.getElementById('response-message').innerText = 'An error occurred while submitting the form.';
        responseMessage.style.color = 'red';
    }
});
