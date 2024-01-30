import React, { useState, useEffect } from 'react';
import '../index.css';

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
            <div className='secondLayout'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력해주세요"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력해주세요"
                />
                <input
                    type="text"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    placeholder="기분을 입력해주세요"
                />
            </div>
            <div className='addbuttonLayout'>
                <button className='longButton' onClick={handleAddNote}>{initialNote ? '노트 수정' : '노트 추가'}</button>
                <button className='shortButton' onClick={onCancel}>취소</button>
            </div>
        </div>
    );
};

export default NoteAdd;
