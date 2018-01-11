// materialize
$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.modal').modal();
});

// Enlazar los link de signUp y login
$(document).ready(function() {
  $('.enlace-login-js').click(function() {
    $('#initial').addClass('hide');
    $('#signUp').removeClass('hide');
  });
  $('.enlace-signUp-js').click(function() {
    $('#initial').addClass('hide');
    $('#login').removeClass('hide');
  });
  $('.a-login-js').click(function() {
    $('#signUp').addClass('hide');
    $('#login').removeClass('hide');
  });
  $('.a-signUp-js').click(function() {
    $('#login').addClass('hide');
    $('#signUp').removeClass('hide');
  });
});
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIDfsDD7GtqJQtfMoDwaZOcKLsHNZ9GY8",
  authDomain: "redsocial-freechic.firebaseapp.com",
  databaseURL: "https://redsocial-freechic.firebaseio.com",
  projectId: "redsocial-freechic",
  storageBucket: "",
  messagingSenderId: "911815571490"
};
firebase.initializeApp(config);


