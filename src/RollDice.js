import React,{ Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component{

// Face numbers passes as default props
static defaultProps = {
	sides : ['one', 'two', 'three',
			'four', 'five', 'six']
}
constructor(props){
	super(props)
	
	// States
	this.state = {
	die1 : 'six',
	die2 : 'six',
	rolling: false,
    Totalattemt:15,
    useattempt:0,
    Remaining:15,
	}

}


roll=()=>{
	const {sides} = this.props
	this.setState({
	
	// Changing state upon click
	die1 : sides[Math.floor(Math.random() * sides.length)],
	die2 : sides[Math.floor(Math.random() * sides.length)],
	rolling:true,
    
    
	})	
	
	setTimeout(() => {
	
	this.setState({rolling:false})
	},1000)
}

render(){

	const {die1, die2, rolling} = this.state
	return(
	<div className='RollDice'>
		<div className='RollDice-container'>
		<Die face={die1} rolling={rolling}/>
		<Die face={die2} rolling={rolling}/>
		</div>
		<button
				// disabled={this.state.rolling}
				onClick={this.roll}>
		{this.state.rolling ? 'Rolling' : 'Roll Dice!'}
		</button>

        <div>
            <h3>Total attempts :{this.state.Totalattemt}</h3>
            <h3>Remaining :{this.state.Remaining}</h3>
        </div>
	</div>
	)
}
}

export default RollDice
