import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import s from '../../styles/Notes.module.scss';
import NoteItem from './NoteItem';
import { Checkbox } from 'antd';

const NoteList = ({ notes, allPosts, checkBox }) => {
  const { user } = useAuth();
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(prevState => !prevState);
  };

  const renderItems = posts => {
    return posts.map((post, idx) => <NoteItem key={idx} note={post} />);
  };

  if (notes.length === 0) {
    return <h2 className={'t-center'}>Нет заметок</h2>;
  }

  return (
    <div className={s.content}>
      {user && user.roles.indexOf('OWNER' || 'ADMIN') !== -1 && checkBox ? (
        <div style={{ overflow: 'auto' }}>
          <Checkbox onChange={onChange} checked={check} className={s.checkBox}>
            Все
          </Checkbox>
        </div>
      ) : (
        ''
      )}

      {check ? renderItems(allPosts) : renderItems(notes)}
    </div>
  );
};

export default NoteList;
