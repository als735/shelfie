import React, {Component} from 'react'; 
import axios from 'axios'; 
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
        product_id : '', 
        imageURL: '',
        prodName: '',
        price: '',
        inventoryList: [ ] 
    }
}

componentDidMount= () => {
  axios.get('/api/inventory').then( res => {
      this.setState({
          inventoryList: res.data
      })
  })
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
    imageURL : '', 
    prodName : '', 
    price : ''
  })
}

  render(){
    return (
      <div className="App">
      <Header className='headerComp'/>
      <div className='mainContent'>
      <Dashboard  className='dashboardComp'
        inventoryList={this.state.inventoryList}  
        imageURL={this.state.imageURL}
        prodName={this.state.prodName}
        price={this.state.price}
        product_id={this.state.product_id}
        componentDidMount={this.componentDidMount}
        />
      <Form className='formComp'
        handleInputChange={this.handleInputChange}
        clearForm={this.clearForm}
        componentDidMount={this.componentDidMount}
        />
      </div>
      </div>
    );
  }
}
  

export default App;
