import React, { useState, useEffect } from 'react';

const NoteAdd = ({ onAddNote, onCancel, initialNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [mood, setMood] = useState('');

    useEffect(() => {
        if (initialNote) {
            setTitle(initialNote.title);
            setContent(initialNote.content);
            setMood(initialNote.mood);
        }
    }, [initialNote]);

    const handleAddNote = () => {
        const newNote = {
            title,
            content,
            mood,
        };

        onAddNote(newNote);
        onCancel();
    };

    return (
        <div>
            <h1>{initialNote ? '노트 수정' : '노트 추가'}</h1>
            <div>
                <label>제목:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>내용:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div>
                <label>기분:</label>
                <input
                    type="text"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                />
            </div>
            <button onClick={handleAddNote}>{initialNote ? '노트 수정' : '노트 추가'}</button>
            <button onClick={onCancel}>취소</button>
        </div>
    );
};

export default NoteAdd;
