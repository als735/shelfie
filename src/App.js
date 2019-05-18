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
        placeHolderURL: 'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg', 
        prodName: '',
        price: '',
        inventoryList: [ ] 
    }
}

componentDidMount= () => {
  this.getData()
}

getData = () => {
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

handleAddInventory= (e) => {
  
  axios.post('/api/product', {
      prodName : this.state.prodName,
      imageURL : this.state.imageURL,
      price: this.state.price 
  })
  .then(res => {
      this.getData(); 
      this.clearForm(); 
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
        getData={this.getData}
        />
      <Form className='formComp'
        handleInputChange={this.handleInputChange}
        clearForm={this.clearForm}
        imageURL={this.state.imageURL}
        prodName={this.state.prodName}
        price={this.state.price}
        placeHolderURL={this.state.placeHolderURL}
        handleAddInventory={this.handleAddInventory}
        />
      </div>
      </div>
    );
  }
}
  

export default App;
