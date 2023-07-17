```jsx
import React from 'react'
import { Dropdown } from 'components/AfterAuth/ui'
<!-- import { Link } from 'react-router-dom'
 -->
import Link from "next/link"
const WithRouterLink = () => {
    return (
        <div>
            <Dropdown title="Click Me!">
                <Dropdown.Item>
                    <Link
                        className="menu-item-link"
                        href="/AA/ui-components/checkbox"
                    >
                        Checkbox
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/AA/ui-components/button">
                        Button
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/AA/ui-components/alert">
                        Alert
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="menu-item-link" href="/AA/ui-components/dialog">
                        Dialog
                    </Link>
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default WithRouterLink
```
