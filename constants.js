const IP = "localhost";
const PORT = 50541;
const inputCmd = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  q: "Say: Hey, don't give up!",
  c: "Say: nom nom nom"
};

const speedInterval = 100;

module.exports = { IP, PORT, inputCmd, speedInterval };