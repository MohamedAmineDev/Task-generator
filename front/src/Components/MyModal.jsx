import React from "react";
import axios from "axios";
function MyModal({ task, modalTitle, buttonText, modalId }) {
    const [title, setTitle] = React.useState(task.title || "");
    const [description, setDescription] = React.useState(task.description || "");
    const [status, setStatus] = React.useState(task.status || "");
    React.useEffect(() => {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
    }, [task]);
    async function handleRegisterTask() {
        const url = "http://localhost:8088/api/register_task";
        const newTask = { title: title, description: description };
        try {
            const response = await axios.post(url, newTask);
            console.log(response.data);
        }
        catch (exception) {
            console.log(exception);
        }
    }
    async function handleEditTask() {
        const url = `http://localhost:8088/api/edit_task/${task.id}`;
        const editedTask = { id: task.id, title: title, description: description, status: status };
        try {
            const response = await axios.put(url, editedTask);
            console.log(response.data);
        }
        catch (exception) {
            console.log(exception);
        }
    }
    return (
        <>
            <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"> {modalTitle} </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Title</label>
                                <input type="text" className="form-control" id="examplehtmlFormControlInput1" placeholder="Title" value={title} onChange={(e) => {
                                    //task.title = e.target.value;
                                    setTitle(e.target.value);
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Description</label>
                                <textarea className="form-control" id="examplehtmlFormControlTextarea1" rows="3" placeholder="Description" value={description} onChange={(e) => {
                                    //task.description = e.target.value;
                                    setDescription(e.target.value);
                                }} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectionInput" className="htmlForm-label">Status</label>
                                <select className="form-select form-select-sm" aria-label="Small select example" id="selectionInput" value={status} onChange={(e) => {
                                    //task.status = e.target.value;
                                    setStatus(e.target.value);
                                }}>
                                    <option defaultChecked value="Not_Started">Not Started</option>
                                    <option value="Working_On_It">Working On It</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                if (modalTitle.includes("Register")) {
                                    handleRegisterTask();
                                }
                                else {
                                    handleEditTask();
                                }
                            }} >{buttonText}</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyModal;