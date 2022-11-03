import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { getNotes } from "../hooks/customHooks"; 

const App = () => {

   const { isLoading, data, isError, error } = getNotes();
   if (isLoading) {
      return <h2>Loading...</h2>
   } else if (isError) {
      return <h2>{error.message}</h2>
   }

   return (
      <div>
         <Header />
         <CreateArea />

         {data?.data.map(note => {
            return <Note 
               key={note._id}
               id={note._id}
               title={note.title}
               content={note.content}
            />
         })}

         <Footer />
      </div>
   )
}

export default App;
