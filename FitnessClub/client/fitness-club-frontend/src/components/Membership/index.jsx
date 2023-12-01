import React from "react";
import styles from "./Membership.module.scss";

const Membership = ({ name, description, price, gym, startDate, endDate }) => {
  return (
    <div className={styles.membershipCard}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Price: ${price}</p>
      <p className={styles.gym}>Gym: {gym}</p>
      <p className={styles.dates}>
        Dates: {startDate} - {endDate}
      </p>
    </div>
  );
};

export default Membership;