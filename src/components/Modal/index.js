import React from 'react';
import { useDispatch } from 'react-redux';
import {hideError} from '../../store/actions';
import { Modal } from 'antd';

const Modal = ({ text }) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(hideError());
  };

  return (
    <>
      <Modal title="Ошибка" visible={true} onCancel={close}>
        <p>{text}</p>
      </Modal>
    </>
  );
};

export default Modal;
