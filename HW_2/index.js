// let useername=window.prompt("Enter your name:");
// console.log(useername);
let username;

document.getElementById("b").onclick = function () {
  username=document.getElementById("t").value;
   console.log(username);
  document.getElementById("l").innerHTML = username;
}
//25