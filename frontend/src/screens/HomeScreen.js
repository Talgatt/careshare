

import Header from "./Header";
import Footer from "./Footer";
import TemPhoto from "../Assets/images/photo-1.jpg";

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
      <div className="registration-main ">



        <div className="card">
          <div className="card-col-1">
            <img className="card-image" src={TemPhoto} />
          </div>
          <div className="card-body">
            <div className="card-title"><h3>Card Title</h3></div>
            <div className="card-text">
              <div className="card-col-2">
                <p>University Name</p>
                <p>No of Children</p>
                <p>Ages</p>
              </div>

              <div className="card-col-3">
                <p>Looking for care</p>
                <p>Ready to care</p>
                <p>Contact Info</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-col-1">
            <img className="card-image" src={TemPhoto} />
          </div>
          <div className="card-body">
            <div className="card-title"><h3>Card Title</h3></div>
            <div className="card-text">
              <div className="card-col-2">
                <p>University Name</p>
                <p>No of Children</p>
                <p>Ages</p>
              </div>

              <div className="card-col-3">
                <p>Looking for care</p>
                <p>Ready to care</p>
                <p>Contact Info</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-col-1">
            <img className="card-image" src={TemPhoto} />
          </div>
          <div className="card-body">
            <div className="card-title"><h3>Card Title</h3></div>
            <div className="card-text">
              <div className="card-col-2">
                <p>University Name</p>
                <p>No of Children</p>
                <p>Ages</p>
              </div>

              <div className="card-col-3">
                <p>Looking for care</p>
                <p>Ready to care</p>
                <p>Contact Info</p>
              </div>
            </div>
          </div>
        </div>


        <div className="card">
          <div className="card-col-1">
            <img className="card-image" src={TemPhoto} />
          </div>
          <div className="card-body">
            <div className="card-title"><h3>Card Title</h3></div>
            <div className="card-text">
              <div className="card-col-2">
                <p>University Name</p>
                <p>No of Children</p>
                <p>Ages</p>
              </div>

              <div className="card-col-3">
                <p>Looking for care</p>
                <p>Ready to care</p>
                <p>Contact Info</p>
              </div>
            </div>
          </div>
        </div>



        <nav aria-label="Page navigation example">
          <ul className="pagination float-right">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>


      </div>

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
