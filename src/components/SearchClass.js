import React, { Component } from 'react'
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
            searchIndex: '',
            stopSearch: false
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
        event.preventDefault()
        this.resetSearchIndex()
        if (this.state.arrayInput.search(/([^0-9, ])/g) !== -1) {
            this.insertNewTerminalString('please enter a number or an array of numbers separated by spacebar or commas')
        } 
        else {
            //console.log(this.state.arrayInput)
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
                        let indexNumToString = this.state.array.length > 0 ? `${this.state.array.length}` : `${index}`
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
            //sort array if search type is binary
            if (this.props.searchType === 'binary') {
                x.sort((a, b) => (a.uv > b.uv) ? 1 : -1)
            }
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
        event.preventDefault()
        this.resetSearchIndex()
        this.changeStopSearch(false)
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
            this.insertNewTerminalString('ERROR: empty array')
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
        if (this.props.searchType === 'linear') {
            //y = 1 / 1.1 ^ x
            let multiplier = Math.floor(4 / Math.pow(1.1, this.state.array.length)* 1000)  //1000 = 1 sec
            this.doLinearSearch(multiplier)
        }
        if (this.props.searchType === 'binary') {
            //y = 1 / sqrt(x)
            let multiplier = Math.floor(9 / Math.sqrt(this.state.array.length)) * 1000 //1000 = 1 sec
            this.doBinarySearch(0, this.state.array.length, multiplier)
        }
    }

    doLinearSearch(delay) {
        var isFound = false
        var index = 0
        var intervalLinear = setInterval(() => {
            if (this.state.stopSearch) {
                this.resetSearchIndex()
                clearInterval(intervalLinear)
                return
            }
            if (isFound) {
                this.insertNewTerminalString('search found')
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
                
            //if search found
            isFound = this.compareTwoNums(this.state.array[index].uv, this.state.search)

            index++ //go to next index
        }, delay)
    }

    doBinarySearch(left, right, delay) {
        if (this.state.stopSearch) {
            this.resetSearchIndex()
            return
        }
        setTimeout(() => {
            if (right > 0 && left <= right) {
                //find middle
                let mid = left + Math.floor((right - left) / 2);
                this.insertNewTerminalString(`the middle index is ${mid}`)
                this.changeSearchIndex(mid) //highlight bar color of mid
    
                this.insertNewTerminalString(`checking if ${this.state.array[mid].uv} = ${this.state.search}`)

                if (this.compareTwoNums(this.state.array[mid].uv, this.state.search)) { // If the element is present at the middle itself
                    this.insertNewTerminalString(`search found`)
                    return
                }

                if (this.state.array[mid].uv > this.state.search) { // If element is smaller than mid, then it can only be present in left subarray
                    this.insertNewTerminalString(`initiate binary-search on the lower half`)
                    return this.doBinarySearch(left, mid - 1, delay)
                }
                else { // Else the element can only be present in right subarray
                    this.insertNewTerminalString(`initiate binary-search on the upper half`)
                    return this.doBinarySearch(mid + 1, right, delay)
                }
            }
            this.insertNewTerminalString('search not found')
            this.resetSearchIndex()
            return
        }, delay)//delay
        
    }

    submitClear = () => {
        if (this.state.array.length > 0) {
            this.setState({
                array: [],
                seacrch: ''            
            })
            this.handleCancelSearch()
            this.insertNewTerminalString(`array cleared`)
        }
        else {
            this.insertNewTerminalString(`ERROR: there's nothing to clear`)
        }
    }

    handleRandomSubmission = (event) => {
        event.preventDefault()
        this.resetSearchIndex()
        let tempRandomObj = []

        //generate a pool of unique random numbers
        var tempRandomPool = []
        tempRandomPool.push(Math.floor(Math.random() * (this.state.randomInput * 2)) + 1)
        while (tempRandomPool.length < this.state.randomInput) {
            let x = Math.floor(Math.random() * (this.state.randomInput * 2)) + 1
            if (tempRandomPool.indexOf(x) === -1) {
                tempRandomPool.push(x)
            }
        }

        for (let i = 0; i < this.state.randomInput; i++) {
            tempRandomObj.push({
                name: `${i}`,
                uv: tempRandomPool[i]
            })
        }
        //sort array if search type is binary
        if (this.props.searchType === 'binary') {
            tempRandomObj.sort((a, b) => (a.uv > b.uv) ? 1 : -1)
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

    handleCancelSearch = () => {
        this.resetSearchIndex()
        this.changeStopSearch(true)
        this.insertNewTerminalString('search cancelled')
    }

    changeStopSearch(boolInsert) {
        this.setState({
            stopSearch: boolInsert
        })
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
                <button onClick={this.handleCancelSearch} id='cancelSearchButton'>Cancel Search</button>
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

SearchClass.defaultProps = {
    id: '',
    searchType: ''
}

SearchClass.propTypes = {
    id: PropTypes.string.isRequired,
    searchType: PropTypes.string.isRequired
}

export default  SearchClass