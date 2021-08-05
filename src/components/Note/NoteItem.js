import React from 'react';
import { useDispatch } from 'react-redux';
import s from '../../styles/Notes.module.scss';
import { removePost } from '../../store/actions/postActions';
import { DeleteFilled } from '@ant-design/icons';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const deleteNote = id => {
    dispatch(removePost(id));
  };

  return (
    <div className={s.note}>
      <div className={s.head}>
        <div className={s.title}>{note.title}</div>
        <div onClick={() => deleteNote(note._id)}>
          <DeleteFilled className={s.deleteBtn} />
        </div>
      </div>
      {note.content ? <div className={s.content}>{note.content}</div> : null}
    </div>
  );
};

export default NoteItem;
