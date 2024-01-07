import React from "react";
import Item from "./Item";
import MyModal from "./MyModal";
function Panel() {
    const registerButtonModalName = "registerModal";
    const editButtonModalName = "editModal";
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [task,setTask]=React.useState({ id: 0, title: 'title', description: 'Description', status: 'Done' });
    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleDiscription(e) {
        setDescription(e.target.value);
    }
    function handleStatus(e) {
        setStatus(e.target.value);
    }
    //const [currentTask, setCurrentTask] = React.useState({ id: 0, title: 'title', description: 'Description', status: 'Done' });
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
                            <Item item={{ id: 0, title: 'title', description: 'Description', status: 'Done' }} editButtonModalName={editButtonModalName} />
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${registerButtonModalName}`} >Register</button>
                    <MyModal item={{ id: 0, title: 'title', description: 'Description', status: 'Done' }} modalId={registerButtonModalName} modalTitle={"Register new task"} buttonText={"Register"} handleTitle={handleTitle} handleDescription={handleDiscription} handleStatus={handleStatus} />
                    <MyModal item={task} modalId={editButtonModalName} modalTitle={`Edit task`} buttonText={"Edit"} handleTitle={handleTitle} handleDescription={handleDiscription} handleStatus={handleStatus} />
                </div>
            </div>
        </>
    );
}
export default Panel;