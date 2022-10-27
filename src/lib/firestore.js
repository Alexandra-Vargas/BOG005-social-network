import { arrayUnion, arrayRemove, getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

const db = getFirestore();

// Funciones del muro para crear post y sus botones

export const saveTask = (text, likes) => {
  addDoc(collection(db, "tasks"), { text, likes: [] });
};

export const getTask = () => {
  getDocs(collection(db, "tasks"));
};

export const getAllTasks = (querySnapshot) => {
  onSnapshot(collection(db, "tasks"), querySnapshot);
};

export const eliminarPost = (id) => {
  deleteDoc(doc(db, "tasks", id));
};

export const getPost = (id) => getDoc(doc(db, "tasks", id));

export const updatePost = (id, newFields) => {
  updateDoc(doc(db, "tasks", id), newFields);
};

export const updateLike = (id, userId) => {
  updateDoc(doc(db, "tasks", id), { likes: arrayUnion(userId) });
};

export const disLike = (id, userId) => {
  updateDoc(doc(db, "tasks", id), { likes: arrayRemove(userId) });
};
