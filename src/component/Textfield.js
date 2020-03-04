import React, { Component } from 'react'

class Textfield extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const unitType = this.props.value.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        })
        // console.log("in props--->",this.props.value)
        // console.log("in unitgroup-->", unitGroupContents);
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
                        {/* <option> select unit</option> */}
                            {/* <option value={10}>Meter</option>
                            <option value={20}>Kilometer</option>
                            <option value={30}>Centimeter</option>
                            <option value={20}>Milimeter</option> */}
                            {unitType}
                        </select>
                        <select className="selectors3">
                        {/* <option> select unit</option> */}
                            {/* <option value={10}>Meter</option>
                            <option value={20}>Kilometer</option>
                            <option value={30}>Centimeter</option>
                            <option value={20}>Milimeter</option> */}
                            {unitType}
                        </select>

                    </div>
                </form>
            </div>
        )
    }
}

export default Textfield;
