const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const keyboard = require("./index.js");

const debug = document.querySelector("#debug");

pipe(
  keyboard,
  forEach(({ keysDown }) => {
    debug.textContent = JSON.stringify(
      {
        keysDown: [...keysDown]
      },
      null,
      2
    );
  })
);
