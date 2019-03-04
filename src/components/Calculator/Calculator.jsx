import React, { Component } from 'react';
import styleCalc from './Calculator.module.css'
import Display from './Display/Display'
import Panel from './Panel/Panel'



class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wind: ''
        }
        this.addString = this.addString.bind(this);
        this.equal = this.equal.bind(this);
        this.clear = this.clear.bind(this);
    }
    equal() {
        this.setState({
            wind: eval(this.state.wind)
        });
        
    }
    
    addString(event) {
        if (event.target.value != undefined) {
            this.setState({
                wind: this.state.wind + event.target.value
            });
        }
    }
    
    clear() {
        this.setState({
            wind: ''
        });
    }
    render() {
        return (
            <div className="Calc">
                <Display inner={this.state.wind} />
                <Panel func={this.addString} funcE={this.equal} funcC={this.clear} />
            </div>

        );
    }
}

export default Calculator;