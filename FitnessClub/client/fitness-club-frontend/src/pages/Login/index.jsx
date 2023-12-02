import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import styles from "./Login.module.scss";
import { useForm } from 'react-hook-form';

import { Button } from "../../components";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { 
    register,
    handleSubmit, 
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'serega@gmail.com',
      password: 'password',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.registrationForm}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.TextFild}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
              {...register('email', { required: 'Email missed' })}/>
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
              {...register('password', { required: 'Password missed' })} />
          </div>

          <Button text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};
