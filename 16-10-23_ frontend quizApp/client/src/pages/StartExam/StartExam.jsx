import React, { useState } from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Navbar from '../../components/Navbar/Navbar'
import './StartExam.css'
import { Link,NavLink } from 'react-router-dom'
// import LoginSignUpBox from '../../components/Login&SignUp/Login&SignUpBox';

import { State, City } from 'country-state-city';



const StartExam = () => {
    const myComponentStyle1 = {
        // color: 'white'
    }
    const myComponentStyle2 = {
        // color: 'white'
    }

    const [showAlert, setShowAlert] = useState(false);

    const openAlert = () => {
        setShowAlert(true);
    };
    const closeAlert = () => {
        setShowAlert(false);
    };

    const [cityid, setCityid] = useState(0);
    const [stateid, setStateid] = useState(0);
    // useEffect(() => {
    //     if (showAlert) {
    //         // Display the alert after 2 seconds
    //         const timeout = setTimeout(() => {
    //             setShowAlert(false);
    //         }, 2000);

    //         // Clear the timeout if the component unmounts or showAlert is set to false before the timeout
    //         return () => clearTimeout(timeout);
    //     }
    // }, [showAlert]);


    return (
        <div className='main_conatiner'>
            <div><Navbar /></div>
            {showAlert && (
                <div id='divContent'>
                    {/* <LoginSignUpBox/> */}
                    <div>
                        <div className='login_close_container'><h4>LOGIN</h4><p><span id='close-icon' class="material-symbols-outlined" onClick={closeAlert}>
                            close
                        </span></p></div>
                        <form action="" id='form'>
                            <p>
                                <h5>Mobile Number or Email :</h5>
                                <input type="text" placeholder="Enter your Mobile Number or Email" />
                            </p>
                            <p>
                                <h5>Password :</h5>
                                <input type="text" placeholder="Enter your Password" />
                            </p>
                            <p><Link>Forgot Password?</Link></p>
                        </form>
                        <div>
                            <button>Submit</button>
                            <button>Don't Have Account? SIGNUP</button>
                        </div>
                    </div>
                  
                </div>
            )}
            <div id='divContent'>
                {/* <LoginSignUpBox/> */}
                <div>
                    <div className='login_close_container'><h4>SIGNUP</h4><p><span id='close-icon' class="material-symbols-outlined" onClick={closeAlert}>
                        close
                    </span></p></div>
                    <form action="" id='form'>
                        <p>
                            <h5>Name :</h5>
                            <input type="text" placeholder="Enter your Name" />
                        </p>
                        <p>
                            <h5>Email Address :</h5>
                            <input type="text" placeholder="Enter your Email Address" />
                        </p>
                        <p>

                        </p>
                        <h6>State</h6>
                        <StateSelect
                            countryid={countryid}
                            onChange={(e) => {
                                setStateid(e.id);
                            }}
                            placeHolder="Select State"
                        />
                        <h6>City</h6>
                        <CitySelect
                            countryid={countryid}
                            stateid={stateid}
                            onChange={(e) => {
                                console.log(e);
                            }}
                            placeHolder="Select City"
                        />
                        <p>

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                        <p>

                        </p>
                    </form>
                    <div>
                        <button>Submit</button>
                        <button>Login</button>
                    </div>
                </div>

            </div>


            <div className='ls-bar-exam-page'>
                <div className='left-sidebar-div'><LeftSidebar />
                </div>
                <div className='exam-middle-div'>
                    <div><h3 className='exam-heading'>JEE MAIN Full Test</h3></div>
                    <div className='home-main-page'>
                        {/* <h2>JEE MAIN Full Test</h2> */}
                        <div>
                            <div>
                                <div className='header-div1'>
                                    <p className='div-heading'>Online Test for JEE Main</p>
                                </div>
                                <div className='header-div2'>
                                    <div className='header-links'>

                                        <NavLink activeclassname='active' className='content-link' >Full Test</NavLink>
                                        <NavLink activeclassname='active' className='content-link'>Subject Test</NavLink>
                                        <NavLink activeclassname='active' className='content-link' >Chapter Test</NavLink>
                                        <NavLink activeclassname='active' className='content-link'>Previous Years </NavLink>


                                    </div>
                                </div>
                            </div>
                            {/* <HomeHeader /> */}
                        </div>
                        <div className='test-card'>
                            <div className='test-card-header'>
                                <div className='test-contents1'><h3 className='jee-test-1'>JEE MAIN 2024 TEST-1</h3><span style={myComponentStyle2} class="material-symbols-outlined">
                                    lock_open
                                </span></div>
                                <p className='testCard-second-header'>Available Till: 31 May,2024</p>
                                <p className='free-title'>FREE</p>
                            </div>
                            <div>
                                <div className='test-contents2'><span style={myComponentStyle1} class="material-symbols-outlined">help</span><p>90 Questions</p></div>

                                <div className='test-contents2'><span style={myComponentStyle1} class="material-symbols-outlined">
                                    schedule
                                </span><p>180 Minutes</p></div>

                                <div className='test-contents2'><span style={myComponentStyle1} class="material-symbols-outlined">
                                    trending_up
                                </span><p>300 Marks</p></div>

                                {/* <div className='test-btn'><button onClick={startCountdown} className='play-btn'><span class="material-symbols-outlined">
                        chevron_right
                    </span>Start Test</button></div> */}
                                <div className='test-btn'>
                                    <button className='play-btn' onClick={openAlert}><span class="material-symbols-outlined">
                                        chevron_right
                                    </span>Start Test</button>

                                    {/* element={<Instructions />} */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartExam