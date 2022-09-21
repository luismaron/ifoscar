import React, { useContext } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VoteContext } from "../../contexts/VoteContext";
import { ActorContainer } from "./styles";

export function Actor() {
	const { actors, selectedActor, setSelectedActor } = useContext(VoteContext);

	return (
		<>
			<Header hasBeforePage={false} />

			<ActorContainer>
			
				<CategoryGroup title="1 Melhor ator">
					{actors.map(actor => (
						<Card 
							isSelected={selectedActor.id === actor.id} 
							setSelected={setSelectedActor} 
							id={actor.id}
							key={actor.id} 
							title={actor.name} 
							description={actor.videoclip.name} 
						/>
					))}					
				</CategoryGroup>
			</ActorContainer>

			<NextCategory link="actress" />
		</>
	);
}