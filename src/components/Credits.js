import React from 'react';
import { ReactComponent as GitIcon } from '../svg/github.svg';

const Credits = () => {
    return (
        <div className='Credits'>
            <div className='link-wrap'>
                <a href='https://github.com/LewisJ-git/algo-visualizer' className='git-svg' target="_blank">
                    <GitIcon />
                </a>
                <a href='https://github.com/LewisJ-git/algo-visualizer' target="_blank">
                    Fork me on GitHub!
                </a>
            </div>
            <p>Made in React.js</p>
        </div>
    )
}

export default Credits
