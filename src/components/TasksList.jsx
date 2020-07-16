import React from 'react';
import Task from './Task/Task';

const TasksList = (props) => {
    const { order, tasks, handleDelete, handleComplete } = props;
    const sortedTasks = order ? tasks.reverse() : tasks;

    return (
        <ul className="list-unstyled">
            {sortedTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleComplete={handleComplete}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default TasksList;
