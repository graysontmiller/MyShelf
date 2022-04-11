const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    reviewTitle: {
      type: String,
    },
    reviewText: {
      type: String,
      required: 'You need to create a review!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    }
  },
  
);


module.exports = reviewSchema;
