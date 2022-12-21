import React, { useEffect, useState } from "react";
import { MdOutlineVerticalDistribute } from "react-icons/md";
// import { notesRef } from "./firebase";
import { db } from "./firebase";
import { onValue, ref } from "firebase/database";

const CreateNotes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState();
  const createNote = (e) => {
    e.preventDefault();
    const item = {
      task: note,
      done: false,
    };
    // notesRef.push(item);
    setNote("");
  };

  // Read Data
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        console.log("data: ", data);
        console.log("Object.values: ", Object.values(data));
        setNotes(Object.values(data));
        // Object.values(data).map((item) => {
        //   setNotes((oldArray) => [...oldArray, item]);
        // });
      }
    });
  }, []);

  return (
    <div>
      <form onSubmit={createNote}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Create a Note.."
        />
      </form>
      {console.log("notes in jsx: ", notes)}
      {notes && notes.map((note) => <h4>{note.task}</h4>)}
    </div>
  );
};

export default CreateNotes;
