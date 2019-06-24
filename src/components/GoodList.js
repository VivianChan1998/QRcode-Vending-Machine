import React, {Component} from 'react'
import Good from './Good'
import '../Choose.css'

class GoodList extends Component {
    render() {
        return (
            <ul>
                {this.props.MyList.map( e =>
                    <Good NAME = {e.NAME} PRICE = {e.PRICE} ID = {e.ID} ></Good>
                )}
            </ul>
        )
    }
}

export default GoodList