import React from "react";
import "./CreateNote.css";

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  const char = 500;
  const charLimit = char - inputText.length;
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        placeholder="Write your note here..."
        maxLength={500}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="note_footer">
        <span className="label">{charLimit} left</span>
        <button onClick={saveHandler} className="note_save">
          save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
