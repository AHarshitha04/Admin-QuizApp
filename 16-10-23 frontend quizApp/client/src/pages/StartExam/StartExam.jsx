import React, { useState, useEffect } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

import "./StartExam.css";
import logo from '../../images/logo.jpg'

import { Link, NavLink } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
// import LoginSignUpBox from '../../components/Login&SignUp/Login&SignUpBox';

const StartExam = () => {
  const myComponentStyle1 = {
    // color: 'white'
  };
  const myComponentStyle2 = {
    // color: 'white'
  };

  const [showAlert, setShowAlert] = useState(false);

  const openAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const countries = [
    { id: "1", name: "INDIA" },
    { id: "2", name: "USA" },
  ];

  const states = [
    { id: "1", countryId: "1", name: "Haryana" },
    { id: "2", countryId: "1", name: "Delhi" },
    { id: "3", countryId: "1", name: "Telangana" },
    { id: "4", countryId: "1", name: "Andhra Pradesh" },
    { id: "5", countryId: "2", name: "Texas" },
    { id: "6", countryId: "2", name: "California" },
  ];

  const cities = [
    { id: "1", stateId: "1", name: "Faridabad" },
    { id: "2", stateId: "1", name: "Palwal" },
    { id: "3", stateId: "2", name: "Mandi House" },
    { id: "4", stateId: "2", name: "kalka Ji" },
    { id: "5", stateId: "3", name: "Hyderabad" },
    { id: "6", stateId: "3", name: "Gachibowli" },
    { id: "1", stateId: "5", name: "Houston" },
    { id: "2", stateId: "5", name: "Austin" },
    { id: "3", stateId: "6", name: "Los Angeles" },
    { id: "4", stateId: "6", name: "Son Diego" },
    { id: "5", stateId: "4", name: "Vijyawada" },
    { id: "6", stateId: "4", name: "Thirupati" },
  ];

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
  }, []);

  const handleCountry = (id) => {
    const dt = states.filter((x) => x.countryId === id);
    setState(dt);
  };

  const handleState = (id) => {
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  };

  const [value, setValue] = useState();

  return (
    <div className="main_conatiner">
      <div>
        {/* <Navbar /> */}
        <div className='navbar-div'>
      <img src={logo} alt="logo" width='250px' />

      <div className='auth-btn'>
        <div><button onClick={openAlert}>LOGIN</button></div>
        <div><button>SIGNUP</button></div>
      </div>
      {/* <div>
        {showAlert && (
          <div id='divContent'>
            <LoginSignUpBox/>
            <div>
              <div className='login_close_container'><h4>LOGIN</h4><p><span id='close-icon' class="material-symbols-outlined" onClick={closeAlertForLogin1}>
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
      </div> */}
    </div>

      </div>
      {showAlert && (
        <div id="divContent1">
          {/* <LoginSignUpBox/> */}
          <div>
            <div className="login_close_container">
              <h4>LOGIN</h4>
              <p>
                <span
                  id="close-icon"
                  class="material-symbols-outlined"
                  onClick={closeAlert}
                >
                  close
                </span>
              </p>
            </div>
            <form action="" id="form">
              <p>
                <h5>Mobile Number or Email :</h5>
                <input
                  type="text"
                  placeholder="Enter your Mobile Number or Email"
                />
              </p>
              <p>
                <h5>Password :</h5>
                <input type="text" placeholder="Enter your Password" />
              </p>
              <p>
                <Link>Forgot Password?</Link>
              </p>
            </form>
            <div>
              <button>Submit</button>
              <button>Don't Have Account? SIGNUP</button>
            </div>
          </div>
        </div>
      )}
      {/* <div id='divContent2'>
                
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
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} />
                        </p>
                        <p><select id="ddlCountry" className='form-control select-class' onChange={(e) => handleCountry(e.target.value)}>
                            <option value="0">Select Country</option>
                            {
                                country &&
                                    country !== undefined ?
                                    country.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No Country"

                            }
                        </select>
                        </p>
                        <br></br>
                        <p><select id="ddlStates" className='form-control select-class' onChange={(e) => handleState(e.target.value)}>
                            <option value="0">Select State</option>
                            {
                                state &&
                                    state !== undefined ?
                                    state.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No State"

                            }
                        </select>
                        </p>
                        <br></br>
                        <p><select id="ddlCity" className='form-control select-class'>
                            <option value="0">Select City</option>
                            {
                                city &&
                                    city !== undefined ?
                                    city.map((ctr, index) => {
                                        return (
                                            <option key={index} value={ctr.id}>{ctr.name}</option>
                                        )
                                    })
                                    : "No City"

                            }
                        </select>
                        </p>
                       
                       
                    </form>
                    <div>
                        <button>Submit</button>
                        <button>Login</button>
                    </div>
                </div>

            </div> */}

      <div className="ls-bar-exam-page">
        <div className="left-sidebar-div">
          <LeftSidebar />
        </div>
        <div className="exam-middle-div">
          <div>
            <h3 className="exam-heading">JEE MAIN Full Test</h3>
          </div>
          <div className="home-main-page">
            {/* <h2>JEE MAIN Full Test</h2> */}
            <div>
              <div>
                <div className="header-div1">
                  <p className="div-heading">Online Test for JEE Main</p>
                </div>
                <div className="header-div2">
                  <div className="header-links">
                    <NavLink activeclassname="active" className="content-link">
                      Full Test
                    </NavLink>
                    <NavLink activeclassname="active" className="content-link">
                      Subject Test
                    </NavLink>
                    <NavLink activeclassname="active" className="content-link">
                      Chapter Test
                    </NavLink>
                    <NavLink activeclassname="active" className="content-link">
                      Previous Years{" "}
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* <HomeHeader /> */}
            </div>
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-contents1">
                  <h3 className="jee-test-1">JEE MAIN 2024 TEST-1</h3>
                  <span
                    style={myComponentStyle2}
                    class="material-symbols-outlined"
                  >
                    lock_open
                  </span>
                </div>
                <p className="testCard-second-header">
                  Available Till: 31 May,2024
                </p>
                <p className="free-title">FREE</p>
              </div>
              <div>
                <div className="test-contents2">
                  <span
                    style={myComponentStyle1}
                    class="material-symbols-outlined"
                  >
                    help
                  </span>
                  <p>90 Questions</p>
                </div>

                <div className="test-contents2">
                  <span
                    style={myComponentStyle1}
                    class="material-symbols-outlined"
                  >
                    schedule
                  </span>
                  <p>180 Minutes</p>
                </div>

                <div className="test-contents2">
                  <span
                    style={myComponentStyle1}
                    class="material-symbols-outlined"
                  >
                    trending_up
                  </span>
                  <p>300 Marks</p>
                </div>

                {/* <div className='test-btn'><button onClick={startCountdown} className='play-btn'><span class="material-symbols-outlined">
                        chevron_right
                    </span>Start Test</button></div> */}
                <div className="test-btn">
                  <button className="play-btn" onClick={openAlert}>
                    <span class="material-symbols-outlined">chevron_right</span>
                    Start Test
                  </button>

                  {/* element={<Instructions />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartExam;
