```jsx
import React from 'react'
import { RichTextEditor } from 'components/AfterAuth/shared'

const Example = () => {
    const handleChange = (val) => {
        console.log('value', val)
    }

    return <RichTextEditor onChange={handleChange} />
}

export default Example
```
