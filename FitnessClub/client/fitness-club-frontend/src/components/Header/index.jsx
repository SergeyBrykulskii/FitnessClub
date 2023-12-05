import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../index";
import { Link } from "react-router-dom";
import { logout, selectIsAuth } from "../../redux/slices/auth";

import styles from "./Header.module.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you shure?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.pages}>
        <Link className={styles.logo} to="/">
          <div>F-club</div>
        </Link>
        <Link className={styles.logo} to="/news">
          <div>News</div>
        </Link>
      </div>
      <div className={styles.buttons}>
        {isAuth ? (
          <>
            <Link to="/addMembership">
              <Button text="Add" />
            </Link>
            <Link to="/profile">
              <Button text="Profile" />
            </Link>
            <Link to="/">
              <Button text="Logout" onClick={onClickLogout} />
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/registration">
              <Button text="Registration" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
