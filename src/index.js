const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());

app.use(
  cors()
);

app.get("/", async (req,res) => {
  return res.status(200).send("Whatsapp Backend Api Created By Ashok")
})

const { register, login } = require("./controllers/auth");
app.post("/register", register);
app.post("/login", login);

const userController = require("./controllers/user.controller");


app.use("/users", userController);

//chat
const chatController = require("./controllers/chat.controller");
const messageController = require("./controllers/message.controller");

app.use("/chats",chatController)
app.use('/messages', messageController)

module.exports = app;

