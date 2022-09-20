import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { api } from "./services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

/*export interface Actor {
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
});*/

function App() {
	/*const [actors, setActors] = useState<Actor[]>([]);
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
	}*/

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
