import React from 'react'
import SignInForm from 'views/auth/SignIn/SignInForm'
import Side from 'components/AfterAuth/layout/AuthLayout/Side'

const SignInSide = (props) => {
    return (
        <Side
            content={
                <>
                    <h3 className="mb-1">Welcome back!</h3>
                    <p>Please enter your credentials to sign in!</p>
                </>
            }
        >
            <SignInForm
                disableSubmit={true}
                signUpUrl="/AA/auth/sign-up-side"
                forgotPasswordUrl="/AA/auth/forgot-password-side"
                {...props}
            />
        </Side>
    )
}

export default SignInSide
