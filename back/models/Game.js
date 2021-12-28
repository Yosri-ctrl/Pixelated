const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		gameName: {
			type: String,
			require: true,
			unique: true,
		},
		type: {
			type: Array,
			default: [],
		},
		difficulty: {
			type: Array,
			enum: ["Easy", "Medium", "Hard"],
		},
		rate: {
			type: Double,
			default: 0.0,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Game", UserSchema);
