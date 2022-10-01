
import './App.css';
import { Component} from "react";
/*import Avocado from './Avocado';
import Tomato from './Tomato';*/
import Paris from './Paris';
import NYC from './NYC';
/*class App extends Component {
  state={
    show: true
  }
  render(){
    const btnText = this.state.show ? "TOMATO": "AVOCADO";
  return (
    <div className="App">
      <p>{this.state.show ? <Avocado/>:<Tomato/>}</p>
      <button onClick={()=>{this.setState({show: !this.state.show})}}>{btnText}</button>
    </div>
  );
}}*/
class App extends Component {
state={
  show: true
}
render() {
  const btnText = this.state.show ? "NEW YORK CITY" : "PARIS";
  return(
    <div>
      <p>{this.state.show ? <Paris/> : <NYC/>}</p>
      <button onClick={()=>{this.setState({show: !this.state.show})}}>{btnText}</button>
    </div>
  )
}
}

export default App;
