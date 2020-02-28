import React, { Component } from 'react';
import Two from '../two';

const blockName = 'one';

class One extends Component {
    constructor(props) {
        super(props);
        this.infomitter = Object.prototype.infomitter;
        this.state = this.infomitter.getIc(this, 'one');
    }

    componentDidUpdate() {
        console.log('ONE did update');
    }

    handleClick() {
        console.log('click')
        this.infomitter.setIc({four: '4'});
    }
   
    render() {
        console.log('----- 1 -----');
        console.log(this.state);

        return (
            <div>
                <p>{`Component >>${blockName}<< working`}</p>
                <button onClick={() => {this.handleClick()}}>{'set 4'}</button>
                <Two />
            </div>
        )
    }
}

export default One;