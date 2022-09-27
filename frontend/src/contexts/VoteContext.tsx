import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

import { fakeActors, fakeVideoClips } from "../utils/fakeData";

interface Actor {
	id: string;
	name: string;
	registration: string;
	gender: "Male" | "Female";
	videoclip: {
		name: string;
		link: string;
	}
}

interface VideoClip {
	id: string;
	name: string;
	link: string;
}

interface VoteContextType {
  actors: Actor[];
  actress: Actor[];
	videoClips: VideoClip[];
  selectedActor: Actor;
  selectedActress: Actor;
	selectedVideoClip: VideoClip;
  setSelectedActor: (id: string) => void;
  setSelectedActress: (id: string) => void;
	setSelectedVideoClip: (id: string) => void;
	reset: () => void;
}

export const VoteContext = createContext({} as VoteContextType);

interface VoteContextProviderProps {
  children: ReactNode;
}

export function VoteContextProvider({ children }: VoteContextProviderProps) {
	const [actors, setActors] = useState<Actor[]>([]);
	const [actress, setActress] = useState<Actor[]>([]);
	const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
 
	const [selectedActor, setSelectedActor] = useState<Actor>({} as Actor);
	const [selectedActress, setSelectedActress] = useState<Actor>({} as Actor);
	const [selectedVideoClip, setSelectedVideoClip] = useState<VideoClip>({} as VideoClip);

	function onSelectActor(id: string) {
		const findActor = actors.find(actor => actor.id === id) as Actor;
		setSelectedActor(findActor);
	}

	function onSelectActress(id: string) {
		const findActress = actress.find(actor => actor.id === id) as Actor;
		setSelectedActress(findActress);
	}

	function onSelectVideoClip(id: string) {
		const findVideoClip = videoClips.find(videoClip => videoClip.id === id) as VideoClip;
		setSelectedVideoClip(findVideoClip);
	}

	function reset() {
		setSelectedActor({} as Actor);
		setSelectedActress({} as Actor);
		setSelectedVideoClip({} as VideoClip);
	}

	useEffect(() => {
		async function loadData() {
			const responseActors = await api.get("/actors");
			const responseVideoClips = await api.get("/videoclips");
			
			const filteredActors = responseActors.data.filter((actor: Actor) => actor.gender === "Male");
			const filteredActress = responseActors.data.filter((actor: Actor) => actor.gender === "Female");

			setActors(filteredActors);
			setActress(filteredActress);
			setVideoClips(responseVideoClips.data);
		}

		loadData();
	}, []);

	return (
		<VoteContext.Provider value={{
			actors,
			actress,
			videoClips,
			selectedActor,
			selectedActress,
			selectedVideoClip,
			setSelectedActor: onSelectActor,
			setSelectedActress: onSelectActress,
			setSelectedVideoClip: onSelectVideoClip,
			reset
		}}>
			{children}
		</VoteContext.Provider>
	);
}