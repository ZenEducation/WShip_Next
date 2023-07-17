import React from 'react'
import ResetPasswordForm from 'views/auth/ResetPassword/ResetPasswordForm'
import Side from 'components/AfterAuth/layout/AuthLayout/Side'

const ResetPasswordSide = (props) => {
    return (
        <Side>
            <ResetPasswordForm
                disableSubmit={true}
                signInUrl="/AA/auth/sign-in-side"
                {...props}
            />
        </Side>
    )
}

export default ResetPasswordSide
