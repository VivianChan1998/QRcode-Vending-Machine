import React,{Component} from 'react'
import '../Choose.css'

const uuid = require('uuid/v1');

const host = "127.0.0.1"

class Good extends Component {
    constructor(props) {
        super(props)
        this.state = {
            NAME: this.props.NAME,
            PRICE: this.props.PRICE,
            ID: this.props.ID,
            ORDERED: false,

            UserID: 123,

            qr: ''
        }
    }

    handleOrderCLick = () => {
        var pw = uuid()
        console.log(require("ip").address())
        fetch('http://' + host + ':3001/api/choose?id='+this.state.ID+'&pw='+pw)
            //.then(res => console.log(res.json()))
            .then(res => res.json())
            .then(res => {
                this.setState({qr: <div className='Choose_qrimg'><img src={res.img} /></div>})
            })

    }

    render(){
        return(
            <li>
                <div className="Choose_info">
                    <h3>{this.state.NAME}</h3>
                    <h4>{this.state.PRICE}</h4>
                    <button onClick={this.handleOrderCLick}>
                        order!
                    </button>
                </div>
                <div className="Choose_qrwrapper">
                    {this.state.qr}
                </div>  
            </li>
        )
    }
}

export default Good