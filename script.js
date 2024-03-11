// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", ()=> {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        //List DOM
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById('faultyItems');

        if (pilot.length===0 || copilot.length===0||fuelLevel.length===0||cargoLevel.length===0) 
           alert('you forgot to enter a value for any one of the fields')


        //use formsubmission to validate and update list
        formSubmission(document,list,pilot,copilot,fuelLevel,cargoLevel);
    }) 

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document,name,diameter,star,distance,moons,imageUrl)
    }) 
})