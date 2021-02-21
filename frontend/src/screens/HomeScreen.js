import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listPartners } from "../actions/partnerActions";

import { listUsers } from "../actions/userActions";
import PartnerCard from "../components/PartnerCard";
import { partnerListReducer } from "../reducers/partnerReducer";

export default function HomeScreen() {
  const partnerList = useSelector((state) => state.partnerList);
  const { partners } = partnerList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPartners());
  }, [dispatch]);
  return (
    <div>
      HomeScreen
      <div>
        {partners &&
          partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
      </div>
    </div>
  );
}
