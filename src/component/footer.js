import React from "react";
import pic from "../pics/pic.png";

class Footer extends React.Component {
    render() {
        return (
            <div class="flex-container-header">
                <div> <img src={pic} class="pic" syle={{
                    width: "118px",
                    height: "43px"
                }} />
                </div>
                <div style={{ width: "fit-content" }}>@2018, A Perfect Space</div>
                <div>Cookies</div>
                <div style={{ width: "fit-content" }}>Terms & Privacy</div>
            </div>
        )
    }
}
export default Footer;