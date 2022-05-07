import React, { useRef } from 'react';
import './Login.css';
import googleLogo2 from '../../images/google-logo2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    let emailRef = useRef('');
    let passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    //console.log(from);
    let errormsg;


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const handleLogin = event => {
        event.preventDefault();
        emailRef = emailRef.current.value;
        passwordRef = passwordRef.current.value;
        signInWithEmailAndPassword(emailRef, passwordRef)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    if (user || googleuser) {
        navigate(from, { replace: true });
    }

    if (error) {
        errormsg = <p className='text-center text-warning mt-3'>{error.message}Error : Email or Password is incorrect</p>
    }

    const resetpassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Find your reset password in your email')
        }
        else {
            toast('Enter your email')
        }
    }

    return (
        // <div className='login-bg'>

        <div className='container'>
            <ToastContainer />
            <div className='login-container w-50 mx-auto shadow p-3 mb-5 bg-body rounded ' >
                <div className="login-body card w-100">
                    <div className="card-body">
                        <h2 className='d-flex justify-content-center'>LOGIN</h2>
                        {errormsg}
                        <form onSubmit={handleLogin}>
                            <div className="form-floating mb-3">
                                <input ref={emailRef} type="email" className="form-control" name="email" placeholder="name@example.com" required />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating">
                                <input ref={passwordRef} type="password" className="form-control" name="password" placeholder="Password" required />
                                <label>Password</label>
                            </div>
                            <input className='btn-submit' type="submit" value="Login" />
                        </form>
                        <p className='pt-3' ><Link to='/register'>Create A New Account?</Link></p>
                        <p className='pt-3'>Forgate your password?<button onClick={resetpassword} className="btn btn-link text-decoration-none">Reset Your Password</button></p>

                        <div className='d-flex align-items-center'>
                            <div style={{ height: '1px', backgroundColor: '#8f6f40' }} className=' w-50'></div>
                            <p className='mt-2 px-2'>or</p>
                            <div style={{ height: '1px', backgroundColor: '#8f6f40' }} className=' w-50'></div>
                        </div>
                        <button className='btn-submit' onClick={handleGoogleSignIn} >
                            <img style={{ width: '35px' }} src={googleLogo2} alt="" />
                            <span>Sing In With Google</span>
                        </button>

                    </div>
                </div>
            </div>

        </div >

        // </div>

    );
};

export default Login;