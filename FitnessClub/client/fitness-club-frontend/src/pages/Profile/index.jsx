import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";
import styles from "./Profile.module.scss";

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state);
    return state.auth;
  });
  const isLoading = user.userInfoStatus === "loading";

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      {!isLoading && (
        <div>
          <p>Name: {user.userInfo.name}</p>
          <p>Email: {user.userInfo.email}</p>
          <p>Created At: {user.userInfo.createdAt}</p>
          <p>Updated At: {user.userInfo.updatedAt}</p>
        </div>
      )}
    </div>
  );
};
