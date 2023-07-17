import React from 'react'
import ForgotPasswordForm from 'views/auth/ForgotPassword/ForgotPasswordForm'
import Simple from 'components/AfterAuth/layout/AuthLayout/Simple'

const ForgotPasswordSimple = (props) => {
    return (
        <Simple>
            <ForgotPasswordForm
                disableSubmit={true}
                signInUrl="/AA/auth/sign-in-simple"
                {...props}
            />
        </Simple>
    )
}

export default ForgotPasswordSimple
