import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { VideoClipContainer } from "./styles";

export function Costume() {
	const { videoClips, selectedCostume, setSelectedCostume } = useContext(VoteContext);

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

				<CategoryGroup title="6 Melhor figurino">
					{videoClips.sort((a, b) => {
						if (a.name < b.name) return -1;
						if (a.name > b.name) return 1;
						return 0;
					}).map(videoClip => (
						<Card
							isSelected={selectedCostume.id === videoClip.id}
							setSelected={setSelectedCostume}
							id={videoClip.id}
							key={videoClip.id}
							title={videoClip.name}
							openModal={handleOpenModal}
							link={videoClip.link}
						/>
					))}
				</CategoryGroup>
			</VideoClipContainer>

			<NextCategory link="edition" hasSelected={JSON.stringify(selectedCostume) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}
