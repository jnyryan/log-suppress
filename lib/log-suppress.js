var LogSuppress = function() {};

LogSuppress.prototype.init = function(console, env) {
  if (process.env.NODE_ENV == env) {
    console.log('LogSuppress is suppressing all console output.');
    console.log = function() {}
    console.log("You should not see me");
  }
  else{
    console.log('LogSuppress is not blocking any console output');
  }
}

module.exports = new LogSuppress();
