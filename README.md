#log-suppress

## Usage

LogSuppress takes the current console and environment

``` javascript
require("log-suppress").init(console, 'test');
```

Using LogSuppress with other console loggers

``` javascript
require('console-ten').init(console);
require("log-suppress").init(console, 'test')

```
