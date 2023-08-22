"use strict";
$(document).ready( () => {
    // create clock and stopwatch objects
    const clock = createClock( $("#hours"), $("#minutes"), $("#seconds"), $("#ampm") );
    const stopwatch = createStopwatch( $("#s_minutes"), $("#s_seconds"), $("#s_ms") );
    
    // start clock
    clock.start();
    
    // set up stopwatch event handlers
    $("#start").click( () => stopwatch.start() );
    $("#stop").click( () => stopwatch.stop() );
    $("#reset").click( () => stopwatch.reset() );
}); // end ready()