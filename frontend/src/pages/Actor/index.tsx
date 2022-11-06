import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { sortByActorName } from "../../utils/sortByName";
import { ActorContainer } from "./styles";

export function Actor() {
	const { videoClips, selectedActor, setSelectedActor } = useContext(VoteContext);

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
					{sortByActorName(videoClips, "actor").map(videoClip => (
						<Card
							isSelected={selectedActor.id === videoClip.actor.id}
							setSelected={setSelectedActor}
							id={videoClip.actor.id}
							key={videoClip.actor.id}
							title={videoClip.actor.name}
							description={videoClip.name}
							link={videoClip.link}
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
