import React, {Component} from 'react'; 
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component{

    deleteProd = (product_id) => {
        axios.delete(`/api/product/${product_id}`)
        this.props.componentDidMount(); 
    }



    render(){
    let {prodName, imageUrl, price} = this.props; 

        let productList = this.props.inventoryList.map((i) => {
            return <Product key={i.id} imageUrl={imageUrl} prodName={prodName} price={price} deleteProd={this.deleteProd}/>
        })

        return(
            <div>
                Dashboard 
                {productList}
            </div>
        )
    }
}

export default Dashboard; 