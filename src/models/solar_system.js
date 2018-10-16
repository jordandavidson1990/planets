const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:clickPlanet', (event) => {
    const planetId = event.detail;
    const selectedPlanet = this.planets.filter((planet) =>{
      return planet.name === planetId
    });
    PubSub.publish('SolarSystem:selected-planet-ready', selectedPlanet)
    console.log('planet:', selectedPlanet);
  })
}

module.exports = SolarSystem;
