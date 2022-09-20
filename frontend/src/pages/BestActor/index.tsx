import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { BestActorContainer } from "./styles";

export interface Actor {
	id: string;
	name: string;
	registration: string;
	gender: "Male" | "Female";
	videoclip: {
		name: string;
	}
}

export function BestActor() {
	const [actors, setActors] = useState<Actor[]>([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		async function loadData() {
			const responseActors = await api.get("/actors", {
				params: {
					gender: "Male"
				}
			});
			setActors(responseActors.data);
		}

		loadData();
	}, []);

	function handleSelectActor(id: string) {
		setSelected(id);
	}

	return (
		<>
			<Header />

			<BestActorContainer>
			
				<CategoryGroup title="1 Melhor ator">
					{actors.map(actor => (
						<Card 
							isSelected={selected === actor.id} 
							setSelected={handleSelectActor} 
							id={actor.id}
							key={actor.id} 
							title={actor.name} 
							description={actor.videoclip.name} 
						/>
					))}					
				</CategoryGroup>
			</BestActorContainer>
		</>
	);
}