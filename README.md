#log-suppress

![build-status](https://travis-ci.org/jnyryan/log-suppress.svg)

A little tool that intercepts console.log output. Ideal for keeping tests output clean.

Especially handy for automated tests so that debug statements don't appear in the middle of test output.

## Installation

``` bash
npm install log-suppress --save
```

## Usage

***Log-Suppress*** takes the current console and optional environment

``` javascript
require("log-suppress").init(console);
```

Or for a specific environment


``` javascript
process.env.NODE_ENV = 'test'
require("log-suppress").init(console, 'test');
```

### Other console modules

Using LogSuppress with other console loggers

``` javascript
require('console-ten').init(console);
require("log-suppress").init(console, 'test')

```

## Developing Log-Suppress

If you are planning to fork this repo and continue developing it then here's some info.

### Testing

Run the bash tests

```bash
make test
```

### Automated Build

This package used travis to perform automated builds (see that build graphic at the top)

[travis-ci](https://travis-ci.org/jnyryan/log-suppress)
