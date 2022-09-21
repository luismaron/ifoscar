import { CaretCircleDoubleRight } from "phosphor-react";
import React from "react";
import { useNavigate } from "react-router-dom";

import line from "../../assets/line.svg";

import { NextCategoryContainer } from "./styles";

interface NextCategoryProps {
  link: string;
}

export function NextCategory({ link }: NextCategoryProps) {
	const navigate = useNavigate();

	return (
		<NextCategoryContainer>
			<button onClick={() => navigate(`/${link}`)}>
				<h1>Próxima categoria</h1>
				<CaretCircleDoubleRight size={36} />
			</button>

			<img src={line} alt="" />
		</NextCategoryContainer>
	);
}