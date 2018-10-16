const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);

  const menuItems = document.querySelectorAll('li.planet-menu-item')
  const planetMenu = new SelectView(menuItems);
  planetMenu.bindEvents();

  const solarSystemDataSource = new SolarSystem(planetsData);
  solarSystemDataSource.bindEvents();

  const infoDiv = document.querySelector('.planet-details')
  const planetInfoDisplay = new PlanetInfoView(infoDiv);
  planetInfoDisplay.bindEvents();

});
