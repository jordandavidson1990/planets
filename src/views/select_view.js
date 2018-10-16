const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
  this.element = element;

};

SelectView.prototype.bindEvents = function(){
  for(var i = 0; i < this.element.length; i++){
    this.element[i].addEventListener('click', function(event){
      const planetId = event.target.id;
      console.log('planetId:', planetId);
      PubSub.publish('SelectView:clickPlanet', planetId);
    });
  };
};

module.exports = SelectView;
