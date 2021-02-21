import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TempPhoto from "../Assets/images/photo-1.jpg"

export default function ProfileScreen() {
  return (<div>
    <Header />
    <div className="main-container">

      <h1>User Account Inforation</h1>

      <div className="userPersonalInfo">
        <div className="userProfile-img"><img className="userProfileImage" src={TempPhoto} /></div>

        <div className="userAccount-info-text">

          <div className="parent-information">
            <h2>Parent Information</h2>

            <div className="parent-name adjusting-divs">

              <div><p>First Name</p></div>

              <div><p>Last Name</p></div>

            </div>

            <div className="home-address">

              <h3>Home Address</h3>
              <div class="home-address-row1 adjusting-divs">

                <div><p>Street Number</p></div>

                <div><p>Street Name</p></div>

              </div>

              <div className="home-address-row2 adjusting-divs">

                <div><p>Postal Code</p></div>

                <div><p>Province</p></div>
              </div>
            </div>

            <h3>Your University</h3>
            <div className="parent-university adjusting-divs">

              <idv>University</idv>
            </div>


            <h3>Contact Information</h3>
            <div className="parent-contact-ifo adjusting-divs">


              <div><p>Phone Number</p></div>
              <div><p>Email</p></div>

            </div>

            <h3>Creating Password</h3>
            <div className="parent-password adjusting-divs">

              <div><p>Change Password</p></div>
            </div>


            <div className="emergency-contact ">

              <h3>Emergincy Contact Information</h3>
              <div class="emergency-contact-info adjusting-divs">

                <div><p>Name</p></div>

                <div><p>Phone Number</p></div>

              </div>

              <div className="emergency-contact-relation adjusting-divs">
                <div>Relation to Family</div>
              </div>
            </div>
          </div>

          <div className="child-information ">

            <h2>Child Information</h2>

            <div className="child-name adjusting-divs">

              <div><p>Child Frist Name</p></div>
              <div><p>Child Last Name</p></div>

            </div>


            <div className="adjusting-divs">

              <div><p>Child Gender</p></div>

              <div><p>Child Age</p></div>

            </div>

            <div className="adjusting-divs">

              <div><p>Child Allergies</p></div>

            </div>

            <div className="adjusting-divs">

              <div>Child Dietary Restrictions</div>

            </div>


          </div>


        </div>



      </div>


    </div>
    <Footer />
  </div>);
}
