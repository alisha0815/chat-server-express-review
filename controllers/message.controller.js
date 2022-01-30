const messageModel = require("../models/message.model");

const getMessages = (req, res) => {
  const messages = messageModel.findMessages();
  res.status(200);
  res.json(messages);
};

const postMessage = (req, res) => {
  const newMessage = req.body;

  const savedMessage = messageModel.createMessage(newMessage);
  res.status(201);
  res.json(savedMessage);
};

module.exports = { getMessages, postMessage };
