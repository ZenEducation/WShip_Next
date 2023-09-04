```jsx
import React from 'react'
import { Alert } from 'components/AfterAuth/ui'
import { HiFire } from 'react-icons/hi'

const Icon = () => {
    return (
        <div>
            <Alert type="success" showIcon customIcon={<HiFire />}>
                Additional description and information about copywriting.
            </Alert>
        </div>
    )
}

export default Icon
```
