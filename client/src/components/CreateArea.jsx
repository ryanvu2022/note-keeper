import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { createNote } from "../hooks/customHooks";

const CreateArea = () => {
  const [isExpanded, setExpanded] = useState(false);

  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputText(prevInput => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }
  
  const { isLoading, isError, mutate } = createNote();
  if (isLoading) {
    return <h2>Adding note...</h2>
  } else if (isError) {
    return <h2>{mutation.error.message}</h2>
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(inputText);
    setInputText({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input 
            onChange={handleChange} 
            value={inputText.title} 
            name="title" 
            placeholder="Title"       
          />
        )}
        <textarea 
          onClick={() => setExpanded(true)}
          onChange={handleChange} 
          value={inputText.content} 
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1}         
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
