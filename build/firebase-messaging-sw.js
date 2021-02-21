importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
  apiKey: "AIzaSyA2RcQ1HaWj5hxnDIX7q0q8544C-vY8lBE",
  authDomain: "exp-tracker-ts.firebaseapp.com",
  projectId: "exp-tracker-ts",
  storageBucket: "exp-tracker-ts.appspot.com",
  messagingSenderId: "175012049639",
  appId: "1:175012049639:web:a8c74a621f0b8f37f2a842",
  measurementId: "G-TXZXFV61V2"

  })

firebase.messaging();