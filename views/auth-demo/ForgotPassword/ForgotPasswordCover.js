import React from 'react'
import ForgotPasswordForm from 'views/auth/ForgotPassword/ForgotPasswordForm'
import Cover from 'components/AfterAuth/layout/AuthLayout/Cover'

const ForgotPasswordCover = (props) => {
    return (
        <Cover>
            <ForgotPasswordForm
                disableSubmit={true}
                signInUrl="/AA/auth/sign-in-cover"
                {...props}
            />
        </Cover>
    )
}

export default ForgotPasswordCover
