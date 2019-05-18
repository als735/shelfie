import React, {Component} from 'react'; 
// import axios from 'axios'
import './Form.css'; 

class Form extends Component {
    
    render(){
         
        // let imageURL = this.props.imageURL; 
        // let prodName = this.props.prodName; 
        // let price = this.props.price; 
        return(
            <div className='box'> 
                <div className='inputContainer'>
                        <div>
                            <img className='formProdImage' src={this.props.placeHolderURL} alt=""/>
                        </div>
                    <p>Image URL:</p>
                    <input className='prodImage'type="text" value={this.props.imageURL} name='imageURL' onChange={this.props.handleInputChange}/>
                    <p>Product Name</p>
                    <input type="text" value={this.props.prodName} name='prodName' onChange={this.props.handleInputChange}/>

                    <p>Price:</p>
                    <input type="text" value={this.props.price} name='price' onChange={this.props.handleInputChange}/>
                </div>
                <div className='buttonBox2'>
                    <button className='formButts'onClick={this.props.clearForm}> Clear </button>
                    <button className='formButts'onClick={this.props.handleAddInventory}> Add Inventory </button>
                </div>
            </div>
        )
    }
}

export default Form; 