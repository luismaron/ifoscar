import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { ConfirmVoteSection } from "../../components/ConfirmVoteSection";
import { Header } from "../../components/Header";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { VideoClipContainer } from "./styles";

export function Edition() {
	const { videoClips, selectedEdition, setSelectedEdition } = useContext(VoteContext);

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

			<VideoClipContainer>

				<CategoryGroup title="7 Melhor edição">
					{videoClips.sort((a, b) => {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}).map(videoClip => (
						<Card
							isSelected={selectedEdition.id === videoClip.id}
							setSelected={setSelectedEdition}
							id={videoClip.id}
							key={videoClip.id}
							title={videoClip.name}
							openModal={handleOpenModal}
							link={videoClip.link}
						/>
					))}
				</CategoryGroup>
			</VideoClipContainer>

			<ConfirmVoteSection />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}
