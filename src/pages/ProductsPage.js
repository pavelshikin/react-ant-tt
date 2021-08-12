import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../store/actions/postActions';
import { postsByCategoryId } from '../utilits/postsByCategory';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const ProductsPage = () => {
  const posts = useSelector(state => state.posts.allPosts);
  const dispatch = useDispatch();
  let products = postsByCategoryId(posts, 'products');

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <NoteForm catId={'60d788aee61f64154ce18551'} catName={'products'} />
      <NoteList notes={products} />
    </div>
  );
};

export default ProductsPage;
