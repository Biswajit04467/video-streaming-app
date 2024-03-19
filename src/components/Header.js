import React, { useEffect } from 'react'
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constant';
import { addUser, removeUser } from '../Redux/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user)
    const handleSignOut = () => {

        signOut(auth).then(() => {
        }).catch((err => {
            console.log(err)
        }))
        console.log("sign out -");

    }


    useEffect(() => {



        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user


                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");

                // ...
            } else {

                // User is signed out

                dispatch(removeUser());
                navigate("/");

            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between w-full '>

            <img
                className='w-36' src={LOGO} alt="logo" />

            <div>
                {user && (
                    <div>
                        <img className='h-10 mt-2' src={user.photoURL} alt="" />

                        <button className=' bg-white ' onClick={handleSignOut}>Sign Out</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Header
