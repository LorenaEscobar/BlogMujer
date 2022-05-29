AOS.init();


const formulario = document.getElementById('formulario')
const button = document.getElementById('enviar')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const asunto = document.getElementById('asunto')

const formIsValid = {
    nombre: false,
    email: false,
    asunto: false,
}

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

nombre.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.nombre = true
    if(nombre.value.length < 4){
        alert("El nombre no es válido")
    }
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
    if(!regexEmail.test(email.value)){
        alert("email no valido")
    }
})

asunto.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.asunto = true
    if(asunto.value.length < 3){
        alert("El título del asunto es muy corto")
    }
})


const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) formulario.submit(location.href="muestra.html")
    else alert('Formulario invalido')
} 
/*const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const formulario = document.getElementById("formulario");


form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    if(asunto.value.length <4){
        warnings += `El asunto no es valido <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
})*/