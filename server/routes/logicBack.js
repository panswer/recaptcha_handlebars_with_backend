const Router = require('express').Router;

const {
    getToken
} = require('../controllers/logicBack');

const router = Router();

router.post('/send', getToken);

module.exports = router;