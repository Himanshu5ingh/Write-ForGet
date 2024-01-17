import React from "react";
import './Note.css'
import pin from '../assets/pin.png'

const Note = ({ id, text, editHandler, deleteHandler, pinHnadler }) => {
  return (
    <div>
      <div className="note">
        <div className="note-body">{text}</div>
        <div className="note-footer">
          <button className="note-save" onClick={() => { deleteHandler(id) }}>Delete</button>&nbsp;
          <button className="pin-note" onClick={() => { pinHnadler(id) }}><img src={pin} style={{ height: "10px", width: "10px" }} alt="pins" /></button>&nbsp;
          <button
            className="note-edit" onClick={() => editHandler(id, text)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Note;
