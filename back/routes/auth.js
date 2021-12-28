const express = require("express");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
//import { modelNames } from "mongoose";

const router = express.Router();


router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ userName: req.body.userName });
		if (!user) {
			res.status(404).json("user not found");
			return;
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			res.status(400).json("wrong password");
			return;
		}

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			userName: req.body.userName,
			email: req.body.email,
			password: hashedPass,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
