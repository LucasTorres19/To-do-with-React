//Este componente se va a encargar de generar las tareas cada vez que se inicia la aplicacion.

import ReactDOM from 'react-dom';
import React ,{Component} from 'react'
import Task from '../Task'

export default class Cargador extends Component{

    constructor(props){
        super(props)

        this.cargar= this.cargar.bind(this)
    }

    cargar(){

        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
              continue; // se salta claves como "setItem", "getItem" etc
            }
            ReactDOM.render(
                <React.StrictMode>
                    <div id={key}>
                        <Task NameTask ={localStorage.getItem(key)} />
                    </div>
                </React.StrictMode>,
                document.getElementById('task')
                );
          }
    
}

    render(){
        return(
            <React.Fragment>
                {this.cargar()}
            </React.Fragment>
        )
    }

} 