import React from "react";

//create your first component
const SecondsCounter = (props) => {
	console.log("Desde Counter " + props.count1);

	return (
		<>
			<div className="container" id="mainContainer">
				<div className="watch">
					<i className="bi bi-stopwatch boxValue"></i>
				</div>
				<div className="watch">{props.count6}</div>
				<div className="watch">{props.count5}</div>
				<div className="watch">{props.count4}</div>
				<div className="watch">{props.count3}</div>
				<div className="watch">{props.count2}</div>
				<div className="watch">{props.count1}</div>
			</div>
		</>
	);
};

export default SecondsCounter;
