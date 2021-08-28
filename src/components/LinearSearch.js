import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const LinearSearch = () => {
    return (
        <div className='LinearSearch'>
            <ScrollAnimation offset={0} animateIn='fadeInUp' delay={50}>
                <form>
                    <label for='numInput'></label>
                    <input type='number' id='numInput' name='numInput' 
                        placeholder='Enter a number. . .'/>
                </form>
            </ScrollAnimation>
        </div>
    )
}

export default LinearSearch
