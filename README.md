#log-suppress

a little tool that stops console output based on an environment variable.

Especially handy for automates tests so that debug statements don't appear in the middle of test output.

## Usage

LogSuppress takes the current console and environment

``` javascript
process.env.NODE_ENV = 'test'
require("log-suppress").init(console, 'test');
```

Using LogSuppress with other console loggers

``` javascript
require('console-ten').init(console);
require("log-suppress").init(console, 'test')

```


