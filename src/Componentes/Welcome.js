import { onNavigate } from "../main.js";
import { ingresoGoogle } from "../lib/firebase.js";

//Funcion para mostrar la página

export function showWelcome() {
  const welcome = ` 
  <section class="containerWelcome">
    <section class = "encabezado">
      <figure><img src="../images/logo.png" alt="Logo"/></figure>
      <p class="frase">Una Comunidad para compartir contenido de libros y fragmentos de texto.</p>
    </section>
    <section class = "botonesWelcome">
      <button class="buttonLoginW" id="buttonLoginWC" >INICIAR SESION</button>
      <br>
      <button class="buttonRegisterW" id="buttonRegisterWC">REGISTRARSE</button>
      <br>
      <p class="o"><span> o </span></p>
      <br>
      <button class="buttonGoogle" id = "ingresoGoogle">Inicio sesión con Google</button>
    </section>  
  </section>
  `;
  const nodeWelcome = document.createElement("div");
  nodeWelcome.innerHTML = welcome;

  const buttonLogin = nodeWelcome.querySelector("#buttonLoginWC");
  const buttonRegister = nodeWelcome.querySelector("#buttonRegisterWC");
  const botonGoogle = nodeWelcome.querySelector("#ingresoGoogle");

  //Funciones para dar las rutas a los botones

  buttonLogin.addEventListener("click", () => {
    onNavigate("/login");
  });

  buttonRegister.addEventListener("click", () => {
    onNavigate("/register");
  });

  botonGoogle.addEventListener("click", () => {
    ingresoGoogle();
  });

  return nodeWelcome;
}
