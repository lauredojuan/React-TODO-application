import React from "react";
import { PropTypes } from "prop-types";

export class ListTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconVisible: false
		};
	}

	render() {
		let classToApply = this.state.iconVisible ? "visible" : "hidden";

		return (
			<li
				onMouseEnter={() => this.setState({ iconVisible: true })}
				onMouseLeave={() => this.setState({ iconVisible: false })}>
				{this.props.task}
				<span>
					<i
						className={`fa fa-trash ${classToApply}`}
						onClick={() => this.props.deleteFunction(this.props.id)}
					/>
				</span>
			</li>
		);
	}
}

ListTask.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	deleteFunction: PropTypes.func
};
