
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDtswaOn4G2VBMdwngZ64GOUmJXP5X0hWI",
    authDomain: "my-kwitter-d5005.firebaseapp.com",
    databaseURL: "https://my-kwitter-d5005-default-rtdb.firebaseio.com",
    projectId: "my-kwitter-d5005",
    storageBucket: "my-kwitter-d5005.appspot.com",
    messagingSenderId: "461996250752",
    appId: "1:461996250752:web:7113bd8bc501c2435ef865",
    measurementId: "G-RYXYV8PQ7X"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}