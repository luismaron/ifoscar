import { CaretCircleDoubleRight } from "phosphor-react";
import React from "react";

import line from "../../assets/line.svg";

import { NextCategoryContainer } from "./styles";

interface NextCategoryProps {
  link: string;
}

export function NextCategory({ link }: NextCategoryProps) {
	return (
		<NextCategoryContainer>
			<a href={link}>
				<h1>Próximas categorias</h1>
				<CaretCircleDoubleRight size={36} />
			</a>

			<img src={line} alt="" />
		</NextCategoryContainer>
	);
}