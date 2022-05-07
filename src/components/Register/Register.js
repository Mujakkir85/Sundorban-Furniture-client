import React, { useRef } from 'react';
import './Register.css'
import googleLogo2 from '../../images/google-logo2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Register = () => {
    let nameRef = useRef('');
    let emailRef = useRef('');
    let passwordRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });
    /*const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });*/

    const handleRegister = (event) => {
        event.preventDefault();
        nameRef = nameRef.current.value;
        emailRef = emailRef.current.value;
        passwordRef = passwordRef.current.value;
        createUserWithEmailAndPassword(emailRef, passwordRef)
    }

    if (user) {
        navigate('/');
    }
    return (
        // <div className='login-bg'>
        <div className='container'>
            <div className='login-container w-50 mx-auto shadow p-3 mb-5 bg-body rounded'>
                <div className="login-body card w-100">
                    <div className="card-body">
                        <h2 className='d-flex justify-content-center'>REGISTER YOURSELF</h2>
                        <form onSubmit={handleRegister}>
                            <div className="form-floating mb-3">
                                <input ref={nameRef} type="text" className="form-control" name="name" placeholder="name@example.com" required />
                                <label>Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input ref={emailRef} type="email" className="form-control" name="email" placeholder="name@example.com" required />
                                <label>Email address</label>
                            </div>
                            <div className="form-floating">
                                <input ref={passwordRef} type="password" className="form-control" name="password" placeholder="Password" required />
                                <label>Password</label>
                            </div>
                            <input className='btn-submit' type="submit" value="Register" />
                        </form>
                        <p className='pt-3'>Already Have An Account?<Link to='/login'>Please Login.</Link></p>
                        {/* <div className='d-flex align-items-center'>
                                <div style={{ height: '1px', backgroundColor: '#8f6f40' }} className=' w-50'></div>
                                <p className='mt-2 px-2'>or</p>
                                <div style={{ height: '1px', backgroundColor: '#8f6f40' }} className=' w-50'></div>
                            </div> */}
                        {/* <button className='btn-submit'>
                                <img style={{ width: '40px' }} src={googleLogo2} alt="" />
                                <span>Sing In With Google</span>
                            </button> */}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Register;