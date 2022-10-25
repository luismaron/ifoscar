import { CircleWavyCheck, VideoCamera } from "phosphor-react";
import React from "react";
import { CardContainer, SelectedContainer, Texts, VideoLink } from "./styles";

interface CardProps {
	id: string;
	title: string;
	description?: string;
	link: string;
	isSelected: boolean;
	setSelected: (id: string) => void;
	openModal: (link: string) => void;
}

export function Card({ id, title, description, isSelected, setSelected, openModal, link }: CardProps) {
	return (
		<CardContainer isSelected={isSelected}>
			{ isSelected && (
				<SelectedContainer>
					<CircleWavyCheck size={30} />
				</SelectedContainer>
			)}

			<VideoLink onClick={() => openModal(link)}>
				<VideoCamera size={24} />
				<span>Ver vídeo</span>
			</VideoLink>

			<Texts onClick={() => setSelected(id)}>
				<span>{title}</span>
				<p>{description}</p>
			</Texts>
		</CardContainer>
	);
}