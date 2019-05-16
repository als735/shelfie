import React, {Component} from 'react'; 
import Product from './Product';

class Dashboard extends Component {

    render(){
        // let list = this.props.inventoryList.map((e) => {
        //     return <Product key={e} />
        // }
        // )

        return(
            <div>
                Dashboard 
                <Product/>
            </div>
        )
    }
}

export default Dashboard; 