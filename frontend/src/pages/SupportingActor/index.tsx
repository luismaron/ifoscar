import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { sortByActorName } from "../../utils/sortByName";
import { ActorContainer } from "./styles";

export function SupportingActor() {
	const { videoClips, selectedSupportingActor, setSelectedSupportingActor } = useContext(VoteContext);

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

				<CategoryGroup title="3 Melhor ator coadjuvante">
					{sortByActorName(videoClips, "supporting_actor").map(videoClip => (
						<Card
							isSelected={selectedSupportingActor.id === videoClip.supporting_actor.id}
							setSelected={setSelectedSupportingActor}
							id={videoClip.supporting_actor.id}
							key={videoClip.supporting_actor.id}
							title={videoClip.supporting_actor.name}
							description={videoClip.name}
							link={videoClip.link}
							openModal={handleOpenModal}
						/>
					))}
				</CategoryGroup>
			</ActorContainer>

			<NextCategory link="supportingActress" hasSelected={JSON.stringify(selectedSupportingActor) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}
