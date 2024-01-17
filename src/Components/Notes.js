import React, { useEffect, useState } from "react";
import "./Notes.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import PinNote from './PinNote'


const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([])
  const [editToggle, setEditToggle] = useState(null);

  const deleteHandler = (id) => {
    const newNotes = notes.filter(n => n.id !== id)
    setNotes(newNotes)
  };
  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };
  const pinHnadler = () => {

  }
  const saveHandler = () => {
    if (editToggle) {
      setNotes(notes.map((note) =>
        note.id === editToggle ?
          { ...note, text: inputText }
          : note))
    }
    else {
      setNotes((prevNotes) => [
        ...prevNotes,
        { id: new Date().getTime(), text: inputText },
      ])
    }
    setInputText("");
    setEditToggle(null)
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    // console.log(data, 'retrieve from local');
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    notes.length && localStorage.setItem("Notes", JSON.stringify(notes));
    // console.log(notes + "save to local")
  }, [notes]);


  return (
    <>
      <div className="notes">
        {
          notes.map((note) =>
            editToggle === note.id ? <CreateNote
              inputText={inputText}
              setInputText={setInputText}
              saveHandler={saveHandler}
            />
              :
              <Note
                key={note.id}
                id={note.id}
                text={note.text}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                pinHnadler={pinHnadler} />
          )}
        {
          editToggle === null ?
            <CreateNote
              inputText={inputText}
              setInputText={setInputText}
              saveHandler={saveHandler}
            /> : <></>
        }
      </div >
      <PinNote
      />
    </>
  );
};

export default Notes;
