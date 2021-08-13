import React from 'react';
import { useDispatch } from 'react-redux';
import { hideError } from '../../store/actions';
import { Modal } from 'antd';

const ModalError = ({ text }) => {
  const dispatch = useDispatch();

  const close = () => {
    console.log('OK');
    dispatch(hideError());
  };

  function error() {
    Modal.confirm({
      title: 'Ошибка',
      content: text,
      onOk() {
        console.log('OK');
      },
      afterClose(){close()} 
    });
  }

  return <>{error()}</>;
};

export default ModalError;
