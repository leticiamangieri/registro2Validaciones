let form = document.querySelector('.needs-validation');
let terminos = document.getElementById("terminos");
let opcionTerminos = document.getElementById("opcionterminos");
let pass1 = document.getElementById("password1"); 
let pass2 = document.getElementById("password2");

function validarPasswords() {
  pass2.setCustomValidity(''); // limpiar mensaje previo      
    if (pass1.value.trim()!== pass2.value.trim()) {           //valor sin espacios ni al inicio ni al final
    pass2.setCustomValidity('Las contraseñas no coinciden');
  }else if (pass1.value.length < 6) {
   pass2.setCustomValidity(`La contraseña debe tener más de 6 caracteres`);
  } else {
    pass2.setCustomValidity('');
  };


  if (form.classList.contains('was-validated')) { //si ya fue validado antes
    pass2.classList.toggle('is-invalid', !pass2.checkValidity());  //se fija si se cumplen las validaciones como required y minleght
    pass2.classList.toggle('is-valid', pass2.checkValidity());
  }
};

  pass1.addEventListener('input', validarPasswords);  // validación mientras se escribe
  pass2.addEventListener('input', validarPasswords);
    
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    validarPasswords();
    let feedback = terminos.parentElement.querySelector(".invalid-feedback");  //guarda el div que tiene el mensaje de error que se muestra cuando no se aceptaron los terminos

    //Validación de términos
    if (!terminos.checked){
        event.preventDefault();     //previene el envío del formulario si no es válido
        event.stopPropagation();
        opcionTerminos.classList.add("is-invalid"); //cambia a color rojo el link a los terminos
        terminos.classList.add("is-invalid");      //
        if (feedback) feedback.style.display = "block"; //muestra mensaje de error debajo de la opción para ver las condiciones 
    }else {
    terminos.classList.remove("is-invalid");
    opcionTerminos.classList.remove("is-invalid");
    if (feedback) feedback.style.display = "none";
  }

  // realiza la validación del form
  if (!form.checkValidity() || !terminos.checked) {
    form.classList.add('was-validated'); // mostrar errores
    return;
  }

  form.reset(); //limpia el form si no hay errores
  form.classList.remove('was-validated');// quita estilos de validación
  form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
    el.classList.remove('is-valid', 'is-invalid');
  });



   
});
   


  




terminos.addEventListener("change", () => {
  if (terminos.checked) {
    terminos.classList.remove("is-invalid");
    opcionTerminos.classList.remove("is-invalid");
    let feedback = terminos.parentElement.querySelector(".invalid-feedback");
    if (feedback) feedback.style.display = "none";
  }
});
