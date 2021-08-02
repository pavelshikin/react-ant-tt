import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsByCategory } from '../utilits/postsByCategory';
import { Tabs } from 'antd';
import NoteList from '../components/Note/NoteList';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
import { fetchPosts } from '../store/actions/postActions';

const FilmsAndBooksPage = () => {
  const posts = useSelector(state => state.posts.posts);
  const [value, setValue] = React.useState(0);
  const films = postsByCategory(posts, 'films');
  const books = postsByCategory(posts, 'books');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container" style={{ maxWidth: 900 }}>
      <Tabs
        defaultActiveKey="1"
        centered={true}
        size="large"
        tabBarGutter={100}
      >
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Фильмы
            </span>
          }
          key="1"
        >
          <NoteList notes={films} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Книги
            </span>
          }
          key="2"
        >
          <NoteList notes={books} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default FilmsAndBooksPage;
