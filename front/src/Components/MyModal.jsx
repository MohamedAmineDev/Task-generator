function MyModal({ item, modalTitle, buttonText, modalId, handleTitle, handleDescription, handleStatus }) {
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
                                <input type="text" className="form-control" id="examplehtmlFormControlInput1" placeholder="Title" value={item.title} onChange={handleTitle} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Description</label>
                                <textarea className="form-control" id="examplehtmlFormControlTextarea1" rows="3" placeholder="Description" value={item.description} onChange={handleDescription}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectionInput" className="htmlForm-label">Status</label>
                                <select className="form-select form-select-sm" aria-label="Small select example" id="selectionInput" value={item.status} onChange={handleStatus}>
                                    <option defaultChecked value="Not_Started">Not Started</option>
                                    <option value="Working_On_It">Working On It</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" >{buttonText}</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MyModal;