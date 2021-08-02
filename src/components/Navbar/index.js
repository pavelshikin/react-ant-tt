import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Drawer, Menu, Layout } from 'antd';
import {
  ProfileOutlined,
  MenuOutlined,
  LogoutOutlined,
  HomeFilled,
  ShoppingCartOutlined,
  ReadOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import s from '../../styles/Navbar.module.scss';

const { Header } = Layout;

function NavBar() {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useAuth();
  const history = useHistory();
  const [current, setCurrent] = React.useState(
    String(history.location.pathname)
  );

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const redirect = href => {
    setCurrent(href);
    setVisible(false);
    history.push(href);
  };

  const handleClick = e => {
    setCurrent(e.key);
    setVisible(false);
    history.push(e.key);
    // setTimeout(redirect, 10, e.key);
  };

  const exit = () => {
    logout();
    setSelectedIndex('/login');
    history.push('/login');
  };

  return (
    <>
      <Header className={s.head} style={{ padding: 0 }}>
        <Button
          type="link"
          onClick={showDrawer}
          icon={<MenuOutlined className={s.btmMenu} />}
          size="large"
        />
        <div className={s.rightBox}>
          {user ? (
            <>
              <span>{user.username}</span>
              <Button
                type="link"
                onClick={exit}
                icon={<LogoutOutlined className={s.btnExit} />}
                size="large"
              />
            </>
          ) : (
            ''
          )}
        </div>
      </Header>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ background: '#4d1f77' }}
      >
        <Menu onClick={handleClick} selectedKeys={current}>
          <Menu.Item type="link" key="/" icon={<HomeFilled />}>
            Главная
          </Menu.Item>
          <Menu.Item type="link" key="/notes" icon={<ProfileOutlined />}>
            Заметки
          </Menu.Item>
          <Menu.Item
            type="link"
            key="/products"
            icon={<ShoppingCartOutlined />}
          >
            Продукты
          </Menu.Item>
          <Menu.Item type="link" key="/filmsandbooks" icon={<ReadOutlined />}>
            Фильмы/Книги
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default NavBar;
