numberOfDrums = document.querySelectorAll(".drum").length;

var sounds = {
  w: "assets/sounds/tom-1.mp3",
  a: "assets/sounds/tom-2.mp3",
  s: "assets/sounds/tom-3.mp3",
  d: "assets/sounds/tom-4.mp3",
  j: "assets/sounds/snare.mp3",
  k: "assets/sounds/crash.mp3",
  l: "assets/sounds/kick-bass.mp3",
};

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonPress = this.innerHTML;
    handleInteraction(buttonPress);
  });
}

document.addEventListener("keydown", function (event) {
  handleInteraction(event.key);
});

function handleInteraction(key) {
  if (sounds[key]) {
    makeSound(key);
    buttonAnimation(key);
  } else {
    console.log(key);
  }
}

function makeSound(key) {
  var audio = new Audio(sounds[key]);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
