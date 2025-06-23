import React from 'react'

function GridModel() {

    const styleCss = {
        display: 'grid',
        gridTemplateAreas:
            "header header menu content footer footer",
        gridTemplateColumns: '2fr 2fr',
        gap: '5px',
        backgroundColor: 'lightBlue',
        padding: '5px',
    }
    return (
        <div style={styleCss}>
            <div class="header"><h2>My Header</h2></div>
            <div class="menu"><a href="#">Link 1</a><br /><a href="#">Link 2</a><br /><a href="#">Link 3</a></div>
            <div class="content"><h3>Lorem Ipsum</h3><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet. Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p></div>
            <div class="footer"><h4>Footer</h4></div>
        </div>
    )
}

export default GridModel