import React, {Component} from 'react'; 
import './Product.css'; 

class Product extends Component {
    render(){
        let {prodName, imageURL, price} = this.props; 

        return(
            <div className='productBox'>
            <div>
                <img className='productImage' src={imageURL} alt=""/>
            </div>
            <div className='productDetails'>
                <p>Name:{prodName}</p>
                <p>${price}</p>
            </div>
            <div className='buttonBox'>
                <button className='buttons1' id='deleteButt'onClick={this.props.handleDeleteClick}>Delete</button>
                <button className='buttons1' onClick={this.props.handleEditClick}>Edit</button>
            </div>
            </div>
        )
    }
}

export default Product; 