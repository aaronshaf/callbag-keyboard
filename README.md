```bash
yarn add callbag-keyboard
```

```javascript
const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const keyboard = require("callbag-keyboard");

pipe(
  keyboard,
  forEach(({ keysDown }) => {
    // have fun
    // keysDown is a Set
  })
);
```

If you're blessed with the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator):

```javascript
keyboard
  |> forEach({ keysDown }) => {
    // have fun
  });
```

## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html), by André Staltz
