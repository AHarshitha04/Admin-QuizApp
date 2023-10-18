import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
// import LoginSignUpBox from '../Login&SignUp/Login&SignUpBox'

const Navbar = () => {

  const [ showAlert1,setShowAlert1] = useState(false); 

  const openAlertForLogin1 = () => {
    setShowAlert1(true);
  };
  const closeAlertForLogin1 = () => {
    setShowAlert1(false);
  };


  return (
    <div className='navbar-div'>
      <img src={logo} alt="logo" width='250px' />

      <div className='auth-btn'>
        <div><button onClick={openAlertForLogin1}>LOGIN</button></div>
        <div><button>SIGNUP</button></div>
      </div>
      <div>
        {showAlert1 && (
          <div id='divContent'>
            {/* <LoginSignUpBox/> */}
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
      </div>
    </div>
  )
}

export default Navbar