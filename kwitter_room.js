const firebaseConfig = {
      apiKey: "AIzaSyAm0JhOxVrzMZ_J6ZRni-uS5RlNkzgc9YI",
      authDomain: "kwitter-8c22d.firebaseapp.com",
      databaseURL: "https://kwitter-8c22d-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c22d",
      storageBucket: "kwitter-8c22d.appspot.com",
      messagingSenderId: "25022904146",
      appId: "1:25022904146:web:f077d8ab20eb549730ac8b",
      measurementId: "G-DZCZK0TCG7"
    };
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function add_room() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(room_name) {
      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
