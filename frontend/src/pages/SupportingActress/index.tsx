import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { sortByActorName } from "../../utils/sortByName";
import { ActressContainer } from "./styles";

export function SupportingActress() {
	const { videoClips, selectedSupportingActress, setSelectedSupportingActress } = useContext(VoteContext);

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

				<CategoryGroup title="4 Melhor atriz coadjuvante">
					{sortByActorName(videoClips, "supporting_actress")
						.map(videoClip => (
							<Card
								isSelected={selectedSupportingActress.id === videoClip.supporting_actress.id}
								setSelected={setSelectedSupportingActress}
								id={videoClip.supporting_actress.id}
								key={videoClip.supporting_actress.id}
								title={videoClip.supporting_actress.name}
								description={videoClip.name}
								openModal={handleOpenModal}
								link={videoClip.link}
							/>
						))}
				</CategoryGroup>
			</ActressContainer>

			<NextCategory link="videoClip" hasSelected={JSON.stringify(selectedSupportingActress) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}
