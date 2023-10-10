import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask }) => { 

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <h1 className='header'>Tasks</h1>
                </div>
            </div>
            <div className='row row-cols-1 row-cols-lg-2'>
                {tasks.map((task) => (
                    <Task task={task} deleteTask={deleteTask}/>
                ))}
            </div>            
        </div>
    );
};

export default TaskList;