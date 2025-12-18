// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQVIaeys5RHZVgrNJ5IghlelAwVQ6GO_I",
  authDomain: "moviesgpt-d22f4.firebaseapp.com",
  projectId: "moviesgpt-d22f4",
  storageBucket: "moviesgpt-d22f4.firebasestorage.app",
  messagingSenderId: "687696241512",
  appId: "1:687696241512:web:49025c2d2c476b66e52cdd",
  measurementId: "G-Y9RVR9YJ1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB9H1fepRA1PFjMKaKb22XxFho7rdnM9uY",
//   authDomain: "netflixgpt-3329c.firebaseapp.com",
//   projectId: "netflixgpt-3329c",
//   storageBucket: "netflixgpt-3329c.appspot.com",
//   messagingSenderId: "30750480810",
//   appId: "1:30750480810:web:362cf7a71b67717d80f3d3",
//   measurementId: "G-DT31WT0P3Q"
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const auth = getAuth(app);
