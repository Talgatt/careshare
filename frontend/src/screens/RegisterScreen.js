import React, { useState } from "react";
import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";

import TempPhoto from "../Assets/images/photo-1.jpg";

export default function RegisterScreen() {
  const addChild = () => {
    console.log("Adding another child!: ");
  };
  const user = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [relationship, setRelationship] = useState("");
  const [addressStreetName, setAddressStreetName] = useState("");
  const [addressStreetNumber, setAddressStreetNumber] = useState("");
  const [addressApt, setAddressApt] = useState("");
  const [addressCountry, setAddressCountry] = useState("");
  const [addressPO, setAddressPO] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");
  const [childGender, setChildGender] = useState("");
  const [childAge, setChildAge] = useState("");
  const [childAllergies, setChildAllergies] = useState("");
  const [childDietaryRestrictions, setChildDietaryRestrictions] = useState("");
  const [childAdditionalInformation, setChildAdditionalInformation] = useState(
    ""
  );
  const [password, setPassword] = useState("");

  const userInfo = { firstName, lastName, email, password };

  const dispatch = useDispatch(userInfo);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(registerUser(user));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="registrationBody">
          <div className="column-1">
            <div className="parent-photo-row">
              <img src={TempPhoto} />
            </div>
          </div>

          <div className="column-2">
            <h1 className="registration-column-2-title">Basic Information</h1>
            <div className="info-container">
              <p>
                First Name:{" "}
                <span>
                  <input
                    type="text"
                    value={firstName}
                    id="firstName"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </span>
              </p>
              <p>
                Last Name:{" "}
                <span>
                  <input
                    type="text"
                    value={lastName}
                    id="lastName"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Email:{" "}
                <span>
                  <input
                    type="text"
                    value={email}
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Password:{" "}
                <span>
                  <input
                    type="password"
                    value={password}
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </span>
              </p>
              <p>
                University:{" "}
                <span>
                  <input
                    type="text"
                    value={university}
                    id="university"
                    onChange={(e) => {
                      setUniversity(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Relationship to child:{" "}
                <span>
                  <input
                    type="text"
                    value={relationship}
                    id="relationship"
                    onChange={(e) => {
                      setRelationship(e.target.value);
                    }}
                  />
                </span>
              </p>
            </div>

            <div className="info-container">
              <div>
                <h2 className="info-container-title">Address</h2>
              </div>

              <p>
                Street No.{" "}
                <span>
                  <input
                    type="text"
                    value={addressStreetNumber}
                    id="addressStreetNumber"
                    onChange={(e) => {
                      setAddressStreetNumber(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Street name:{" "}
                <span>
                  <input
                    type="text"
                    value={addressStreetName}
                    id="addressStreetName"
                    onChange={(e) => {
                      setAddressStreetName(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Apartment #:{" "}
                <span>
                  <input
                    type="text"
                    value={addressApt}
                    id="addressApt"
                    onChange={(e) => {
                      setAddressApt(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Postal Code:{" "}
                <span>
                  <input
                    type="text"
                    value={addressPO}
                    id="addressPO"
                    onChange={(e) => {
                      setAddressPO(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Country{" "}
                <span>
                  <input
                    type="text"
                    value={addressCountry}
                    id="addressCountry"
                    onChange={(e) => {
                      setAddressCountry(e.target.value);
                    }}
                  />
                </span>
              </p>
            </div>

            <div className="info-container">
              <h1>Contact Info</h1>

              <p>
                Phone #:{" "}
                <span>
                  <input
                    type="text"
                    value={phone}
                    id="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Emergency contact:{" "}
                <span>
                  <input
                    type="text"
                    value={emergencyContact}
                    id="emergencyContact"
                    onChange={(e) => {
                      setEmergencyContact(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Emergency phone #:{" "}
                <span>
                  <input
                    type="text"
                    value={emergencyPhone}
                    id="emergencyPhone"
                    onChange={(e) => {
                      setEmergencyPhone(e.target.value);
                    }}
                  />
                </span>
              </p>
            </div>

            <div className="info-container">
              <h1>Children</h1>

              <p>
                First Name:{" "}
                <span>
                  <input
                    type="text"
                    value={childFirstName}
                    id="childFirstName"
                    onChange={(e) => {
                      setChildFirstName(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Last Name:{" "}
                <span>
                  <input
                    type="text"
                    value={childLastName}
                    id="childLastName"
                    onChange={(e) => {
                      setChildLastName(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Gender:{" "}
                <span>
                  <input
                    type="text"
                    value={childGender}
                    id="childGender"
                    onChange={(e) => {
                      setChildGender(e.target.value);
                    }}
                  />
                </span>
              </p>
              <p>
                Age:{" "}
                <span>
                  <input
                    type="text"
                    value={childAge}
                    id="childAge"
                    onChange={(e) => {
                      setChildAge(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Allergies:{" "}
                <span>
                  <input
                    type="text"
                    value={childAllergies}
                    id="childAllergies"
                    onChange={(e) => {
                      setChildAllergies(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Dietary Restrictions{" "}
                <span>
                  <input
                    type="text"
                    value={childDietaryRestrictions}
                    id="childDietaryRestrictions"
                    onChange={(e) => {
                      setChildDietaryRestrictions(e.target.value);
                    }}
                  />
                </span>
              </p>

              <button onClick={addChild}>Add Child</button>
              <p>Additional Information: </p>
              <input
                type="text"
                value={childAdditionalInformation}
                id="childAdditionalInformation"
                onChange={(e) => {
                  setChildAdditionalInformation(e.target.value);
                }}
              />
            </div>

            <div className="info-container">
              <p>
                Open to Accept Children:{" "}
                <span>
                  <input
                    type="text"
                    value={childGender}
                    id="childGender"
                    onChange={(e) => {
                      setChildGender(e.target.value);
                    }}
                  />
                </span>
              </p>

              <p>
                Looking for a family:{" "}
                <span>
                  <input
                    type="text"
                    value={childGender}
                    id="childGender"
                    onChange={(e) => {
                      setChildGender(e.target.value);
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div id="registration-submit-btn-wraper">
          <button id="registration-submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
