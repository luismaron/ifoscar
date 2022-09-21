import { CheckCircle } from "phosphor-react";
import React from "react";
import { ConfirmVoteButtonContainer } from "./styles";

import goldLine from "../../assets/goldLine.svg";

export function ConfirmVoteButton() {
	return (
		<ConfirmVoteButtonContainer>
			<button>
				<CheckCircle size={20} />
				<span>Confirmar votação</span>
			</button>

			<img src={goldLine} alt="" />
		</ConfirmVoteButtonContainer>
	);
}