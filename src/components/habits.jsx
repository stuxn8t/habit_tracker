import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {


    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };


    render() {
        return (
            <ul>
            {this.props.habits.map(habit => (
                    <Habit // Habit component 를 당겨옴
                    key={habit.id} 
                    habit={habit}  // habit 이라는 props에 담아 Habit Component로 전달
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete} />
            ))}
            </ul>
        );
    }
}

export default Habits;