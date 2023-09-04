```jsx
import React from 'react'
import { Pagination } from 'components/AfterAuth/ui'

const More = () => {
    return (
        <div>
            <div className="mb-4">
                <Pagination total={50} />
            </div>
            <div className="mb-4">
                <Pagination total={100} />
            </div>
        </div>
    )
}

export default More
```
