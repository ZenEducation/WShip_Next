import React from 'react'
import DemoComponentApi from 'components/AfterAuth/docs/DemoComponentApi'
import DemoLayout from 'components/AfterAuth/docs/DemoLayout'

// Demo
import Example from './Example'

const mdPath = 'RequiredFieldValidationDoc/'

const demoHeader = {
    title: 'requiredFieldValidation',
    desc: 'This function can be use to displaying some message if the input value is falsy.',
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

const demoApi = [
    {
        component: 'requiredFieldValidation',
        api: [
            {
                propName: 'value',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Field value',
            },
            {
                propName: 'message',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Feedback message',
            },
        ],
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
                        propName: 'validationMessage',
                        type: `<code>string</code>`,
                        default: `<code>'Required'</code>`,
                        desc: 'Feedback message',
                    },
                ],
            },
        ]}
    />
)

const RequiredFieldValidationDoc = () => {
    return (
        <DemoLayout
            hideApiTitle
            hideFooter
            innerFrame={false}
            header={demoHeader}
            demos={demos}
            api={demoApi}
            mdPrefixPath="docs/SharedComponentsDoc/components"
            extra={extra}
            keyText="param"
        />
    )
}

export default RequiredFieldValidationDoc
