//element variables
var androidB = document.getElementById("android-btn");
var appleB = document.getElementById("apple-btn");
var img = document.getElementById("img");
var link = document.getElementById("link");
var body = document.getElementById("body");
var html = document.getElementById("html");

//event listeners
androidB.addEventListener("click", android);

appleB.addEventListener("click", apple);

//functions
function android() {
  img.src = "images/Android-Logo.jpg";
  link.innerHTML = "Android Home";
  link.style.backgroundColor = "#a4c93b";
  html.style.backgroundColor = "#a4c93b";
  body.style.fontFamily = "'Roboto', sans-serif";
  link.href = "https://www.android.com/";
  appleB.classList.add("active");
  androidB.classList.remove("active");
}

function apple() {
  img.src = "images/Apple-Logo.jpg";
  link.innerHTML = "Apple Home";
  link.style.backgroundColor = "#b6bcca";
  html.style.backgroundColor = "#b6bcca";
  body.style.fontFamily = "'Brygada 1918', serif";
  link.href = "https://www.apple.com/";
  androidB.classList.add("active");
  appleB.classList.remove("active");
}
