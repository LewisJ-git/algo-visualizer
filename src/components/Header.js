import React from 'react'
import { ReactComponent as Headersvg1 } from '../svg/headersvg1.svg';
import { ReactComponent as Headersvg2 } from '../svg/headersvg2.svg';

// fill="#161616"

const Header = () => {
    const fillC = 'none', strokeCol = '#6c6c6c', strokeWid = '4';
    return (
        <div className = 'Header'> 
            <h1>Algorithm Visualizer</h1>
            <div className='header-svg'>
                <Headersvg1 />
                <Headersvg2 />
            </div>
        </div>
    )
}

export default Header