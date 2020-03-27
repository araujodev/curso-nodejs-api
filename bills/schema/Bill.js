import mongoose from "mongoose";

const Bill = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Bill", Bill);
