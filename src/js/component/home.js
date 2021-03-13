import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [state, setstate] = useState("apagado");
	const [state2, setstate2] = useState("apagado");
	const [state3, setstate3] = useState("apagado");

	const handleClickRed = () => {
		if (state == "apagado") {
			setstate("selected");
			setstate3("apagado");
			setstate2("apagado");
		} else {
			setstate("apagado");
		}
	};
	const handleClickYellow = () => {
		if (state3 == "apagado") {
			setstate3("selected");
			setstate("apagado");
			setstate2("apagado");
		} else {
			setstate3("apagado");
		}
	};
	const handleClickGreen = () => {
		if (state2 == "apagado") {
			setstate2("selected");
			setstate("apagado");
			setstate3("apagado");
		} else {
			setstate("apagado");
		}
	};
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + state}
					onClick={handleClickRed}></div>
				<div
					className={"yellow light " + state3}
					onClick={handleClickYellow}></div>
				<div
					className={"green light " + state2}
					onClick={handleClickGreen}></div>
			</div>
		</div>
	);
}
