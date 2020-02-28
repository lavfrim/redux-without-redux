import React, { Component } from 'react';

const blockName = 'three';

class Three extends Component {
    constructor(props) {
        super(props);
        this.infomitter = Object.prototype.infomitter;
        this.state = this.infomitter.getIc(this); // не реботает с пустым филдом
    }

    componentDidUpdate() {
        console.log('THREE did update');
    }

    handleClick() {
        this.infomitter.setIc({five: '5'});
    }
    
    render() {
        console.log('---- 3 ----');
        console.log(this.state);
        return (
            <div>
                <p>{`Component >>${blockName}<< working`}</p>
                <button onClick={() => {this.handleClick()}}>{'set 5'}</button>
            </div>
        )
    }
}

export default Three;