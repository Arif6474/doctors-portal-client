import React from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
   
  const [token] =useToken(gUser || user)
  
   
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (token) {
    navigate(from, { replace: true });
  }
  let signInError;
  if(gError || error){
  signInError = <p className="text-center text-red-500 pb-2">{gError?.message || error?.message}</p>    
  }
  if(gLoading || loading){
      return <Loading></Loading>
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: "email is required"
                    },
                    pattern: {
                        value:  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                         message: "Provide a valid email"
                        }
                  })} 
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
             {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                
                
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
               
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    },
                    minLength: {
                        value: 6,
                         message: "Password must be at least 6 characters"
                        }
                  })} 
              />
              <label className="label">
            {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                
                
              </label>
            </div>
            <p className="font-bold pb-4">Forget Password?</p>
            {signInError}
            <input className="btn w-full max-w-xs text-white" type="submit" value="Login" />
          </form>
          <p><small>New to doctors portal? <Link className="text-primary" to="/signup">Create an account</Link></small></p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
