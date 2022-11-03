import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteNote } from "../hooks/customHooks"; 

const Note = ({ title, content, id }) => {
   const { mutate } = deleteNote();

   return (
      <div className="note">
         <h1>{title}</h1>
         <p>{content}</p>
         <button onClick={() => mutate(id)}><DeleteIcon /></button>
         <button onClick={() => {}}><EditIcon /></button>
         
      </div>
   )
}

export default Note;