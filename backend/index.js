const express = require("express")
const app = express();

const userRouter = require("./controllers/User.controller")

app.use(express.json())
app.use("/user", userRouter);

app.use("/", (req, res) => {
  res.send({value: "Kuch nhi"})
});

module.exports = app