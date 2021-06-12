import React from 'react'

const HeaderDeco = () => {
    return (
        <div className = 'HeaderDeco'> 
            <div className='header-svg-2'>
                <svg width="100" height="100">
                    <path stroke="#e0e0e0" strokeWidth="4" d="M45 4L4 45"></path>
                    <path stroke="#e0e0e0" strokeWidth="4" d="M4 45L45 84"></path>
                </svg>
            </div>
            <div className='header-svg-3'>
                <svg width="100" height="100">
                    <path stroke="#e0e0e0" strokeWidth="4" d="M45 4L84 45"></path>
                    <path stroke="#e0e0e0" strokeWidth="4" d="M84 45L45 84"></path>
                </svg>
            </div>
        </div>
    )
}

export default HeaderDeco