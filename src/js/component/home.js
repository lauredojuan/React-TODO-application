import React from "react";
import { ListTask } from "./listtask";

export class Home extends React.Component {
	// create constructor to store variables

	// create state w/ empty array to store tasks

	// create a state variable for current task

	// input field containing an event (key up) to store a new task

	// create ul li list

	// create map function to include elements in the array list

	// include 'delete' function and onclick event inside each li element with contional rendering

	constructor() {
		super();
		this.state = {
			task: "",
			taskList: []
		};
	}
	updateTask = event => {
		this.setState({ task: event.target.value });
	};

	saveTask = event => {
		if (event.keyCode === 13) {
			const newArray = [...this.state.taskList]; //spread operator in this line a copy of taskList is created and named newArray
			newArray.push(this.state.task);
			this.setState({
				taskList: newArray,
				task: ""
			});
		}
	};

	deleteFunctionHandler = id => {
		const returnArray = this.state.taskList.filter(
			(i, index) => index !== id
		);
		this.setState({ taskList: returnArray });
	};

	render() {
		console.log(this.state.taskList);
		return (
			<div className="container">
				<h1>ToDos</h1>
				<input
					value={this.state.task}
					onChange={this.updateTask}
					onKeyUp={this.saveTask}
					placeholder="What needs to be done?"
				/>
				<ul>
					{this.state.taskList.map((liContent, index) => {
						return (
							<ListTask
								key={index}
								task={liContent}
								deleteFunction={this.deleteFunctionHandler}
								id={index}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}
