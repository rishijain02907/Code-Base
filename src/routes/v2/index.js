const express = require('express');

const router = express.Router();

const {V2ServicesController} = require('../../controller/index.js');

router.get('/services', V2ServicesController.services);

module.exports = router;