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


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("CHECKPOINT 1")
console.log("room names"+ Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

     //End code
     });});}
getData();
function redirecttoroomname(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "index.html";
}







