import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA2RcQ1HaWj5hxnDIX7q0q8544C-vY8lBE",
  authDomain: "exp-tracker-ts.firebaseapp.com",
  projectId: "exp-tracker-ts",
  storageBucket: "exp-tracker-ts.appspot.com",
  messagingSenderId: "175012049639",
  appId: "1:175012049639:web:a8c74a621f0b8f37f2a842",
  measurementId: "G-TXZXFV61V2"

  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}