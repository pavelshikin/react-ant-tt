import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const ProductsPage = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  let notes = postsByCategory(posts, 'products');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <NoteForm catId={'60d788aee61f64154ce18551'} catName={'products'} />
      <NoteList notes={notes} />
    </div>
  );
};

export default ProductsPage;
