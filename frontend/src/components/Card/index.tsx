import { CircleWavyCheck } from "phosphor-react";
import React from "react";
import { CardContainer, SelectedContainer } from "./styles";

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
			{ isSelected && (
				<SelectedContainer>
					<CircleWavyCheck size={30} />
				</SelectedContainer>
			)}
			<span>{title}</span>
			<p>{description}</p>
		</CardContainer>
	);
}