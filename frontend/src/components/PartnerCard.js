import React from "react";
import TemPhoto from "../Assets/images/photo-1.jpg";

export default function PartnerCard(props) {
  //console.log("props", props);
  const { partner } = props;

  return (
    <div>

      <div key={partner._id || partner.id} className="card">
        <div className="card-col-1">
          <a href={`/partner/${partner._id || partner.id}`}>
            <img className="card-image" src={partner.image} alt="Image Not Available"/>
          </a>
        </div>
        <div className="card-body">
          <div className="card-title"><a href={`/partner/${partner._id || partner.id}`}><h3>{partner.firstName}</h3></a></div>

          <div className="card-text">
            <div className="card-col-2">
              <p>{partner.university}</p>
              <p>No of Children #1</p>
              <p>Child age: {partner.childAge}</p>
            </div>

            <div className="card-col-3">
              <p>Looking for care: Open</p>
              <p>Ready to care: Open</p>
              <p>Contact Info: {partner.phone}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
