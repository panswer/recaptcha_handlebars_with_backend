const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY
    });
});

router.use(require('../routes/logicBack'));

module.exports = router;