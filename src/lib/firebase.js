import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { onNavigate } from "../main.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSExOJ9sJ6ipBogtLDborFNjOfUwpFo0Q",
  authDomain: "social-networks16.firebaseapp.com",
  projectId: "social-networks16",
  storageBucket: "social-networks16.appspot.com",
  messagingSenderId: "1036377589316",
  appId: "1:1036377589316:web:c795ce940f4221e3735e11",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const getCurrentUser = () => getAuth().currentUser;
export { onAuthStateChanged };

onAuthStateChanged(auth, (user) => {
  if (user == null) {
    onNavigate("/");
  } else {
    onNavigate("/wall");
  }
});
//Función para registrar usuario con Firebase

export const registrar = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Confirma los datos ingresados");
    });
};

//Función para ingresar a la cuenta con Firebase

export const ingresar = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onNavigate("/wall");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Ingresa correo y contraseña");
    });
};

//Función para ingresar con Google

export const ingresoGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert("Error al ingresar los datos");
    });
};

export const salir = () => {
  return signOut(getAuth());
};
