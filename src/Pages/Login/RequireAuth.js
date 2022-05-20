import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    
    let location = useLocation();
    if(loading) {
        return <Loading></Loading>
    }
    if (!user) {
      
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    if(!user.emailVerified) {
        return <div className="text-center mx-auto my-12">
            <p className="text-red-500 ">Your email is not verified</p>
            <h2 className="text-secondary ">Please verified your email</h2>
            <button className="btn btn-secondary w-full max-w-xs"  onClick={async () => {
          await sendEmailVerification();
          toast('Send verification email again.');
        }}>Send verification email again.</button>
        <ToastContainer></ToastContainer>

        </div>
    }
    
    
      return children;
   
};

export default RequireAuth;