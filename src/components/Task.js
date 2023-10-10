import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';

const Task = ({task, deleteTask}) => {

    const handleDelete = () => {
        deleteTask(task._id);
    };

    return (
        <div 
            className='task-card card text-start col  p-1 g-1'
            key={task._id}
        >
            <div className='row align-items-center'>
                <div className="col-1 p-1 mx-3"><BsFillCaretRightFill className='icon-fill'/></div>
                <div className='col'>
                    <span className='task-title'>{task.title}</span>
                </div>
                <div className='col-2 p-0 pe-3'>
                    <button 
                        className='delete-button float-end '
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task