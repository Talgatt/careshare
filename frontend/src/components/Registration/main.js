import React from "react"
import TempPhoto from "../../Assets/images/photo-1.jpg"

const addChild = ()  => {
    console.log("Adding another child!: ")
}


function RegisterMain(){

    return ( <div>

        

        <div className="registrationBody">

            <div className="column-1">
                <div className="parent-photo-row">
                    <img src={TempPhoto}/>
                   
                </div>
            </div>

            <div className="column-2">
                <h1 className="registration-column-2-title">Basic Information</h1>
                <div className="info-container">
                    <p>First Name: <span><input/></span></p>
                    <p>Last Name: <span><input/></span></p>
               
            
                    <p>University: <span><input/></span></p>
         
                    <p>Relationship to child: <span><input/></span></p>
            
                </div>
            
                <div className="info-container">
                    <div>
                        <h2 className="info-container-title">Address</h2>
                    </div>
                    
                
                        <p>Street No. <span><input/></span></p>
                  
                        <p>Street name: <span><input/></span></p>
              
                        <p>Apartment #: <span><input/></span></p>

                    <p>Postal Code: <span><input/></span></p>
             

                    <p>Country <span><input/></span></p>


                </div>
            
                <div className="info-container">
                    <h1>Contact Info</h1>

                    <p>Phone #: <span><input/></span></p>
       

                    <p>Email: <span><input/></span></p>
           
                    <p>Emergency phone #: <span><input/></span></p>
           
                </div>
            

                <div className="info-container">
                    <h1>Children</h1>

                    <p>First Name: <span><input/></span></p>
          
                    <p>Gender: <span><input/></span></p>
                    <p>Age: <span><input/></span></p>
        
                    <p>Allergies: <span><input/></span></p> 
       
                    <p>Dietary Restrictions <span><input/></span></p>
                
                    <button onClick={addChild}>Add Child</button>
                    <p>Additional Information: </p>
                    <input/>
                </div>

                <div className="info-container">
                    <p>Open to Accept Children: <span><input/></span></p>
        
                    <p>Looking for a family: <span><input/></span></p>
              

                </div>
             

            </div>

        </div>

        <div id="registration-submit-btn-wraper">
            <button id="registration-submit-btn">Submit</button>
        </div>
       

    </div>)
}



export default RegisterMain;