import React,{Component} from 'react'


export default class Task extends Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
            <React.Fragment>
                    <h1>{this.props.NameTask}</h1>
            </React.Fragment>
        )
    }



}