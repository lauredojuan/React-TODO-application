import React from "react";
import { ListTask } from "./listtask"

export class Home extends React.Component {

// create constructor to store variables 

// create state w/ empty array to store tasks

// create a state variable for current task

// input field containing an event (key up) to store a new task

// create ul li list

// create map function to include elements in the array list

// include 'delete' function and onclick event inside each li element with contional rendering

    constructor(){
        super();
        this.state = {
             task: '',
             taskList: []
        }
    }
   updateTask = (event) => {
       task.setState({ task: event.target.value})
   }

    saveTask = () => {

    }





    render(){
        return (
                <div className="container">
                    <h1>ToDos</h1>
                    <input value={this.state.task} onChange={this.updateTask}   onKeyUp={this.saveTask} placeholder="What needs to be done?"/>
                    <ul>
                        <ListTask/>
                    </ul>
                </div>
            );
    }
}
