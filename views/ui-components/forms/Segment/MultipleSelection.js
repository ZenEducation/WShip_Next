import React from 'react'
import { Segment } from 'components/AfterAuth/ui'

const MultipleSelection = () => {
    return (
        <Segment selectionType="multiple">
            <Segment.Item value="left">Left</Segment.Item>
            <Segment.Item value="center">Center</Segment.Item>
            <Segment.Item value="right">Right</Segment.Item>
        </Segment>
    )
}

export default MultipleSelection
