import { CheckCircle } from "phosphor-react";
import React, { useContext } from "react";
import { ConfirmVoteButtonContainer } from "./styles";

import goldLine from "../../assets/goldLine.svg";
import { VoteContext } from "../../contexts/VoteContext";
import { useNavigate } from "react-router-dom";

export function ConfirmVoteButton() {
	const { selectedActor, selectedActress, selectedVideoClip, reset } = useContext(VoteContext);

	const navigate = useNavigate();

	function handleConfirmVote() {
		if (
			JSON.stringify(selectedActor) === "{}" || 
			JSON.stringify(selectedActress)  === "{}" || 
			JSON.stringify(selectedVideoClip)  === "{}"
		) {
			return alert("Selecione um concorrente em cada categoria antes de finalizar o voto.");
		} 

		// Enviar voto para a API
		alert("Voto enviado com sucesso!");
		reset();
		navigate("/");
	}

	return (
		<ConfirmVoteButtonContainer>
			<button onClick={handleConfirmVote}>
				<CheckCircle size={20} />
				<span>Confirmar votação</span>
			</button>

			<img src={goldLine} alt="" />
		</ConfirmVoteButtonContainer>
	);
}