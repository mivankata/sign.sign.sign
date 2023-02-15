// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v


// The video
let video;
// For displaying the label
let label = "Hello there...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/5FfjC-uyX/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

let canvas;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.position((windowWidth - width) / 2);
  video = createCapture(VIDEO);
  video.hide();
  //video.show();

  classifyVideo();
}

function draw() {
  background(0);

  // Draw the video
  // image(video, (width - video.width) / 2, (height - video.height) / 2);


   /* STEP 4: Draw the label*/
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16); 
  

    let letter = "";
if (label == "A") {
  document.querySelectorAll(".A").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "K") {
  document.querySelectorAll(".K").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "E") {
  document.querySelectorAll(".E").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "P") {
  document.querySelectorAll(".P").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "H") {
  document.querySelectorAll(".H").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "R") {
  document.querySelectorAll(".R").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "D") {
  document.querySelectorAll(".D").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "Y") {
  document.querySelectorAll(".Y").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "I") {
  document.querySelectorAll(".I").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "N") {
  document.querySelectorAll(".N").forEach(function(element) {
    element.style.opacity = "100%";
  });
} else if (label == "G") {
  document.querySelectorAll(".G").forEach(function(element) {
    element.style.opacity = "100%";
  });
}
      
  // Draw the emoji
  // textSize(80);
  // text(letter, 8, 70);    
  text(letter, 8, 180);  
  text(letter, 8, 280);  
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}

// STEP 2 classify the video!
function classifyVideo() {
  classifier.classify(video, gotResults);
}


document.addEventListener("DOMContentLoaded", function() {
  // Get the trigger button
  const trigger = document.querySelector("#trigger");

  // Get the first popup
  const popup = document.querySelector(".popup");

  // Add event listener to trigger button
  trigger.addEventListener("click", function () {
    popup.style.display = "block";
  });

  // Get the second trigger button
  const trigger2 = document.querySelector("#trigger2");

  // Get the second popup
  const popup2 = document.querySelector(".popup2");

  // Add event listener to trigger button
  trigger2.addEventListener("click", function () {
    popup.style.display = "none";
    popup2.style.display = "block";
  });

  // Close the second popup when clicking anywhere outside it
  //window.addEventListener("click", function (event) {
    //if (event.target == popup2) {
      //popup2.style.display = "none";
    //}
 // });
  
  document.getElementById("trigger3").addEventListener("click", function() {
popup2.style.display = "none";
});
});
