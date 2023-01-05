const { connect } = require('./client');
const { setupInput } = require('./setupInput');


console.log("Connecting ...");
const conn = connect();
setupInput(conn);