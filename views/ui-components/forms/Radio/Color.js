import React from 'react'
import { Radio } from 'components/AfterAuth/ui'

const Color = () => {
    return (
        <div>
            <Radio defaultChecked color="green-500">
                Radio
            </Radio>
            <div className="mt-4">
                <Radio.Group
                    color="yellow-500"
                    value={'Apple'}
                    name="radioColorGroup"
                >
                    <Radio color="blue-600" value={'Apple'}>
                        Apple
                    </Radio>
                    <Radio value={'Banana'}>Banana</Radio>
                    <Radio value={'Cherry'}>Cherry</Radio>
                </Radio.Group>
            </div>
        </div>
    )
}

export default Color
