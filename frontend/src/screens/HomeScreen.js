

import Header from "./Header";
import Footer from "./Footer";


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

      <Header />
      <div className="main-container">

        <div>
        {partners &&
          partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </div>

        {/* <nav aria-label="Page navigation example">
          <ul className="pagination float-right">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav> */}
        

      </div>
      <Footer/>
    </div>
  );
}
