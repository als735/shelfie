import React, {Component} from 'react'; 
import axios from 'axios'

class Form extends Component {
    
    handleAddInventory(){
        axios.post('/api/product', {
            prodName : this.props.prodName,
            imageURL : this.props.imageURL,
            price: this.props.price 
        })
        .then(res => {
          this.setState({
              price: '$0' ,
              prodName : '', 
              imageURL : ''
          })
        })
        this.props.componentDidMount(); 
        this.props.clearForm(); 
      }
    
    render(){
        // let imageURL = this.props.imageURL; 
        // let prodName = this.props.prodName; 
        // let price = this.props.price; 
        
        return(
            <div className='box'> 
                <div className='inputContainer'>
                    <input type="text" placeholder='Image URL' value={this.props.imageURL} name='imageURL' onChange={this.props.handleInputChange}/>
                    <br/>
                    <input type="text" placeholder='Product Name' value={this.props.prodName} name='prodName' onChange={this.props.handleInputChange}/>
                    <br/>
                    <input type="text" placeholder='Price' value={this.props.price} name='price' onChange={this.props.handleInputChange}/>
                </div>
                <div className='buttons'>
                    <button onClick={this.props.clearForm}> Clear </button>
                    <button onClick={this.props.handleAddInventory}> Add Inventory </button>
                </div>
            </div>
        )
    }
}

export default Form; 