const express = require('express');
const { registerUser, Login } = require('../controller/user.control');


const router = express.Router();

router.post("/sign-up", registerUser);
router.post("/sign-in", Login);



module.exports = router;