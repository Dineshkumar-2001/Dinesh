import React, { Component } from "react";
// import { Button, Container } from "@mui/material";
import './Die.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class Store extends Component {
  // static defaultProps = {
  //   sides : ['one', 'two', 'three',
  //       'four', 'five', 'six']
  // }
  constructor(props) {
    super(props);
    this.state = {
      Left_die: 6,
      Right_die: 6,
      attempts: 15,
      usedAttempts: 0,
      remaining: 15,
      points: 0,
      ExtraAttempt:0,
      zero:0,
      penalty:0,
      rolling: false,
    };
  }
  updation = (one, two) => {
    
    
    this.points_Calculation(one, two);
    this.setState({
      Left_die: one,
      Right_die: two,
      rolling:true,
     
    });
  };
  points_Calculation = (one, two) => {
    // let die1 = one;
    // let die2 = two;
    let remaining = this.state.remaining;
    let usedAttempts = this.state.usedAttempts
    let ExtraAttempt = this.state.ExtraAttempt
    let points = this.state.points;
    let zero = this.state.zero
    let penalty = this.state.penalty
   
    switch (true) {
      case one === 0 && two === 0:
        zero += 1;
        if(zero == 1){
           remaining += 0
           alert('0 == 0 , Your First Warning')
        }else if(zero > 1){
              remaining -= zero
              penalty += zero
        }
        else{
          remaining -= 1
        }
        points = points += 0;
        
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      case one === 1 && two === 1:
        points = points +=  10;
        remaining += 0
        usedAttempts += 1
        ExtraAttempt +=1
        break;
      case one === 2 && two === 2:
        points = points += 0;
        remaining -= 2
        usedAttempts -= 1
        ExtraAttempt +=0
        break;
      case one === 3 && two === 3:
        points = points += 0;
        remaining -= 2
        usedAttempts -= 1
        ExtraAttempt +=0
        break;
      case one === 4 && two === 5:
        points =  points += 1;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      case one === 5 && two === 6:
        points =  points +=  2;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      case one === 4 && two === 4:
        points =  points += 4;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      case one === 5 && two === 5:
        points =  points += 6;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      case one === 6 && two === 6:
        points =  points += 8;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
        break;
      default:
        points =  points += 0;
        remaining -= 1
        usedAttempts += 1
        ExtraAttempt +=0
    }
    this.setState({
      points: points,
      remaining:remaining,
      usedAttempts:usedAttempts,
      ExtraAttempt:ExtraAttempt,
      zero:zero,
      penalty:penalty

    });
  };
  Rolling_dice = () => {
    let die1 = Math.floor(Math.random() * 7);
    let die2 = Math.floor(Math.random() * 7);
    
    this.updation(die1, die2);
  };
  again = () => {};
  render() {
    const Getdice_state = this.state;
    let Reward =
     Getdice_state.points < 20
        ? "Your points Below 20 So You Lost The Game"
       
        : Getdice_state.points < 35
        ? "You Won The Bronze"
        : Getdice_state.points < 50
        ? "You Won The Silver"
        : "You Won The Gold";

        let y1 = {
          0: <img  style={{width:'140px',height:'70px',marginRight:'-60px'}} src="pic0.png" alt="ddd" ></img>,
          1: <img style={{width:'70px'}} src="Pic1.png" alt="ddd"></img>,
          2: <img style={{width:'70px'}}  src="pic2.png" alt="ddd"></img>,
          3: <img style={{width:'70px'}} src="pic3.png" alt="ddd"></img>,
          4: <img style={{width:'70px'}} src="pic4.png"></img>,
          5: <img style={{width:'70px'}} src="pic5.png"></img>,
          6: <img style={{width:'70px'}} src="pic6.png" ></img>,
          7: <img style={{width:'70px'}} src="pic7.png"></img>,
        }
    return (
      <>
        <div>
          <div>
          <div className='RollDice-container'>
		     <p  style={{margin:'10px'}}>{Getdice_state.Left_die}</p>
         <p style={{margin:'10px'}}> {Getdice_state.Right_die}</p>
		</div>

    <div className='RollDice-container' style={{display:'flex',justifyContent:'center'}}>
		     <p style={{margin:'10px'}}>{y1[Getdice_state.Left_die]}</p>
         <p style={{margin:'10px'}}>{y1[Getdice_state.Right_die]}</p>
		</div>
          
          
         
          </div>
          {Getdice_state.remaining === 0 ? (
            <div style={{display:'flex',justifyContent:'center'}}>
             <h1> Good Try </h1>
           </div>
          ) : (
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px',padding:'10px'}} >
            <button  style={{padding:'10px'}} onClick={this.Rolling_dice}>
              Roll Dice
            </button>
            </div>
          )}
           <div >
             <div >
             <TableContainer component={Paper} style={{display:'flex',justifyContent:'center',width:'660px',marginLeft:'350px'}}>
             <Table sx={{ minWidth: 350 }} >
             <TableHead>
             <TableRow>
    <TableCell><h3>Total Attempt </h3></TableCell >
    <TableCell ><h3>Used Attempts </h3></TableCell >
    <TableCell ><h3>Remaining attempts</h3> </TableCell >
    <TableCell ><h3>Extra attempts </h3></TableCell >
    <TableCell ><h3>Penalty </h3></TableCell >
    <TableCell ><h3>Points </h3></TableCell >
    </TableRow>
    </TableHead>
  <TableRow>
    <TableCell>{Getdice_state.attempts}</TableCell>
    <TableCell>{Getdice_state.usedAttempts}</TableCell>
    <TableCell> {Getdice_state.remaining}</TableCell>

    <TableCell>{Getdice_state.ExtraAttempt}</TableCell>
    <TableCell> {Getdice_state.penalty}</TableCell>
    <TableCell> {Getdice_state.points}</TableCell>
  </TableRow>
  
  </Table >
</TableContainer>
</div>
             
         
          
          <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                 
          {Getdice_state.remaining === 0 ? <table >
            
            <tr >
              
              <th style={{marginLeft:'5px'}}><h2>YOUR RESULT</h2></th>
             
            </tr>
          
           
            <tr >
           
              <td ><h4>{Reward}</h4></td>
             
            </tr>
         
          </table>  : ''} 
            

 
          </div>
          </div>
        </div>
      </>
    );
  }
}
export default Store;