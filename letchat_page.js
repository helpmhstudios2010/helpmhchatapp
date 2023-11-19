//YOUR FIREBASE LINKS
var firebaseConfig = {

    apiKey: "AIzaSyByDVoLpqZ2ubCYXCfo0TSjdI3ZdohuHlk",

authDomain: "kwitter-6fbbf.firebaseapp.com",

databaseURL: "https://kwitter-6fbbf-default-rtdb.firebaseio.com",

projectId: "kwitter-6fbbf",

storageBucket: "kwitter-6fbbf.appspot.com",

messagingSenderId: "881787886982",

appId: "1:881787886982:web:f63b0d6bb0f8dd3ff4a007"

  
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
    
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
