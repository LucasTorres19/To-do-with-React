import React,{Component} from 'react'


export default class Task extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <React.Fragment>
                    <div>
                    <h1>{this.props.NameTask}</h1>
                    </div>
            </React.Fragment>
        )
    }



}