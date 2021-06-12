import React from 'react'

const NavigationBarInner = (props) => {
    return (
        <nav className = 'NavigationBarInner'> 
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}

export default NavigationBarInner