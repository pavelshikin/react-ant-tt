import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { fetchPostsByCategory, fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import NoteForm from '../components/Note/NoteForm';
import NoteList from '../components/Note/NoteList';

const ProductsPage = () => {
  const { user } = useAuth();
  const posts = useSelector(state => state.posts.posts);
  const allPosts = useSelector(state => state.posts.postsByCategory);
  let products = postsByCategory(posts, 'products');
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.roles.indexOf('OWNER' || 'ADMIN') !== -1) {
      dispatch(fetchPostsByCategory('60d788aee61f64154ce18551'));
    }
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <NoteForm catId={'60d788aee61f64154ce18551'} catName={'products'} />
      <NoteList notes={products} allPosts={allPosts} checkBox={true} />
    </div>
  );
};

export default ProductsPage;
