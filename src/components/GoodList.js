import React, {Component} from 'react'
import Good from './Good'

class GoodList extends Component {
    render() {
        return (
            <ul>
                {this.props.MyList.map( e =>
                    <Good NAME = {e.NAME} PRICE = {e.PRICE} ></Good>
                )}
            </ul>
        )
    }
}