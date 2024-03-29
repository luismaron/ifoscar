import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { sortByActorName } from "../../utils/sortByName";
import { ActressContainer } from "./styles";

export function Actress() {
	const { videoClips, selectedActress, setSelectedActress } = useContext(VoteContext);

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
			<Header />

			<ActressContainer>

				<CategoryGroup title="2 Melhor atriz">
					{sortByActorName(videoClips, "actress")
						.map(videoClip => (
							<Card
								isSelected={selectedActress.id === videoClip.actress.id}
								setSelected={setSelectedActress}
								id={videoClip.actress.id}
								key={videoClip.actress.id}
								title={videoClip.actress.name}
								description={videoClip.name}
								openModal={handleOpenModal}
								link={videoClip.link}
							/>
						))}
				</CategoryGroup>
			</ActressContainer>

			<NextCategory link="supportingActor" hasSelected={JSON.stringify(selectedActress) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}
