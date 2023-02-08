
const trocacad = document.querySelector('.hide')
const trocalog = document.querySelector('.form')
const abalog = document.querySelector('#btn1')
const abacad = document.querySelector('#btn2')
var formemail = document.querySelector('#emailCad');
var formpassword = document.querySelector('#passwordCad');
var formpasswordChecked = document.querySelector('#passwordChecked');

const telaLogin = () => {
    trocacad.style.display = 'none'
    trocalog.style.display = 'block';
    abacad.classList.remove('ativa')
    abalog.classList.add('ativa')
}

const telaCadastro = () => {
    trocacad.style.display = 'block';
    trocalog.style.display = 'none'
    abalog.classList.remove('ativa')
    abacad.classList.add('ativa')
}

const cadastroFinalizado = () => {
    let chec = false
    cadastro = JSON.parse(localStorage.getItem('dadosFormul'))
    for (i = 0; i < cadastro.length; i++) {
        if (formemail.value == cadastro[i].email) {
             alert("Cadastro invalido usuario ja cadastrado")
             chec = true
             return
        }
    }
    if(chec == false && formpassword.value == formpasswordChecked.value){
        cadastroCriado()
        return
    }else{
        alert('senhas invalidas')
        return
    }
}

const cadastroCriado = () => {
    var dados = JSON.parse(localStorage.getItem('dadosFormul'))
    if (dados == null) {
        localStorage.setItem('dadosFormul', '[]');
        dados = [];
    }
    var Formul = {
        email: formemail.value,
        password: formpassword.value,
        passwordcheck: formpasswordChecked.value
    }
    dados.push(Formul);
    localStorage.setItem('dadosFormul', JSON.stringify(dados))
}

const login = (event) => {
    event.preventDefault()
    emailLogin = document.querySelector('.logemail')
    passLogin = document.querySelector('.logpass')
    cadastro = JSON.parse(localStorage.getItem('dadosFormul'))

    for (i = 0; i < cadastro.length; i++) {
        const { email, password } = cadastro[i]
        if (emailLogin.value == email && passLogin.value == password) {
            alert('parabens')
            return
        }
        else {
            alert('nao existe cadastro')
            return
        }
    }
}

const senhaForte = () =>{

    for(i=0;i<25;i++){
        
    }    
}

document.querySelector('#btn1').onclick = telaLogin
document.querySelector('#btn2').onclick = telaCadastro
document.querySelector('.pronto').onclick = cadastroFinalizado
document.querySelector('.entrar').onclick = login