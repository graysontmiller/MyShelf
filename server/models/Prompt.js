const { Schema, model } = require('mongoose');
const userBookSchema = require('./userBook')

const promptSchema = new Schema(
  {
    // eg. name of the whole bingo card: "2022 Bingo"
    cardName: {
      type: String,
    },
    prompt: {
      type: String,
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

// const Prompt = model('Prompt', promptSchema);

module.exports = promptSchema;
