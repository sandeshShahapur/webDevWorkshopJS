function turnOn() {
  document.getElementById("lightBulb").src = "pic_bulbon.gif";
}

function turnOff() {
  document.getElementById("lightBulb").src = "pic_bulboff.gif";
}

function changeImage() {
  var image = document.getElementById("lightBulb");
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}
