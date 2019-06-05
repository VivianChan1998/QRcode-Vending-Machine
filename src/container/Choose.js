import React,{Component} from 'react'

class Choose extends Component {
    constructor(props){
        super(props)
        this.state={
            goods: [
                {
                    NAME: 'first',
                    PRICE: 120
                },
                {
                    NAME: 'SECOND',
                    PRICE: 240
                }
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Choose!</h1>
                
            </div>
        )
    }
}

export default Choose;