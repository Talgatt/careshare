import React from "react"
import RegisterMain from "./main.js"
import HeaderRegister from "./register-header.js"
import Footer from "../footer/footer.js"

function UserRegistration(){
    return <div>
        <HeaderRegister/>
        <RegisterMain/>
        <Footer/>
    </div>
}


export default UserRegistration;