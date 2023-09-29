
const form1 = document.getElementById("form");
const nombre = document.getElementById("name");
// const parrafo = document.getElementById("alertas");

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};



function validarFormulario() {
  let warnings = "";
  let valido = true;
  // parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    // parrafo.innerHTML = warnings;
    alert(warnings)
  } else {
    // parrafo.innerHTML = "Enviado";
    alert("Enviado")
  }
  return valido;
}

form1.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});