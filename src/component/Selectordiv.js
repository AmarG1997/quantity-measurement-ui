import React, { Component } from 'react'
import Textfield from './Textfield'

const unitGroup = [{
  "length": ["meter", "centimeter", "kilometer"], "mass": ["kg", "gram"],
  "Temperature": ["Celcius", "Farhenhit"]
}];

class Selectordiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitState: '',
      unitGroup: []
    }
  }

  firstSelectorChange = (event) => {
    this.setState({ unitState: event.target.value });
    // console.log("valuesss-->", event.target.value)
    unitGroup.map((value, index) => {
      return (
        this.setState({
          unitGroup: value[event.target.value]
        }))
    });
  };

  render() {
    const key = Object.keys(unitGroup[0])
    const listItems = key.map((value, index) => {
      return (
        <option key={index}>{value}</option>
      )
    })
    return (
      <div>
        <select id="units" className="selectors" onChange={this.firstSelectorChange} value={this.state.unitState}>
        <option> select unit</option>
          {
            listItems
          })
        }
        {/* <option value={10}>Length</option>
        <option value={20}>Temperature</option>
        <option value={30}>Mass</option>
        <option value={20}>Volume</option> */}
        </select>
        <Textfield value={this.state.unitGroup}/>
      </div>
      )
    }
  }
export default Selectordiv;