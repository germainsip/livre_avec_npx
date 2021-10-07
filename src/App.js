import './App.css';
import React, { Component } from 'react'
import TaskList from './TaskList';
import Week from './Week';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       tasks: [
        {id: 1, label: 'Acheter du pain', isDone: true},
        {id: 2, label: 'Prendre des vacances', isDone: false}
      ],
      date: new Date(),
      date2: new Date('2021-09-27')
    }
  }
  render() {
    
    return (
      <div>
        <h1 className="text-6xl text-indigo-700">Cette semaine</h1>
        <Week date={this.state.date}/>
        {/* <Week date={this.state.date2}/> */}
        {/* <TaskList tasks={this.state.tasks}/> */}
      </div>
    )
  }
  
	
}

export default App;
