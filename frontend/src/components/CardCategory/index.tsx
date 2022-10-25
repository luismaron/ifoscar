import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
	title: string;
	link: string;
	openModal: (link: string) => void;
}

export function CardCategory({ title, openModal, link }: CardProps) {
	return (
		<CardContainer onClick={() => openModal(link)}>			
			<span>{title}</span>
		</CardContainer>
	);
}