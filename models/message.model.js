const db = require("../db");

function findMessages() {
  return db.msgs;
}

function createMessage(message) {
  db.msgs.push(message);
  return message;
}

module.exports = { findMessages, createMessage };
