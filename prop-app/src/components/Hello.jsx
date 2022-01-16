import React from 'react'

export const hello = ({name}) => { // le llamo así, y evito tantos pasos llamado a los props.
    return (
        <div>
            <p>Hello {name} </p>
        </div>
    )
}

export default hello; 




