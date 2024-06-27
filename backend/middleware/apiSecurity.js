const fs = require('fs');
const dotenv = require('dotenv');
const configData = fs.readFileSync('.env');
const buf = Buffer.from(configData);
const config = dotenv.parse(buf);
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    requireLogin: (req, res, next) => {
        // const authHeader = req.headers.authorization;
        // console.log('Authorization Header:', authHeader);

        if (!authHeader) {
            return res.status(401).json({ message: 'missing_authorization_header' });
        }

        const token = authHeader.split(' ')[1];
        // console.log('Token:', token);
        // console.log('SECRET_KEY:', process.env.SECRET_KEY);

        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error('JWT Verification Error:', err);
                return res.status(401).json({ message: 'invalid_session', Error: err });
            }
            console.log('Decoded Token:', decoded);
            req.user = decoded;
            next();
        });
    },

    requirePermits: function () {
        const permits = [];
        for (let i = 0, l = arguments.length; i < l; i++) {
            if (typeof arguments[i] == 'string') {
                permits.push(arguments[i]);
            }
        }

        return (req, res, next) => {
            const authHeader = req.headers.authorization;
            console.log('Authorization Header:', authHeader);

            if (!authHeader) {
                return res.status(401).json({ message: 'missing_authorization_header' });
            }

            const token = authHeader.split(' ')[1];
            // console.log('Token:', token);
            // console.log('SECRET_KEY:', process.env.SECRET_KEY);

            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    console.error('JWT Verification Error:', err);
                    return res.status(401).json({ message: 'invalid_session', Error: err });
                }
                req.user = decoded;

                for (const permit of permits) {
                    if ((req.user.permits || []).indexOf(permit) > -1) {
                        return next();
                    }
                }
                return res.status(403).json({ message: 'invalid_access' });
            });
        };
    }
}
