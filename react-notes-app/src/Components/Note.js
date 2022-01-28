import { MdDeleteForever, MdDone } from 'react-icons/md'

const Note = ({id, text,date, handleDeleteNote, handleDoneNote }) => {
    return (
            <div className="note">
                <span>
                    {text}
                </span>

                <div className="note-footer">
                    <small>{date}</small>
                    <MdDone 
                        onClick={()=> handleDoneNote(id)}
                        className='done-icon' 
                        size='1.3em'
                    />
                    <MdDeleteForever 
                        onClick={()=> handleDeleteNote(id)}
                        className='delete-icon' 
                        size='1.3em'
                    />
                </div>
            </div>
     );
}
 
export default Note;