import React from "react";
import { Route, Routes } from "react-router-dom";
import { BestActor } from "./pages/BestActor";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<BestActor />} />
		</Routes>
	);
}