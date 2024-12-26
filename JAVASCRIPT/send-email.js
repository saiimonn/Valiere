

document.getElementById('send-message').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields!');
        return;
    }

    const subject = encodeURIComponent('Message from ' + name);
    const body = encodeURIComponent('Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}');

    window.location.href = 'mailto: gementizasgg08@gmail.com?sunject=${subject}&body=${body}';
});