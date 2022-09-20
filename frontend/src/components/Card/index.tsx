import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
	id: string;
	title: string;
	description: string;
	isSelected: boolean;
	setSelected: (id: string) => void;
}

export function Card({ id, title, description, isSelected, setSelected }: CardProps) {
	return (
		<CardContainer isSelected={isSelected} onClick={() => setSelected(id)}>
			<span>{title}</span>
			<p>{description}</p>
		</CardContainer>
	);
}