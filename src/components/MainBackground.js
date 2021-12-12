import React from 'react'
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';
import PConfig from '../config/particlesConfig.json'

const MainBackground = (numStars) => {
    return (
        <div className='MainBackground'>
            <ScrollAnimation offset={0} animateIn='fadeIn' delay={500}>
                <div id='stars'></div>
                <div id='stars2'></div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn='fadeIn' delay={1000}>
                <div id='particles-js'>
                    <Particles params={PConfig}>
                </Particles>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default MainBackground
