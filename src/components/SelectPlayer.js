import React from 'react'
import Title from '../Elements/Title'
import Button from '../Elements/Button'
function SelectPlayer({ xClick, oClick}) {
    return (
        <>
            <Title>Select Player</Title>
            <Button width={'100px'} height={'100px'} onClick={xClick}>X</Button>
            <Button width={'100px'} height={'100px'} onClick={oClick}>O</Button>
        </>
    )
}

export default SelectPlayer
