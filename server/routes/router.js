import express from "express";
import { getNotes, createNote, deleteNote, updateNote } from "../model/note.js";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;