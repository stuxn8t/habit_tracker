import React, {memo} from 'react';

const HabitAddForm = memo((props) => {

    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault(); // 리프레쉬 방지. 기본 브라우저 작동 리프레쉬를 방지
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
};
            
        return (
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input 
                ref={inputRef} 
                type="text" 
                className="add-input" 
                placeholder="add your habit"
                /> 
                <button className="add-button">Add</button>
            </form>
        );
    })

export default HabitAddForm;