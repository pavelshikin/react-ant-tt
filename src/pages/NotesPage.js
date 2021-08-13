import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const NotesPage = () => {
  const { user } = useAuth();
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  let notes = postsByCategory(posts, 'notes');

  useEffect(() => {
    console.log(user.roles);
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
