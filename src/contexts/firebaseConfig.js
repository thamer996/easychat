import firebase from "firebase/app";
import "firebase/auth" ;


export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAWQ9l-yrCmNYzY-hmk-b4xSfcvf75AP94",
    authDomain: "easychat-c695c.firebaseapp.com",
    projectId: "easychat-c695c",
    storageBucket: "easychat-c695c.appspot.com",
    messagingSenderId: "280411821127",
    appId: "1:280411821127:web:b2dfb6973622980f000d62",
}).auth();

