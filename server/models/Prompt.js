const { Schema, model,  } = require('mongoose');

// A prompt acts as a category that you would assign to a book

const promptSchema = new Schema(
  {
    // eg. First Row, First Prompt || Third Row, Fourth Prompt
    promptLocation: {
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
    hardMode: {
      type: String,
      required: true
    }
  }
);

const Prompt = model('Prompt', promptSchema);

// module.exports = promptSchema;

