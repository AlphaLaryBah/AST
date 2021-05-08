import React, {Component} from 'react'
import Calculator from "awesome-react-calculator";
 
const style = {
  height: '24rem',
  width: '16rem'
}
 
class Calculate extends Component {
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }
 
  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
  render() {
    return <div className='calculator-demo p-3' style={style}>
      <Calculator
        onNewInput={this.handleInput}
        onResultChange={this.onResultChange}/>
    </div>
  }
}
export default Calculate;