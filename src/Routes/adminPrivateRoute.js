import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const AdminPrivateRoute = ({ children }) => {
  const isAuthenticated = !!auth.currentUser;
  console.log(isAuthenticated);

    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? (
    //       <Component {...props} />
    //     ) : (
    //       // <Redirect to="/login" />
    //       <Navigate to="/login" replace={true} />
    //     )
    //   }
    // />
    if (!isAuthenticated) {
      return <Navigate to="/AdminLogin" replace />
    }
    return children;


};

export default AdminPrivateRoute;