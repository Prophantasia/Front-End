document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Login bem-sucedido. Ok!");
        } else {
            alert("Usuário ou senha incorretos.");
        }
    })
    .catch(error => {
        console.error('Erro ao fazer login:', error);
        alert("Erro ao tentar logar. Tente novamente mais tarde.");
    });
});
