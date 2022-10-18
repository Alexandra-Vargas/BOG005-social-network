import { onNavigate } from "../main.js";
import { registrar } from "../lib/firebase.js";
export function showRegister() {
  const register = `
<section class="containerRegister">
    <h1> Crear una Cuenta </h1>
    <p class="fraseRegister"> Estas a un paso de hacer parte de una gran comunidad de lectores </p>
    <input type="email" class="email" placeholder="Correo Electrónico"/>
    <input type="password" class="password" placeholder="Contraseña"/>
    <button class="botonRegister"> CONTINUAR </button>
</section>
`;
  const nodeRegister = document.createElement("div");
  nodeRegister.innerHTML = register;
  const inputEmail = nodeRegister.querySelector(".email");
  const inputPassword = nodeRegister.querySelector(".password");
  const botonR = nodeRegister.querySelector(".botonRegister");
  botonR.addEventListener("click", () => {
    registrar(inputEmail.value, inputPassword.value);
  });
  botonR.addEventListener("click", () => {
    onNavigate("/wall");
  });
  return nodeRegister;
}
