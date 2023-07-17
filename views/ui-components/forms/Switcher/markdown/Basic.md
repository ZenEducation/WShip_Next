```jsx
import React from 'react'
import { Switcher } from 'components/AfterAuth/ui'

const Basic = () => {
    const onSwitcherToggle = (val, e) => {
        console.log(val, e)
    }

    return (
        <div>
            <Switcher defaultChecked onChange={onSwitcherToggle} />
        </div>
    )
}

export default Basic
```
