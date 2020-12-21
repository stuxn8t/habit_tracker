import React, { Component} from "react";
import "./app.css";
import Habits from "./components/habits";

class App extends Component {
    state = {
      habits: [
          { id : 1, name: 'Reading', count: 0},
          { id : 2, name: 'Running', count: 0},
          { id : 3, name: 'Coding', count: 0},
      ],
  };

  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits]; // copy
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = habit => {
      console.log(`handleDecrement ${habit.name}`);
      const habits = [...this.state.habits]; // copy
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({ habits });
  };

  handleDelete = habit => {
      const habits = this.state.habits.filter(item => item.id != habit.id);
      this.setState({ habits });
  };

  render() {
    return ( 
    <Habits 
    habit={this.state.habits} 
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete} />
  );
  }
}

export default App;
