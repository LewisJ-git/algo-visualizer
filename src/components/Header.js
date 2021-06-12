import React from 'react'

// fill="#161616"

const Header = () => {
    const fillC = 'none', strokeCol = '#6c6c6c', strokeWid = '4';
    return (
        <div className = 'Header'> 
            <h1>Algorithm Visualizer</h1>
            <div className='header-svg'>
                <svg id='header-svg-1' width="200" height="200">
                    <path
                        fill="none"
                        stroke={strokeCol}
                        strokeWidth={strokeWid}
                        d="M100 4L4 100 100 196 196 100z"
                    ></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="60" id='header-svg-1-a'>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M33 2L4 32"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M33 56L4 31"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M32 2L430 2"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M32 56L430 56"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M968 2L570 2"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M968 56L570 56"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M967 2L996 31"></path>
                    <path fill={fillC} stroke={strokeCol} strokeWidth={strokeWid} d="M967 56L993 31"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header