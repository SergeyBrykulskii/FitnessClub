import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";
import styles from "./Profile.module.scss";
import axios from "axios";

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    console.log(state);
    return state.auth;
  });

  const isLoading = user.userInfoStatus === "loading";
  const [timezone, setTimezone] = useState("");
  const [dogImage, setDogImage] = useState("");
  const [joke, setJoke] = useState("");

  useEffect(() => {
    dispatch(fetchAuthMe());

    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(currentTimezone);

    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setDogImage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + " " + response.data.punchline);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <p>Timezone: {timezone}</p>
          <img src={dogImage} alt="Dog" />
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
};
