import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { ActorContainer } from "./styles";

export function Actor() {
	const { actors, selectedActor, setSelectedActor } = useContext(VoteContext);

	const [isOpen, setIsOpen] = useState(false);
	const [link, setLink] = useState("");

	function handleCloseModal() {
		setIsOpen(false);
	}

	function handleOpenModal(link: string) {
		setIsOpen(true);
		setLink(link);
	}

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
							link={actor.videoclip.link}
							openModal={handleOpenModal}
						/>
					))}					
				</CategoryGroup>
			</ActorContainer>

			<NextCategory link="actress" hasSelected={JSON.stringify(selectedActor) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}