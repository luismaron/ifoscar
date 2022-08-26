import React, { useEffect } from "react";

function App() {
	useEffect(() => {
		fetch("http://localhost:3334/videoclips").then(response => console.log(response));
	}, []);

	return (
		<div>
			<h1>Ifoscar</h1>

			<h2>Melhor videoclipes</h2>

			<div>
				<div>
					<h3>Exagerado</h3>
				</div>

				<div>
					<h3>Dormi na praça</h3>
				</div>
			</div>
		</div>
	);
}

export default App;
