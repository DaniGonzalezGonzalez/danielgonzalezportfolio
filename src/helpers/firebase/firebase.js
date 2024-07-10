// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIxM1skJBcukfPkJq_3xcrh3gbdKVGDSg",
  authDomain: "portfolio-danigg-project.firebaseapp.com",
  projectId: "portfolio-danigg-project",
  storageBucket: "portfolio-danigg-project.appspot.com",
  messagingSenderId: "577951533954",
  appId: "1:577951533954:web:0d0339018e0f5a20f3dd9b"
  // Backup
  // apiKey: "AIzaSyCOBUcYLZzzvT3YyA9jAC9hXdeoBL40AKc",
  // authDomain: "project-portfolio-dgg-backup.firebaseapp.com",
  // projectId: "project-portfolio-dgg-backup",
  // storageBucket: "project-portfolio-dgg-backup.appspot.com",
  // messagingSenderId: "96191453787",
  // appId: "1:96191453787:web:67539a6684e87d75e27d7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Points to the root reference
// export const storageRef = ref(storage);

// Points to 'images'
// export const imagesRef = ref(storageRef, 'images');

