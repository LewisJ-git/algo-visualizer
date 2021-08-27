import React from 'react'
import { ReactComponent as Headersvg3 } from '../svg/headersvg3.svg';
import { ReactComponent as Headersvg4 } from '../svg/headersvg4.svg';

const HeaderDeco = () => {
    return (
        <div className = 'HeaderDeco'> 
            <div className='header-svg-2'>
                <Headersvg3 />
            </div>
            <div className='header-svg-3'>
                <Headersvg4 />
            </div>
        </div>
    )
}

export default HeaderDeco