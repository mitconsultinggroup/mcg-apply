import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
});

const DataModel = mongoose.model("user", DataSchema);
module.exports = DataModel;
