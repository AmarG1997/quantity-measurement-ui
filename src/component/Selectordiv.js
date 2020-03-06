import React, { Component } from 'react'
import Textfield from './Textfield'

const unitGroup = [{
  "Length": ["FEET", "INCH", "YARD","CM"],
  "Weight": ["LITRES", "GALLON","ML","TONNE","KILOGRAM","GRAM"],
  "Temperature": ["FARHANHIT", "CELCIUS"]
}];

class Selectordiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitState: '',
      unitGroupSelected: [],
    }
  }

  componentWillMount() {
    const key = Object.keys(unitGroup[0])
    var arr = []
    for (var i = 0; i < unitGroup[0][key[0]].length; i++) {
      var val = unitGroup[0][key[0]][i]
      arr.push(val)
    }

    this.setState({ unitGroupSelected: arr })
  }

  firstSelectorChange = (event) => {
    this.setState({ unitState: event.target.value });
    unitGroup.map((value, index) => {
      return (
        this.setState({
          unitGroupSelected: value[event.target.value]
        }))
    });
  };

  render() {
    const key = Object.keys(unitGroup[0])
    // console.log("key--> ", unitGroup[0][key[0]][0])
    // var x = unitGroup[0][key[0]][0]

    // arr.push(x)
    const listItems = key.map((value, index) => {
      return (
        <option key={index}>{value}</option>
      )
    })
    return (
      <div>
        <select id="units" className="selectors" onChange={this.firstSelectorChange} value={this.state.unitState}>
          {
           [ listItems]
          })
        }
        </select>
        <Textfield value={this.state.unitGroupSelected} />
      </div>
    )
  }
}
export default Selectordiv;