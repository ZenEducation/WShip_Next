import React from 'react'
import ResetPasswordForm from 'views/auth/ResetPassword/ResetPasswordForm'
import Simple from 'components/AfterAuth/layout/AuthLayout/Simple'

const ResetPasswordSimple = (props) => {
    return (
        <Simple>
            <ResetPasswordForm
                disableSubmit={true}
                signInUrl="/AA/auth/sign-in-simple"
                {...props}
            />
        </Simple>
    )
}

export default ResetPasswordSimple
