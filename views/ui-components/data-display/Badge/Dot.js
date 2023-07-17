import React from 'react'
import { Avatar, Badge } from 'components/AfterAuth/ui'
import { HiOutlineUser } from 'react-icons/hi'

const Dot = () => {
    return (
        <div className="flex">
            <Badge className="mr-4">
                <Avatar icon={<HiOutlineUser />} />
            </Badge>
        </div>
    )
}

export default Dot
