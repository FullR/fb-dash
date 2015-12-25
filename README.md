# fb-dash

A thin wrapper around [lodash](https://github.com/lodash/lodash) that allows its functions to be invoked as virtual methods using the proposed [function bind syntax](http://babeljs.io/blog/2015/05/14/function-bind/).

## Install

```bash
npm install fb-dash
```

Example:

```javascript
import {invoke, takeWhile, sample, each} from "fb-dash";

["foo", "bar", "fizz", "buzzle", "bazz", "baaaaaaaaa"]
  ::takeWhile((s) => s.length < 5)
  ::invoke("replace", "b", "q")
  ::each((s) => console.log(s));
```

The original lodash object can be accessed via the `lodash` key in the fodash exports.
