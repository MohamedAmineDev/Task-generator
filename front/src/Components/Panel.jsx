import React from "react";
import Item from "./Task";
import MyModal from "./MyModal";
import Task from "./Task";
function Panel({ tasks, fetchTasks,startLoading,globalUrl }) {
    const registerButtonModalName = "registerModal";
    const editButtonModalName = "editModal";
    const [task, setTask] = React.useState({ id: 0, title: '', description: '', status: '' });
    const [newTask, setNewTask] = React.useState({ id: 0, title: '', description: '', status: '' });
    function handleTaskSelection(index) {
        setTask(tasks[index]);
    }
    return (
        <>
            <div className="card"  >
                <div className="card-header fs-3">
                    Tasks
                </div>
                <div className="card-body scrollable-element" >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <Task key={index + 1} task={task} editButtonModalName={editButtonModalName} index={index} handleTaskSelection={handleTaskSelection} startLoading={startLoading} globalUrl={globalUrl} />
                                );
                            })}

                        </tbody>
                    </table>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${registerButtonModalName}`} >Register</button>
                    <MyModal task={newTask} modalId={registerButtonModalName} modalTitle={`Register task`} buttonText={"Register"} fetchTasks={fetchTasks} startLoading={startLoading} globalUrl={globalUrl}  />
                    <MyModal task={task} modalId={editButtonModalName} modalTitle={`Edit task`} buttonText={"Edit"} fetchTasks={fetchTasks} startLoading={startLoading}  globalUrl={globalUrl} />
                </div>
            </div>
        </>
    );
}
export default Panel;