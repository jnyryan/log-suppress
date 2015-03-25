(function() {
  var logSuppress = require('../lib/log-suppress.js');
  var util = require('util');
	'use strict';

  console.dir(util.inspect(logSuppress));

  console.log("This demo will print 100 messages to the console");
  console.log("Log-Suppress will be enabled after 5 messages");
  console.log("All further output will be suppressed");

  for(i=0;i<100;i++){
    console.log("I am console output");
    if(i==5)
    {
      console.log("***Turning Log-Suppress ON");
      console.log("***All further output will be suppressed");
      logSuppress.init(console);
    }
  }

  console.log("You should not see me");
  console.log("You should not see me");
  console.log("You should not see me");
  console.log("You should not see me");
  console.log("You should not see me");

})();
