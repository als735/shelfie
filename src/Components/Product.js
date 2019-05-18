import React, {Component} from 'react'; 

class Product extends Component {
    render(){
        let {prodName, imageURL, price} = this.props; 

        return(
            <div className='productBox'>
            Product 1 
                <img className='productImage' src={imageURL} alt=""/>
            <div className='productInfo'>
                <p>{prodName}</p>
                <p>${price}</p>
            </div>
            <button onClick={this.props.deleteProd}>Delete</button>
            </div>
        )
    }
}

export default Product; 