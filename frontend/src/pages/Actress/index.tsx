import React, { useContext, useState } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VideoModal } from "../../components/VideoModal";
import { VoteContext } from "../../contexts/VoteContext";
import { ActressContainer } from "./styles";

export function Actress() {
	const { actress, selectedActress, setSelectedActress } = useContext(VoteContext);

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
					{actress.map(actressData => (
						<Card 
							isSelected={selectedActress.id === actressData.id} 
							setSelected={setSelectedActress} 
							id={actressData.id}
							key={actressData.id} 
							title={actressData.name} 
							description={actressData.videoclip.name} 
							openModal={handleOpenModal}
							link={actressData.videoclip.link}
						/>
					))}					
				</CategoryGroup>
			</ActressContainer>

			<NextCategory link="videoClip" hasSelected={JSON.stringify(selectedActress) !== "{}"} />

			<VideoModal isOpen={isOpen} onRequestClose={handleCloseModal} link={link} />
		</>
	);
}