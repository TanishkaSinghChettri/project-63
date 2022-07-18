import  firebase  from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyBm3e6GzT6i7NTiR6Ggcv4_2EPM_JO2Sn0",
  authDomain: "project-60-e53ce.firebaseapp.com",
  databaseURL: "https://project-60-e53ce-default-rtdb.firebaseio.com",
  projectId: "project-60-e53ce",
  storageBucket: "project-60-e53ce.appspot.com",
  messagingSenderId: "888458403635",
  appId: "1:888458403635:web:1e1c2d70fc6d4abbc0a846"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.database();
 

  