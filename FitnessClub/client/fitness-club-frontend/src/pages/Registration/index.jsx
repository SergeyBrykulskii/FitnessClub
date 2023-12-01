import React from "react";
import { Navigate } from "react-router-dom";

import styles from "./Registration.module.scss";
import { Button } from "../../components";
export const Registration = () => {
  const isAuth = false;

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Registration</h1>
      <div className={styles.registrationForm}>
        <form>
          <div className={styles.TextFild}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.TextFild}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <Button text="Register" type="submit" />
        </form>
      </div>
    </div>
  );
};
