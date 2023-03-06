"use strict";

function getPassword() {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let passwordLength = 10;
    let password = "";

    for(let i=0; i<passwordLength; i++) {
       let randomNumber = Math.floor(Math.random() * chars.length);
       password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = password
}
