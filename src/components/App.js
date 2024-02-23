import { useState } from "react";
import TasksCategories from "./TasksCategories";
import Header from "./Header";
import Modal from "./Modal";

export default function App() {
	const [showModal, setShowModal] = useState(false);

	function handleToggleModal() {
		setShowModal((showModal) => !showModal);
	}

	return (
		<main className="main">
			{showModal && <Modal onToggleModal={handleToggleModal} />}
			<Header onToggleModal={handleToggleModal} />
			<TasksCategories />
		</main>
	);
}
