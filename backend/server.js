const app = require('./index')
const connect = require("./configs/db")
const port = 10000;

app.listen(port, async () => {
  try {
    await connect();
    console.log('Connected successfully to server');
  } catch (error) {
    console.log(error)
  }
})