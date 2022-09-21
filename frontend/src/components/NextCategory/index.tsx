import { CaretCircleDoubleRight } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import line from "../../assets/line.svg";

import { NextCategoryContainer } from "./styles";

interface NextCategoryProps {
  link: string;
	hasSelected: boolean;
}

export function NextCategory({ link, hasSelected }: NextCategoryProps) {
	const navigate = useNavigate();

	function handleNavigate() {
		if (!hasSelected) {
			return alert("Selecione um concorrente antes de prosseguir.");
		}

		navigate(`/${link}`);
	}

	return (
		<NextCategoryContainer>
			<button onClick={handleNavigate}>
				<h1>Próxima categoria</h1>
				<CaretCircleDoubleRight size={36} />
			</button>

			<img src={line} alt="" />
		</NextCategoryContainer>
	);
}