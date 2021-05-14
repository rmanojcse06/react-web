import React, { Component } from 'react';
import TopComponent from './basic/Top';
import {MiddleLeft,MainComponent,MiddleRight,MiddleComponent} from './basic/Middle';
import BottomComponent from './basic/Bottom';

import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../styles/sass/styles';



class App extends Component{
   render(){
      return(
         <div className="app">
			<TopComponent/>
            <MiddleComponent>
			</MiddleComponent>
			<BottomComponent/>
         </div>
      );
   }
}
export default App;