/*!
  * log-suppress
  * Copyright(c) 2015 JA Ryan <jnyryan@gmail.com>
  * ISC Licensed
  */

var LogSuppress = function() {};

var o = {
  fuc1: function(dd){console.log(dd);}
}

LogSuppress.prototype.init = function(console, env) {

  o.fuc1("JOHNNY");
  if (process.env.NODE_ENV == env) {
    if(process.env.NODE_ENV == 'dev')
      console.log('LogSuppress is suppressing all console output.');

    if (typeof console.log == 'function'){
      console.log = function() {};
      console.log("You should not see me");
    }
  }
  else{
    console.log('LogSuppress is not blocking any console output');
  }
}

module.exports = new LogSuppress();
