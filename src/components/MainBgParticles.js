import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types';

const MainBgParticles = ({draw, height, width}) => {
    const canvas = useRef();
    useEffect(() => {
        const context = canvas.current.getContext('2d');
        draw(context);
    });
    return (
        <canvas ref={canvas} height={height} width={width} />
    )
}

MainBgParticles.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default MainBgParticles
