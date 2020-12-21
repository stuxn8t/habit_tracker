import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    render() {
        return (
            <div>
                <HabitAddForm onAdd={this.props.onAdd} />
            <ul>
            {this.props.habits.map(habit => (
                    <Habit // Habit component 를 당겨옴
                    key={habit.id} 
                    habit={habit}  // habit 이라는 props에 담아 Habit Component로 전달
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete} />
            ))}
            </ul>
            <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </div>
        );
    }
}

export default Habits;