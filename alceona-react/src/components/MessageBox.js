
import React from 'react'

const MessageBox = ( {text, onClick} )=> {
    return (
         <p onClick = {onClick}>{text}</p>
    )
}

export default MessageBox;