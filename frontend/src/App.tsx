import React, { FormEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { VoteCategory } from "./components/VoteCategory";
import { api } from "./services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const voteFormSchema = yup.object().shape({
	registration: yup.string().required("Matrícula obrigatória."),
	actor: yup.string().required("Voto para melhor ator obrigatório."),
	actress: yup.string().required("Voto para melhor atriz obrigatório."),
	supportingActor: yup.string().required("Voto para melhor ator coadjuvante obrigatório."),
	supportingActress: yup.string().required("Voto para melhor atriz coadjuvante obrigatório."),
	videoClip: yup.string().required("Voto para melhor video clipe obrigatório."),
	videoClipCostume: yup.string().required("Voto para melhor figurino obrigatório."),
	videoClipEdition: yup.string().required("Voto para melhor edição obrigatório."),
});

function App() {
	const [actors, setActors] = useState<Actor[]>([]);
	const [videoClips, setVideoClips] = useState<VideoClip[]>([]);

	const { register, handleSubmit, reset } = useForm({
		resolver: yupResolver(voteFormSchema)
	});

	useEffect(() => {
		async function loadData() {
			const responseActors = await api.get("/actors");
			setActors(responseActors.data);

			const responseVideoClips = await api.get("/videoclips");
			setVideoClips(responseVideoClips.data);
		}

		loadData();
	}, []);

	async function handleSubmitForm(data: FieldValues) {
		const { 
			registration, 
			actor, 
			actress, 
			supportingActor,
			supportingActress,
			videoClip,
			videoClipCostume,
			videoClipEdition
		} = data;

		try {
			await api.post("/vote", {
				student_registration: registration,
				best_actor_id: actor,
				best_actress_id: actress,
				best_supporting_actor_id: supportingActor,
				best_supporting_actress_id: supportingActress,
				best_videoclip_costume_id: videoClipCostume,
				best_videoclip_edition_id: videoClipEdition,
				best_videoclip_id: videoClip
			});

			alert("Voto enviado!");

			reset();
		} catch (error) {
			alert("Erro ao realizar voto.");
		}
	}

	return (
		<div>
			<h1>Ifoscar</h1>

			<form onSubmit={handleSubmit(handleSubmitForm)}>
				<h2>Melhor ator</h2>
				{
					actors.filter(actor => actor.gender === "Male").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							fieldValue="actor" 
							videoClipName={actor.videoclip.name}
							register={register}
						/>
					))
				}

				<h2>Melhor atriz</h2>
				{
					actors.filter(actor => actor.gender === "Female").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							fieldValue="actress" 
							videoClipName={actor.videoclip.name}
							register={register}
						/>
					))
				}

				<h2>Melhor ator coadjuvante</h2>
				{
					actors.filter(actor => actor.gender === "Male").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							fieldValue="supportingActor" 
							videoClipName={actor.videoclip.name}
							register={register}
						/>
					))
				}

				<h2>Melhor atriz coadjuvante</h2>
				{
					actors.filter(actor => actor.gender === "Female").map(actor => (
						<VoteCategory 
							key={actor.id} 
							data={actor} 
							fieldValue="supportingActress" 
							videoClipName={actor.videoclip.name}
							register={register}
						/>
					))
				}

				<h2>Melhor video clipe</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory 
							key={videoClip.id} 
							data={videoClip} 
							fieldValue="videoClip" 
							register={register}
						/>
					))
				}

				<h2>Melhor figurino</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory 
							key={videoClip.id} 
							data={videoClip} 
							fieldValue="videoClipCostume" 
							register={register} 
						/>
					))
				}

				<h2>Melhor edição</h2>
				{
					videoClips.map(videoClip => (
						<VoteCategory 
							key={videoClip.id} 
							data={videoClip} 
							fieldValue="videoClipEdition" 
							register={register}
						/>
					))
				}

				<label htmlFor="registration">Matrícula</label>
				<input 
					type="text" 
					placeholder="Insira seu número de matrícula" 
					required
					{...register("registration")}
				/>

				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

export default App;
