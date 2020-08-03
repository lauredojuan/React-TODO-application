import React from "react";
import { ListTask } from "./listtask";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			task: "",
			taskList: []
		};
	}
	updateTask = event => {
		// console.log(event);
		this.setState({ task: event.target.value });
	};

	saveTask = event => {
		// console.log(event);
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
		// console.log(id);
		const returnArray = this.state.taskList.filter(
			(i, index) => index !== id
		);
		this.setState({ taskList: returnArray });
	};

	render() {
		// console.log(this.state.taskList);
		return (
			<div className="container">
				<h1>To Do List</h1>
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
