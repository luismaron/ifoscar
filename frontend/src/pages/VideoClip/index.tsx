import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { ConfirmVoteButton } from "../../components/ConfirmVoteButton";
import { Header } from "../../components/Header";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { VideoClipContainer } from "./styles";

export function VideoClip() {
	const { videoClips, selectedVideoClip, setSelectedVideoClip } = useContext(VoteContext);

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
			
				<CategoryGroup title="3 Melhor vídeo clipe">
					{videoClips.map(videoClip => (
						<Card 
							isSelected={selectedVideoClip.id === videoClip.id} 
							setSelected={setSelectedVideoClip} 
							id={videoClip.id}
							key={videoClip.id} 
							title={videoClip.name} 
							openModal={handleOpenModal}
							link={videoClip.link}
						/>
					))}					
				</CategoryGroup>
			</VideoClipContainer>

			<ConfirmVoteButton />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}