import React, { FormEvent, useEffect, useState } from "react";
import { VoteCategory } from "./components/VoteCategory";
import { api } from "./services/api";

export interface Actor {
	id: string;
	name: string;
	registration: string;
	gender: "Male" | "Female";
	videoclip: {
		name: string;
	}
}

export interface VideoClip {
	id: string;
	name: string;
	link: string;
	actors: Actor[];
}

interface Vote {
	student_registration: string;
	best_actor_id: string;
  best_actress_id: string;
  best_supporting_actor_id: string;
  best_supporting_actress_id: string;
  best_videoclip_costume_id: string;
  best_videoclip_edition_id: string;
  best_videoclip_id: string;
}

function App() {
	const [registration, setRegistration] = useState("");
	const [actors, setActors] = useState<Actor[]>([]);
	const [videoClips, setVideoClips] = useState<VideoClip[]>([]);

	const [selectedActor, setSelectedActor] = useState<Actor>({} as Actor);
	const [selectedActress, setSelectedActress] = useState<Actor>({} as Actor);
	const [selectedSupportingActor, setSelectedSupportingActor] = useState<Actor>({} as Actor);
	const [selectedSupportingActress, setSelectedSupportingActress] = useState<Actor>({} as Actor);
	const [selectedVideoClip, setSelectedVideoClip] = useState<VideoClip>({} as VideoClip);
	const [selectedVideoClipCostume, setSelectedVideoClipCostume] = useState<VideoClip>({} as VideoClip);
	const [selectedVideoClipEdition, setSelectedVideoClipEdition] = useState<VideoClip>({} as VideoClip);

	useEffect(() => {
		async function loadData() {
			const responseActors = await api.get("/actors");
			setActors(responseActors.data);

			const responseVideoClips = await api.get("/videoclips");
			setVideoClips(responseVideoClips.data);
		}

		loadData();
	}, []);

	async function handleSubmitForm(evt: FormEvent) {
		evt.preventDefault(); // Prevenir comportamento padrão do formulário

		try {
			await api.post("/vote", {
				student_registration: registration,
				best_actor_id: selectedActor.id,
				best_actress_id: selectedActress.id,
				best_supporting_actor_id: selectedSupportingActor.id,
				best_supporting_actress_id: selectedSupportingActress.id,
				best_videoclip_costume_id: selectedVideoClipCostume.id,
				best_videoclip_edition_id: selectedVideoClipEdition.id,
				best_videoclip_id: selectedVideoClip.id
			});

			alert("Voto enviado!");
		} catch (error) {
			alert("Erro ao realizar voto.");
		}
	}

	return (
		<div>
			<h1>Ifoscar</h1>

			<form onSubmit={handleSubmitForm}>
				<h2>Melhor ator</h2>
				{
					actors.filter(actor => actor.gender === "Male").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							nameHTML="actor" 
							setSelected={() => setSelectedActor(actor)}
							videoClipName={actor.videoclip.name}
						/>
					))
				}

				<h2>Melhor atriz</h2>
				{
					actors.filter(actor => actor.gender === "Female").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							nameHTML="actress" 
							setSelected={() => setSelectedActress(actor)} 
							videoClipName={actor.videoclip.name}
						/>
					))
				}

				<h2>Melhor ator coadjuvante</h2>
				{
					actors.filter(actor => actor.gender === "Male").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							nameHTML="supportingActor" 
							setSelected={() => setSelectedSupportingActor(actor)} 
							videoClipName={actor.videoclip.name}
						/>
					))
				}

				<h2>Melhor atriz coadjuvante</h2>
				{
					actors.filter(actor => actor.gender === "Female").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							nameHTML="supportingActress" 
							setSelected={() => setSelectedSupportingActress(actor)} 
							videoClipName={actor.videoclip.name}
						/>
					))
				}

				<h2>Melhor video clipe</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory key={videoClip.id} data={videoClip} nameHTML="videoClip" setSelected={() => setSelectedVideoClip(videoClip)} />
					))
				}

				<h2>Melhor figurino</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory key={videoClip.id} data={videoClip} nameHTML="videoClipCostume" setSelected={() => setSelectedVideoClipCostume(videoClip)} />
					))
				}

				<h2>Melhor edição</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory key={videoClip.id} data={videoClip} nameHTML="videoClipEdition" setSelected={() => setSelectedVideoClipEdition(videoClip)} />
					))
				}

				<label htmlFor="registration">Matrícula</label>
				<input 
					type="text" 
					placeholder="Insira seu número de matrícula" 
					name="registration" value={registration} 
					onChange={(evt) => setRegistration(evt.target.value)} 
					required
				/>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default App;
