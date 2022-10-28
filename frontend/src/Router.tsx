import React from "react";
import { Route, Routes } from "react-router-dom";
import { Actor } from "./pages/Actor";
import { Actress } from "./pages/Actress";
import { SupportingActor } from "./pages/SupportingActor";
import { SupportingActress } from "./pages/SupportingActress";
import { VideoClip } from "./pages/VideoClip";
import { Winners } from "./pages/Winners";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Actor />} />
			<Route path="/actress" element={<Actress />} />
			<Route path="/supportingActor" element={<SupportingActor />} />
			<Route path="/supportingActress" element={<SupportingActress />} />
			<Route path="/videoClip" element={<VideoClip />} />
			<Route path="/winners" element={<Winners />} />
		</Routes>
	);
}
