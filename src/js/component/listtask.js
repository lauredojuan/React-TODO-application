import React from "react";
import { PropTypes } from "prop-types";

export function ListTask(props) {
	return (
		<li key={props.id}>
			{props.task}
			<span>
				<i
					className="fa fa-trash-o"
					onClick={() => props.deleteFunction}
				/>
			</span>
		</li>
	);
}

ListTask.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	deleteFunction: PropTypes.func
};
