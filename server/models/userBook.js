const { Schema } = require('mongoose');
const promptSchema = require('./Prompt');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');

const userBookSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)  
    },
    prompt: [promptSchema],
    havenNotRead: {
        type: Boolean
        // to be used for bookList. default is false and will be added to user's read books list, otherwise true and will add to a user's to be read list. 
    },
    Title: {
        type: String,
        required: true
    },
    Authors: [
        {
          type: String,
        },
      ],
      image: {
          type: String
      },
      review: [reviewSchema]
    }
);

module.exports = userBookSchema;