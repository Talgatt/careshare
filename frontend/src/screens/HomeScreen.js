import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listUsers } from "../actions/userActions";
import PartnerCard from "../components/PartnerCard";
import UserCard from "../components/PartnerCard";

export default function HomeScreen() {
  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div>
      HomeScreen
      <div>
        {console.log(users)}
        {users &&
          users.map((user) => <PartnerCard key={user._id} partner={user} />)}
      </div>
    </div>
  );
}
