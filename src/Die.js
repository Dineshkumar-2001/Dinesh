import React, {Component} from 'react'

import './Die.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Die extends Component{
render(){
	const {face, rolling} = this.props
	
	// Using font awesome icon to show
	// the exactnumber of dots
	return (
			<div>
				<FontAwesomeIcon icon={['fas', `fa-dice-${face}`]} className={`Die
				${rolling && 'Die-shaking'}`} />
			</div >
		)
}
}

export default Die




// import React, { Component } from 'react'

// export default class Ex_text extends Component {
//   constructor(){
//     super();
//     this.state={
//       Left_die:6,
//       Rigth_die:3,
//       Totalattempt:15,
//       Remaining:15,
//       UsedAttempt:0,
//       TotalPoints:0
//     }
//   }

//   updation=(one,two)=>{
//     let Remaining_balance = this.state.Remaining
//     let User_UsedAttempt = this.state.UsedAttempt
//     this.points_claculation(one , two)
//     this.setState({
//       Left_die:one,
//       Rigtht_die:two,
//       Remaining:Remaining_balance-1,
//       UsedAttempt:User_UsedAttempt+1
//     })
//   } 

//   points_claculation = (one , two) =>{
//     let points = this.state.TotalPoints;
//     switch(true){
//       case one === 0 && two === 0:
//         points += 0
//       break;
//       case one === 1 && two ===1:
//         points += 10
//         break;
//       case one === 2 && two === 2:
//         points += 0
//         break;
//       case one === 3 && two === 3:
//         points += 0
//         break;
//       case one === 4 && two === 5:
//         points += 1
//         break;
//         case one === 5 && two === 6:
//         points += 1
//         break;
//         case one === 4 && two === 4:
//         points += 4
//         break;
//         case one === 5 && two === 5:
//           points += 6
//           break;
//           case one === 6 && two === 6:
//           points += 8
//           break;
//           default:
//       points += 0;
//     }
//      this.setState({
//   points: points,
// });
// }

//   click = () =>{
//        let die1 = Math.floor(Math.random() * 7)
//        let die2 = Math.floor(Math.random() * 7);
//        this.updation(die1,die2)
//   }

  
 
//   render() {
//     let Dice = this.state
   
//     return (
//       <div>
//         <div style={{display:'flex',justifyContent:'center'}}>
//           <p style={{paddingRight:'5px'}}>{Dice.Left_die}</p>
//           <p>{Dice.Rigth_die}</p>
//         </div>
//         {/*--------------------------- Ternory operater Start -------------------------------*/}
//           {
//             Dice.Remaining === 0 ? (
//               <div style={{display:'flex',justifyContent:'center'}}>
//           <h3>Game Over</h3>
//         </div>
//             ):(
//               <div style={{display:'flex',justifyContent:'center'}}>
//               <button onClick={this.click}>Click</button>
//             </div>
//             )
//           }

//            {/*--------------------------- Ternory operater End -------------------------------*/}
        

//         <div style={{display:'flex',justifyContent:'center'}}>
//           <h3>Total Attempt : {Dice.Totalattempt}</h3>
//         </div>

//         <div style={{display:'flex',justifyContent:'center'}}>
//           <h3>Remaing Attempt : {Dice.Remaining}</h3>
//         </div>

//         <div style={{display:'flex',justifyContent:'center'}}>
//           <h3>Used Attempt : {Dice.UsedAttempt}</h3>
//         </div>

//         <div style={{display:'flex',justifyContent:'center'}}>
//           <h3>Total Earned points : {Dice.TotalPoints}</h3>
//         </div>


//       </div>
//     )
//   }
// }
