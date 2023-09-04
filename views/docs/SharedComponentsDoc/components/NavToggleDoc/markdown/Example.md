```jsx
import React, { useState } from 'react'
import { Button } from 'components/AfterAuth/ui'
import { NavToggle } from 'components/AfterAuth/shared'

const Example = () => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Button
            shape="circle"
            variant="plain"
            onClick={() => setCollapsed(!collapsed)}
            icon={<NavToggle toggled={collapsed} />}
        />
    )
}

export default Example
```
