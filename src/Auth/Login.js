// import React, { useState } from 'react';
// import { auth } from '../firebaseConfig';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Login successful
//         const user = userCredential.user;
//         console.log('Logged in:', user);
//       })
//       .catch((error) => {
//         // Handle login error
//         console.error('Login error:', error);
//       });
//   };

//   return (
//     <form className="container mt-4" onSubmit={handleLogin}>
//       <div className="mb-3">
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Login</button>
//     </form>
//   );
// }

// export default Login

import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import logo from "../LogoAndImages/taskNinjaLogo.jpg";
import Navbar from '../NavAndFoot/Navbar';
import Footer from '../NavAndFoot/Footer';

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false); 
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
              setIsAuth(true);
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                  setIsAuth(true);
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
      <div>
        <div className='login'>
            {/* <Link to='/'>
                <img
                    className="login__logo"
                    src={logo} 
                />
            </Link> */}
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Log In</button>
                </form>

                <p>
                    By signing-in you agree to the Task Ninja Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Sign Up</button>
            </div>
            <Footer />

        </div>
        </div>
    )
}

export default Login