import React, { useContext } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { ConfirmVoteButton } from "../../components/ConfirmVoteButton";
import { Header } from "../../components/Header";
import { VoteContext } from "../../contexts/VoteContext";
import { VideoClipContainer } from "./styles";

export function VideoClip() {
	const { videoClips, selectedVideoClip, setSelectedVideoClip } = useContext(VoteContext);

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
							description={videoClip.link} 
						/>
					))}					
				</CategoryGroup>
			</VideoClipContainer>

			<ConfirmVoteButton />
		</>
	);
}