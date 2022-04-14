const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema(
  {
    reviewTitle: {
      type: String,
    },
    reviewText: {
      type: String,
      required: 'You need to create a review!',
    },
    reviewScore: {
      type: String
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
  {
    toJSON: {
      getters: true
    }
  }
  
);


module.exports = reviewSchema;
