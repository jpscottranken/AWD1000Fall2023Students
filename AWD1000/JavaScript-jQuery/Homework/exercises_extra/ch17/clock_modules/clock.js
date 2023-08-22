"use strict";

import * as clock from './library_clock.js';
import * as stopwatch from './library_stopwatch.js';

$(document).ready( () => {
    // start clock
    clock.start( $("#hours"), $("#minutes"), $("#seconds"), $("#ampm") );

    // set up stopwatch event handlers
    $("#start").click( () =>
        stopwatch.start( $("#s_minutes"), $("#s_seconds"), $("#s_ms") ) );
    $("#stop").click( () => stopwatch.stop() );
    $("#reset").click( () => stopwatch.reset() ); 
}); // end ready()