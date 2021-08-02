import React from 'react';
import s from '../../styles/Notes.module.scss';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  if (notes.length === 0) {
    return <h2 className={'t-center'}>Нет заметок</h2>;
  }

  return (
    <div className={s.content}>
      {notes.map((note, index) => (
        <NoteItem note={note} key={index} />
      ))}
    </div>
  );
};

export default NoteList;
