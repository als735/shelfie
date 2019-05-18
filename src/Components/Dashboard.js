import React, {Component} from 'react'; 
import Product from './Product';
import axios from 'axios';
import './Dashboard.css'; 

class Dashboard extends Component{

    handleDeleteClick = (product_id) => {
        debugger
        axios.delete(`/api/inventory/${product_id}`)
        .then(() => {
           this.props.getData();
          })
    }

    render(){ 
    // let {prodName, imageUrl, price} = this.props; 
     
        let productList = this.props.inventoryList.map((e) => {
            return <Product key={e.product_id} product_id={e.product_id} imageURL={e.image_url} prodName={e.name} price={e.price} deleteProd={this.handleDeleteClick}/>
        })

        return(
            <div className="dashboard">
                {productList}
            </div>
        )
    }
}

export default Dashboard; 