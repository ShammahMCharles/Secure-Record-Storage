const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "content is required to make a note"],
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
