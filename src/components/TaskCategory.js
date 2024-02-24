export default function TaskCategory({ heading, classTag, children }) {
	return (
		<div className={`task__category task__category--${classTag}`}>
			<h2 className="task__category-heading">{heading}</h2>
			{children}
		</div>
	);
}
