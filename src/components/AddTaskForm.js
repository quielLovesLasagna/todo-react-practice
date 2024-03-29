import { useState } from "react";
import Button from "./Button";

export default function AddTaskForm({ onToggleModal, onAddTask }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("todo");

	function handleSubmit(e) {
		e.preventDefault();

		// ! -- Checking if the task is empty
		if (title.trim() === "" || description.trim() === "") {
			alert("Please fill in the task's information");
			return;
		}

		// ! -- Generate random ID
		const id = crypto.randomUUID();

		// ! -- Generate new task object
		const newTask = {
			type: category,
			completed: category === "completed" ? true : false,
			title,
			description,
			id,
		};

		// ! -- Add task
		onAddTask(newTask);

		// ! -- Close the modal
		onToggleModal();
	}

	return (
		<form className="modal__form" onSubmit={handleSubmit}>
			<div className="modal__form-title">
				<label htmlFor="title" className="modal__form-label">
					Task title
				</label>
				<input
					type="text"
					className="modal__input modal__input-title"
					id="title"
					placeholder="Task title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="modal__form-description">
				<label htmlFor="description" className="modal__form-label">
					Task description
				</label>
				<textarea
					className="modal__input modal__input-description"
					id="description"
					placeholder="Task description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<div className="modal__form-category">
				<label htmlFor="category" className="modal__form-label">
					Select category
				</label>
				<select
					className="modal__select"
					id="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value={"todo"}>To do</option>
					<option value={"in-progress"}>In progress</option>
					<option value={"completed"}>Completed</option>
				</select>
			</div>
			<Button className={"modal__form-button header__button"}>Add</Button>
		</form>
	);
}
