import React from "react";
import pic from "../pics/pic.png";

class Header extends React.Component {
    render() {
        return (
            <div class="flex-container-header">
                <div> <img src={pic} class="pic" /></div>
                <div>About</div>
                <div style ={{width:"fit-content"}}>How it works</div>
                <div>Contact</div>
                <div style ={{width:"fit-content"}}>List a space</div>
                <div style ={{width:"fit-content"}}>Find a space</div>
                <div style={{ fontWeight: "bold" }}>SignUp</div>
                <div style={{ fontWeight: "bold" }}>LogIn</div>
            </div>
        )
    }
}
export default Header;