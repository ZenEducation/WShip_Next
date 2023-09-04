```jsx
import React, { useState } from 'react'
import { FormNumericInput } from 'components/AfterAuth/shared'

const Simple = () => {
    const [value, setValue] = useState(0)

    const handleValueChange = (e) => {
        console.log(e)
        setValue(e.floatValue)
    }

    return <FormNumericInput onValueChange={handleValueChange} value={value} />
}

export default Simple
```
