import Button from "./Button";

export default function Modal({ onToggleModal, children }) {
	return (
		<div className="modal">
			<div className="modal__content">
				<Button className={"modal__close"} onClick={onToggleModal}>
					X
				</Button>
				{children}
			</div>
		</div>
	);
}
