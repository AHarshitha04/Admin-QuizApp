import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './LoginSignUp.css'


const LoginSignUpBox = () => {

    const [setShowAlert] = useState(false);

    // const openAlert = () => {
    //     setShowAlert(true);
    // };
    const closeAlert = () => {
        setShowAlert(false);
    };
  return (
    <div>
          
              <div id='divContent'>
                  <div>
                      <div className='login_close_container'><h4>LOGIN</h4><p><span class="material-symbols-outlined" onClick={closeAlert}>
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
          
    </div>
  )
}

export default LoginSignUpBox