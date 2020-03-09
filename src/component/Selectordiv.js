import React, { Component } from 'react'
import Textfield from './Textfield'
import {getUnit} from '../configuration/configuration'
import {getEnum} from '../configuration/configuration'

class Selectordiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unitState: '',
      unitGroupSelected: [],
      unitList12:[]
    }
    this.Textfield = React.createRef()
  }

  componentWillMount() {
     getUnit().then((res)=>{
      // console.log("in getUnit response is--->",res.data)
      this.setState({
        unitList12:res.data
      })
      getEnum(this.state.unitList12[0]).then((response)=>{
        this.setState({
          unitGroupSelected:response.data
        })
      }) 
    })
  }

  firstSelectorChange = async (event) => {
    let fsvalueevent=event.target.value;
    this.setState({ unitState: event.target.value });
    await getEnum(fsvalueevent).then((responseOfgetEnum)=>{
      this.setState({
        unitGroupSelected:responseOfgetEnum.data
      })
    })  
    this.Textfield.current.handleUpdateUnit(this.state.unitGroupSelected[0]);
  };

  render() {
   let unitType=this.state.unitList12.map((value,index)=>{
     return(
     <option key={index}>{value}</option>
     )
   })
    return (
      <div>
        <select id="units" className="selectors" onChange={this.firstSelectorChange} value={this.state.unitState}>
          {
            [unitType]           
          })
        }
        </select>
        <Textfield ref={this.Textfield} value={this.state.unitGroupSelected} />
      </div>
    )
  }
}
export default Selectordiv;