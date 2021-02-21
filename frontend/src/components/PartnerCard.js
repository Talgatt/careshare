import React from "react";

export default function PartnerCard(props) {
  const { partner } = props;

  return (
    <div>
      <div key={partner._id || partner.id} className="card">
        <a href={`/partner/${partner._id || partner.id}`}>
          <img className="medium" src={partner.image} alt={partner.firstName} />
        </a>
        <div className="card-body">
          <a href={`/partner/${partner._id || partner.id}`}>
            <h2>{partner.firstName}</h2>
          </a>

          <div>{partner.lastName}</div>
        </div>
      </div>
    </div>
  );
}
