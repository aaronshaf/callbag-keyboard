const START = 0;
const DATA = 1;
const TERMINATE = 2;

const keysDown = new Set();

let isListening = false;

const listeners = [];

function keydownHandler(event /* KeyboardEvent */) {
  keysDown.add(event.key);
  listeners.forEach(listener => listener({ keysDown }));
}

function keyupHandler(event /* KeyboardEvent */) {
  keysDown.delete(event.key);
  listeners.forEach(listener => listener({ keysDown }));
}

function startListening() {
  if (isListening) return;
  isListening = true;
  document.addEventListener("keydown", keydownHandler);
  document.addEventListener("keyup", keyupHandler);
}

function stopListening() {
  isListening = false;
  document.removeEventListener("keydown", keydownHandler);
  document.removeEventListener("keyup", keyupHandler);
}

function keyboard(start, sink) {
  if (start !== START) return;

  let listener = gamepads => sink(DATA, gamepads);

  listeners.push(listener);

  const talkback = (type, d) => {
    if (type === TERMINATE) {
      listeners.splice(listeners.indexOf(listener), 1);
      if (listeners.length === 0) {
        stopListening();
      }
    }
  };

  sink(START, talkback);

  startListening();
}

module.exports = (start, sink) => keyboard(start, sink);
