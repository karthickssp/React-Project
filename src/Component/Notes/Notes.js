import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
import './Notes.css'
function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="nbg">
    <Link to={`/`}><ReplyIcon class="bback"/></Link>

      <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div></div>
  );
}

export default Notes;
