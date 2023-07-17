import React from 'react'
import ResetPasswordForm from 'views/auth/ResetPassword/ResetPasswordForm'
import Cover from 'components/AfterAuth/layout/AuthLayout/Cover'

const ResetPasswordCover = (props) => {
    return (
        <Cover>
            <ResetPasswordForm
                disableSubmit={true}
                signInUrl="/AA/auth/sign-in-cover"
                {...props}
            />
        </Cover>
    )
}

export default ResetPasswordCover
