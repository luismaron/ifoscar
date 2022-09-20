import React from "react";

import { HeaderContainer, Logo } from "./styles";
import logoSvg from "../../assets/logo.svg";

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<span>Votação</span>
			</div>

			<Logo src={logoSvg} alt="" />
		</HeaderContainer>
	);
}