import React, {useState} from 'react'
import NavigationBarInner from './NavigationBarInner'
import NavigationItem from './NavigationItem'
import ScrollAnimation from 'react-animate-on-scroll';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const searchChildrends = ['Linear', 'Binary', 'Ternary'];
    const sortChildrends = ['Bubble', 'Selection', 'Insertion', 'Merge', 'Quick', 'Counting'];
    const graphChildrends = ['Breadth First Search', 'Depth First Search', 'Minimum Spanning Tree', 'Shortest Path'];
    function pushChildren (childrenArray) {
        let content = [];
        for (let x = 0; x < childrenArray.length; x++) {
            content.push(<a href='#' className='btn'>⬩ {childrenArray[x]} ⬩</a>);
        }
        return content;
    }
    return (
        <div className='Navigationbar'>
            <NavigationBarInner >
                <ScrollAnimation offset={0} animateIn='fadeIn' delay={50}>
                <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <NavigationItem title='Searching' id={1}>
                        {/* dropdown goes here */}
                        {pushChildren(searchChildrends)}
                    </NavigationItem>
                </div>
                </ScrollAnimation>
                <ScrollAnimation offset={0} animateIn='fadeIn' delay={250}>
                <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <NavigationItem title='Sorting' id={2}>
                        {/* dropdown goes here */}
                        {pushChildren(sortChildrends)}
                    </NavigationItem>
                </div>
                </ScrollAnimation>
                <ScrollAnimation offset={0} animateIn='fadeIn' delay={450}>
                <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <NavigationItem title='Graphs' id={3}>
                        {/* dropdown goes here */}
                        {pushChildren(graphChildrends)}
                    </NavigationItem>
                </div>
                </ScrollAnimation>
                <ScrollAnimation offset={0} animateIn='fadeIn' delay={650}>
                <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                    <NavigationItem title='WIP' id={4}>
                        {/* dropdown goes here */}

                    </NavigationItem>
                </div>
                </ScrollAnimation>
            </NavigationBarInner>
            <div className={open ? 'dark-overlay show' : 'dark-overlay'}></div>
        </div>
    )
}

export default NavigationBar
