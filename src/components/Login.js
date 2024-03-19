import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/userSlice';
import { AVATAR_URL } from '../utils/constant'


const Login = () => {

    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorMessege, setErrorMessege] = useState(null);  //for displaying error messege
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleIsSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const email = useRef(null); // for taking reference from input box
    const password = useRef(null);
    const name = useRef(null);

    const handleSubmit = () => {

        const messege = checkValidData(email.current.value, password.current.value); // destructured the object ,got from inut box as refzzz

        setErrorMessege(messege);
        if (messege) return;

        if (!isSignIn) {
            //Sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: AVATAR_URL
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }));
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    // ..
                    setErrorMessege(errorCode + "-" + errorMessage2)
                });


        }
        else {
            // sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user singed in")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage2 = error.message;
                    setErrorMessege(errorCode + "-" + errorMessage2)
                });
        }
    }


    return (
        <div className='LoginPage'>

            <div className='absolute'>
                <img className='' src="" alt="background" />
            </div>

            <div className=''>
                <form onSubmit={(e) => e.preventDefault()} className='absolute my-36 mx-auto right-0 left-0 w-3/12 bg-black p-12 text-white rounded-md bg-opacity-85 min-w-[24rem]'>

                    <h1 className='font-bold text-3xl py-4'>{isSignIn === true ? "Sign In" : "Sign Up"}</h1>

                    {!isSignIn && <input ref={name} type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-md' />}

                    <input ref={email} type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                    <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                    <p className=' text-red-500'>{errorMessege}</p>

                    <button onClick={handleSubmit} className='p-4 px-2 my-6  w-full bg-red-600 rounded-md'>{isSignIn === true ? "Sign In" : "Sign Up"}</button>

                    <div className='flex gap-1'>

                        <p className=' text-gray-500'>{isSignIn ? "New to Netflix?" : "Already a User?"}</p>
                        <p className=' cursor-pointer hover:underline' onClick={toggleIsSignIn}> {isSignIn ? "Sign Up now" : "Sign In"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
