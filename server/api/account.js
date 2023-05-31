const express = require("express");
const router = express.Router();

const { v4: uuid } = require("uuid");

const { User } = require("../db/database.js");

const verifyToken = require("./auth.js");

const hasRequiredSignup = (req) => {
    const { firstname, lastname, email, password } = req.body;
    if (!lastname || lastname.length < 1) {
        return false;
    }
    if (!firstname || firstname.length < 1) {
        return false;
    }
    if (!email || email.length < 1) {
        return false;
    }
    if (!password || password.length < 1) {
        return false;
    }
    return true;
};

router.post("/signup", async (req, res) => {
    if (!hasRequiredSignup(req)) {
        res.status(400).send({
            message: "missing required fields",
        });
        return;
    }

    const { firstname, lastname, email, password } = req.body;

    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        res.status(400).send({
            message: "user already exists",
        });
        return;
    }

    var salt = await bcrypt.genSalt(10);
    var savedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        userid: uuid(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: savedPassword,
        usertype: "candidate",
    });

    newUser.save((err, user) => {
        if (err) {
            res.status(500).send({
                message: "error saving user in database",
            });
        } else {
            res.status(200).send({
                message: "user saved successfully",
            });
        }
    });
});

router.post("/login", verifyToken, async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "missing required fields",
        });
        return;
    }

    const { email, password } = req.body;

    let existingUser = await User.findOne({ email: email });
    if (!existingUser) {
        res.status(400).send({
            message: "invalid credentials",
        });
        return;
    }

    const match = await bcrypt.compare(password, existingUser.password);

    if (!match) {
        res.status(400).send({
            message: "invalid credentials",
        });
        return;
    }

    const token = jwt.sign(
        {
            userid: existingUser.userid,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
    });

    res.status(200).send({
        message: "login successful",
    });
});

router.get("/logout", verifyToken, (req, res) => {
    res.clearCookie("token");
    res.status(200).send({
        message: "logout successful",
    });
});

router.get("/refresh-token", verifyToken, (req, res) => {
    const token = jwt.sign(
        {
            userid: req.user.userid,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN,
        }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: true,
    });

    res.status(200).send({
        message: "token refreshed",
    });
});
