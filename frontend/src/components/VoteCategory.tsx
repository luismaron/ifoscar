import React from "react";
import { Actor, VideoClip } from "../App";

interface Props {
	data: Actor | VideoClip;
	fieldValue: string;
	videoClipName?: string;
	required?: boolean;
	register: any;
} 

export function VoteCategory({ data, fieldValue, videoClipName, required = true, register }: Props): JSX.Element {
	return (
		<div>
			<label htmlFor={fieldValue}>{data.name} {videoClipName && `- ${videoClipName}`}</label>
			<input 
				type="radio" 
				required={required} 
				id={fieldValue}
				name={fieldValue}
				value={data.id}
				{...register(fieldValue)}
			/>
		</div>
	);
}