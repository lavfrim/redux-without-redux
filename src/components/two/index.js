import React, { Component } from 'react';
import Three from '../three';

const blockName = 'two';

class Two extends Component  {
    constructor(props) {
        super(props);
        this.infomitter = Object.prototype.infomitter;
        this.state = this.infomitter.getIc(this, 'two', 'four'); 
    }

    componentDidUpdate() {
        console.log('TWO did update');
    }
    
    render() {
        console.log('---- 2 ----');
        console.log(this.state);

        return (
            <div>
                <p>{`Component >>${blockName}<< working`}</p>
                <Three />
            </div>
        )
    }
}

export default Two;