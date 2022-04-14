// const { Schema, model,  } = require('mongoose');
// const bookSchema = require('./Book');

// // A prompt acts as a category that you would assign to a book

// const promptSchema = new Schema(
//   {
//     // eg. First Row, First Prompt || Third Row, Fourth Prompt
//     promptLocation: {
//       type: String,
//       required: true
//     },
//     prompt: {
//       type: String,
//       required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     hardMode: {
//       type: String,
//       required: true
//     },
//     book: [bookSchema]
//   }
// );

// const Prompt = model('Prompt', promptSchema);

// // module.exports = promptSchema;

