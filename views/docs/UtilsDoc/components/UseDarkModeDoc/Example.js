import React from 'react'
import { SyntaxHighlighter } from 'components/AfterAuth/shared'

const Example = () => {
    return (
        <SyntaxHighlighter language="js">{`import useDarkMode from 'utils/hooks/useDarkMode'

const Component = () => {

	const [isDark, setIsDark] = useDarkMode()

	const handleSetDarkMode = (bool) => {
		setIsDark(bool ? 'dark' : 'light')
	}
	return (...)
}
`}</SyntaxHighlighter>
    )
}

export default Example
