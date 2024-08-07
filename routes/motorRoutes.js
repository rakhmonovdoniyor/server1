const express = require('express');
const { AddNewMotor, getAlldata, EditMotor, DeleteMotor, DeleteAll } = require('../conroller/motorcontrol');
const router = express.Router();
// const app = require()


router.post('/api/data', AddNewMotor);
router.get('/api/data', getAlldata);
router.put('/api/data/:name', EditMotor);
router.delete('/api/data/:name' , DeleteMotor);
router.delete('/all-delete', DeleteAll)

module.exports = router;