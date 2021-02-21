import React, { useState } from "react";
import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";

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

              <p>
                Image{" "}
                <span>
                  <input
                    type="text"
                    value={image}
                    id="image"
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                </span>
              </p>
              <p>
                Image File:
                <span>
                  <input
                    type="file"
                    id="imageFile"
                    label="Choose Image"
                    //onChange={uploadFileHandler}
                    onChange={(e) => setFileName(e.target.files[0])}
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
