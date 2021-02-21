import React, { useState, useEffect } from "react";
import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";

import TempPhoto from "../Assets/images/photo-1.jpg";
import axios from "axios";

export default function RegisterScreen(props) {

  const addChild = () => {
    console.log("Adding another child!: ");
  };
  const userRegister = useSelector((state) => state.userRegister);

  const [firstName, setFirstName] = useState(userRegister.firstName);
  const [lastName, setLastName] = useState(userRegister.lastName);
  const [email, setEmail] = useState(userRegister.email);
  const [university, setUniversity] = useState(userRegister.email);
  const [relationship, setRelationship] = useState(userRegister.relationship);
  const [addressStreetName, setAddressStreetName] = useState(
    userRegister.addressStreetName
  );
  const [addressStreetNumber, setAddressStreetNumber] = useState(
    userRegister.addressStreetNumber
  );
  const [addressApt, setAddressApt] = useState(userRegister.setAddressApt);
  const [addressCountry, setAddressCountry] = useState(
    userRegister.addressCountry
  );
  const [addressPO, setAddressPO] = useState(userRegister.addressPO);
  const [phone, setPhone] = useState(userRegister.phone);
  const [emergencyContact, setEmergencyContact] = useState(
    userRegister.emergencyContact
  );
  const [emergencyPhone, setEmergencyPhone] = useState(
    userRegister.emergencyPhone
  );
  const [childFirstName, setChildFirstName] = useState(
    userRegister.childFirstName
  );
  const [childLastName, setChildLastName] = useState(
    userRegister.childLastName
  );
  const [childGender, setChildGender] = useState(userRegister.childGender);
  const [childAge, setChildAge] = useState(userRegister.childAge);
  const [childAllergies, setChildAllergies] = useState(
    userRegister.childAllergies
  );
  const [childDietaryRestrictions, setChildDietaryRestrictions] = useState(
    userRegister.childDietaryRestrictions
  );
  const [childAdditionalInformation, setChildAdditionalInformation] = useState(
    userRegister.childAdditionalInformation
  );
  const [password, setPassword] = useState(userRegister.password);
  const [image, setImage] = useState(userRegister.image);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const [fileName, setFileName] = useState("");

  const dispatch = useDispatch();

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("image", file);
  //   setLoadingUpload(true);

  //   try {
  //     const { data } = await axios.post("/api/uploads", bodyFormData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     setImage(data);
  //     setLoadingUpload(false);
  //   } catch (error) {
  //     setErrorUpload(error.message);
  //     setLoadingUpload(false);
  //   }
  // };

  const saveImage = async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("image", fileName);
    setLoadingUpload(true);

    try {
      const { data } = await axios.post("/api/uploads", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();

    saveImage(image);

    dispatch(
      registerUser({
        firstName,
        lastName,
        email,
        university,
        relationship,
        addressStreetName,
        addressStreetNumber,
        addressApt,
        addressCountry,
        addressPO,
        phone,
        emergencyContact,
        emergencyPhone,
        childFirstName,
        childLastName,
        childGender,
        childAge,
        childAllergies,
        childDietaryRestrictions,
        childAdditionalInformation,
        image,
      })
    );
    props.history.push('/');
    
  };

  return (

    <div>
      <form onSubmit={submitHandler}>

        <header>
          <h1>Welcome to CareShare Registration page!</h1>
        </header>

        <div className="main-container">

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
                <input type="file" class="form-control-file" id="exampleFormControlFile1"
                  onChange={(e) => setFileName(e.target.files[0])}
                />
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
        <Footer/>
      </form>
    </div>
  );
}
