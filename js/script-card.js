document.getElementById('card-button').addEventListener('click', function() {
    alert('Button clicked!');
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso!');
});