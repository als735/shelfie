import React, {Component} from 'react'; 

class Form extends Component {
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
                    <button onClick={this.props.clearForm}> Cancel </button>
                    <button> Add to Inventory </button>
                </div>
            </div>
        )
    }
}

export default Form; 