import React,{Component} from 'react'
import GoodList from '../components/GoodList'

class Choose extends Component {
    constructor(props){
        super(props)
        this.state={
            goods: [
                {
                    NAME: 'FIRST',
                    PRICE: 120,
                    ID: '001',
                    ORDERED: false
                },
                {
                    NAME: 'SECOND',
                    PRICE: 240,
                    ID: '002',
                    ORDERED: false
                }
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Choose!</h1>
                <GoodList MyList={this.state.goods} />
                
            </div>
        )
    }
}

export default Choose;