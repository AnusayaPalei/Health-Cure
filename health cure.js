const firebaseConfig = {
    apiKey: "AIzaSyAeCdLauD1FltVPZKzPrlSdXRpB5MOqKi0",
    authDomain: "health-cure-89668.firebaseapp.com",
    projectId: "health-cure-89668",
    storageBucket: "health-cure-89668.appspot.com",
    messagingSenderId: "122760085126",
    appId: "1:122760085126:web:4ce9484679f3cba4815b07",
    measurementId: "G-6C8HRCR2HF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem('user_name');
  document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";