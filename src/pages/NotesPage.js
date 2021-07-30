import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import s from '../styles/Notes.module.scss';
import { removePost } from '../store/actions/postActions';


const NotesPage = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  let notes = postsByCategory(posts, 'notes');

   const deleteNote = id => {
    dispatch(removePost(id));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
       <div className={s.content}>
        {notes.map((note, index) => (
          <div key={index} className={s.note}>
            <div className={s.head}>
              <div className={s.title}>{note.title}</div>
              <div onClick={() => deleteNote(note._id)}>
                  Del
              </div>
            </div>
            {note.content ? (
              <div className={s.content}>{note.content}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesPage;