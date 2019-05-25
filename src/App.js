import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Components/Navigation/navigation';
import Signin from './Components/Signin/signin';
import moment from 'react-moment';
import Time from './Components/Time/time';
import Admin from './Components/Admin/admin';

import './App.css';

class App extends Component {
   constructor(){
    super();
    this.state = {
      input: '',
      route:'signin'
    }
  }


  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onSubmit = () =>{
    console.log('click');
  }


  onRouteChange = (route) => {
  this.setState({route: route});
}


componentDidMount(){
  fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(console.log)
}



  render() {
    return (
      <div className="App">
       <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === 'admin'
        ? <div>
        <Admin 
        onInputChange={this.onInputChange}
        onRouteChange={this.onRouteChange}/>
          </div>
        : ( 
        <div>
             
        <Time />
        <Signin onInputChange={this.onInputChange} 
                onSubmit={this.onSubmit}/>
        </div>
      )
        }
      </div>
    );
  }
}

export default App;
