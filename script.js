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

var arr = [
   [1,2,3],
   [4,5,6],
   [7,8,9],
   [[10,11,12], 13, 14]
 ];
 arr[3]; // equals [[10,11,12], 13, 14]
 arr[3][0]; // equals [10,11,12]
 arr[3][0][1]; // equals 11

 console.log(arr[3][0])