import React from "react";
import { Actor, VideoClip } from "../App";

interface Props {
	data: Actor | VideoClip;
	nameHTML: string;
  setSelected: (data: Actor | VideoClip) => void;
	videoClipName?: string;
	required?: boolean;
} 

export function VoteCategory({ data, nameHTML, setSelected, videoClipName, required = true }: Props): JSX.Element {
	return (
		<div>
			<label htmlFor={nameHTML}>{data.name} {videoClipName && `- ${videoClipName}`}</label>
			<input type="radio" required={required} name={nameHTML} onClick={() => setSelected(data)} />
		</div>
	);
}