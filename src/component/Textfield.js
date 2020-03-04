import React, { Component } from 'react'

class Textfield extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        // console.log("move--> ", this.props.value)
        const unitType = this.props.value.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        })
        return (
            <div>
                <form>
                    <div className="textdivstyle">
                        <input className="textfield1" pattern="[0-9]" type="text" required ></input>
                        <label style={{ fontSize: "200%" }}><b>&#x3d;</b></label>
                        <input className="textfield1" pattern="[0-9]" type="text" required></input>
                    </div>
                    <div>

                        <select className="selectors2">
                            {unitType}
                        </select>
                        <select className="selectors3">
                            {unitType}
                        </select>

                    </div>
                </form>
            </div>
        )
    }
}

export default Textfield;
