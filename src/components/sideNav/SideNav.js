import React, { useState } from 'react';
import './SideNav.css';
import dashboard from '../../Assets/Icons/dashboard-icon.png';
import assessment from '../../Assets/Icons/assessment-icon.png';
import logout from '../../Assets/Icons/logout-icon.png';
import axios from "axios";
import { NavLink } from 'react-router-dom';

const SideNav = () => {

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const uploadImage = (e) => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "q3swu36z");
        formData.append("file", files);
        setLoading(true);

        axios.post('https://api.cloudinary.com/v1_1/ddq1cxfz9/image/upload', formData)
            .then(res => {
                setImage(res.data.secure_url)
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="sidenav">
            <div className="user-profile">
                <input type="file" name="file" onChange={uploadImage} />
                <div className="user-image">
                    {loading ? "loading..." : <img src={image} alt="image" />}
                </div>
                <h3>John doe</h3>
                <p>joe@enyata.com</p>
            </div>
            <div className="sidenav-text">
                <div className="sidenav-links">
                    <NavLink
                        className="nav-link"
                        activeStyle={{
                            borderLeft: "solid 4px #31D283",
                            fontWeight: "bold", color: "black",
                            paddingLeft: "36px"
                        }}
                        exact to="/dashboard"
                    >
                        <img className="img" src={dashboard} alt="dashboard" />
                        Dashboard
                    </NavLink>
                </div>
                <div className="sidenav-links">
                    <NavLink
                        className="nav-link"
                        activeStyle={{
                            borderLeft: "solid 4px #31D283",
                            fontWeight: "bold",
                            color: "black",
                            paddingLeft: "36px"
                        }}
                        exact to="/"
                    >
                        <img className="img" src={assessment} alt="assessment" />
                        Assessment
                    </NavLink>
                </div>
                <div className="sidenav-logout">
                    <NavLink
                        className="nav-link"
                        activeStyle={{
                            borderLeft: "solid 4px #31D283",
                            fontWeight: "bold",
                            color: "black",
                            paddingLeft: "36px"
                        }}
                        exact to="/">
                        <img className="img" src={logout} alt="logout" />
                        Log Out
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SideNav