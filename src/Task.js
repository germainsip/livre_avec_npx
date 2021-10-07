import React, { Component } from 'react'

class Task extends Component {
	
	render () {
		
		const { task } = this.props
		return <span className= {`text-white p-1 rounded shadow-sm hover:shadow-xl ${task.isDone ? "bg-green-700" : "bg-gray-500"}`}>{task.label} {task.isDone}</span>
	}
}



export default Task