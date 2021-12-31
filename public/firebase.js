'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const config = {
    apiKey: "AIzaSyC5gcmKSW4TKl5IVC_3eUZC4uZVfxwKXoI",
    authDomain: "web-app-ocr-aksara-sunda-jawa.firebaseapp.com",
    databaseURL: "web-app-ocr-aksara-sunda-jawa-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "web-app-ocr-aksara-sunda-jawa",
    storageBucket: "web-app-ocr-aksara-sunda-jawa.appspot.com",
    messagingSenderId: "707775411387"
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }