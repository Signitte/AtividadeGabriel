const regExNome = /^[A-Za-z\s]{3,100}$/
const regExEmail = /^[a-zA-Z0-9.!#$%&*+-/=?^_{|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)*$/;
const regExTelefone = /\(?:[1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/

document.addEventListener("DOMContentLoaded",function(){
    let botao = document.getElementById("button");
    botao.addEventListener("click",function(){
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let telefone = document.getElementById("telefone").value;
        validacaoNome = regExNome.test(nome);
        validacaoEmail = regExEmail.test(email);
        validacaoTelefone = regExTelefone.test(telefone);
        console.log(nome);
        console.log(validacaoNome);
        console.log(email);
        console.log(validacaoEmail);
        console.log(telefone);
        console.log(validacaoTelefone);
    })
})
