import React, {Component} from 'react'; 
import Product from './Product';
import axios from 'axios';
import './Dashboard.css'; 

class Dashboard extends Component{

    handleDeleteClick = (product_id) => {
        axios.delete(`/api/product/${product_id}`)
        this.props.componentDidMount(); 
    }



    render(){
    let {prodName, imageUrl, price} = this.props; 

        let productList = this.props.inventoryList.map((i) => {
            return <Product key={i.id} imageUrl={imageUrl} prodName={prodName} price={price} deleteProd={this.handleDeleteClick}/>
        })

        return(
            <div className="dashboard">
                {productList}
            </div>
        )
    }
}

export default Dashboard; 