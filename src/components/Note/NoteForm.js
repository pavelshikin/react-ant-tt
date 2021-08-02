import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../../styles/Notes.module.scss';
import { Button, Input } from 'antd';
import { Collapse, Collapse } from 'antd';
import { createPost } from '../../store/actions/postActions';
import s from '../../styles/Notes.module.scss';

const { Panel } = Collapse;

const NoteForm = ({ catId, catName }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  function callback(key) {
    console.log(key);
  }

  const addNote = () => {
    const data = {
      title,
      content,
      categoryId: catId,
      categoryName: catName
    };
    dispatch(createPost(data));
    setTitle('');
    setContent('');
  };

  return (
    <div className={s.noteFormBox}>
      <Collapse onChange={callback}>
        <Panel header="Добавить" className={s.panel}>
          <div className={s.noteForm}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              label="Заголовок"
              type="text"
              style={{ marginTop: 10, background: '#fff', borderRadius: 5 }}
            />
            <Input
              value={content}
              onChange={e => setContent(e.target.value)}
              minRows={5}
              placeholder="Текст заметки"
              style={{ margin: '10px 0 10px', borderRadius: 5, padding: 10 }}
            />
            <Button style={{ marginTop: 'auto' }} onClick={addNote}>
              Добавить
            </Button>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoteForm;
