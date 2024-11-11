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

// Add click event listener to each drum button
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonPress = this.innerHTML; // to identify which button is press
    handleInteraction(buttonPress);
  });
}

// add event listener to detect keyboard press
document.addEventListener("keydown", function (event) {
  handleInteraction(event.key);  // pass the key value to the function
});

function handleInteraction(key) {
  if (sounds[key]) {
    makeSound(key);  // play sound to the associated key
    buttonAnimation(key); // add animation effect to the button
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
  activeButton.classList.add("pressed"); // add the class to apply animation
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100); // remove after 100ms to revert animation
}
