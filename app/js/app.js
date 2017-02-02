  var config = {
  	apiKey: "AIzaSyAKn2O4FZ0z5y6Zcovsomcv4C7KihtBxAw",
  	authDomain: "chat-d598c.firebaseapp.com",
  	databaseURL: "https://chat-d598c.firebaseio.com",
  	storageBucket: "chat-d598c.appspot.com",
  	messagingSenderId: "822881475742"
  };
  firebase.initializeApp(config);



  angular.module('Chat', ['firebase']);