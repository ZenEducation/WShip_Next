import React from 'react'
import Logo from 'components/AfterAuth/template/Logo'
import { useSelector } from 'react-redux'

const HeaderLogo = () => {
    const mode = useSelector((state) => state.theme.mode)

    return <Logo mode={mode} className="hidden md:block" />
}

export default HeaderLogo
