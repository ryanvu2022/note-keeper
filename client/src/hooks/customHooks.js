import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const url = "https://ryan-keeper.herokuapp.com/notes";

// Get all the notes from database
const getNotes = () => {
   return useQuery(["keeper-notes"], () => axios.get(url));
}

// Create a new note, add it to database
const createNote = () => {
   const queryClient = useQueryClient();
   return useMutation((newNote) => axios.post(url, newNote), {
      onSuccess: () => {
         queryClient.invalidateQueries(["keeper-notes"])
      }
   })
}

// Delete a note
const deleteNote = () => {
   const queryClient = useQueryClient();
   return useMutation(id => axios.delete(`${url}/${id}`), {
      onSuccess: () => {
         queryClient.invalidateQueries(["keeper-notes"])
      }
   });  
}

export { getNotes, createNote, deleteNote };