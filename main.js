let usuarios = [];
if (localStorage.getItem("cadastrados")) {
  usuarios = JSON.parse(localStorage.getItem("cadastrados"));
}

function cadastrar() {
  let guardaNome = document.getElementById("nome").value;
  let guardaSenha = document.getElementById("senha").value;
  let guardaCpf = document.getElementById("cpf").value;
  let guardaEmail = document.getElementById("email").value;
  let guardaDataCri = new Date();
  let guardaDataNasc = document.getElementById("dataNasc").value;

  let usuario = {
    nome: guardaNome,
    senha: guardaSenha,
    cpf: guardaCpf,
    email: guardaEmail,
    dataNasc: guardaDataNasc,
  };
  if (
    guardaNome.length >= 3 &&
    guardaNome.trim().length != 0 &&
    guardaSenha.length >= 3 &&
    guardaSenha.trim().length != 0 &&
    guardaCpf.length == 11
  ) {
    usuarios.push(usuario);
    localStorage.setItem("cadastrados", JSON.stringify(usuarios));
    alert("Cadastro realizado!");
    location.reload();
    location.href = "login.html";
  }
  if (guardaNome.length < 3 || guardaNome.trim().length == 0) {
    document.getElementById("alerta-nome").innerHTML = "Mínimo de 3 caracteres";
    setTimeout(() => {
      document.getElementById("alerta-nome").innerHTML = "";
    }, 3000);
  }
  if (guardaSenha.length < 3 || guardaSenha.trim().length == 0) {
    document.getElementById("alerta-senha").innerHTML =
      "Mínimo de 3 caracteres";
    setTimeout(() => {
      document.getElementById("alerta-senha").innerHTML = "";
    }, 3000);
  }
  if (guardaCpf.length != 11 || guardaSenha.trim().length == 0) {
    document.getElementById("alerta-cpf").innerHTML =
      "tem que conter exatamente 11 algarismos";
    setTimeout(() => {
      document.getElementById("alerta-cpf").innerHTML = "";
    }, 3000);
  }
  if (guardaEmail.length < 3 || guardaSenha.trim().length == 0) {
    document.getElementById("alerta-email").innerHTML =
      "insira um email valido";
    setTimeout(() => {
      document.getElementById("alerta-email").innerHTML = "";
    }, 3000);
  }
  if (guardaDataCri.length == 0) {
    document.getElementById("alerta-dataCri").innerHTML =
      "insira um email valido";
    setTimeout(() => {
      document.getElementById("alerta-dataCri").innerHTML = "";
    }, 3000);
  }
  if (guardaDataNasc == 0) {
    document.getElementById("alerta-dataNasc").innerHTML =
      "insira um email valido";
    setTimeout(() => {
      document.getElementById("alerta-dataNasc").innerHTML = "";
    }, 3000);
  }
}

let nome = document.getElementById("nome");
let senha = document.getElementById("senha");

addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.getElementById("cadastrar").click();
  }
});

function logar() {
  let nomeLogin = document.getElementById("nomeLogin").value;
  let senhaLogin = document.getElementById("senhaLogin").value;

  let usuarioExistente = false;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === nomeLogin && usuarios[i].senha === senhaLogin) {
      usuarioExistente = true;
      localStorage.setItem("usuarioAtual", JSON.stringify(usuarios[i]));
      location.href = "pagUsuario.html";
      break;
    }
  }
  if (!usuarioExistente) {
    alert(
      "Usuário não encontrado. Verifique as informações inseridas e tente novamente."
    );
  }
}
addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.getElementById("logar").click();
  }
});
