import React from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Actor {
	id: string;
	name: string;
	registration: string;
	gender: "Male" | "Female";
}

export interface VideoClip {
	id: string;
	name: string;
	link: string;
	actor: Actor;
	actress: Actor;
	supporting_actor: Actor;
	supporting_actress: Actor;
}

interface VoteContextType {
	videoClips: VideoClip[];
	selectedActor: Actor;
	selectedSupportingActor: Actor;
	selectedActress: Actor;
	selectedSupportingActress: Actor;
	selectedVideoClip: VideoClip;
	selectedCostume: VideoClip;
	selectedEdition: VideoClip;
	setSelectedActor: (id: string) => void;
	setSelectedSupportingActor: (id: string) => void;
	setSelectedActress: (id: string) => void;
	setSelectedSupportingActress: (id: string) => void;
	setSelectedVideoClip: (id: string) => void;
	setSelectedCostume: (id: string) => void;
	setSelectedEdition: (id: string) => void;
	reset: () => void;
}

export const VoteContext = createContext({} as VoteContextType);

interface VoteContextProviderProps {
	children: ReactNode;
}

export function VoteContextProvider({ children }: VoteContextProviderProps) {
	const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
	const [selectedActor, setSelectedActor] = useState<Actor>({} as Actor);
	const [selectedSupportingActor, setSelectedSupportingActor] = useState<Actor>({} as Actor);
	const [selectedActress, setSelectedActress] = useState<Actor>({} as Actor);
	const [selectedSupportingActress, setSelectedSupportingActress] = useState<Actor>({} as Actor);
	const [selectedVideoClip, setSelectedVideoClip] = useState<VideoClip>({} as VideoClip);
	const [selectedCostume, setSelectedCostume] = useState<VideoClip>({} as VideoClip);
	const [selectedEdition, setSelectedEdition] = useState<VideoClip>({} as VideoClip);

	function onSelectActor(id: string) {
		const findActor = videoClips.find(videoClip => videoClip.actor.id === id) as VideoClip;
		setSelectedActor(findActor.actor);
	}

	function onSelectSupportingActor(id: string) {
		const findActor = videoClips.find(videoClip => videoClip.supporting_actor.id === id) as VideoClip;
		setSelectedSupportingActor(findActor.supporting_actor);
	}

	function onSelectActress(id: string) {
		const findActress = videoClips.find(videoClip => videoClip.actress.id === id) as VideoClip;
		setSelectedActress(findActress.actress);
	}
	function onSelectSupportingActress(id: string) {
		const findActress = videoClips.find(videoClip => videoClip.supporting_actress.id === id) as VideoClip;
		setSelectedSupportingActress(findActress.supporting_actress);
	}

	function onSelectVideoClip(id: string) {
		const findVideoClip = videoClips.find(videoClip => videoClip.id === id) as VideoClip;
		setSelectedVideoClip(findVideoClip);
	}

	function onSelectCostume(id: string) {
		const findVideoClip = videoClips.find(videoClip => videoClip.id === id) as VideoClip;
		setSelectedCostume(findVideoClip);
	}

	function onSelectEdition(id: string) {
		const findVideoClip = videoClips.find(videoClip => videoClip.id === id) as VideoClip;
		setSelectedEdition(findVideoClip);
	}

	function reset() {
		setSelectedActor({} as Actor);
		setSelectedSupportingActor({} as Actor);
		setSelectedActress({} as Actor);
		setSelectedSupportingActress({} as Actor);
		setSelectedVideoClip({} as VideoClip);
		setSelectedCostume({} as VideoClip);
		setSelectedEdition({} as VideoClip);
	}

	useEffect(() => {
		async function loadData() {
			const responseVideoClips = await api.get("/videoclips");

			setVideoClips(responseVideoClips.data);
		}

		loadData();
	}, []);

	return (
		<VoteContext.Provider value={{
			videoClips,
			selectedActor,
			selectedSupportingActor,
			selectedActress,
			selectedSupportingActress,
			selectedVideoClip,
			selectedCostume,
			selectedEdition,
			setSelectedActor: onSelectActor,
			setSelectedSupportingActor: onSelectSupportingActor,
			setSelectedActress: onSelectActress,
			setSelectedSupportingActress: onSelectSupportingActress,
			setSelectedVideoClip: onSelectVideoClip,
			setSelectedCostume: onSelectCostume,
			setSelectedEdition: onSelectEdition,
			reset
		}}>
			{children}
		</VoteContext.Provider>
	);
}
