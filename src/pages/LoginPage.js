import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import s from '../styles/Login.module.scss';
import api from '../utilits/api';
import { validateEmail } from '../utilits/validateEmail';
import { Button, Input } from 'antd';

function LoginPage() {
  const { login, isAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (isAuth) return <Redirect push to="/notes" />;

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
          return <Redirect push to="/notes" />;
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
        <div className={s.error}>{error}</div>
        <Button
          style={{ marginTop: 'auto', fontWeight: '500' }}
          onClick={signIn}
        >
          Войти
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
