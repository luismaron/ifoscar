import React from "react";
import { Route, Routes } from "react-router-dom";
import { Actor } from "./pages/Actor";
import { Actress } from "./pages/Actress";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Actor />} />
			<Route path="/actress" element={<Actress />} />
		</Routes>
	);
}