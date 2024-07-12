const express = require('express')
const router = express.Router()
const {newUser} = require("../../controller/usercontroller")

router.post('/',newUser)

module.exports = router 