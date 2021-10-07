import React from 'react'
import Task from './Task'

const TaskList = ({ tasks }) => (
	<ul>
		{tasks.map(task => (
			<li className="m-1" key={task.id}>
				{task.isDone}
				<Task task={task}/>
			</li>
		))}
	</ul>
)

export default TaskList