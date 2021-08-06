import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions/postActions';
import { postsByCategory } from '../utilits/postsByCategory';
import { Badge, Avatar } from 'antd';
import {
  ProfileOutlined,
  ShoppingCartOutlined,
  ReadOutlined
} from '@ant-design/icons';
import s from '../styles/Home.module.scss';

const HomePage = () => {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const notes = postsByCategory(posts, 'notes');
  const products = postsByCategory(posts, 'products');
  const films = postsByCategory(posts, 'films');
  const books = postsByCategory(posts, 'books');

  let menuItems = [
    {
      count: notes.length,
      text: 'Заметки',
      icon: <ProfileOutlined style={{ fontSize: 54 }} />
    },
    {
      count: products.length,
      text: 'Продукты',
      icon: <ShoppingCartOutlined style={{ fontSize: 54, zIndex: 20 }} />
    },
    {
      count: films.length + books.length,
      text: 'Фильмы/Книги',
      icon: <ReadOutlined style={{ fontSize: 54 }} />
    }
  ];

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={s.items}>
        {menuItems.map(({ text, count, icon }, index) => (
          <div key={index} className={s.item}>
            <Badge count={count} color={'#4bffcc'}>
              {icon}
            </Badge>
            <h3>{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
