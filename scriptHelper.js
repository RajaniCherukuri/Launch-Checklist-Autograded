// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.  
   //console.log ('inside mission target')
   let missionTarget = document.getElementById('missionTarget')
   missionTarget.innerHTML =`<h2>Mission Destination</h2>
   <ol>
       <li>Name:${name} </li>
       <li>Diameter:${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth:${distance} </li>
       <li>Number of Moons:${moons} </li>
   </ol>
   <img src=${imageUrl}>`
}
 function validateInput(testInput) {
    if (testInput.length ==0 || testInput =="") 
    {
        return "Empty"
    }
    else if (isNaN(testInput)) 
   {
       return "Not a Number"
   }
   else if (!isNaN(testInput))
   {
      return "Is a Number"
   }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById("fuelStatus")
    let launchStatus = document.getElementById("launchStatus")
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let cargoStatus = document.getElementById("cargoStatus")

    if (!(validateInput(fuelLevel) ==='Is a Number' && validateInput(cargoLevel) ==='Is a Number'))
    {
       console.log(`All fields are required`)
    }
    //let fuelStatus = document.getElementById('fuelStatus');
    if (fuelLevel <10000 )
    {
        list.style.visibility ='visible'
        fuelStatus.innerHTML ='Fuel level too low for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color ='red'
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
    }
    else if (cargoLevel >10000 )
    {
        list.style.visibility ='visible'
        cargoStatus.innerHTML ='Cargo mass too heavy for launch';
        fuelStatus.innerHTML ='Fuel level high enough for launch';
        launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
        launchStatus.style.color ='red'
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
    }
     else
     {
        launchStatus.style.color ='green'
        launchStatus.innerHTML = 'Shuttle is Ready for Launch';
        fuelStatus.innerHTML ='Fuel level high enough for launch';
        cargoStatus.innerHTML ='Cargo mass low enough for launch';
        pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML =`Co-pilot ${copilot} is ready for launch`
     } 

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
     return planets[Math.round(Math.random()*planets.length)]
 }
 
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;