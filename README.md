# mist3-to-pfql

[![Build Status](https://travis-ci.org/biowonks/mist3-to-pfql.svg?branch=master)](https://travis-ci.org/biowonks/mist3-to-pfql)
[![Coverage Status](https://coveralls.io/repos/github/biowonks/mist3-to-pfql/badge.svg?branch=develop)](https://coveralls.io/github/biowonks/mist3-to-pfql?branch=develop)
![License](https://i.creativecommons.org/p/zero/1.0/88x31.png)

Service to parse mist3 standard output to make it compatible with PFQL

## Install
```
$ npm install mist3-to-pfql
```

## Usage
```javascript
const mist3TpPfql = require('mist3-to-pfql')
const pfqlCompatible = mist3TpPfql(mist3Output)
```

## mist3 tools supported

* pfam30
* tmhmm2
