//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
  });
  document.getElementById("msg").value="";
  window. scrollTo(0, document. body. scrollHeight);
}

function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      var chatContainer = document.getElementById("output");
      chatContainer.innerHTML = ""; // Clear previous messages
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          childData = childSnapshot.val();
          if (childKey !== "purpose") {
              firebase_message_id = childKey;
              message_data = childData;

              // Start code
              console.log(firebase_message_id);
              console.log(message_data);
              name = message_data['name'];
              message = message_data['message'];
              like = message_data['like'];

              name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
              message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
              like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatelike(this.id)'>";
              span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

              row = name_with_tag + message_with_tag + like_button + span_with_tag;
              chatContainer.innerHTML += row;
              window. scrollTo(0, document. body. scrollHeight);
              // End code
          }
      });
  });
}


getData();


function updatelike(message_id)
{
  console.log("clicked on like button- "+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
  });
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}