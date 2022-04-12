const { Schema, model } = require('mongoose');

const promptSchema = new Schema(
  {
    // eg. name of the whole bingo card: "2022 Bingo"
    cardName: {
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
    }
  }
);

module.exports = promptSchema;
