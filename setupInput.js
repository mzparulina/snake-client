const { connect } = require('./client');

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};


const handleUserInput = () => {
  // connect.write('Move: up');
};

module.exports = { setupInput };