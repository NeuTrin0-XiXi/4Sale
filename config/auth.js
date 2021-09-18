const jwt = require('jsonwebtoken')

function genToken(data) {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
};

function authToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : null;
    if (token === null) return res.status(401).end();

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, auth) => {
        if (err) return res.status(403).end();
        req['auth'] = auth;
        next();
    })
};

module.exports = { genToken, authToken };
