import React from 'react'
import Header from 'components/AfterAuth/template/Header'
import SidePanel from 'components/AfterAuth/template/SidePanel'
import UserDropdown from 'components/AfterAuth/template/UserDropdown'
import LanguageSelector from 'components/AfterAuth/template/LanguageSelector'
import Notification from 'components/AfterAuth/template/Notification'
import HeaderLogo from 'components/AfterAuth/template/HeaderLogo'
import Search from 'components/AfterAuth/template/Search'
import MobileNav from 'components/AfterAuth/template/MobileNav'
import HorizontalNav from 'components/AfterAuth/template/HorizontalNav'
import View from 'views'

const HeaderActionsStart = () => {
    return (
        <>
            <HeaderLogo />
            <MobileNav />
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            <Search />
            <LanguageSelector />
            <Notification />
            <SidePanel />
            <UserDropdown hoverable={false} />
        </>
    )
}

const SimpleLayout = () => {
    return (
        <div className="app-layout-simple flex flex-auto flex-col min-h-screen">
            <div className="flex flex-auto min-w-0">
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        container
                        className="shadow dark:shadow-2xl"
                        headerStart={<HeaderActionsStart />}
                        headerMiddle={<HorizontalNav />}
                        headerEnd={<HeaderActionsEnd />}
                    />
                    <View pageContainerType="contained" />
                </div>
            </div>
        </div>
    )
}

export default SimpleLayout
