const express = require("express");
const router = express.Router();

const Note = require("../models/Notes");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newNote = await Note.create(req.body);

    res.status(201).json(Note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//READ ONE
router.post("/:id", async (req, res) => {
  try {
    const Note = await res.status(201).json(Note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//UPDATE
router.post("/:id", async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(201).json(Note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//DELETE
router.post("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ error: "Note note found" });
    }

    res.status(201).json(deletedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
