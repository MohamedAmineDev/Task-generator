import axios from "axios";
function Task({ task, editButtonModalName, index, handleTaskSelection, startLoading, globalUrl }) {
    async function handleDeleteTask() {
        const url = `${globalUrl}/delete_task/${task.id}`;
        try {
            const response = await axios.delete(url);
            console.log(response.data);
            startLoading();
        }
        catch (exception) {
            console.log(exception);
        }
    }
    return (
        <>
            <tr>
                <th scope="row">{index + 1}</th>
                <td> {task.title} </td>
                <td> {task.status} </td>
                <td>  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" readOnly value={task.description}></textarea> </td>
                <td>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#${editButtonModalName}`} onClick={(e) => {
                                e.preventDefault();
                                handleTaskSelection(index);
                                console.log(index);
                            }}>Edit</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => {
                                handleDeleteTask();
                            }}>Delete</button>
                        </div>
                    </div>




                </td>
            </tr>
        </>
    );
}
export default Task;