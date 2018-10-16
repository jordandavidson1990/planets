const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {
      detail: payload

    });
    console.log('published event detail:',event.detail);
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
