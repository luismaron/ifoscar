import React, { FormEvent, useEffect, useState } from "react";
import { api } from "./services/api";

interface Actor {
	id: string;
	name: string;
	registration: string;
	gender: "Male" | "Female";
}

interface VideoClip {
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
	const [actors, setActors] = useState<Actor[]>([]);
	const [videoClips, setVideoClips] = useState<VideoClip[]>([]);
	const [vote, setVote] = useState<Vote>({} as Vote);

	const [selectedActor, setSelectedActor] = useState<Actor>({} as Actor);

	useEffect(() => {
		async function loadData() {
			const responseActors = await api.get("/actors");
			setActors(responseActors.data);

			const responseVideoClips = await api.get("/videoclips");
			setVideoClips(responseVideoClips.data);
		}

		loadData();
	}, []);

	function handleSubmitForm(evt: FormEvent) {
		evt.preventDefault(); // Prevenir comportamento padrão do formulário

		console.log(selectedActor);
	}

	return (
		<div>
			<h1>Ifoscar</h1>

			<form onSubmit={handleSubmitForm}>
				<h2>Melhor ator</h2>
				{
					actors.filter(actor => actor.gender === "Male").map(actor => (
						<div key={actor.id}>
							<label htmlFor="actor">{actor.name}</label>
							<input type="radio" name="actor" onClick={() => setSelectedActor(actor)} />
						</div>
					))
				}

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default App;
