import React from "react";

import styles from "./Login.module.scss";

import { Button } from "../../components";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const isAuth = false;

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.registrationForm}>
        <form>

          <div className={styles.TextFild}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <Button text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};
