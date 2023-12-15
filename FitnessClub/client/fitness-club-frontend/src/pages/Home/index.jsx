import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Membership from "../../components/Membership";

import styles from "./Home.module.scss";
import { fetchMemberships } from "../../redux/slices/memberships";

export const Home = () => {
  const dispatch = useDispatch();
  const { memberships } = useSelector((state) => {
    console.log(state);
    return state.memberships;
  });
  const isMembershipsLoading = memberships.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchMemberships());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div className={styles.membershipList}>
        {(isMembershipsLoading ? [...Array(0)] : memberships.items).map(
          (membership, index) =>
            isMembershipsLoading ? (
              <div>Loading...</div>
            ) : (
              <Membership
                key={index}
                id={membership._id}
                name={membership.name}
                description={membership.description}
                price={membership.price}
                gym={membership.gym.name}
                startDate={membership.startDate}
                endDate={membership.endDate}
              />
            )
        )}
      </div>
    </div>
  );
};
