import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../../styles/Notes.module.scss';
import { Input } from 'antd';
import { Btn } from '../../theme';
import { Collapse, Collapse } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { createPost } from '../../store/actions/postActions';
import s from '../../styles/Notes.module.scss';

const { Panel } = Collapse;
const { TextArea } = Input;

const NoteForm = ({ catId, catName }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const addNote = () => {
    const data = {
      title,
      content,
      categoryId: catId,
      categoryName: catName
    };
    if (!data.title) {
      setError('Заполните заголовок');
      return;
    }
    dispatch(createPost(data));
    setTitle('');
    setContent('');
  };

  return (
    <div className={s.noteFormBox}>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <PlusCircleOutlined
            rotate={isActive ? 90 : 0}
            style={{ fontSize: 18 }}
          />
        )}
      >
        <Panel header="Добавить" className={s.panel}>
          <div className={s.noteForm}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Заголовок"
              type="text"
              style={{ marginTop: 10, background: '#fff', borderRadius: 5 }}
            />
            <TextArea
              value={content}
              onChange={e => setContent(e.target.value)}
              minRows={5}
              placeholder="Текст заметки"
              style={{ margin: '10px 0 10px', borderRadius: 5, padding: 10 }}
            />
            <div className={'error'}>{error}</div>
            <Btn
              type="primary"
              ghost={false}
              block
              style={{ marginTop: 'auto' }}
              onClick={addNote}
            >
              Добавить
            </Btn>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoteForm;
