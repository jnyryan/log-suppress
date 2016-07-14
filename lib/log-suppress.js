/*!
 * log-suppress
 * Copyright(c) 2015 JA Ryan <jnyryan@gmail.com>
 * ISC Licensed
 */
'use strict'
var LogSuppress = function() {};

LogSuppress.prototype.init = function(console, env) {

    if (process.env.NODE_ENV === 'dev' ||
        process.env.NODE_ENV === env) {
        //console.log('LogSuppress is suppressing all console output.');
        if (typeof console.log == 'function') {
            console.log = function() {};
            console.log("You should not see me");
        }
    }
}

module.exports = new LogSuppress();
