import Note from './Note'
import AddNote from './AddNote';

const NotesList = ({notes, handleAddNote, handleDeleteNote, handleDoneNote }) => {

    return <div className="notes-list">
        {notes.map((note) => (
            <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            completed={note.completed}
            handleDeleteNote={handleDeleteNote}
            handleDoneNote = {handleDoneNote}
            />
        ))}
        <AddNote handleAddNote = {handleAddNote}/>
    </div>
}

export default NotesList;