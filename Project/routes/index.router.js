const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);
router.get('/all', ctrlUser.getAllUsers);

module.exports = router;



