import React, { useState } from "react";
import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";

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

        <header>
          <h1>Welcome to CareShare Registration page!</h1>
        </header>

        <div className="registration-main">

          <div className="parent-information">
            <h2>Parent Information</h2>

            <div className="parent-name adjusting-divs">

              <input
                type="text"
                value={firstName}
                placeholder="First Name"
                id="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />

              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                id="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />

            </div>

            <div className="home-address">
              <h3>Home Address</h3>
              <div class="home-address-row1 adjusting-divs">

                <input
                  type="text"
                  value={addressStreetNumber}
                  placeholder="Street No."
                  onChange={(e) => {
                    setAddressStreetNumber(e.target.value);
                  }}
                />

                <input
                  type="text"
                  value={addressStreetName}
                  placeholder="Street Name"
                  onChange={(e) => {
                    setAddressStreetName(e.target.value);
                  }}
                />

              </div>

              <div className="home-address-row2 adjusting-divs">

                <input
                  type="text"
                  value={addressPO}
                  placeholder="Postal Code"
                  onChange={(e) => {
                    setAddressPO(e.target.value);
                  }}
                />

                <input
                  type="text"
                  value={addressCountry}
                  placeholder="Province"
                  onChange={(e) => {
                    setAddressCountry(e.target.value);
                  }}
                />
              </div>
            </div>

            <h3>Select Your University</h3>
            <div className="parent-university adjusting-divs">

            
              <input
                type="text"
                value={university}
                placeholder="ex. University of UBC"
                onChange={(e) => {
                  setUniversity(e.target.value);
                }}
              />
            </div>


            <h3>Contact Information</h3>
            <div className="parent-contact-ifo adjusting-divs">
            
              <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <input
                type="text"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />

            </div>

            <h3>Creating Password</h3>
            <div className="parent-password adjusting-divs">
         
              <input
                type="password"
                value={password}
                placeholder="Create Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>


            <div className="emergency-contact ">

              <h3>Emergincy Contact Information</h3>
              <div class="emergency-contact-info adjusting-divs">

                <input
                  type="text"
                  value={emergencyContact}
                  placeholder="Name"
                  onChange={(e) => {
                    setEmergencyContact(e.target.value);
                  }}
                />

                <input
                  type="text"
                  value={emergencyPhone}
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setEmergencyPhone(e.target.value);
                  }}
                />

              </div>

              <div className="emergency-contact-relation adjusting-divs">
                <input
                  type="text"
                  value={relationship}
                  placeholder="Relation to Family"
                  onChange={(e) => {
                    setRelationship(e.target.value);
                  }}
                />

              </div>

            </div>

            <form className="adding-margins-to-form">
              <div className="form-group ">
                <label for="exampleFormControlFile1"><h3>Upload Photo for Profile</h3></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </div>
            </form>


          </div>

          <div className="child-information ">

            <h2>Child Information</h2>

            <div className="child-name adjusting-divs">

              <input
                type="text"
                value={childFirstName}
                placeholder="Child First Name"
                onChange={(e) => {
                  setChildFirstName(e.target.value);
                }}
              />

              <input
                type="text"
                value={childLastName}
                placeholder="Child Last Name"
                onChange={(e) => {
                  setChildLastName(e.target.value);
                }}
              />

            </div>


            <div className="adjusting-divs">
              <input
                type="text"
                value={childGender}
                placeholder="Child Gender"
                onChange={(e) => {
                  setChildGender(e.target.value);
                }}
              />

              <input
                type="text"
                value={childAge}
                placeholder="Child Age"
                onChange={(e) => {
                  setChildAge(e.target.value);
                }}
              />
            </div>

            <div className="adjusting-divs">


              <input
                type="text"
                value={childAllergies}
                id="childAllergies"
                placeholder="Child Allergies if any"
                onChange={(e) => {
                  setChildAllergies(e.target.value);
                }}
              />

             
            </div>

            <div className="adjusting-divs">

            <input
                type="text"
                value={childDietaryRestrictions}
                id="childDietaryRestrictions"
                placeholder="Child Dietary Restrictions"
                onChange={(e) => {
                  setChildDietaryRestrictions(e.target.value);
                }}
              />

            </div>


            <form className="adding-margins-to-form">
              <div className="form-group ">
                <label for="exampleFormControlFile1"><h3>Upload photo of your child</h3></label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
              </div>
            </form>

          </div>

          <div className="add-child-btn">
            <button onClick={addChild}><span id="addingMore-children"><i class="fas fa-plus"></i></span></button>
          </div>

          <h3>You can add more information down below </h3>
          <div className="parent-moreInformation">
 
            <input
              type="text"
              value={childAdditionalInformation}
              id="childAdditionalInformation"
              onChange={(e) => {
                setChildAdditionalInformation(e.target.value);
              }}
            />
          </div>

          <div id="registration-submit-btn-wraper">
            <button id="registration-submit-btn">Submit</button>
          </div>

        </div>
        {/* <Footer/> */}
      </form>
    </div>
  );
}
