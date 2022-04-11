const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const userBookSchema = require('./userBook')

const promptSchema = new Schema(
  {
    // eg. name of the whole bingo card: "2022 Bingo"
    cardName: {
      type: String,
    },
    promptNumber: {
      type: Number,
      required: true
    },
    prompt: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userBooks: [userBookSchema]
  }
);

const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
