import React, { useState } from 'react';
import NoteAdd from './NoteAdd';
import '../index.css';

const NoteMain = () => {
    const [notes, setNotes] = useState([]);
    const [addingNote, setAddingNote] = useState(false);
    const [editingNote, setEditingNote] = useState(null);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const editNote = (index) => {
        setEditingNote(notes[index]);
        setAddingNote(true);
    };

    const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    const handleAddNoteClick = () => {
        setAddingNote(true);
        setEditingNote(null);
    };

    const handleCancelAddNote = () => {
        setAddingNote(false);
    };

    return (
        <div className='mainLayout'>
            {addingNote ? (
                <NoteAdd
                    onAddNote={(note) => {
                        if (editingNote) {
                            const updatedNotes = [...notes];
                            updatedNotes[notes.indexOf(editingNote)] = note;
                            setNotes(updatedNotes);
                        } else {
                            addNote(note);
                        }
                    }}
                    onCancel={handleCancelAddNote}
                    initialNote={editingNote}
                />
            ) : (
                <div className='secondLayout'>
                    {notes.map((note, index) => (
                        <p className='listLayout' key={index} onClick={() => editNote(index)}>
                            {note.title}{' '}
                            <button className='shortButton' onClick={(e) => { e.stopPropagation(); deleteNote(index); }}>
                                삭제
                            </button>
                        </p>
                    ))}
                    <button className='longButton' onClick={handleAddNoteClick}>노트 추가</button>
                </div>
            )}
        </div>
    );
};

export default NoteMain;
