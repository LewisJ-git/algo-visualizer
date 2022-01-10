import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

class Template extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            arrayInput: '',
            randomInput: '',
            terminalString: `${this.props.sortType}-sort> `
        }
    }

    render() {
        return (
            <div className='Template'>
                <button onClick={this.handleCancelSearch} id='cancelSortButton'>Cancel Sort</button>
                <div className='terminal'>
                    <div className='text-wrapper'>
                        <span style={{ whiteSpace: 'pre-wrap' }}>{this.state.terminalString}</span>
                        <div className='blinkingCursor' />
                        <p id='terminal-clear-message'>Press ctrl + c to clear the terminal...< br/></p>
                        <p id='hidden-message' ref={this.terminalEndMessage}><br /><br /><br />xxxxxxxxx</p>
                    </div>
                </div>
                <div className='inputwrapper col'>
                    <form onSubmit={this.handleArraySubmission} className='textBoxSearch'>
                        <ScrollAnimation offset={0} animateIn='fadeInUp' delay={50}>
                            <input 
                                autoComplete = "off"
                                type='text' 
                                id='numInput'
                                value={this.state.arrayInput}
                                onChange={this.handleArrayInput}
                                placeholder='Insert a number or array. . .'/>
                        </ScrollAnimation>
                    </form>
                    <form onSubmit={this.handleSearchSubmission} className='numberBoxSearch'>
                        <ScrollAnimation offset={0} animateIn='fadeInUp' delay={100}>
                            <input 
                                autoComplete = "off"
                                type='number' 
                                id='searchInput'
                                value={this.state.searchInput}
                                onChange={this.handleSearchInput}
                                placeholder='Search a number. . .'/>
                        </ScrollAnimation>
                    </form>
                    <form onSubmit={this.handleRandomSubmission} className='randomGenerateInput'>
                        <ScrollAnimation offset={0} animateIn='fadeInUp' delay={150}>
                            <input 
                                autoComplete = "off"
                                type='number'
                                id='randomInput'
                                value={this.state.randomInput}
                                onChange={this.handleRandomInput}
                                placeholder='Generate array size:'/>
                        </ScrollAnimation>
                    </form>
                    <button onClick={this.submitClear}>Clear array</button>
                </div>
            </div>
        )
    }
}

Template.defaultProps = {
    sortType: ''
}

Template.propTypes = {
    sortType: PropTypes.string.isRequired
}

export default Template