import React from "react";
import { Button } from "../index";
import { Link } from 'react-router-dom';

import styles from "./Header.module.scss";

export const Header = () => {
    const isAuth = false;

    return (
        <div className={styles.header}>
            <Link className={styles.logo} to="/">
                <div>F-club</div>
            </Link>
            <div className={styles.buttons}>
                {isAuth ? (
                    <>
                        <Link to="/profile">
                            <Button text="Profile" />
                        </Link>
                        <Link to="/logout">
                            <Button text="Logout" />
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
    )
};