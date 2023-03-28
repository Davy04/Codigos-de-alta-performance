

function logar () {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'admin' && senha == '123') {
        alert("senha correta")
        location.href = "#"
    } else{
        alert("muito burro")
    }
}