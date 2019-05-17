import React, {Component} from 'react'; 
import Product from './Product';

class Dashboard extends Component {

    render(){
    let {prodName, imageUrl, price} = this.props; 

        let productList = this.props.inventoryList.map((i) => {
            return <Product key={i.id} imageUrl={imageUrl} prodName={prodName} price={price}/>
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