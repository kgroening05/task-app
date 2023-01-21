import React, { Component } from 'react';
import { AddListItem } from './components/Overview'; 

class App extends Component{
  constructor(){
    super()
    this.state = {
      taskList: ['number one']
    }
    this.updateTaskList = this.updateTaskList.bind(this);
  }

  updateTaskList(){
    const input = document.querySelector('input')
    this.setState({
      taskList: [...this.state.taskList, input.value]
    })
    input.value = ''
  }

  render() {
    return(
      <div className="App">
        <div className='input'>
          <input></input>
          <button onClick = {this.updateTaskList}>The Button</button>
        </div>
        <div className='tasks'>
          <ul>
            {this.state.taskList.map(task => <AddListItem taskContent = {task} />)}
          </ul>
        </div>
      </div>
    )
  };
}

export default App;
