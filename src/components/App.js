import { useState } from "react";
import TasksCategories from "./TasksCategories";
import Header from "./Header";
import Modal from "./Modal";
import Form from "./Form";
import Button from "./Button";
import Tasks from "./Tasks";
import TaskCategory from "./TaskCategory";

export default function App() {
	const [showModal, setShowModal] = useState(false);
	const [tasks, setTasks] = useState([]);

	// ! -- Opens and close the modal
	function handleToggleModal() {
		setShowModal((showModal) => !showModal);
	}

	// ! -- Adds a new task to existing tasks
	function handleAddTask(task) {
		setTasks((tasks) => [...tasks, task]);
	}

	return (
		<main className="main">
			{showModal && (
				<Modal onToggleModal={handleToggleModal}>
					<Form onToggleModal={handleToggleModal} onAddTask={handleAddTask} />
				</Modal>
			)}
			<Header>
				<Button className={"header__button"} onClick={handleToggleModal}>
					Add new task ➕
				</Button>
			</Header>
			<TasksCategories>
				<TaskCategory heading={"📄 To do"} classTag={"todo"}>
					{tasks.length > 0 && <Tasks status={"todo"} tasks={tasks} />}
				</TaskCategory>
				<TaskCategory heading={"⏳ In Progress"} classTag={"in-progress"}>
					{tasks.length > 0 && <Tasks status={"in-progress"} tasks={tasks} />}
				</TaskCategory>
				<TaskCategory heading={"☑ Completed"} classTag={"completed"}>
					{tasks.length > 0 && <Tasks status={"completed"} tasks={tasks} />}
				</TaskCategory>
			</TasksCategories>
		</main>
	);
}
