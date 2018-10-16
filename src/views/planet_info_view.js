const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('SolarSystem:selected-planet-ready', (event) =>{
    const selectedPlanet = event.detail[0];
    this.render(selectedPlanet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The planet ${planet.name} has an orbit of ${planet.orbit}, a day of ${planet.day}
   a surface area of ${planet.surfaceArea}, a volume of ${planet.volume}, a gravity of ${planet.gravity} and has ${planet.moons} moons.`
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = PlanetInfoView;
