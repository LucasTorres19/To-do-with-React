import React,{Component} from 'react';
import Task from './../Task';
import ReactDOM from 'react-dom';

export default class Creator extends Component{



constructor(props){
    super(props)
    this.createTask= this.createTask.bind(this)
    this.state ={
        n : 0
    }
}

async createTask(){

    
    let dato = document.getElementById('NameTask').value
    
    ReactDOM.render(
    <React.StrictMode>
        <Task NameTask={dato}/>
    </React.StrictMode>,
    document.getElementById('task')
    )
    
    localStorage.setItem(this.state.n++,dato)
}

render(){
    const style ={

        button:{
            backgroundColor : '#009CBA',
            border: "none",
            color:"white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration : "none",
            display: "inline-block",
            fontSize: "16px",
        },
    }


    return(
        <React.Fragment>
            <input  type="text" id="NameTask"/>
            <button style={style.button} onClick ={this.createTask}>Agregar Tarea</button>
        </React.Fragment>    
)
}
}