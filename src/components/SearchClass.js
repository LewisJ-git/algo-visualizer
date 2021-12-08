import React, { Component, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import { BarChart, Bar, ResponsiveContainer, Cell, LabelList } from 'recharts';


class SearchClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
            arrayInput: '',
            search: '',
            searchInput: '',
            randomInput: '',
            terminalString: `${this.props.searchType}-search> `,
            defaultTerminalName: `${this.props.searchType}-search> `,
            searchIndex: ''
        }
    }

    handleArrayInput = (event) => {
        this.setState({
            arrayInput: event.target.value
        })
    }

    handleSearchInput = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleArraySubmission = (event) => {
        event.preventDefault();
        if (this.state.arrayInput.search(/([^0-9, ])/g) !== -1) {
            alert('Please enter a number or an array of numbers separated by spacebar or commas')
        } 
        else {
            console.log(this.state.arrayInput)
            let num = ''
            let str = this.state.arrayInput
            let x = []
            let index = 0
            for (let i = 0; i < str.length; i++) {
                let ascii = str[i].charCodeAt(0)
                if (ascii === 46 || (ascii >= 48 && ascii <= 57)) {
                    num += str[i]
                }
                else {
                    if (num !== '') {
                        let indexNumToString = this.state.array.length > 0 ? `${index}` : `${this.state.array.length}`
                        x.push({
                            name: indexNumToString.toString(),
                            uv: num
                        })
                        num = ''
                        index++
                    }
                }
            }
            x.push({
                name: `${index}`,
                uv: num
            })
            this.insertInputToArray(x)
        }
        this.insertNewTerminalString(`input inserted`)
        this.setState ({
            arrayInput: ''
        }) 
    }

    insertInputToArray(n) {
        let temp = []
        if (this.state.array.length < 1) {
            if (n.length < 2) {
                let tempObj = n[0]
                temp.push(tempObj) 
            }
            else {
                temp = n;
            }
        }
        else {
            for (var i of n) {
                temp = [...this.state.array]
                temp.push(i)
            }
        }
        this.setState({
            array: temp
        })
    }

    insertRandomArray(n) {
        let temp = n
        this.setState({
            array: temp
        })
    }

    handleSearchSubmission = (event) => {
        event.preventDefault();
        if (this.state.array.length > 0) {
            this.insertNewTerminalString(`begin searching for ${this.state.searchInput}`)
            this.setState ({
                search: this.state.searchInput,
                searchInput: ''
            })
            //initiate search algorithm
            this.searchAlgorithm()
        }
        else {
            this.insertNewTerminalString('empty array')
            this.setState ({
                searchInput: ''
            })
        }
    }

    changeSearchIndex(i) {
        this.setState({
            searchIndex: i
        })
    }

    compareTwoNums(x, y) {
        if (x == y) {
            this.insertNewTerminalString('TRUE')
            return true
        }
        this.insertNewTerminalString('FALSE')
        return false
    }

    searchIndexInitialize() {
        this.setState({
            searchIndex: '0'
        })
    }

    resetSearchIndex() {
        this.setState({
            searchIndex: ''
        })
    }

    searchAlgorithm() {
        this.searchIndexInitialize()
        var isFound = false
        let multiplier = Math.floor(9 / Math.sqrt(this.state.array.length)) * 1000 //1000 = 1 sec
        if (this.props.searchType === 'linear') {
            var index = 0
            var intervalLinear = setInterval(() => {
                if (isFound) {
                    this.insertNewTerminalString('search found')
                    this.resetSearchIndex()
                    clearInterval(intervalLinear)   //clear interval when element found or index reach the end
                    return
                }
                if (index >= this.state.array.length) {
                    this.insertNewTerminalString('search not found')
                    this.resetSearchIndex()
                    clearInterval(intervalLinear)   //clear interval when element found or index reach the end
                    return
                }

                //highlight graph bar
                this.changeSearchIndex(index.toString())

                //print terminal to check
                this.insertNewTerminalString(`checking if ${this.state.array[index].uv} = ${this.state.search}`)
                    
                //if/else statement
                    //break
                isFound = this.compareTwoNums(this.state.array[index].uv, this.state.search)

                index++ //go to next index
            }, multiplier)
        }
        // if (this.props.searchType === 'binary') {

        // }
        //clear everything
        //this.resetSearchIndex()
    }

    submitClear = () => {
        if (this.state.array.length > 0) {
            this.setState({
                array: [],
                seacrch: '',
                searchIndex: ''
            })
            this.insertNewTerminalString(`array cleared`)
        }
        else {
            this.insertNewTerminalString(`there's nothing to clear`)
        }
    }

    handleRandomSubmission = (event) => {
        event.preventDefault();
        let tempRandomObj = []
        for (let i = 0; i < this.state.randomInput; i++) {
            let x = Math.floor(Math.random(this.state.randomInput) * this.state.randomInput + 1) 
            tempRandomObj.push({
                name: `${i}`,
                uv: x
            })
        }
        this.insertRandomArray(tempRandomObj)
        this.insertNewTerminalString(`generated a random array of ${this.state.randomInput} elements.`)
        this.setState({
            randomInput: ''        
        })
    }

    insertNewTerminalString(sTerminalInsert) {
        let s = this.state.terminalString + `${sTerminalInsert}
${this.state.defaultTerminalName}`
        this.setState({
            terminalString: s
        })
    }

    handleRandomInput = (event) => {
        this.setState({
            randomInput: event.target.value
        })
    }

    keydownHandler(e) {
        if (e.key === 'c' && e.ctrlKey) {
            this.setState({
                terminalString: `${this.props.searchType}-search> `
            })
        } 
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keydownHandler.bind(this))
    }

    terminalEndMessage = React.createRef()

    componentDidUpdate () {
        this.scrollToBottom()
    }

    scrollToBottom = () => {
        this.terminalEndMessage.current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <div id={this.props.id} className='Search'>
                {this.state.array.length > 0 && 
                    <div className='displayArray'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={this.state.array} margin={{ top: 5, right: 0, left: 0, bottom: 20 }}>
                            <Bar dataKey="uv" fill="#e0e0e0">
                                {
                                    this.state.array.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === parseInt(this.state.searchIndex) ? '#19e7ff' : '#e0e0e0'}/>
                                    ))
                                }
                                {this.state.array.length < 21 && <LabelList dataKey="uv" position="bottom" fill="#e0e0e0" />}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                }
                <div className='terminal'>
                    <div className='text-wrapper'>
                    
                        <span style={{ whiteSpace: 'pre-wrap' }}>{this.state.terminalString}</span>
                        <div className='blinkingCursor' />
                        <p id='terminal-clear-message' ref={this.terminalEndMessage}>Press ctrl + c to clear the terminal...</p>
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

SearchClass.defaultProps = {
    id: '',
    searchType: ''
}

SearchClass.propTypes = {
    id: PropTypes.string.isRequired,
    searchType: PropTypes.string.isRequired
}

export default  SearchClass