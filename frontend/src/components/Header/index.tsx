import React from "react";

import { useNavigate } from "react-router-dom";

import { HeaderContainer, Logo } from "./styles";
import logoSvg from "../../assets/logo.svg";
import { CaretLeft } from "phosphor-react";

interface HeaderProps {
	hasBeforePage?: boolean;
}

export function Header({ hasBeforePage = true }: HeaderProps) {
	const navigate = useNavigate();

	return (
		<HeaderContainer>
			{ hasBeforePage ? (
				<button onClick={() => navigate(-1)}>
					<CaretLeft size={32} />
					<span>Voltar</span>
				</button>
			) : (
				<div>
					<span>Votação</span>
				</div>
			)}

			<Logo src={logoSvg} alt="" />
		</HeaderContainer>
	);
}