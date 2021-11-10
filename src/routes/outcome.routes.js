const express = require('express')
const outcomeController = require('../controllers/outcome.controller.js')
const router = express.Router()

router.post('/', outController.add)
router.get('/', outController.list)
router.get('/:id', outcomeController.find)

module.exports = router