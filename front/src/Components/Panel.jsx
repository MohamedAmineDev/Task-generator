import React from "react";
import Item from "./Item";
import MyModal from "./MyModal";
function Panel({ tasks }) {
    const registerButtonModalName = "registerModal";
    const editButtonModalName = "editModal";
    const [task, setTask] = React.useState({ id: 0, title: '', description: '', status: '' });
    function handleTaskSelection(index){
        setTask(tasks[index]);
    }
    return (
        <>
            <div className="card">
                <div className="card-header fs-3">
                    Tasks
                </div>
                <div className="card-body">
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
                                    <Item key={index + 1} item={task} editButtonModalName={editButtonModalName} index={index} handleTaskSelection={handleTaskSelection} />
                                );
                            })}

                        </tbody>
                    </table>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${registerButtonModalName}`} >Register</button>
                    <MyModal task={task} modalId={registerButtonModalName} modalTitle={`Register task`} buttonText={"Register"}   />
                    <MyModal task={task} modalId={editButtonModalName} modalTitle={`Edit task`} buttonText={"Edit"}   />
                </div>
            </div>
        </>
    );
}
export default Panel;