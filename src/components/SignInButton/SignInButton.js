
import React from 'react';




import useFirebase from '../../hooks/useFirebase';

const SignInButton = () => {


    const { handleGoogleSignIn } = useFirebase();
    const { handleGitHubSignIn } = useFirebase();




    return (
        <div>
            <button onClick={handleGoogleSignIn} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Sign in with Google</button>
            <br />
            <button onClick={handleGitHubSignIn} className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-2 font-semibold'>Sign in with Github</button>

        </div>
    );
};

export default SignInButton;