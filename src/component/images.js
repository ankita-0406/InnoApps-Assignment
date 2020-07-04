import React from "react";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Style from "../style/style.css";
import pic from "../pics/pic.png";
import fbIcon from "../pics/fb.png";
import pinIcon from "../pics/pin.png";
import igIcon from "../pics/ig.png";
import inIcon from "../pics/in.png";
import searchIcon from "../pics/search.png";


class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            check: [], term: "",
            desc: "",
            by: "",
            limit: 9,
            page: 2
        }
    }

    onImageClick(index) {
        let arr = this.state.check
        if (arr[index] == 1) {
            arr[index] = 0
        } else {
            arr[index] = 1
        }
        this.setState({
            check: arr
        })
    }
    onEnter(e) {
        this.setState({
            term: e.target.value
        })
    }
    onLoadMore() {
        this.setState({
            limit: this.state.limit + 9,
            page: this.state.page + 1
        }, () => {
            this.functioncall();
        });

    }

    functioncall() {
        axios.get(`https://api.unsplash.com/search/photos?page=${this.state.page}&query=office&client_id=rIfCvTUVWmZ6P6Fk6crLH325FvvB-TMsvfwlAYRH1Yw`)
            .then((resp) => {
                let arr = this.state.check;
                let arr2 = this.state.images;
                for (let i = 0; i < resp.data.results.length; i++) {
                    arr2.push(resp.data.results[i])
                    arr.push(0)
                }
                this.setState({
                    images: arr2,
                    check: arr,
                    desc: resp.data.results.description,
                })
            })
            .catch((err) => {
                console.log(err);
            })

    }
    componentDidMount() {
        axios.get("https://api.unsplash.com/search/photos?page=1&query=office&client_id=rIfCvTUVWmZ6P6Fk6crLH325FvvB-TMsvfwlAYRH1Yw")
            .then((resp) => {

                let arr = []
                for (let i = 0; i < resp.data.results.length; i++) {
                    arr[i] = 0
                }
                this.setState({
                    images: resp.data.results,
                    check: arr,
                    desc: resp.data.results.description
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <input type="text" placeholder="Search" value={this.state.term} onChange={(e) => this.onEnter(e)} className="input" />
                <img src={searchIcon} style={{ width: "20px", height: "20px" }} />
                <div className="grid-container">
                    {this.state.images.map((item, index) => (
                        <div className="grid-item">
                            <img style={{ width: "18rem", height: "15rem", borderRadius: "1%", position: "relative" }} src={item.links.download} onClick={() => this.onImageClick(index)}></img>
                            {this.state.check[index] == 1 &&
                                <input type="checkbox" checked={this.state.check[index] == 1} className="checkbox" />}
                            <p style={{ fontWeight: "bold", fontSize: "20px", }}>{this.state.images[index].description && this.state.images[index].description.substring(0, 30)} {this.state.images[index].description && this.state.images[index].description.length > 30 && "..."} {!this.state.images[index].description && "pic desc"}</p>
                        </div>
                    ))}
                </div>
                <button className="button" onClick={() => this.onLoadMore()}>LOAD MORE</button>
                <div className="flex-container">
                    <div>
                        <span style={{ fontWeight: "bold" }}>
                            <li>Category</li> </span>
                        <span style={{ color: "grey" }}><li>Home</li>
                            <li>Contact Us</li>
                            <li> Listings</li></span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>
                            <li>Your Account</li> </span>
                        <span style={{ color: "grey" }}> <li>Sign Up</li>
                            <li>Login</li>
                            <li> Find a Space</li>
                            <li> List a Space</li></span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>
                            <li>Company</li> </span>
                        <span style={{ color: "grey" }}><li>Meet the Team</li>
                            <li>Contribute</li> </span>
                    </div>
                    <div>
                        <span style={{ fontWeight: "bold" }}>
                            <li>Social</li>
                            <li><img src={fbIcon} style={{ width: "23px", height: "25px" }} /></li>
                            <li><img src={igIcon} style={{ width: "24px", height: "25px" }} /></li>
                            <li><img src={inIcon} style={{ width: "24px", height: "25px" }} /></li>
                            <li><img src={pinIcon} style={{ width: "24px", height: "25px" }} /></li>
                        </span>
                    </div>
                </div>
                <div className="footer">
                    <Footer /></div>
            </div>
        )
    }
}
export default Images; 