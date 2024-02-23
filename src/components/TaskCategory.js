import Tasks from "./Tasks";

export default function TaskCategory({ category, classTag }) {
	return (
		<div className={`task__category task__category--${classTag}`}>
			<h2 className="task__category-heading">{category}</h2>
			<Tasks status={classTag} />
		</div>
	);
}
