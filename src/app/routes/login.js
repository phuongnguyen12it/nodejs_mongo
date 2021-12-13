const express = require('express');
const {registerView, loginView } = require('../controllers/loginController');
const router = express.Router();
router.get('/register', registerView);
router.get('/loginView', loginView);
module.exports = router;
