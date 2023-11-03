"use strict";

let hikes = [
    {
       id: "H101", 
       name: "Birding Loop", 
       description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
       scenicImage: "birding_loop_1.png",
       trailMapImage: "birding_loop_2.png",
       length: "2.3 miles", 
       difficulty: 2 
    },
    {
        id: "H102", 
        name: "Deep Blue Pool Trail", 
        description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
        scenicImage: "deep_blue_1.png",
        trailMapImage: "deep_blue_2.png",
        length: "2 miles", 
        difficulty: 2 
     },
     {
        id: "H103", 
        name: "Overlook Trail", 
        description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
        scenicImage: "overlook_trail_1.png",
        trailMapImage: "overlook_trail_2.png",
        length: ".7 miles", 
        difficulty: 2 
     },
 ];

 function init() {
//get html elements
const trailsSelect = document.getElementById("trails-select");
const scenicImg = document.getElementById("scenic-img");
const trailMapImg = document.getElementById("trail-map-img");
const displayParagraph = document.getElementById("display-paragraph");

//functions
function loadTrailsSelect() {
   for(const trail of hikes) {
      let option = new Option(trail.name, trail.id);
      trailsSelect.appendChild(option);
   }
}

function getTrailById (id) {
   for(const trail of hikes) {
      if(trail.id == id) {
         return trail;
      }
   }
}

function displayInfo() {
   const selectedTrail = getTrailById(trailsSelect.value);
   
   scenicImg.src = "HikingPage/" + selectedTrail.scenicImage;
   trailMapImg.src = "HikingPage/" +selectedTrail.trailMapImage;

   displayParagraph.innerText = `${selectedTrail.name}\n\n${selectedTrail.length}; Difficulty level ${selectedTrail.difficulty}\n\n${selectedTrail.description}`;

}

//call functions
loadTrailsSelect();


//event-listeners
trailsSelect.onchange = displayInfo;


 }

 window.onload = init;