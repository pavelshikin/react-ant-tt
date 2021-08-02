import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const NotesPage = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  let notes = postsByCategory(posts, 'notes');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <NoteForm catId={'60d732d173ec823842af9ad2'} catName={'notes'} />
      <NoteList notes={notes} />
    </div>
  );
};

export default NotesPage;
