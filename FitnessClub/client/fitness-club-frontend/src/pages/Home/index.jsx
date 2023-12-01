import React from "react";
import Membership from "../../components/Membership";

import styles from "./Home.module.scss";

export const Home = () => {
  const memberships = [
    {
      name: "Membership 1",
      description: "Description 1",
      price: 10,
      gym: "Gym 1",
      dates: ["2023-01-01", "2023-06-30"],
    },
    {
      name: "Membership 2",
      description: "Description 2",
      price: 20,
      gym: "Gym 2",
      dates: ["2023-02-01", "2023-07-31"],
    },
    {
      name: "Membership 3",
      description: "Description 3",
      price: 30,
      gym: "Gym 3",
      dates: ["2023-03-01", "2023-08-31"],
    },
    {
      name: "Membership 3",
      description: "Description 3",
      price: 30,
      gym: "Gym 3",
      dates: ["2023-03-01", "2023-08-31"],
    },
    {
      name: "Membership 3",
      description: "Description 3",
      price: 30,
      gym: "Gym 3",
      dates: ["2023-03-01", "2023-08-31"],
    },
    {
      name: "Membership 3",
      description: "Description 3",
      price: 30,
      gym: "Gym 3",
      dates: ["2023-03-01", "2023-08-31"],
    },
  ];

  return (
    <div>
      <h1>Home</h1>
      <div className={styles.membershipList}>
        {memberships.map((membership, index) => (
          <Membership
            key={index}
            name={membership.name}
            description={membership.description}
            price={membership.price}
            gym={membership.gym}
            startDate={membership.dates[0]}
            endDate={membership.dates[1]}
          />
        ))}
      </div>
    </div>
  );
};
