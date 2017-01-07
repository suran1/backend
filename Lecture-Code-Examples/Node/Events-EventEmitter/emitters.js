//building an event emitter
// this emits ('broadcasts') events ('messages') and registers listeners

// 'on' references listeners
// 'emit'  broadcasts

var emitter = {
  events: {},
    // this stores the definition of the function - it doesn't execute i

  on: on,    // the function 'on'
  emit: emit
};

// create a function that registers listeners
// the function name is 'on'

function on (eventType, listenerFunc) {

  //check if function already exists in our emitter
  if (!this.events[eventType]) {
    this.events[eventType] = [listenerFunc];  // creates an array with listnerFunc
  } else {
    this.events[eventType].push(listenerFunc);
  }

}


function emit (eventType) {
  //check if the eventType already exist?
  // If doesn't already exist we're going to ignore it
  if(this.events[eventType]){
    for (var i = 0; i < this.events[eventType].length; i++){
      this.events[eventType][i]();
    }
  }
}

module.exports = emitter;
