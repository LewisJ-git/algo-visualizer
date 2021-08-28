import React, {useState, useRef} from 'react'

const NavigationItem = (props) => {
    const [open, setOpen] = useState(false);
    const parentRef = useRef();
    return (
        <li id={props.id} className=''>
            <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='hitBox'>
                <p>{props.title}</p>
                <div className='dropdown-children' ref={parentRef} style={open ? {height: parentRef.current.scrollHeight + 'px'} : {height: '0px'}}>
                    {props.children}
                </div>
            </div>
        </li>
    )
}

export default NavigationItem
