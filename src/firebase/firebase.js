import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics'

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyCbbpyzCg618EN8oHIsoP71GNEkWb1gX3U",
    authDomain: "vestanassone-portfolio.firebaseapp.com",
    projectId: "vestanassone-portfolio",
    storageBucket: "vestanassone-portfolio.appspot.com",
    messagingSenderId: "722195336759",
    appId: "1:722195336759:web:f1bb1ad691d9b93dbb79b2",
    measurementId: "G-FHB9NGPSMV"
});

// Initialize Firebase
var db = firebaseApp.firestore();
//firebase.initializeApp(firebaseConfig);
firebase.analytics();
export { db };