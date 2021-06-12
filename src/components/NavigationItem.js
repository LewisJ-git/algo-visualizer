import React, {useState, useRef} from 'react'

const NavigationItem = (props) => {
    const [open, setOpen] = useState(false);
    const parentRef = useRef();
    const svgFormat = {
        position: 'absolute',
        top: '0%',
        zIndex: '-3',
    }
    const strokeW = 3, strokeColor = '#e0e0e0';
    function randomDeco(id) {
        let content = [];
        if (id === 1) {
            content.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="48" style={svgFormat}>
                    {/* top */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 5L70 5"></path>
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M75 5L190 5"></path>
                    {/* sides */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 4L10 40"></path>
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M190 4L190 40"></path>
                    {/* bottom */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M9 40L191 40"></path>
                </svg>);
            return content;
        }
        if (id === 2) {
            content.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="48" style={svgFormat}>
                    {/* top */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M9 40L191 40"></path>
                    {/* sides */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 4L10 40"></path>
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M190 4L190 40"></path>
                    {/* bottom */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 5L150 5"></path>
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M155 5L190 5"></path>
                </svg>);
            return content;
        }
        if (id === 3) {
            content.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="48" style={svgFormat}>
                    {/* 1st line on the top */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 5L190 5"></path>
                </svg>);
            return content;
        }
        else {
            content.push(
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="48" style={svgFormat}>
                    {/* 1st line on the top */}
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M10 5L100 5"></path>
                    <path stroke={strokeColor} strokeWidth={strokeW} d="M105 5L190 5"></path>
                </svg>);
            return content;
        }
    }
    return (
        <li id={props.id} className=''>
            <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='hitBox'>
            {/* <div onClick={toggleDD} className='hitBox'> */}
                <p>◇ {props.title} ◇</p>
                <div className='dropdown-children' ref={parentRef} style={open ? {height: parentRef.current.scrollHeight + 'px'} : {height: '0px'}}>
                    {props.children}
                </div>
            </div>
            {/* {randomDeco(props.id)} */}
        </li>
    )
}

export default NavigationItem
