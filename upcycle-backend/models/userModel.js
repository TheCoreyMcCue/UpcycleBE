import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
  comment: { type: Number, required: true, default: 0 },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // isLister: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    reviews: [reviewSchema],
    rating: {
      type: number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
