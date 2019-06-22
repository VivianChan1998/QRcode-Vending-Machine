import React,{Component} from 'react'
const uuid = require('uuid/v1');
const QRCode = require('qrcode');
const Canvas = require('canvas');
const fs = require('fs');
const qr = require('qr-image');
 

class Good extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NAME: this.props.NAME,
            PRICE: this.props.PRICE,
            ID: this.props.ID,
            ORDERED: false,

            UserID: 123,

            qr: 'no :('
        }
    }

    handleOrderCLick = () => {
        var pw = uuid()
        console.log(require("ip").address())
        fetch('http://'+ require("ip").address() + ':3001/api/choose?id='+this.state.ID+'&pw='+pw)
            .then(res => res.json())
            .then(res => {
                this.setState({qr: <img src={res.img} />})
            })

    }

    render(){
        return(
            <li>
                <h3>{this.state.NAME}</h3>
                <h4>{this.state.PRICE}</h4>
                <button onClick={this.handleOrderCLick}>
                    order!
                </button>
                {this.state.qr}
            </li>
        )
    }
}

export default Good