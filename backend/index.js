const express = require("express")
const connect = require("./configs/db")
const port = 10000;
const app = express();

const userRouter = require("./controllers/User.controller")

app.use(express.json())
app.use("/user", userRouter);

app.use("/", (req, res) => {
  res.send({value: "Kuch nhi"})
});

app.listen(port, async () => {
  try {
    await connect();
    console.log('Connected successfully to server');
  } catch (error) {
    console.log(error)
  }
})