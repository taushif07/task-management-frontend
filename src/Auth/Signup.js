// import React, { useState } from 'react';
// import { auth } from '../firebaseConfig';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signup successful
//         const user = userCredential.user;
//         console.log('Signed up:', user);
//       })
//       .catch((error) => {
//         // Handle signup error
//         console.error('Signup error:', error);
//       });
//   };

//   return (
//     <form className="container mt-4" onSubmit={handleSignup}>
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
//       <button type="submit" className="btn btn-primary">Signup</button>
//     </form>
//   );
// }

// export default Signup

import React from 'react';


function Signup() {
  return (
    <div>

    </div>
  )
}

export default Signup