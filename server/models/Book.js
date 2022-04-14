const { Schema, model } = require('mongoose');
const promptSchema = require('./Prompt');
const reviewSchema = require('./Review');
const dateFormat = require('../utils/dateFormat');
const { json } = require('express/lib/response');

const bookSchema = new Schema(
  {
    
    bookTitle: {
      type: String,
      required: 'You need to include the title!',
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reviews: [reviewSchema],
    authors: {
      type: String
    },
    image: {
      type: String
    },
    bingoPrompt: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

bookSchema.virtual('isReviewed').get(function() {
  return this.reviews.length;
});

const Book = model('Book', bookSchema);

module.exports = Book;
