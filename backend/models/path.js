const mongoose = require("mongoose");

const pathSchema = new mongoose.Schema({

    start:{
        type: String,
        required: true,
    },
    destination:{
        type: String,
        required: true,
    },
    stops:{
        type: [String],
        required: true,
    },
    }
);

module.exports = mongoose.model("Paths", pathSchema, "paths");
