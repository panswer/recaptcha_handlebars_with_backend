const axios = require('axios').default;

const getToken = async(req, res) => {
    try {
        let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${req.body['g-recaptcha-response']}`);

        if (response.data.success) {
            return res.status(202).json({
                message: 'Success.'
            });
        } else {
            return res.status(403).json({
                message: "Invalid recaptcha."
            });
        }

    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    getToken
};