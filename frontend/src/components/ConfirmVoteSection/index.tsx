import { CheckCircle } from "phosphor-react";
import React, { useContext, useState } from "react";
import { ConfirmVoteSectionContainer } from "./styles";

import goldLine from "../../assets/goldLine.svg";
import { VoteContext } from "../../contexts/VoteContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function ConfirmVoteSection() {
	const [studentRegistration, setStudentRegistration] = useState("");

	const { selectedActor, selectedActress, selectedVideoClip, selectedSupportingActor, selectedSupportingActress, selectedCostume, selectedEdition, reset } = useContext(VoteContext);

	const navigate = useNavigate();

	async function handleConfirmVote() {
		if (
			JSON.stringify(selectedActor) === "{}" || 
			JSON.stringify(selectedActress)  === "{}" || 
			JSON.stringify(selectedVideoClip)  === "{}" ||
			JSON.stringify(selectedSupportingActor) === "{}" ||
			JSON.stringify(selectedSupportingActress) === "{}" 
		) {
			return alert("Selecione um concorrente em cada categoria antes de finalizar o voto.");
		} 

		if (studentRegistration?.trim() === "") {
			return alert("Coloque a sua matrícula antes de enviar o voto.");
		}

		try {
			await api.post("/vote", {
				student_registration: studentRegistration,
				best_actor_id: selectedActor.id,
				best_actress_id: selectedActress.id,
				best_supporting_actor_id: selectedSupportingActor.id,
				best_supporting_actress_id: selectedSupportingActress.id,
				best_videoclip_costume_id: selectedCostume.id,
				best_videoclip_edition_id: selectedEdition.id,
				best_videoclip_id: selectedVideoClip.id,
			});
		} catch (error: any) {
			return alert(error.message);
		}
		
		alert("Voto enviado com sucesso!");
		reset();
		navigate("/");
	}

	return (
		<ConfirmVoteSectionContainer>
			<input type="text" name="studentRegistration" placeholder="Digite sua matrícula" onChange={(evt) => setStudentRegistration(evt.target.value)} />

			<button onClick={handleConfirmVote}>
				<CheckCircle size={20} />
				<span>Confirmar votação</span>
			</button>

			<img src={goldLine} alt="" />
		</ConfirmVoteSectionContainer>
	);
}