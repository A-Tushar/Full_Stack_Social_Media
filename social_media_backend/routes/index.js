const express = require('express');
const { route } = require('.');
const router = express.Router();
const api = require('./api')
const baseURL = process.env.BASE_URL_API;

router.use(baseURL,api)

module.exports = router 