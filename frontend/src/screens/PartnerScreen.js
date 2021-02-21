import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsPartner } from "../actions/partnerActions";
import TempPhoto from "../Assets/images/photo-1.jpg"

import Header from "./Header";
import Footer from "./Footer";

export default function PartnerScreen(props) {
  console.log('idishka', props)
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
      <Header/>
      
      <div className="main-container">
      <h3>{partner && <div>{partner.firstName}</div>}</h3>

      <div className="userPersonalInfo">
        {console.log(partner)}
        <div className="userProfile-img"><img className="userProfileImage" src={partner.image} /></div>
      </div>
      <div><p>University</p></div>
      </div>
      <Footer/>
    </div>
  );
}
