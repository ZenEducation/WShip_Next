import React from 'react'
import Header from 'components/AfterAuth/template/Header'
import SidePanel from 'components/AfterAuth/template/SidePanel'
import UserDropdown from 'components/AfterAuth/template/UserDropdown'
import LanguageSelector from 'components/AfterAuth/template/LanguageSelector'
import Notification from 'components/AfterAuth/template/Notification'
import MobileNav from 'components/AfterAuth/template/MobileNav'
import Search from 'components/AfterAuth/template/Search'
import StackedSideNav from 'components/AfterAuth/template/StackedSideNav'
import View from 'views'

const HeaderActionsStart = () => {
    return (
        <>
            <MobileNav />
            <Search />
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            <LanguageSelector />
            <Notification />
            <SidePanel />
            <UserDropdown hoverable={false} />
        </>
    )
}

const StackedSideLayout = () => {
    return (
        <div className="app-layout-stacked-side flex flex-auto flex-col">
            <div className="flex flex-auto min-w-0">
                <StackedSideNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow dark:shadow-2xl"
                        headerStart={<HeaderActionsStart />}
                        headerEnd={<HeaderActionsEnd />}
                    />
                    <div className="h-full flex flex-auto flex-col">
                        <View />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackedSideLayout
