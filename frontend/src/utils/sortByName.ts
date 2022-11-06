import { Actor, VideoClip } from "../contexts/VoteContext";

export function sortByActorName(array: VideoClip[], propName: string): VideoClip[] {

	return array?.sort(
		(videoclip1, videoclip2) => {
			const actor1 = videoclip1[propName as keyof typeof videoclip1] as Actor;
			const actor2 = videoclip2[propName as keyof typeof videoclip2] as Actor;

			if (actor1.name < actor2.name) {
				return -1;
			}
			if (actor1.name > actor2.name) {
				return 1;
			}
			return 0;
		}
	);
}
