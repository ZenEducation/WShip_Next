import React from 'react'
import { SyntaxHighlighter } from 'components/AfterAuth/shared'

const DevelopmentServer = () => {
    return (
        <>
            <p>
                After the dependencies installation completes, run the following
                command in the same directory & console to start a server in
                your local environment:
            </p>
            <SyntaxHighlighter>npm run start</SyntaxHighlighter>
            <p>
                Visit{' '}
                <a
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noreferrer"
                >
                    http://localhost:3000/
                </a>{' '}
                on your browser, the app will automatically reload if you change
                any of the source files.
            </p>
        </>
    )
}

export default DevelopmentServer
