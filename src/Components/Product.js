import React, {Component} from 'react'; 
import './Product.css'; 

class Product extends Component {
    render(){
          debugger
        let {prodName, imageURL, price, product_id} = this.props; 

        return(
            <div className='productBox'>
            <div>
                <img className='productImage' src={imageURL}alt=""/>
            </div>
            <div className='productDetails'>
                <p>Name: {prodName}</p>
                <p>${price}</p>
                    <div className='buttonBox'>
                        <button className='buttons1' id='deleteButt'onClick={ () => this.props.deleteProd(product_id)}>Delete</button>
                        <button className='buttons1' onClick={this.props.handleEditClick}>Edit</button>
                </div>
            </div>
            {/* //{imageURL}  */}

            </div>
        )
    }
}

export default Product; 