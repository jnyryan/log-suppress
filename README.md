#log-suppress

![build-status](https://travis-ci.org/jnyryan/log-suppress.svg)

A little tool that intercepts console.log output. Ideal for keeping tests output clean.

Especially handy for automated tests so that debug statements don't appear in the middle of test output.

## Usage

LogSuppress takes the current console and environment

First, set your environment variable
``` bash
NODE_ENV='test'
```
OR
``` javascript
process.env.NODE_ENV = 'test'
```

Then, add the module specifying the environment you want to stop logging for.
``` javascript
require("log-suppress").init(console, 'test');
```
### Other console modules
Using LogSuppress with other console loggers

``` javascript
require('console-ten').init(console);
require("log-suppress").init(console, 'test')

```
