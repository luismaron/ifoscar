/* eslint-disable no-mixed-spaces-and-tabs */
import { X, XCircle } from "phosphor-react";
import React from "react";
import Modal from "react-modal";
import { IconContainer, VideoContainer } from "./styles";

interface VideoModalProps {
  link: string;
  isOpen: boolean;
  onRequestClose?: () => void;
}

export function VideoModal({ isOpen, onRequestClose, link }: VideoModalProps) {
	const videoId = link.replace("https://youtu.be/", "");

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
	  >
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<IconContainer>
					<X size={32} />
				</IconContainer>
			</button>

			<VideoContainer>
				<iframe width="100%" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</VideoContainer>
		</Modal>
	);
}