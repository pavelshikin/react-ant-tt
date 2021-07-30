import React, { useState } from 'react';
import { Button, Drawer, Menu, Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import s from '../../styles/Navbar.module.scss';

const { Header } = Layout;

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ background: '#ccc' }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default NavBar;
