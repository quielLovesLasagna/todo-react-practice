import TaskCategory from "./TaskCategory";

export default function TasksCategories() {
	return (
		<section className="task__categories">
			<TaskCategory category={"📄 To do"} classTag={"todo"} />
			<TaskCategory category={"⏳ In Progress"} classTag={"in-progress"} />
			<TaskCategory category={"☑ Completed"} classTag={"completed"} />
		</section>
	);
}
