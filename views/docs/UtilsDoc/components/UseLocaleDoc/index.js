import React from 'react'
import DemoComponentApi from 'components/AfterAuth/docs/DemoComponentApi'
import DemoLayout from 'components/AfterAuth/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'UseLocaleDoc/'

const demoHeader = {
    title: 'useLocale',
    desc: 'useLocale hook allow us to get current used locale.',
}

const demos = [
    {
        mdName: 'Example',
        mdPath: mdPath,
        title: 'Example',
        desc: ``,
        component: <Example />,
    },
]

const extra = (
    <DemoComponentApi
        hideApiTitle
        keyText="return"
        api={[
            {
                api: [
                    {
                        propName: 'locale',
                        type: `<code>string</code>`,
                        default: `-`,
                        desc: 'Current locale state',
                    },
                ],
            },
        ]}
    />
)

const UseLocaleDoc = () => {
    return (
        <DemoLayout
            hideApiTitle
            hideFooter
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            mdPrefixPath="docs/SharedComponentsDoc/components"
            extra={extra}
            keyText="param"
        />
    )
}

export default UseLocaleDoc
