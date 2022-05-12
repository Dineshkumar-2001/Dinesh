
import React from 'react';
import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Number_dice from './Number_dice'
import Ex_text from './Ex_text'
import Store from './Store'
library.add(fas)
  
function App() {
  return (
    <div>
      {/* <RollDice /> */}
      {/* <Number_dice/> */}
      {/* <Ex_text/> */}
      <Store/>
    </div>
  );
}
  
export default App;