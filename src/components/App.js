import { useState } from "react";
import TasksCategories from "./TasksCategories";
import Header from "./Header";
import Modal from "./Modal";
import Button from "./Button";
import Tasks from "./Tasks";
import TaskCategory from "./TaskCategory";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";

export default function App() {
	// const [showModal, setShowModal] = useState(false);
	// const [showModal2, setShowModal2] = useState(false);
	const [modalStates, setModalStates] = useState([
		{
			showModal: false,
		},
		{
			showModal: false,
		},
	]);
	const [tasks, setTasks] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	// ! -- Filter tasks based on their type
	const todoTasks = tasks.filter((task) => task.type === "todo");
	const inProgressTasks = tasks.filter((task) => task.type === "in-progress");
	const completedTasks = tasks.filter((task) => task.type === "completed");

	// ! -- Opens and close the modal
	function handleToggleModal(index) {
		setModalStates((prevStates) =>
			prevStates.map((state, i) =>
				index === i ? { showModal: !state.showModal } : state
			)
		);

		index > 0 && setSearchResults([]);
	}

	// ! -- Adds a new task to existing tasks
	function handleAddTask(task) {
		setTasks((tasks) => [...tasks, task]);
	}

	// ! -- Deleted a specific task based on task id
	function handleDeleteTask(id) {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));

		setSearchResults((searchResults) =>
			searchResults.filter((result) => result.id !== id)
		);
	}

	// ! -- Helper function, updates the state in tasks and searchResults
	function updateTasksAndSearchResults(id, updateFunc) {
		setTasks((tasks) =>
			tasks.map((task) => (task.id === id ? updateFunc(task) : task))
		);

		setSearchResults((searchResults) =>
			searchResults.map((result) =>
				result.id === id ? updateFunc(result) : result
			)
		);
	}

	// ! -- Toggle task completion
	function handleToggleCompleteTask(id) {
		updateTasksAndSearchResults(id, (task) => ({
			...task,
			completed: !task.completed,
			type: task.completed ? "todo" : "completed",
		}));
	}

	// ! -- Set task as in-progress
	function handleMarkTaskInProgress(id) {
		updateTasksAndSearchResults(id, (task) => ({
			...task,
			completed: false,
			type: "in-progress",
		}));
	}

	// ! -- Updates a specific task after being edited
	function handleUpdateTask(updatedTask) {
		setTasks((tasks) =>
			tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);

		setSearchResults((searchResults) =>
			searchResults.map((result) =>
				result.id === updatedTask.id ? updatedTask : result
			)
		);
	}

	// ! -- Search a task
	function handleSearchTask(query) {
		const results = tasks.filter(
			(task) => task.title.toLowerCase() === query.trim().toLowerCase()
		);

		setSearchResults(results);
	}

	// ! -- Marks all tasks as completed
	function handleCompleteAllTasks() {
		setTasks((tasks) =>
			tasks.map((task) => ({ ...task, completed: true, type: "completed" }))
		);
	}

	// ! -- Deletes all tasks
	function handleDeleteAllTask() {
		setTasks([]);
	}

	return (
		<main className="main">
			{modalStates[0].showModal && (
				<Modal onToggleModal={() => handleToggleModal(0)}>
					<h2 className="modal__heading">
						<span>📄</span>
						Add new task
					</h2>
					<AddTaskForm
						onToggleModal={() => handleToggleModal(0)}
						onAddTask={handleAddTask}
					/>
				</Modal>
			)}

			{modalStates[1].showModal && (
				<Modal onToggleModal={() => handleToggleModal(1)}>
					<SearchTaskForm onSearchTask={handleSearchTask} />
					<Tasks
						tasks={searchResults}
						onDeleteTask={handleDeleteTask}
						onToggleCompleteTask={handleToggleCompleteTask}
						onMarkTaskInProgress={handleMarkTaskInProgress}
						onUpdateTask={handleUpdateTask}
					/>
				</Modal>
			)}

			<Header>
				<Button
					className={"header__button"}
					onClick={() => handleToggleModal(0)}
				>
					Add new task ➕
				</Button>
				<Button
					className={"header__button"}
					onClick={() => handleToggleModal(1)}
				>
					Search task 🔍
				</Button>
				<Button className={"header__button"} onClick={handleCompleteAllTasks}>
					Mark all as completed ✔️
				</Button>
				<Button
					className={"header__button header__button--warning"}
					onClick={handleDeleteAllTask}
				>
					Delete all 🗑️
				</Button>
			</Header>

			<TasksCategories>
				<TaskCategory heading={"📄 To do"} classTag={"todo"}>
					{tasks.length > 0 && (
						<Tasks
							tasks={todoTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
							onMarkTaskInProgress={handleMarkTaskInProgress}
							onUpdateTask={handleUpdateTask}
						/>
					)}
				</TaskCategory>
				<TaskCategory heading={"⏳ In Progress"} classTag={"in-progress"}>
					{tasks.length > 0 && (
						<Tasks
							tasks={inProgressTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
							onMarkTaskInProgress={handleMarkTaskInProgress}
							onUpdateTask={handleUpdateTask}
						/>
					)}
				</TaskCategory>
				<TaskCategory heading={"✔️ Completed"} classTag={"completed"}>
					{tasks.length > 0 && (
						<Tasks
							tasks={completedTasks}
							onDeleteTask={handleDeleteTask}
							onToggleCompleteTask={handleToggleCompleteTask}
							onMarkTaskInProgress={handleMarkTaskInProgress}
							onUpdateTask={handleUpdateTask}
						/>
					)}
				</TaskCategory>
			</TasksCategories>
		</main>
	);
}
