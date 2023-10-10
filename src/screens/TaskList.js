import React from 'react';

const TaskList = ({ tasks }) => {
    console.log("helooo", tasks);
    return (
        <div class='d-flex flex-column justify-content-center'>
            <di><h1>Tasks</h1></di>
            <div>
                {tasks.map((task) => (
                    <div 
                        class='card task-card text-start px-5 py-1 m-1'
                        key={task._id} >
                        <h2>{task.title}</h2>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default TaskList;