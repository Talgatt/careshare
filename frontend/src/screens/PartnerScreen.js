import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsPartner } from "../actions/partnerActions";

export default function PartnerScreen(props) {
  const partnerId = props.match.params.id;

  const partnerDetails = useSelector((state) => state.partnerDetails);

  console.log("partner details", partnerDetails);
  const { loading, partner } = partnerDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsPartner(partnerId));
  }, [dispatch]);

  return (
    <div>
      Product HomeScreen
      {partner && <div>{partner.firstName}</div>}
      <div></div>
    </div>
  );
}
