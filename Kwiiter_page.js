var firebaseConfig = {
    apiKey: "AIzaSyBhrDNe7QSUWHHHwsIZNhSgfSgJCYwjLHQ",
    authDomain: "kwitterhw-a515f.firebaseapp.com",
    databaseURL: "https://kwitterhw-a515f-default-rtdb.firebaseio.com",
    projectId: "kwitterhw-a515f",
    storageBucket: "kwitterhw-a515f.appspot.com",
    messagingSenderId: "213797320946",
    appId: "1:213797320946:web:b5c7b4fc7e354a2937386b",
  measurementId: "G-RXWE1EGX3P"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!!!";
  function add_room() {
   room_name = document.getElementById("room_name").value ;
   firebase.database().ref("/").child(room_name).update({
         purpose:"The employer of the administartion had a lot of wealth and so he invested in hummus and hired Vaibhav"

   })
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html"
  }
  function send(){
    document.getElementById("firebase_holder").value = "firebase_message";
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
  }