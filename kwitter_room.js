
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

  apiKey: "AIzaSyDWC2XCcYzBMiM1-uSWxTgoU0LcXJBupQg",
  authDomain: "help-mh-chat-app.firebaseapp.com",
  databaseURL: "https://help-mh-chat-app-default-rtdb.firebaseio.com",
  projectId: "help-mh-chat-app",
  storageBucket: "help-mh-chat-app.appspot.com",
  messagingSenderId: "220060582619",
  appId: "1:220060582619:web:91a8f8914a4af814ca82fe"

    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addroom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="letchat_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="letchat_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
