import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByCategory } from '../store/actions/postActions';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const ProductsPage = () => {
  const posts = useSelector(state => state.posts.postsByCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsByCategory('60d788aee61f64154ce18551'));
  }, [dispatch]);

  return (
    <div className="container">
      <NoteForm catId={'60d788aee61f64154ce18551'} catName={'products'} />
      <NoteList notes={posts} />
    </div>
  );
};

export default ProductsPage;
