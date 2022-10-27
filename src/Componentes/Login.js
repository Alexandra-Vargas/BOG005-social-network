import { onNavigate } from "../main.js";
import { ingresar } from "../lib/firebase.js";

//Mostrar página

export function showLogin() {
  const login = `
<section class='containerLogin'>
  <h1> Bienvenido </h1>
  <p class='fraseLogin'> Estás a un paso de hacer parte de una gran comunidad de lectores </p>
  <input type='email' class='email' placeholder='Correo Electrónico'/>
  <input type='password' class='password' placeholder='Contraseña'/>
  <button class='botonLogin'>Continuar</button>
</section>
`;
  const nodeLogin = document.createElement("div");
  nodeLogin.innerHTML = login;
  const inputEmail = nodeLogin.querySelector(".email");
  const inputPassword = nodeLogin.querySelector(".password");
  const buttonIngresar = nodeLogin.querySelector(".botonLogin");

  //Funcion para ingresar con correo

  buttonIngresar.addEventListener("click", () => {
    ingresar(inputEmail.value, inputPassword.value);
  });
  return nodeLogin;
}
