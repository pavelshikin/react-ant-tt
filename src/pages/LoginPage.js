import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import s from '../styles/Login.module.scss';
import api from '../utilits/api';
import { validateEmail } from '../utilits/validateEmail';
import { Input } from 'antd';
import { Btn } from '../theme';

function LoginPage() {
  const { login, isAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  if (isAuth) return <Redirect push to={from.pathname} />;

  const signIn = async () => {
    const data = {
      email,
      password
    };
    if (!data.email || !data.password) {
      setError('Заполните все поля');
      return;
    }
    if (!validateEmail(data.email)) {
      setError('Введите валидный email');
      return;
    }

    await api
      .post('auth/login', data)
      .then(res => {
        if (res.status === 200) {
          login(res.data);
          setError('');
          return <Redirect push to="/" />;
        } else {
          setError('Ошибка');
        }
      })
      .catch(function(error) {
        if (error.response.status === 401) {
          setError(error.response.data.message);
        } else {
          setError('Ошибка на сервере');
        }
      })
      .finally(() => {});
    setEmail('');
    setPassword('');
  };

  return (
    <div className={'container'}>
      <div className={s.box}>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="Email"
          type="email"
          style={{ marginTop: 10 }}
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          label="Password"
          style={{ margin: '20px 0 10px' }}
        />
        <div className={'error'}>{error}</div>
        <Btn style={{ marginTop: 'auto' }} onClick={signIn}>
          Войти
        </Btn>
      </div>
    </div>
  );
}

export default LoginPage;
