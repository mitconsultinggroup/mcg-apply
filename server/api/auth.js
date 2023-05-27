import jwt from "jsonwebtoken";
import User from "../db/user.js";

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    if (req.cookies.token) {
        jwt.verify(req.cookies.token, JWT_SECRET, function (err, decode) {
            if (!decode) {
                req.user = undefined;
                next();
            } else if (err) req.user = undefined;
            else {
                User.findOne({
                    userid: decode.userid,
                }).exec((err, user) => {
                    if (err) {
                        res.status(500).send({
                            message: "error finding authenticated user in database",
                        });
                    } else {
                        req.user = user;
                        next();
                    }
                });
            }
        });
    } else {
        req.user = undefined;
        next();
    }
};
module.exports = verifyToken;
