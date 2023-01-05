const { inputCmd, speedInterval } = require("./constants");

let connection, timer;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Exiting");
    process.exit();
  } else if (key in inputCmd) {
    if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
      clearInterval(timer);
      timer = setInterval(() => {
        connection.write(inputCmd[key]);
      }, speedInterval);
      console.log(inputCmd[key]);
    } else {
      connection.write(inputCmd[key]);
    }
  }
};

module.exports = { setupInput };