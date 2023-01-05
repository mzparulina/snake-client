const { IP, PORT } = require('./constants');
const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("You are connected!");
    conn.write('Name: PR');
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };