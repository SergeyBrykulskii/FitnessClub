import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../../redux/slices/auth";
import styles from "./Profile.module.scss";
import axios from "axios";

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

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

  const formattedCreatedAt = new Date(user.userInfo.createdAt).toLocaleString();
  const formattedUpdatedAt = new Date(user.userInfo.updatedAt).toLocaleString();

  return (
    <div className={styles.container}>
      {!isLoading && (
        <div>
          <p>Name: {user.userInfo.name}</p>
          <p>Email: {user.userInfo.email}</p>
          <p>Created At: {formattedCreatedAt}</p>
          <p>Updated At: {formattedUpdatedAt}</p>
          <p>Timezone: {timezone}</p>
          <img className={styles.dogImage} src={dogImage} alt="Dog" />
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
};
