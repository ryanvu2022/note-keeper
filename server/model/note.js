import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
   title: String,
   content: String
})

const Note = mongoose.model("Note", noteSchema);

export const getNotes = async (req, res) => {
   try {
      const notes = await Note.find();
      res.status(200).json(notes);
   } catch (error) {
      res.status(404).json({message: error});
   }
}


export const createNote = async (req, res) => {
   const newNote = new Note(req.body);
   try {
      await newNote.save();
      res.status(201).json(newNote);
   } catch (error) {
      res.status(409).json({message: error});
   }
}

export const deleteNote = async (req, res) => {
   const { id: _id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send("No note with that id.");
   }
   await Note.findByIdAndRemove(_id);
   res.json({ message: "Note deleted successfully" });
}



