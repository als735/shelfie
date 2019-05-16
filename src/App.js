import React, {Component} from 'react'; 
// import axios from 'axios'; 
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
        imageUrl: '',
        prodName: '',
        price: '',
        inventoryList: [
            {
              name: 'abby',
              price: 99,
              image: 'img'
            }, 
            {
              name: 'Jacob',
              price: 100,
              image: 'img'
            }
        ]
    }
}

handleInputChange= (e) => {
  const target = e.target; 
  const value = target.value; 
  const name = target.name; 

  this.setState({
    [name] :value
  }); 
}

clearForm= (e) => {
  this.setState({
    imageUrl : '', 
    prodName : '', 
    price : ''
  })
}

  render(){
    return (
      <div className="App">
      <Header/>
      <Dashboard
        inventoryList={this.state.inventoryList}  
      />
      <Form
        // imageUrl={this.state.imageUrl}
        // prodName={this.state.prodName}
        // price={this.state.price}
        handleInputChange={this.handleInputChange}
        clearForm={this.clearForm}
      />
      </div>
    );
  }
}
  

export default App;
