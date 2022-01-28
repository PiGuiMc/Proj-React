import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header"

const App = () =>{
  const [notes, setNotes] = useState([
]);

const [searchText, setSearchText] = useState('')

const [darkMode, setDarkMode] = useState(false);

useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  )

  if(savedNotes){
    setNotes(savedNotes);
  }
},[])

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes])

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
    completed: true
  }

  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}

const doneNote = (id) => {
  const newNotes = notes.filter(note => {
    if(note.completed){
      note.completed = false
    }else{
      note.completed = true
    }
    console.log(id, note.completed)
    return note;
  });

  setNotes(newNotes)
};

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
          <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote = {deleteNote}
          handleDoneNote = {doneNote}
          />
        </div>
    </div>
  )
}

export default App;