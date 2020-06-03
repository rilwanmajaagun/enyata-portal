import React, { useState, useEffect } from 'react';
import './Assessment.css';
import SideNav from '../../components/sideNav/SideNav';
import menu from '../../Assets/Icons/menu.svg';
import hourglass from '../../Assets/Images/hourglass (1).png';
import Cookies from "js-cookie";
import axios from "axios";
import Moment from 'react-moment';
import Countdown, {zeroPad } from 'react-countdown';
import { useHistory } from 'react-router-dom';

const Assessment = () => {

    const history = useHistory()

    const [states, setStates] = useState({
        items: [],
        errorMessage: '',
        message:""
      })

    const renderer = ({ minutes, seconds }) => {
        return <div>{zeroPad(minutes)}<sub>min</sub> 0{zeroPad(seconds)}<sub>sec</sub></div>
    };
        useEffect(() => {
            let hamburger = document.getElementById("img"),
                menuLink = document.getElementById("sidenav")

            hamburger.addEventListener('click', function (e) {
                menuLink.classList.toggle('hidden-xs')
                e.preventDefault()
            })
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            history.push("/quiz");
        }

        useEffect(() => {
            axios.get("/api/v1/getQuestion",{
                "headers": {
                    "Content-Type": "application/json",
                    "token": Cookies.get("token")
                }
            })
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err.response.data.message)
                    setStates({errorMessage:err.response.data.message})
                })
        }, []);

        return (
            <div>
                <div className="menu">
                    <img src={menu} id="img" className="visible-xs" style={{ height: "45px", marginLeft: "87%", paddingTop: "10px" }} />
                </div>
                <div className="assessment">
                    <SideNav />
                    {/* {states.errorMessage ?
                        <h4 className="container assessment-contents" style={{ color: "Red" }}> {states.errorMessage} </h4>: */}
                    <div className="container assessment-contents">
                        <div className="assessment-heading">
                            <div className="ass">
                                <h1>Take Assessment</h1>
                                <p>Click the button below to start assessment, you have limited time for this test</p>
                            </div>
                            <div className="timer">
                                <p>Timer</p>
                                <h1>
                                    <Countdown
                                        date={Date.now() + 1}
                                        renderer={renderer}
                                    />
                                </h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body take-ass">
                                <img src={hourglass} />
                                <p>We have 4 days left until the next assessment <br />Watch this space</p>
                                <button onClick={handleSubmit} className="btn btn-default">Take Assessment</button>
                            </div>
                        </div>

                    </div> //}
                </div>
            </div>
        )
    }

    export default Assessment