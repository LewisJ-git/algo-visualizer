import React from 'react'
import Particles from 'react-particles-js';
import ScrollAnimation from 'react-animate-on-scroll';

const MainBackground = (numStars) => {
    return (
        <div className='MainBackground'>
            <ScrollAnimation offset={0} animateIn='fadeIn' delay={500}>
                <div id='stars'></div>
                <div id='stars2'></div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn='fadeIn' delay={1000}>
                <div id='particles-js'>
                    <Particles params={{
                    particles: {
                        number: {
                            value: 70,
                            density: {
                                enable: true,
                                value_area: 800,
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: "#ffffff"
                            },
                            polygon: {
                                nb_sides: 3
                            },
                            image: {
                                src: '',
                                width: 100,
                                height: 100
                            }
                        },
                        opacity: {
                            value: 0.3,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 80.17060304327615,
                            color: "#ffffff",
                            opacity: 0.8979107540846928,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'top',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: false,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: false,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                          }
                        },
                        retina_detect: true
                }}>
                </Particles>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default MainBackground
