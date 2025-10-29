
let form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event) {

let pass1=document.getElementById("password1"); 
let pass2=document.getElementById("password2");
let checkTerminos=document.getElementById("terminos").checked; //devuelve true si está marcado
opcionTerminos=document.getElementById("opcionterminos");
   

//Coincidencia de contraseñas
    pass2.setCustomValidity(''); // limpiar mensaje previo      
    if (pass1.value.trim()!== pass2.value.trim()) {           //valor sin espacios ni al inicio ni al final
    pass2.setCustomValidity('Las contraseñas no coinciden');
  }


//Validación de términos
  if (!checkTerminos){
    event.preventDefault();     //previene el envío del formulario si no es válido
    event.stopPropagation();
    opcionTerminos.classList.add("is-invalid"); //muestra mensaje de error debajo de la opción para ver las condiciones
    terminos.classList.add("is-invalid");
const feedback = terminos.parentElement.querySelector(".invalid-feedback");

if (!terminos.checked) {  // si no está marcado el checkbox
    terminos.classList.add("is-invalid");       // agrega la clase de error
    if (feedback) feedback.style.display = "block"; // muestra el mensaje
} else {  // si está marcado
    terminos.classList.remove("is-invalid");    // quita la clase de error
    if (feedback) feedback.style.display = "none";  // oculta el mensaje
};

  form.classList.add('was-validated'); // activa feedback de Bootstrap
}});
