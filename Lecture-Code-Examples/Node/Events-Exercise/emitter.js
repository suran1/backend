var emitter = {
  events: {},   // empty object to create arrays of functions
  on: on,       // function to register listeners
  emit: emit    // function to broadcast event
};



/* You need to use bracket notation because you're not sure that the property
exists and / or you don't know the property name. */

function on (eventType, listenerFunc) {
  if (!this.events[eventType]){
    this.events[eventType] = [listenerFunc];  // add the new eventType property
                                              // and make the value be an array
                                              // with the listenerFunc as its only
                                              // value
  } else {
    this.events[eventType].push(listenerFunc);  // if the eventType property (what
                                                // ever value it is) already exists,
                                                // the add the listenerFunc to the
                                                // array
  }

}

function emit (eventType) {
  if (this.events[eventType]) {
    for (var i = 0; i < this.events[eventType].length; i++) {
      this.events[eventType][i]();
    } // end for
  } // end if
}

module.exports = emitter;
