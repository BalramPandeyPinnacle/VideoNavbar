import React, { useState } from 'react';
import './Notes.css';
import {MdModeEditOutline} from "react-icons/md"
import{MdDelete} from "react-icons/md"
import{FaHeading} from "react-icons/fa"
import{BsTypeBold} from "react-icons/bs"
import{MdOutlineFormatItalic} from "react-icons/md"
import {GoListOrdered} from "react-icons/go"
import {GoListUnordered} from "react-icons/go"


const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [editIndex, setEditIndex] = useState(null);

  const addNote = () => {
    if (editIndex !== null) {
      updateNote(editIndex, currentNote);
      setEditIndex(null);
    } else {
      const newNote = { time: currentTime, text: currentNote };
      setNotes([...notes, newNote]);
    }
    setCurrentNote('');
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index) => {
    const noteToEdit = notes[index];
    setCurrentNote(noteToEdit.text);
    setCurrentTime(noteToEdit.time);
    setEditIndex(index);
  };

  const updateNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = { ...updatedNotes[index], text: newText };
    setNotes(updatedNotes);
  };

  const handleTextChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleStyle = (style) => {
    const textarea = document.getElementById('note-textarea');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;

    switch (style) {
      case 'bold':
        setCurrentNote((prevNote) => prevNote.slice(0, startPos) + '**' + prevNote.slice(startPos, endPos) + '**' + prevNote.slice(endPos));
        break;
      case 'italic':
        setCurrentNote((prevNote) => prevNote.slice(0, startPos) + '*' + prevNote.slice(startPos, endPos) + '*' + prevNote.slice(endPos));
        break;
      case 'ordered-list':
        setCurrentNote((prevNote) => prevNote.slice(0, startPos) + '\n1. ' + prevNote.slice(startPos));
        break;
      case 'unordered-list':
        setCurrentNote((prevNote) => prevNote.slice(0, startPos) + '\n- ' + prevNote.slice(startPos));
        break;
      case 'heading':
        setCurrentNote((prevNote) => prevNote.slice(0, startPos) + '# ' + prevNote.slice(startPos));
        break;
      default:
        break;
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <label>Current Time: {currentTime}s</label>
        <input
          type="number"
          value={currentTime}
          onChange={(e) => setCurrentTime(parseInt(e.target.value))}
        />
      </div>
      <div className="notes-input">
        <div className="input-container">
          <textarea
            id="note-textarea"
            value={currentNote}
            onChange={handleTextChange}
            placeholder="Enter your note..."
          />
          <div className="styling-buttons">
           <button onClick={() => handleStyle('heading')}><FaHeading size={20}/>
           </button>
            <button onClick={() => handleStyle('bold')}><BsTypeBold size={20}/></button>
            <button onClick={() => handleStyle('italic')}><MdOutlineFormatItalic size={20}/></button>
            <button onClick={() => handleStyle('ordered-list')}><GoListOrdered size={20}/></button>
            <button onClick={() => handleStyle('unordered-list')}><GoListUnordered size={20}/></button>
            
          </div>
          <button className="add-btn" onClick={addNote}>Add Note</button>
        </div>
        <div className='noteFilter'>
      <div>
          <select defaultValue="All Lectures" className='allLectures' >
            <option value="1">All Lectures</option>
            <option value="2">Current Lecture</option>
          </select>
        </div>
        <div>
          <select defaultValue="Shorted by Most Recent" className='shortedby'>
            <option value="3">Shorted by Most Recent</option>
            <option value="4">Shorted by oldest</option>
          </select>
        </div>
      </div>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div className="note-item" key={index}>
            <div className="note-content">
              <div className='note-header'>
              <span className='note-content-time'>&nbsp;&nbsp;{note.time}:S&nbsp;&nbsp;</span>
              <div className="note-actions">
              {editIndex === index ? (
                <button className="notes-btn save-btn" onClick={() => addNote()}>Save</button>
              ) : (
                <>
                  <button className="notes-btn edit-btn" onClick={() => editNote(index)}><MdModeEditOutline size={20}/>
                  </button>
                  <button className="notes-btn delete-btn" onClick={() => deleteNote(index)}><MdDelete size={20}/></button>
                </>
              )}
              </div>


            </div>
              {editIndex === index ? (
                <textarea
                  value={currentNote}
                  onChange={handleTextChange}
                />
              ) : (
                <span>{note.text}</span>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
