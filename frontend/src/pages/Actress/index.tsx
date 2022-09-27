import React, { useContext } from "react";
import { Card } from "../../components/Card";
import { CategoryGroup } from "../../components/CategoryGroup";
import { Header } from "../../components/Header";
import { NextCategory } from "../../components/NextCategory";
import { VoteContext } from "../../contexts/VoteContext";
import { ActressContainer } from "./styles";

export function Actress() {
	const { actress, selectedActress, setSelectedActress } = useContext(VoteContext);

	return (
		<>
			<Header />

			<ActressContainer>
			
				<CategoryGroup title="2 Melhor atriz">
					{actress.map(actressData => (
						<Card 
							isSelected={selectedActress.id === actressData.id} 
							setSelected={setSelectedActress} 
							id={actressData.id}
							key={actressData.id} 
							title={actressData.name} 
							description={actressData.videoclip.name} 
						/>
					))}					
				</CategoryGroup>
			</ActressContainer>

			<NextCategory link="videoClip" hasSelected={JSON.stringify(selectedActress) !== "{}"} />
		</>
	);
}