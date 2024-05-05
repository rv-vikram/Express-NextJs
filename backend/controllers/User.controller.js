const express = require("express")
const { User } = require('../models/user.model')
const router = express.Router();
const {body, v} = require('express-validator')

router.get("/", async (req, res) => {
  const user = await User.find({}).exec()
  res.send(user)
})

router.post("/", async (req, res) => {
  const user = await User.create({
    "email": "rv.ram1@a.a",
    "password": "1234512345"
  })
  res.send(201).send({response:"user Created"})
})

module.exports = router