import Button from "./Button";

export default function Modal({ children, onToggleModal }) {
	return (
		<div className="modal">
			<div className="modal__content">
				<Button className={"modal__close"} onClick={onToggleModal}>
					X
				</Button>
				<h2 className="modal__heading">
					<span>📄</span>
					Add new task
				</h2>
				{children}
			</div>
		</div>
	);
}
