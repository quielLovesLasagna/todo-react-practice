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

	// ! -- Deleted a specific task based on task id
	function handleDeleteTask(id) {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	}

	// ! -- Toggle task completion
	function handleToggleCompleteTask(id) {
		setTasks((tasks) =>
			tasks.map((task) =>
				task.id === id
					? {
							...task,
							completed: !task.completed,
							type: task.completed ? "todo" : "completed",
					  }
					: task
			)
		);
	}

	// ! -- Filter tasks based on their type
	const todoTasks = tasks.filter((task) => task.type === "todo");
	const inProgressTasks = tasks.filter((task) => task.type === "in-progress");
	const completedTasks = tasks.filter((task) => task.type === "completed");

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
					{tasks.length > 0 && (
						<Tasks
							tasks={todoTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
						/>
					)}
				</TaskCategory>
				<TaskCategory heading={"⏳ In Progress"} classTag={"in-progress"}>
					{tasks.length > 0 && (
						<Tasks
							tasks={inProgressTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
						/>
					)}
				</TaskCategory>
				<TaskCategory heading={"☑ Completed"} classTag={"completed"}>
					{tasks.length > 0 && (
						<Tasks
							tasks={completedTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
						/>
					)}
				</TaskCategory>
			</TasksCategories>
		</main>
	);
}
