import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection, writeBatch,} from "firebase/firestore";
import products from "../components/products/products";

const firebaseConfig = {
  apiKey: "AIzaSyASZZuPPRiS_f3wzxNqVjbFTZaxTwS94HA",
  authDomain: "react-coder-3e5f1.firebaseapp.com",
  projectId: "react-coder-3e5f1",
  storageBucket: "react-coder-3e5f1.appspot.com",
  messagingSenderId: "793828876299",
  appId: "1:793828876299:web:aec5204d1d3dc647b9a70e"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

export async function exportData() {

  const collectionRef = collection(db, "products");

  for (let product of products) {
    const { id } = await addDoc(collectionRef, product);
    console.log("Documento creado", id);
  }
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");

  for (let product of products) {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, product);
  }

  const resp = await batch.commit();
  console.log(resp);
}