import Button from "./Button";

export default function Header({ onToggleModal }) {
	return (
		<header className="header">
			<Button className={"header__button"} onClick={onToggleModal}>
				Add new task ➕
			</Button>
		</header>
	);
}
