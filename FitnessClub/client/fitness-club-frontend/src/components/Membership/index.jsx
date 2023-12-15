import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../index";
import { Link } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";
import { fetchRemoveMembership} from "../../redux/slices/memberships"

import styles from "./Membership.module.scss";

const Membership = ({
  id,
  name,
  description,
  price,
  gym,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickRemove = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(fetchRemoveMembership(id));
    }
  };

  return (
    <div className={styles.membershipCard}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Price: ${price}</p>
      <p className={styles.gym}>Gym: {gym}</p>
      <p className={styles.dates}>
        Dates: {startDate} - {endDate}
      </p>
      <div className={styles.buttons}>
        {isAuth ? (
          <>
            <Button text="Delete" onClick={onClickRemove} />
            <Link to={`/membership/${id}/edit`}>
              <Button text="Edit" />
            </Link>
            <Button text="More" />
          </>
        ) : (
          <Button text="More" />
        )}
      </div>
    </div>
  );
};

export default Membership;
