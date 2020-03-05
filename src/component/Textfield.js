import React, { Component } from 'react'

class Textfield extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textfield1: '0',
            textfield2: '0',
            selector2:'meter',
            selector3:'meter'
        }
    }
    textfieldVal1 = (event) => {
        this.setState({ textfield1: event.target.value })
    }

    textfieldVal2 = (event) => {
        this.setState({ textfield2: event.target.value })
    }

    secondSelector=(event)=>{
        this.setState({selector2:event.target.value})
    }

    thirdSelector=(event)=>{
        this.setState({selector3:event.target.value})
    }

    buttonClick =()=>{
        console.log("textfield1--> ", this.state.textfield1)
        console.log("textfield2--> ", this.state.textfield2)
        console.log("selector2--->",this.state.selector2)
        console.log("selector3--->",this.state.selector3)

    }

    
    render() {
        // console.log("in props--->",this.props.value)
        const unitType = this.props.value.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        })
        return (
            <div>
                <form>
                    <div className="textdivstyle">
                        <input className="textfield1" pattern="[0-9]" type="text" required defaultValue="0" onChange={this.textfieldVal1}></input>
                        <label style={{ fontSize: "200%" }}><b>&#x3d;</b></label>
                        <input className="textfield1" pattern="[0-9]" type="text" required defaultValue="0" onChange={this.textfieldVal2}></input>
                    </div>
                    <div>

                        <select className="selectors2" onChange={this.secondSelector}>
                            {unitType}
                        </select>
                        <select className="selectors3" onChange={this.thirdSelector}>
                            {unitType}
                        </select>
                        <div className="button">
                            <button type="button" onClick={this.buttonClick}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Textfield;
