import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import styles from "./Registration.module.scss";
import { Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistration, selectIsAuth } from "../../redux/slices/auth";

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "Вася Пупкин",
      email: "vasya@test.ru",
      password: "qwertyu",
    },
    mode: "onChange",
  });

  if (isAuth) {
    return <Navigate to="/" />;
  }

  const onSubmit = async (values) => {
    console.log(values);
    const data = await dispatch(fetchRegistration(values));

    if (!data.payload) {
      return alert("Не удалось зарегистрироваться!" + `${data}`);
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <div className={styles.registrationForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.TextFild}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "Укажите полное имя" })}
            />
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", { required: "Укажите почту" })}
            />
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", { required: "Укажите пароль" })}
            />
          </div>

          <Button text="Register" type="submit" />
        </form>
      </div>
    </div>
  );
};
