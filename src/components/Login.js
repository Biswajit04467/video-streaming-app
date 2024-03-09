import React, { useState } from 'react'


const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleIsSignIn = () => {
        setIsSignIn(!isSignIn);
    }


    return (
        <div className='LoginPage'>

            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>

            <div className=' '>
                <form className='absolute my-36 mx-auto right-0 left-0 w-3/12 bg-black p-12 text-white rounded-md bg-opacity-85 '>

                    <h1 className='font-bold text-3xl py-4'>{isSignIn===true?"Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-md' />}
                    <input type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                    <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md' />
                    <button className='p-4 px-2 my-6  w-full bg-red-600 rounded-md'>{isSignIn===true?"Sign In" : "Sign Up"}</button>
                    
                    <div className='flex gap-1'>
                        
                        <p className=' text-gray-500'>{isSignIn? "New to Netflix?" :"Already a User?"}</p>
                        <p className=' cursor-pointer hover:underline' onClick={toggleIsSignIn}> {isSignIn?"Sign Up now":"Sign In"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
